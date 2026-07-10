# Jose Esparza — Personal Website

Personal portfolio site hosted on GitHub Pages.

## Stack

- **Astro** 5 (static output)
- **Tailwind CSS** 4 (via `@tailwindcss/vite`)
- **IBM Plex Sans** (body, self-hosted via `@fontsource`) + **JuliaMono** (headings)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
```

Exports a static site under `dist/`.

## Structure

- `src/pages/` — routes (`index`, `now`, `portfolio`, `tools`, `blog/*`)
- `src/pages/api/pgm/[type].ts` — static endpoints serving the
  `proton-ge-manager` install scripts at `/api/pgm/{native,steamdeck,snap,flatpak}`
- `src/pages/sitemap.xml.ts` — generated sitemap
- `src/content/blog/<slug>/index.md` — blog posts (Markdown + co-located images)
- `src/layouts/`, `src/components/` — layout shell and UI
- `public/` — static assets served as-is (images, resume, notebooks, `CNAME`, `robots.txt`)
