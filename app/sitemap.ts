import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://www.joseesparza.me";
    const lastModified = "2026-05-31";

    return [
        { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1 },
        { url: `${base}/portfolio`, lastModified, changeFrequency: "monthly", priority: 0.9 },
        { url: `${base}/now`, lastModified, changeFrequency: "weekly", priority: 0.8 },
        { url: `${base}/tools`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    ];
}
