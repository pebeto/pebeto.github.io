# Blog Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a blog section with Markdown posts, pagination, tag filtering, and image support to the existing Next.js 16 static-export portfolio site.

**Architecture:** Posts live as directories under `posts/` with `index.md` (frontmatter + markdown) and co-located images. At build time, `lib/posts.ts` scans `posts/`, parses frontmatter, and provides data to statically generated pages. Images are copied to `public/posts/` via a prebuild step so they're served as static assets.

**Tech Stack:** Next.js 16 (static export), React 19, Tailwind CSS v4, react-markdown, remark-gfm, rehype-raw — all already installed. No new dependencies.

**Key constraint:** `output: "export"` means all pages are statically generated and all static assets must be under `public/`.

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Create | `lib/posts.ts` | Post data layer: read, parse frontmatter, sort, filter, paginate |
| Create | `lib/rehype-rewrite-image-url.ts` | Rehype plugin to transform `./image.png` → `/posts/{slug}/image.png` |
| Create | `components/blog/post-card.tsx` | Single post entry: date, tags, title, excerpt |
| Create | `components/blog/tag-filter.tsx` | Tag cloud with active/inactive states |
| Create | `components/blog/post-content.tsx` | Markdown renderer with GFM + raw HTML + image URL rewrite |
| Create | `app/blog/page.tsx` | Blog listing with tag filter and "Older/Newer" links |
| Create | `app/blog/[slug]/page.tsx` | Individual post page |
| Create | `app/blog/tag/[tag]/page.tsx` | Tag-filtered listing |
| Modify | `components/header.tsx:15-20` | Add Blog nav link |
| Modify | `next.config.ts` | Add prebuild copy of `posts/` → `public/posts/` |
| Modify | `app/sitemap.ts` | Include `/blog` and all post URLs |
| Modify | `package.json` | Add `prebuild` script |
| Create | `posts/2026-07-01-hello-world/index.md` | Sample post |
| Create | `posts/2026-06-15-julia-data-science/index.md` | Sample post |
| Create | `posts/2026-05-20-tiling-wm-setup/index.md` | Sample post |

---

### Task 1: Post Data Layer (`lib/posts.ts`)

**Files:**
- Create: `lib/posts.ts`

- [ ] **Step 1: Create `lib/posts.ts` with Post type and frontmatter parsing**

```tsx
import fs from "node:fs";
import path from "node:path";

const POSTS_DIR = path.join(process.cwd(), "posts");
const POSTS_PER_PAGE = 5;

export type Post = {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    excerpt: string;
    content: string;
};

function parseFrontmatter(raw: string): Post {
    const fmRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = raw.match(fmRegex);
    if (!match) throw new Error(`Invalid frontmatter in post`);

    const fmBlock = match[1];
    const content = match[2];

    const titleMatch = fmBlock.match(/title:\s*["'](.+?)["']/);
    const dateMatch = fmBlock.match(/date:\s*["'](\d{4}-\d{2}-\d{2})["']/);
    const tagsMatch = fmBlock.match(/tags:\s*\[([^\]]*)\]/);
    const excerptMatch = fmBlock.match(/excerpt:\s*["'](.+?)["']/);

    if (!titleMatch || !dateMatch || !tagsMatch || !excerptMatch)
        throw new Error(`Missing required frontmatter field`);

    const tags = tagsMatch[1]
        .split(",")
        .map((t) => t.trim().replace(/["']/g, ""));

    return {
        slug: "", // set by caller
        title: titleMatch[1],
        date: dateMatch[1],
        tags,
        excerpt: excerptMatch[1],
        content,
    };
}

export function getAllPosts(): Post[] {
    if (!fs.existsSync(POSTS_DIR)) return [];

    const dirs = fs.readdirSync(POSTS_DIR);
    const posts: Post[] = [];

    for (const dir of dirs) {
        const indexPath = path.join(POSTS_DIR, dir, "index.md");
        if (!fs.existsSync(indexPath)) continue;

        const raw = fs.readFileSync(indexPath, "utf-8");
        const post = parseFrontmatter(raw);
        post.slug = dir;
        posts.push(post);
    }

    // Sort by date, newest first
    return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): Post | undefined {
    const indexPath = path.join(POSTS_DIR, slug, "index.md");
    if (!fs.existsSync(indexPath)) return undefined;

    const raw = fs.readFileSync(indexPath, "utf-8");
    const post = parseFrontmatter(raw);
    post.slug = slug;
    return post;
}

export function getAllTags(): string[] {
    const posts = getAllPosts();
    const tagSet = new Set<string>();
    for (const post of posts) {
        for (const tag of post.tags) tagSet.add(tag);
    }
    return Array.from(tagSet).sort();
}

export function getPostsByTag(tag: string): Post[] {
    return getAllPosts().filter((p) => p.tags.includes(tag));
}

export function getPaginatedPosts(
    allPosts: Post[],
    page: number,
): { posts: Post[]; currentPage: number; totalPages: number } {
    const currentPage = Math.max(1, Math.min(page, Math.ceil(allPosts.length / POSTS_PER_PAGE)));
    const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    const posts = allPosts.slice(start, start + POSTS_PER_PAGE);
    return { posts, currentPage, totalPages };
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No type errors related to `lib/posts.ts`

---

### Task 2: Image URL Rehype Plugin (`lib/rehype-rewrite-image-url.ts`)

**Files:**
- Create: `lib/rehype-rewrite-image-url.ts`

- [ ] **Step 1: Create rehype plugin to transform relative image URLs**

```tsx
import type { Plugin } from "unified";
import type { Element, Root } from "hast";
import { CONTINUE, visit } from "unist-util-visit";

type Options = { slug: string };

const rehypeRewriteImageUrl: Plugin<[Options], Root> = function (options) {
    return (tree) => {
        visit(tree, "element", (node: Element) => {
            if (node.tagName === "img" && node.properties?.src) {
                const src = node.properties.src as string;
                // Only transform relative paths (starting with ./)
                if (src.startsWith("./")) {
                    const filename = src.slice(2);
                    node.properties.src = `/posts/${options.slug}/${filename}`;
                }
            }
            return CONTINUE;
        });
    };
};

export default rehypeRewriteImageUrl;
```

- [ ] **Step 2: Verify no type errors**

Run: `npx tsc --noEmit`
Expected: No errors. The `unified` and `hast` types come from `react-markdown`'s dependencies, and `unist-util-visit` is also a transitive dependency of `rehype-raw`.

---

### Task 3: Post Card Component (`components/blog/post-card.tsx`)

**Files:**
- Create: `components/blog/post-card.tsx`

- [ ] **Step 1: Create PostCard component**

```tsx
import Link from "next/link";
import type { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
    return (
        <div className="border-t border-[var(--color-border-light)] pt-6">
            <div className="text-xs text-[var(--color-text-faint)] mb-2">
                {formatDate(post.date)}
                {post.tags.length > 0 && (
                    <>
                        {" · "}
                        <span className="text-[var(--color-text-muted)]">
                            {post.tags.join(", ")}
                        </span>
                    </>
                )}
            </div>
            <Link href={`/blog/${post.slug}`} className="text-lg font-semibold text-[var(--color-heading)] hover:text-[var(--color-link)] transition-colors">
                {post.title}
            </Link>
            <p className="text-sm text-[var(--color-text-muted)] mt-2 leading-relaxed">
                {post.excerpt}
            </p>
        </div>
    );
}

function formatDate(dateString: string): string {
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}
```

- [ ] **Step 2: Verify no type errors**

Run: `npx tsc --noEmit`

---

### Task 4: Tag Filter Component (`components/blog/tag-filter.tsx`)

**Files:**
- Create: `components/blog/tag-filter.tsx`

- [ ] **Step 1: Create TagFilter component**

```tsx
import Link from "next/link";

export default function TagFilter({
    tags,
    activeTag,
}: {
    tags: string[];
    activeTag: string | null;
}) {
    return (
        <div className="flex flex-wrap gap-2 mb-10">
            <Link
                href="/blog"
                className={`px-3 py-1 text-xs rounded-full transition-colors ${
                    activeTag === null
                        ? "bg-[var(--color-link)] text-white"
                        : "border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-text-faint)]"
                }`}
            >
                all
            </Link>
            {tags.map((tag) => (
                <Link
                    key={tag}
                    href={`/blog/tag/${tag}`}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                        activeTag === tag
                            ? "bg-[var(--color-link)] text-white"
                            : "border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-text-faint)]"
                    }`}
                >
                    {tag}
                </Link>
            ))}
        </div>
    );
}
```

- [ ] **Step 2: Verify no type errors**

Run: `npx tsc --noEmit`

---

### Task 5: Post Content Component (`components/blog/post-content.tsx`)

**Files:**
- Create: `components/blog/post-content.tsx`

- [ ] **Step 1: Create PostContent component with markdown rendering**

```tsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeRewriteImageUrl from "@/lib/rehype-rewrite-image-url";

export default function PostContent({
    content,
    slug,
}: {
    content: string;
    slug: string;
}) {
    return (
        <article className="prose-blog">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw as any, [rehypeRewriteImageUrl, { slug }]]}
            >
                {content}
            </ReactMarkdown>
        </article>
    );
}
```

- [ ] **Step 2: Add prose-blog CSS styles to `globals.css`**

Append to `app/globals.css` (after the `::selection` block):

```css
/* Blog post content styles */
.prose-blog > * + * {
    margin-top: 1.25em;
}

.prose-bold {
    font-weight: 600;
}

.prose-blog a {
    color: var(--color-link);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.15s ease, color 0.15s ease;
}

.prose-blog a:hover {
    color: var(--color-link-hover);
    border-bottom-color: var(--color-link);
}

.prose-blog img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin: 1.5em 0;
}

.prose-blog code {
    background: var(--color-bg-muted);
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
}

.prose-blog pre {
    background: var(--color-bg-muted);
    padding: 1em;
    border-radius: 4px;
    overflow-x: auto;
    border: 1px solid var(--color-border);
}

.prose-blog pre code {
    background: none;
    padding: 0;
    border-radius: 0;
}

.prose-blog blockquote {
    border-left: 3px solid var(--color-border);
    padding-left: 1em;
    color: var(--color-text-muted);
    margin: 1.5em 0;
}

.prose-blog table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5em 0;
}

.prose-blog th,
.prose-blog td {
    border: 1px solid var(--color-border);
    padding: 0.5em 0.75em;
    text-align: left;
}

.prose-blog th {
    background: var(--color-bg-muted);
    font-weight: 600;
}

.prose-blog hr {
    border: none;
    border-top: 1px solid var(--color-border);
    margin: 2em 0;
}

.prose-blog ul,
.prose-blog ol {
    padding-left: 1.5em;
}

.prose-blog li + li {
    margin-top: 0.25em;
}
```

- [ ] **Step 3: Verify no type errors and no CSS issues**

Run: `npx tsc --noEmit`

---

### Task 6: Blog Listing Page (`app/blog/page.tsx`)

**Files:**
- Create: `app/blog/page.tsx`

- [ ] **Step 1: Create blog listing page**

```tsx
import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllTags, getPaginatedPosts } from "@/lib/posts";
import PostCard from "@/components/blog/post-card";
import TagFilter from "@/components/blog/tag-filter";

export const metadata: Metadata = {
    title: "Blog",
    description: "Technical posts and personal essays by Jose Esparza.",
    alternates: { canonical: "/blog" },
};

export default function BlogPage({
    searchParams,
}: {
    searchParams: { page?: string };
}) {
    const allPosts = getAllPosts();
    const allTags = getAllTags();
    const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;
    const { posts, currentPage, totalPages } = getPaginatedPosts(allPosts, page);

    return (
        <main className="max-w-6xl mx-auto px-6 sm:px-12 py-16">
            <div className="max-w-3xl">
                <div className="text-xs text-[var(--color-text-faint)] uppercase tracking-wider mb-4">
                    Blog
                </div>
                <h2 className="text-2xl font-semibold text-[var(--color-heading)] mb-8">
                    Posts
                </h2>

                <TagFilter tags={allTags} activeTag={null} />

                <div className="space-y-2">
                    {posts.length === 0 && (
                        <p className="text-[var(--color-text-muted)]">No posts yet.</p>
                    )}
                    {posts.map((post) => (
                        <PostCard key={post.slug} post={post} />
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="flex items-center justify-between mt-12 pt-6 border-t border-[var(--color-border-light)]">
                        {currentPage > 1 ? (
                            <Link href={currentPage === 2 ? "/blog" : `/blog?page=${currentPage - 1}`} className="text-sm text-[var(--color-link)] hover:text-[var(--color-link-hover)] transition-colors">
                                ← Newer
                            </Link>
                        ) : (
                            <div />
                        )}
                        <span className="text-xs text-[var(--color-text-faint)]">
                            {currentPage} / {totalPages}
                        </span>
                        {currentPage < totalPages ? (
                            <Link href={`/blog?page=${currentPage + 1}`} className="text-sm text-[var(--color-link)] hover:text-[var(--color-link-hover)] transition-colors">
                                Older →
                            </Link>
                        ) : (
                            <div />
                        )}
                    </div>
                )}
            </div>
        </main>
    );
}
```

- [ ] **Step 2: Verify build passes**

Run: `npm run build 2>&1 | tail -20`
Expected: Build succeeds, `/blog` is generated

---

### Task 7: Individual Post Page (`app/blog/[slug]/page.tsx`)

**Files:**
- Create: `app/blog/[slug]/page.tsx`

- [ ] **Step 1: Create post detail page with static params**

```tsx
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import PostContent from "@/components/blog/post-content";

export function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Metadata {
    const post = getPostBySlug(params.slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: post.title,
        description: post.excerpt,
        alternates: { canonical: `/blog/${params.slug}` },
        openGraph: {
            title: post.title,
            description: post.excerpt,
        },
    };
}

export default function PostPage({
    params,
}: {
    params: { slug: string };
}) {
    const post = getPostBySlug(params.slug);
    if (!post) notFound();

    const date = new Date(post.date + "T00:00:00");
    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <main className="max-w-6xl mx-auto px-6 sm:px-12 py-16">
            <div className="max-w-3xl">
                <div className="text-xs text-[var(--color-text-faint)] uppercase tracking-wider mb-4">
                    Blog
                </div>
                <h2 className="text-2xl font-semibold text-[var(--color-heading)] mb-3">
                    {post.title}
                </h2>
                <div className="text-xs text-[var(--color-text-faint)] mb-10">
                    {formattedDate}
                    {post.tags.length > 0 && (
                        <>
                            {" · "}
                            <span className="text-[var(--color-text-muted)]">
                                {post.tags.join(", ")}
                            </span>
                        </>
                    )}
                </div>

                <div className="text-[var(--color-text)] leading-relaxed">
                    <PostContent content={post.content} slug={post.slug} />
                </div>

                <div className="mt-12 pt-6 border-t border-[var(--color-border-light)]">
                    <Link href="/blog" className="text-sm text-[var(--color-link)] hover:text-[var(--color-link-hover)] transition-colors">
                        ← Back to blog
                    </Link>
                </div>
            </div>
        </main>
    );
}
```

- [ ] **Step 2: Verify build passes**

Run: `npm run build 2>&1 | tail -20`
Expected: Build succeeds, individual post pages are generated

---

### Task 8: Tag Filtered Listing (`app/blog/tag/[tag]/page.tsx`)

**Files:**
- Create: `app/blog/tag/[tag]/page.tsx`

- [ ] **Step 1: Create tag-filtered listing page**

```tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getAllTags, getPostsByTag } from "@/lib/posts";
import PostCard from "@/components/blog/post-card";
import TagFilter from "@/components/blog/tag-filter";

export function generateStaticParams() {
    const tags = getAllTags();
    return tags.map((tag) => ({ tag }));
}

export function generateMetadata({
    params,
}: {
    params: { tag: string };
}): Metadata {
    return {
        title: `Posts tagged "${params.tag}"`,
        description: `Blog posts about ${params.tag} by Jose Esparza.`,
        alternates: { canonical: `/blog/tag/${params.tag}` },
    };
}

export default function TagPage({
    params,
}: {
    params: { tag: string };
}) {
    const allPosts = getAllPosts();
    const allTags = getAllTags();

    if (!allTags.includes(params.tag)) notFound();

    const posts = getPostsByTag(params.tag);

    return (
        <main className="max-w-6xl mx-auto px-6 sm:px-12 py-16">
            <div className="max-w-3xl">
                <div className="text-xs text-[var(--color-text-faint)] uppercase tracking-wider mb-4">
                    Blog
                </div>
                <h2 className="text-2xl font-semibold text-[var(--color-heading)] mb-8">
                    Tagged &ldquo;{params.tag}&rdquo;
                </h2>

                <TagFilter tags={allTags} activeTag={params.tag} />

                <div className="space-y-2">
                    {posts.length === 0 && (
                        <p className="text-[var(--color-text-muted)]">No posts with this tag.</p>
                    )}
                    {posts.map((post) => (
                        <PostCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </main>
    );
}
```

- [ ] **Step 2: Verify build passes**

Run: `npm run build 2>&1 | tail -20`

---

### Task 9: Prebuild Script & next.config.ts

**Files:**
- Modify: `next.config.ts`
- Modify: `package.json`

- [ ] **Step 1: Add prebuild copy logic to `next.config.ts`**

Add fs copy logic at the top of `next.config.ts`, before `const nextConfig`:

```tsx
import fs from "node:fs";
import path from "node:path";

// Copy posts/ to public/posts/ for static asset serving
const postsSrc = path.join(process.cwd(), "posts");
const postsDest = path.join(process.cwd(), "public", "posts");
if (fs.existsSync(postsSrc)) {
    if (!fs.existsSync(postsDest)) fs.mkdirSync(postsDest, { recursive: true });
    for (const entry of fs.readdirSync(postsSrc)) {
        const src = path.join(postsSrc, entry);
        const dest = path.join(postsDest, entry);
        if (fs.statSync(src).isDirectory() && !fs.existsSync(dest)) {
            fs.cpSync(src, dest, { recursive: true });
        }
    }
}

const nextConfig = {
// ... rest of config
```

- [ ] **Step 2: Verify build still passes**

Run: `npm run build 2>&1 | tail -20`
Expected: Build succeeds, `public/posts/` is created with post directories

---

### Task 10: Navigation Link

**Files:**
- Modify: `components/header.tsx:15-20`

- [ ] **Step 1: Add Blog to navLinks**

In `components/header.tsx`, change the `navLinks` array from:

```tsx
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/now', label: 'Now' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/tools', label: 'Tools' },
    ];
```

To:

```tsx
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/now', label: 'Now' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/tools', label: 'Tools' },
        { href: '/blog', label: 'Blog' },
    ];
```

- [ ] **Step 2: Verify build passes**

Run: `npm run build 2>&1 | tail -20`

---

### Task 11: Sitemap Update

**Files:**
- Modify: `app/sitemap.ts`

- [ ] **Step 1: Update sitemap to include blog routes**

Replace the content of `app/sitemap.ts` with:

```tsx
import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://www.joseesparza.me";
    const lastModified = "2026-07-01";

    const posts = getAllPosts();
    const blogEntries: MetadataRoute.SitemapEntry[] = [
        { url: `${base}/blog`, lastModified, changeFrequency: "weekly", priority: 0.9 },
        ...posts.map((post) => ({
            url: `${base}/blog/${post.slug}`,
            lastModified: post.date,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        })),
    ];

    return [
        { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1 },
        { url: `${base}/portfolio`, lastModified, changeFrequency: "monthly", priority: 0.9 },
        { url: `${base}/now`, lastModified, changeFrequency: "weekly", priority: 0.8 },
        { url: `${base}/tools`, lastModified, changeFrequency: "monthly", priority: 0.7 },
        ...blogEntries,
    ];
}
```

- [ ] **Step 2: Verify build passes**

Run: `npm run build 2>&1 | tail -20`

---

### Task 12: Sample Posts

**Files:**
- Create: `posts/2026-07-01-hello-world/index.md`
- Create: `posts/2026-06-15-julia-data-science/index.md`
- Create: `posts/2026-05-20-tiling-wm-setup/index.md`

- [ ] **Step 1: Create sample post — Hello World**

`posts/2026-07-01-hello-world/index.md`:

```markdown
---
title: "Hello World"
date: "2026-07-01"
tags: [personal]
excerpt: "A new blog for technical writing and occasional personal essays."
---

This is a new blog section. I plan to write about ML systems, Julia, and the occasional personal reflection.

Stay tuned for more posts.
```

- [ ] **Step 2: Create sample post — Julia**

`posts/2026-06-15-julia-data-science/index.md`:

```markdown
---
title: "Why Julia for Data Science"
date: "2026-06-15"
tags: [julia, ml, oss]
excerpt: "Multiple dispatch, performance, and a thriving ecosystem make Julia a compelling choice for data science."
---

After years of Python for data science, I've been increasingly drawn to Julia. Here's why.

## Performance Without Sacrifice

Julia's JIT compiler means you get C-like performance without leaving the language. No more GIL, no more awkward workarounds with NumPy to squeeze out performance.

```julia
using BenchmarkTools

@btime sum(1:1000000)
# 12.345 μs (0 allocations: 0 bytes)
```

## Multiple Dispatch

Multiple dispatch is Julia's killer feature. It lets you define functions that behave differently based on the types of all their arguments, not just the first one.

## The Ecosystem

Packages like [MLJ.jl](https://github.com/JuliaAI/MLJ.jl) for machine learning and [Pluto.jl](https://plutojl.org/) for reactive notebooks make Julia a genuinely pleasant data science environment.
```

- [ ] **Step 3: Create sample post — Tiling WM**

`posts/2026-05-20-tiling-wm-setup/index.md`:

```markdown
---
title: "My Sway and Wayland Tiling Setup"
date: "2026-05-20"
tags: [systems, linux]
excerpt: "How I configured Sway as my daily driver on Arch Linux with Wayland."
---

I've been running Sway as my window manager on Arch Linux for a while now. Here's my setup.

## Why Sway?

Sway is a drop-in replacement for i3 that runs on Wayland. The configuration is familiar if you've used i3, but you get Wayland's security and modern display protocol benefits.

## Keybindings

My keybindings are close to the defaults:

- `$mod+Enter` — foot terminal
- `$mod+Shift+q` — kill window
- `$mod+d` — wofi launcher
- `$mod+Shift+e` — logout menu

## Output Configuration

I run a single external monitor with my ThinkPad lid closed:

```
output DP-1 resolution 2560x1440 position 0,0
```

It's a minimal setup, but it works well for daily driver use.
```

- [ ] **Step 4: Final build verification**

Run: `npm run build 2>&1 | tail -20`
Expected: Build succeeds, all posts are rendered, sitemap includes blog URLs

Run: `ls -la out/blog/`
Expected: Blog index page and post pages exist

Run: `ls -la out/posts/`
Expected: Post directories with index.md files are present

---

## Self-Review Checklist

**Spec coverage:**
- [x] Posts as markdown files in `posts/` directories — Task 12
- [x] Frontmatter parsing — Task 1
- [x] Pagination — Task 6
- [x] Tag filtering — Task 8
- [x] Image support with relative paths — Tasks 2, 5, 9
- [x] Build-time processing — Tasks 1, 6, 7, 8
- [x] Navigation link — Task 10
- [x] Sitemap update — Task 11
- [x] Static export compatible — Task 9 (prebuild copy)
- [x] No new dependencies — Uses existing react-markdown, remark-gfm, rehype-raw

**Placeholder scan:** No TBD, TODO, or vague requirements found.

**Type consistency:** `Post` type defined once in `lib/posts.ts`, used consistently across all components and pages. Slug is always `string`. Tags always `string[]`.

**Naming consistency:** `getAllPosts`, `getPostBySlug`, `getAllTags`, `getPostsByTag`, `getPaginatedPosts` — all follow the spec. Component names: `PostCard`, `TagFilter`, `PostContent` — all match spec.