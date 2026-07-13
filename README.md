# Personal Portfolio Remake

Warm editorial React + TypeScript + Vite + Tailwind CSS portfolio.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Cloudflare Pages

Use these settings in Cloudflare Pages:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

The file `public/_redirects` is included so direct page refreshes and custom paths still load the React app.

## Replace placeholders

Put your real screenshots in `public/assets` and update the paths in `src/App.tsx`.

Recommended filenames:

- `omr.webp`
- `trc-portal.webp`
- `aeroplant.webp`
- `samanea.webp`
- `invoxia.webp`
- `komi.webp`

Use WebP assets for portfolio screenshots and gallery images.

## Contact info

Update the email and LinkedIn link in the Contact section before publishing.
