import type { APIRoute } from "astro";
import { getAllPosts } from "@/lib/posts";

const BASE = "https://www.joseesparza.me";
const LAST_MODIFIED = "2026-07-01";

type Entry = {
    url: string;
    lastModified: string;
    changeFrequency: string;
    priority: number;
};

export const GET: APIRoute = async () => {
    const posts = await getAllPosts();

    const entries: Entry[] = [
        { url: `${BASE}/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 1 },
        { url: `${BASE}/portfolio`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE}/now`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.8 },
        { url: `${BASE}/tools`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE}/blog`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
        ...posts.map((post) => ({
            url: `${BASE}/blog/${post.id}`,
            lastModified: post.data.date,
            changeFrequency: "monthly",
            priority: 0.8,
        })),
    ];

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
    .map(
        (e) => `  <url>
    <loc>${e.url}</loc>
    <lastmod>${e.lastModified}</lastmod>
    <changefreq>${e.changeFrequency}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    )
    .join("\n")}
</urlset>
`;

    return new Response(body, {
        headers: { "Content-Type": "application/xml; charset=utf-8" },
    });
};
