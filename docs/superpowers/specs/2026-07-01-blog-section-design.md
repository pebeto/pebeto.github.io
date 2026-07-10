# Blog Section — Design Spec

**Date:** 2026-07-01  
**Status:** Approved  
**Scope:** Add a blog section with Markdown posts, pagination, tag filtering, and image support to the existing Next.js 16 static-export portfolio site.

---

## Overview

A static blog where each post is a directory under `posts/` containing `index.md` (with YAML frontmatter) and optional co-located images. Posts are read at build time, rendered with the existing `react-markdown` + `remark-gfm` + `rehype-raw` stack.

## File Structure

```
posts/
  2026-07-01-building-rag-with-langgraph/
    index.md          ← required: markdown with frontmatter
    architecture.png  ← optional: co-located images
    chart.svg
  2026-06-15-python-to-julia/
    index.md
    comparison.png
```

**Frontmatter format:**

```yaml
---
title: "Building Production RAG Systems with LangGraph"
date: "2026-07-01"
tags: [ml, llm, rag]
excerpt: "Lessons from deploying semantic search over a 500k document catalog."
---
```

| Field     | Type   | Required | Description                         |
|-----------|--------|----------|-------------------------------------|
| `title`   | string | yes      | Post title                          |
| `date`    | string | yes      | ISO 8601 date (`YYYY-MM-DD`)       |
| `tags`    | array  | yes      | Tag slugs for filtering             |
| `excerpt` | string | yes      | Short summary shown on listing      |

## Image Handling

Images use **relative paths** in markdown:

```markdown
![Architecture](./architecture.png)
```

At build time, the `posts/` directory is copied to `public/posts/` so static assets are served. The markdown renderer transforms `./image.png` to `/posts/{slug}/image.png` for correct static resolution.

## Routes

| Route                    | Description                                              |
|--------------------------|----------------------------------------------------------|
| `/blog`                  | Blog listing page with tag filter and pagination         |
| `/blog/[slug]`           | Individual post page with full markdown rendering        |
| `/blog/tag/[tag]`        | Tag-filtered listing (same layout as `/blog`)            |

## Components

| Component                     | Purpose                                                    |
|-------------------------------|------------------------------------------------------------|
| `components/blog/post-card`   | Single post entry: date, tags, title, excerpt              |
| `components/blog/tag-filter`  | Tag cloud with active/inactive filter states               |
| `components/blog/pagination`  | Prev/Next pagination controls                              |
| `components/blog/post-content`| Markdown renderer (react-markdown + remark-gfm + rehype-raw) |

## Data Layer

**`lib/posts.ts`** — all post logic:

| Function               | Description                                              |
|------------------------|----------------------------------------------------------|
| `getAllPosts()`        | Read all posts, parse frontmatter, sort by date (newest) |
| `getPostBySlug(slug)`  | Find single post by slug                                 |
| `getAllTags()`         | Extract unique tags from all posts                      |
| `getPostsByTag(tag)`   | Filter posts by tag                                      |
| `getPaginatedPosts()`  | Paginate post list (configurable perPage)                |

All functions run at **build time** via `generateStaticParams()` and `getServerSideProps`-equivalents in App Router.

## Build-Time Behavior

1. `posts/` directory is scanned at build time using Node.js `fs`
2. Frontmatter is parsed with a simple YAML subset parser (title, date, tags, excerpt only — no external dependency)
3. `posts/` is copied to `public/posts/` during build so images are served as static assets
4. All pages are statically generated (`output: "export"` mode)
5. Sitemap is updated to include `/blog` and all post URLs

## Styling

Follow the existing site's design system:

- **Font:** IBM Plex Sans (body), JuliaMono (headings)
- **Colors:** Existing CSS variables (`--color-bg`, `--color-text`, `--color-link`, etc.)
- **Layout:** `max-w-6xl mx-auto px-6 sm:px-12` container, matching other pages
- **Dark mode:** Automatic via existing `[data-theme="dark"]` CSS overrides

**Listing page:** Clean vertical list of posts with date, tags, title, excerpt. Tag cloud filter at top. Pagination at bottom.

**Post page:** Title, date, tags header. Full markdown body with code blocks, tables, and inline images. "Back to blog" link at bottom.

## Dependencies

**No new dependencies required.** Already installed:
- `react-markdown` — Markdown rendering
- `remark-gfm` — GitHub Flavored Markdown (tables, strikethrough, task lists)
- `rehype-raw` — Raw HTML support in markdown

## Navigation

Add `Blog` to the existing header nav:

```tsx
const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/now', label: 'Now' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/tools', label: 'Tools' },
    { href: '/blog', label: 'Blog' },  ← new
];
```

## Pagination

- **Default:** 5 posts per page
- **Controls:** "← Newer" / "Older →" text links (not numbered)
- Pagination state via URL query parameter `?page=N`
- Works with tag filtering (filtered results are independently paginated)

## Out of Scope

- Full-text search
- RSS/Atom feed
- Comments system
- Syntax highlighting for code blocks (uses GFM code blocks)
- Draft/unpublished posts
- Reading time estimate
- Image lazy loading or optimization