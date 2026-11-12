# SEO Audit & Implementation Plan

## Phase 0 — Audit snapshot

- [x] Audited all 117 page routes; top-level collection pages use `svelte-meta-tags` directly and remaining pages use the central SEO component.
- [x] Production build passes; the app is hosted on Vercel at `https://sv-animations.vercel.app`.
- [x] `robots.txt` controls non-page paths and advertises the generated 112-page sitemap.
- [x] Every indexable page has server-rendered metadata and valid JSON-LD; `/demo` and four unfinished component docs are `noindex`.

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
- [x] Exclude `/demo`, unfinished docs, API, registry JSON, and `llms.txt` from the sitemap; mark unfinished pages `noindex,nofollow`, block `/api/`, and keep registry JSON crawlable for agents.
- [x] Verify all 112 sitemap pages are internally linked and return `200` HTML.

## Phase 3 — Metadata and content

- [x] Consolidate the three SEO implementations into one component/config with title, description, canonical, robots, OG, and Twitter defaults.
- [x] Give every component a unique, intent-led title/description with collection-specific social images and optional page overrides; do not rely on `meta keywords` for ranking.
- [x] Target Flickering Grid search intent in visible copy and metadata; correct its implementation description from SVG to Canvas.
- [x] Keep one descriptive H1 per indexable page and use crawlable, descriptive internal component links.
- [x] Use `MetaTags` and `JsonLd` directly on `/`, `/magic`, `/fancy`, and `/spell` with complete canonical, robots, OG, and Twitter metadata.
- [x] Keep four unfinished, navigation-hidden component drafts out of search until their placeholder copy is publication-ready.

## Phase 4 — Structured data

- [x] Add shared `WebSite`/`Organization`, plus `BreadcrumbList`, `TechArticle`, and `SoftwareSourceCode` graphs on component docs without fabricated dates or ratings.
- [x] Generate schemas by page type in the central SEO layer, with typed per-page additions instead of duplicated JSON-LD.

## Phase 5 — Validation and monitoring

- [ ] Add CI checks for missing/duplicate titles, descriptions, canonicals, production origins, JSON-LD, sitemap, robots, and rendered HTML.
- [ ] Submit the sitemap in Google Search Console; inspect/request indexing for Flickering Grid and monitor coverage, queries, and Core Web Vitals.
