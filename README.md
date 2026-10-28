# Sana Anwer, data scientist (site)

Astro static site. Design: dark (indigo, lilac, mint) and light themes, Geist type, Greek letters as meaning-bearing markers.

## Develop
```
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Content
Copy lives in `src/pages/index.astro`; the timeline lives in `src/data/content.ts`.

## Deploy
Pushes to `main` build and publish through GitHub Pages (`.github/workflows/deploy.yml`).
In the repo, set Settings, Pages, Source to "GitHub Actions" once.
