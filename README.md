# Sana Anwer, data scientist (site)

Astro static site. Design: dark (indigo, lilac, mint) and light themes, Geist type, Greek letters as meaning-bearing markers.

## Develop
```
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Content
All copy is placeholder. Edit `src/data/content.ts` (projects, timeline) and `src/pages/index.astro` (everything else).
Replace every bracketed or "Placeholder" item with real material, and keep the "synthetic" labels on any example data.
Links are `#` stubs: LinkedIn, GitHub, email, booking, and case study pages still need real targets.

## Deploy
Pushes to `main` build and publish through GitHub Pages (`.github/workflows/deploy.yml`).
In the repo, set Settings, Pages, Source to "GitHub Actions" once.
