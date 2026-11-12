# SEO Audit & Implementation Plan

## Phase 0 — Audit snapshot

- [x] Audited all 117 page routes; every route now renders through the central SEO component, including `/demo` as `noindex`.
- [x] Production build passes; the app is hosted on Vercel at `https://sv-animations.vercel.app`.
- [x] `robots.txt` controls non-page paths and advertises the generated 116-page sitemap.
- [x] Structured data exists only on `/`, `/magic`, and `/fancy`; component/docs pages have none.

## Phase 1 — Central SEO foundation

- [x] Replace `adapter-auto` with `@sveltejs/adapter-vercel`; keep SSR and selectively prerender stable pages later if useful.
- [x] Fix `src/lib/seo/seo.svelte` to use the production domain plus pathname for canonical and OG URLs.
- [x] Add central defaults for title template, robots directives, site name, and social image metadata.
- [x] Route all component docs, standalone pages, and `/demo` through the central SEO component.
- [x] Expand the typed `SEO` model with page type, canonical override, social image, breadcrumbs, and structured-data overrides.

## Phase 2 — Sitemap and crawlability

- [x] Generate and prerender `/sitemap.xml` locally from every indexable page route; no paid third-party API is required.
- [x] Use canonical absolute URLs; omit unreliable `lastmod`, `priority`, and `changefreq` values.
- [x] Add `Sitemap: https://sv-animations.vercel.app/sitemap.xml` to `robots.txt`.
- [x] Exclude `/demo`, API, registry JSON, and `llms.txt` from the sitemap; mark `/demo` `noindex,nofollow`, block `/api/`, and keep registry JSON crawlable for agents.
- [x] Verify all 116 sitemap pages are internally linked and return `200` HTML.

## Phase 3 — Metadata and content

- [x] Consolidate the three SEO implementations into one component/config with title, description, canonical, robots, OG, and Twitter defaults.
- [ ] Give every component a unique, intent-led title/description and social image; do not rely on `meta keywords` for ranking.
- [ ] For Flickering Grid, target the phrase in visible copy and metadata, e.g. `Flickering Grid for Svelte 5 | Svelte Magic UI`, with original usage/API content.
- [ ] Keep one descriptive H1 per page; strengthen internal links from collection pages using descriptive anchor text.

## Phase 4 — Structured data

- [ ] Add shared `WebSite`/`Organization`, plus `BreadcrumbList` and `TechArticle` (or `SoftwareSourceCode`) on component docs; avoid unsupported rich-result claims.
- [ ] Generate schemas by page type in the central SEO layer, with typed per-page overrides rather than duplicated JSON-LD.

## Phase 5 — Validation and monitoring

- [ ] Add CI checks for missing/duplicate titles, descriptions, canonicals, production origins, JSON-LD, sitemap, robots, and rendered HTML.
- [ ] Submit the sitemap in Google Search Console; inspect/request indexing for Flickering Grid and monitor coverage, queries, and Core Web Vitals.
