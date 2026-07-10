// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://www.joseesparza.me",

    // Reproduce the previous Next.js static-export URL layout:
    // /now -> now.html, /blog/slug -> blog/slug.html (no trailing slashes).
    build: {
        format: "file",
    },

    markdown: {
        // The previous site rendered plain GFM code blocks with no syntax
        // highlighting; keep that look instead of Astro's default Shiki.
        syntaxHighlight: false,
    },

    vite: {
        plugins: [
            // @ts-ignore - benign type mismatch between the Vite bundled with
            // Astro and the one @tailwindcss/vite is built against.
            tailwindcss(),
        ],
    },
});
