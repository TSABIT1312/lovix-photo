# Production Readiness Review — Lovix Photo

Stack: Vite 8 + React 19 (client-side rendered SPA, no SSR/prerendering) + React Router 7 + Tailwind v4 + Framer Motion.

Baseline before this review: solid component code, already using `loading="lazy"`, `decoding="async"`, explicit image dimensions, `prefers-reduced-motion` handling, focus rings, and a real focus-trapped/keyboard-navigable lightbox. The gaps were concentrated in **SEO metadata**, **Vercel routing config**, a few **contrast failures**, and **image delivery weight** — not in component architecture.

## 1. Optimization checklist

| Area | Item | Status |
|---|---|---|
| SEO | Per-route `<title>` / meta description | ✅ Fixed (`useDocumentMeta` hook) |
| SEO | Open Graph / Twitter Card tags | ✅ Fixed (index.html defaults + per-route overrides) |
| SEO | Canonical URL per route | ✅ Fixed |
| SEO | `robots.txt` / `sitemap.xml` | ✅ Added |
| SEO | Structured data (JSON-LD) | ✅ Added (`Photographer` schema) |
| SEO | 404 pages marked `noindex` | ✅ Fixed |
| SEO | Real production domain in canonical/OG/sitemap/robots | ⚠️ **Placeholder** `lovixphoto.com` — replace once you have the real domain (5 files: `index.html`, `useDocumentMeta.js`, `robots.txt`, `sitemap.xml`, and this doc) |
| SEO | `og:image` / `twitter:image` share preview asset | ⚠️ Referenced at `/og-cover.jpg` but the file doesn't exist yet — add a real 1200×630 image to `public/` |
| Accessibility | Color contrast failures (`text-ink/40`, `/50`, `/30` on white) | ✅ Fixed (bumped to `/70`, all now pass 4.5:1) |
| Accessibility | Skip-to-content link | ✅ Added |
| Accessibility | Semantic `<main>` landmark | ✅ Added |
| Accessibility | Focus rings, `aria-label`s, reduced-motion, lightbox focus trap | ✅ Already solid, no change needed |
| Performance | Vercel SPA rewrite (deep links 404 on refresh without this) | ✅ Fixed (`vercel.json`) |
| Performance | Long-cache immutable headers for hashed assets | ✅ Fixed (`vercel.json`) |
| Performance | Route-based code splitting | ✅ Fixed (`StoryDetailPage`/`NotFoundPage` now lazy-loaded, ~8KB out of the initial bundle) |
| Performance | Responsive image variants (`srcset`/`sizes`) | ❌ **Not done — needs your decision, see §2.1 below** |
| Performance | LCP hero image weight (up to 392KB, served at full 1600–2400px res regardless of viewport) | ❌ Same as above — blocked on the same decision |
| Best Practices | Security headers (`X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) | ✅ Added (`vercel.json`) |
| Best Practices | No console errors/warnings in source | ✅ Verified clean (`grep console.` → no matches) |
| Best Practices | HTTPS | ✅ Free on Vercel, no action needed |
| Mobile responsiveness | Tailwind responsive classes throughout, tap targets ≥40px on interactive controls | ✅ Already solid |
| Code quality | `oxlint` clean, `npm run build` clean | ✅ Verified after all changes |

## 2. Required code changes made

- **`src/hooks/useDocumentMeta.js`** (new) — imperatively sets `document.title`, meta description, OG/Twitter tags, canonical link, and `robots` per route on mount. This is a CSR-only SPA, so this only helps crawlers that execute JS (Googlebot does); non-JS link-preview bots still see whatever's static in `index.html`.
- **`index.html`** — added `theme-color`, default `robots`, canonical, full OG/Twitter fallback set, and a `Photographer` JSON-LD block.
- **`src/pages/HomePage.jsx` / `StoryDetailPage.jsx` / `NotFoundPage.jsx`** — wired up `useDocumentMeta` with page-specific title/description (story pages use the couple's name + location; 404 sets `noindex`).
- **`src/App.jsx`** — added a visually-hidden-until-focused skip link, wrapped routed content in `<main id="main-content">`, and switched `StoryDetailPage`/`NotFoundPage` to `React.lazy` + `Suspense`.
- **Contrast fixes**: `Testimonials.jsx`, `StoryCover.jsx`, `ComingSoonCard.jsx` — three instances of low-opacity ink text on white (`ink/40` ≈2.55:1, `ink/50` ≈3.42:1, `ink/30` ≈1.96:1) all failed WCAG AA's 4.5:1 minimum for small text. Bumped to `ink/70` (≈6.67:1).
- **`vercel.json`** (new) — SPA rewrite so deep links (`/stories/:slug`) don't 404 on direct load/refresh, immutable long-cache headers for `/assets/*`, and baseline security headers.
- **`public/robots.txt`, `public/sitemap.xml`** (new) — sitemap is hand-maintained (no SSG build step generates routes); add an entry when a new album ships.

All changes verified: `npx oxlint` clean, `npm run build` succeeds, bundle now splits into `index` / `StoryDetailPage` / `NotFoundPage` chunks.

### 2.1 Open decision: responsive image pipeline (not yet implemented)

This is the single biggest remaining lever for Performance/LCP and I deliberately didn't do it without checking first, because it's a different kind of change than everything else here — it adds a new dependency, touches ~104 image references across `src/data/albums.js` and `src/data/gallery.js`, and generates a new file per breakpoint per photo instead of editing existing files.

Current state: every image is a single fixed-resolution WebP (hero slides 1600×2400 up to ~310KB; gallery photos up to 1400×2100 and ~392KB) served as-is regardless of viewport — a phone downloads the same bytes as a 4K desktop.

Recommended approach: add `sharp` as a dev dependency, write a one-off script that generates 3 widths per source image (e.g. 640/1080/1600), update `Gallery.jsx`/`StoryGallery.jsx`/`AlbumCard.jsx`/`Hero.jsx` to render `srcset`/`sizes`, and update the data files' shape (`src` → `{ src, srcset }` or similar) to carry the generated variants.

No image-processing CLI (`sharp`/`cwebp`/`imagemagick`) is currently installed or available in this environment, so I could not generate the variants as part of this pass — want me to add `sharp` and run this now, or hold off?

## 3. Deployment recommendations for Vercel

1. **Framework preset**: Vercel should auto-detect Vite. Confirm build command `npm run build`, output directory `dist`, install command `npm install`.
2. **`vercel.json` is now in the repo** — without it, refreshing or directly opening a URL like `/stories/prewedding-adha-shania` would 404 (React Router's client-side routing has nothing to intercept a fresh server request). Deploy will fail this in exactly the way that's easy to miss in local dev (`vite preview` fakes SPA fallback for you) but bites in production.
3. **Custom domain**: once you have one, update the 5 placeholder-domain spots noted in the checklist above (canonical, OG/Twitter meta, `useDocumentMeta.js`, `robots.txt`, `sitemap.xml`).
4. **`og-cover.jpg`**: add a real 1200×630 share image to `public/` before relying on link previews (WhatsApp/Instagram previews of shared story links currently point at a file that doesn't exist).
5. **Environment**: no environment variables or secrets are used anywhere in this app (contact links are public WhatsApp/Instagram URLs) — no Vercel env var setup needed.
6. **Preview deployments**: since `robots.txt`/sitemap and canonical URLs hardcode the production domain, Vercel preview deployments (`*.vercel.app`) will emit canonical tags pointing at production — this is intentional/correct (prevents preview URLs from being indexed as duplicate content) but worth knowing if you're checking SEO tags on a preview URL and the canonical looks "wrong."
7. **Re-run Lighthouse after deploying**, not just locally — CDN compression/caching from Vercel's edge network changes some of the transfer-size and cache-policy numbers versus a local `vite preview`.

## 4. What I did not change

- No visual/design changes beyond the 3 contrast-opacity bumps (kept everything else — layout, motion, spacing — untouched).
- No new dependencies added (image pipeline excepted — pending your go-ahead per §2.1).
- No changes to `docs/prd.md`, `docs/srd.md`, `docs/trd.md`.
