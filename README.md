# Parallel Works — Astro Site

Multilingual, dark-themed one-page site for Parallel Works (EN/JA) with SEO defaults and easy Vercel deployment.

## Develop

```powershell
npm install
npm run dev
```

## Build

```powershell
npm run build
npm run preview
```

## Deploy to Vercel

- Connect the repo in Vercel and deploy. Output is static.
- Set Site URL to your domain (e.g., https://parallel.works) for correct sitemap/canonicals.

## Customize

- Edit content in `src/i18n/en.ts` and `src/i18n/ja.ts`.
- Update styles in `src/styles/global.css`.
- Layout/components live under `src/layouts` and `src/components`.

## SEO

- Automatic sitemap
- OpenGraph/Twitter image: `public/og.svg`
- Hreflang + canonical links included
