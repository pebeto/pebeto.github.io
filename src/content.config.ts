import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    // Each post is a directory under src/content/blog/<slug>/ containing
    // index.md (with frontmatter) and optional co-located images.
    loader: glob({
        pattern: "**/index.md",
        base: "./src/content/blog",
        generateId: ({ entry }) => entry.replace(/\/index\.md$/, ""),
    }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        tags: z.array(z.string()),
        excerpt: z.string(),
    }),
});

export const collections = { blog };
