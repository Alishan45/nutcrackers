# Technical SEO Implementation Plan — Nutcrackers.tech

**Implementation Date:** November 14, 2026  
**Target:** 100% Production-Ready Technical SEO & Google Search Visibility  

---

## Architecture Overview

```
                      ┌─────────────────────────────────────────┐
                      │        Canonical Domain Definition      │
                      │        https://nutcrackers.tech         │
                      └────────────────────┬────────────────────┘
                                           │
         ┌─────────────────────────────────┼─────────────────────────────────┐
         ▼                                 ▼                                 ▼
┌──────────────────┐             ┌──────────────────┐             ┌──────────────────┐
│  Technical Core  │             │ 8 Service Routes │             │ 5 Article Guides │
├──────────────────┤             ├──────────────────┤             ├──────────────────┤
│• Clean robots.txt│             │• /web-development│             │• Pakistan Web Dev│
│• Valid sitemap   │             │• /mobile-apps    │             │• AI Automation   │
│• Prerender Engine│             │• /ai-automation  │             │• Data Analytics  │
│• Canonical Links │             │• /chatbots       │             │• AI Chatbots     │
│• GA4 Event Hooks │             │• /data-science   │             │• Mobile App Dev  │
│• Dynamic MetaTags│             │• /data-analytics │             │                  │
│• JSON-LD Graph   │             │• /digital-mktg   │             │                  │
└──────────────────┘             │• /video-editing  │             │                  │
                                 └──────────────────┘             └──────────────────┘
```

---

## 1. Technical Execution Phases

### Phase 1: Canonical Domain & Global Metadata Alignment
- Update `index.html` to establish `https://nutcrackers.tech` as the single canonical source of truth.
- Update Open Graph and Twitter Card tags to reference `https://nutcrackers.tech`.
- Configure `robots.txt` with clean indexing rules and direct reference to `https://nutcrackers.tech/sitemap.xml`.

### Phase 2: Multi-Route URL Architecture
- Create a lightweight, high-performance client-side router (`src/routes/Router.tsx` or pathname matching) that renders:
  - Homepage (`/`)
  - 8 Dedicated Service Landing Pages (`/web-development`, `/mobile-app-development`, `/ai-automation`, `/chatbot-development`, `/data-science`, `/data-analytics`, `/digital-marketing`, `/video-editing`)
  - 5 Content Marketing & Educational Guides (`/blog/...`)
  - Blog Index (`/blog`)
- Provide breadcrumb navigation, active navigation indicators, and seamless navigation between pages and home sections.

### Phase 3: Build-Time Prerendering Engine (`scripts/prerender-seo.ts`)
- Execute as part of `npm run build`.
- Iterates over all indexable routes and writes dedicated `dist/<route>/index.html` files.
- Injects route-specific:
  - `<title>`
  - `<meta name="description">`
  - `<link rel="canonical" href="https://nutcrackers.tech/<route>">`
  - Schema.org JSON-LD (`Service`, `FAQPage`, `BreadcrumbList`, `Article`)
  - Semantic crawlable HTML content so search bots receive 100% complete text without relying on JavaScript rendering.

### Phase 4: Schema.org Knowledge Graph
- `Organization` & `ProfessionalService` on all pages with verified contact numbers, founders, social profiles, and service areas.
- `Service` schema on each service page with `serviceType`, `provider`, `areaServed`, and `hasOfferCatalog`.
- `FAQPage` schema on every service page with valid Q&A items.
- `BreadcrumbList` schema connecting `Home > Services > Specific Service`.
- `BlogPosting` / `Article` schema for editorial articles.

### Phase 5: XML Sitemap Generation
- Replace the legacy sitemap containing hash fragments with a strictly compliant XML sitemap listing all valid canonical URLs with `<lastmod>`, `<changefreq>`, and `<priority>`.

### Phase 6: Google Analytics 4 (GA4) Integration
- Create `src/utils/analytics.ts` supporting `VITE_GA_MEASUREMENT_ID`.
- Automatically dispatch `page_view` events on route changes.
- Attach custom conversion tracking to:
  - `whatsapp_click` (logs telephone, service, location)
  - `contact_form_submit` (logs lead inquiry details)
  - `quote_open`
  - `service_explore`
  - `video_play`

### Phase 7: Local Search Signals
- Highlight services available across **Taxila, Wah Cantt, Islamabad, Rawalpindi** alongside international enterprise delivery.
- Create a comprehensive Google Business Profile checklist.

### Phase 8: Verification, Testing & Production Deployment
- Run `npm run build` to verify TypeScript, Vite, Prerender, and Serverless bundling.
- Verify static route outputs in `dist/`.
- Deploy to Vercel production and ensure `nutcrackers.tech` and `nutcrackers.vercel.app` resolve cleanly.
- Deliver `KEYWORD_RESEARCH.md`, `KEYWORD_MAPPING.csv`, `SEO_FINAL_REPORT.md`, and `SEO_TODO.md`.
