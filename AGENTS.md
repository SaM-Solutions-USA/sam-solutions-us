# SaM Solutions Next.js Migration Guide

## Project Intent

This repository is a staged migration of a static WordPress export to a fully native, server-rendered Next.js application.

The migration must preserve existing public URLs until each route has a native App Router replacement. During the transition, Next.js is the only web server.

## Current Architecture

- `app/[[...slug]]/route.ts` is the legacy fallback Route Handler.
  - `GET` returns the full matching legacy HTML document.
  - `HEAD` returns the matching status and content type without a body.
  - A missing legacy document returns `404`; never substitute the homepage.
- `lib/legacy-page.ts` safely maps request pathnames to documents below `legacy/`.
  - It supports `/` -> `legacy/index.html`.
  - It supports directory routes such as `/about-us/` -> `legacy/about-us/index.html`.
  - It also tries `<path>.html` after `<path>/index.html`.
  - It rejects literal and percent-encoded traversal attempts.
- `legacy/` contains the static WordPress page documents. There are currently 188 `index.html` documents and their original relative URL structure is preserved.
- `public/` contains browser-requested static files and keeps their original public paths:
  - `public/wp-content/` -> `/wp-content/...`
  - `public/wp-includes/` -> `/wp-includes/...`
  - `public/cdn-cgi/` -> `/cdn-cgi/...`
  - crawler files such as `/robots.txt` and sitemap XML/XSL files
- `app/`, `lib/`, `package.json`, `next.config.ts`, and TypeScript configuration remain application source at the repository root.

## Routing Contract

1. Next.js internal routes and files under `public/` are handled by Next normally.
2. A specific native App Router route takes precedence over `app/[[...slug]]/route.ts`.
3. An unmatched URL is resolved against `legacy/` and returns its matching full HTML document if present.
4. A URL with neither a native route nor a legacy document returns `404`.

Do not reintroduce a catch-all React page that renders the homepage or injects only a legacy document's `<body>`. Legacy documents must be returned intact until they are replaced, so their original `<head>`, metadata, stylesheet links, scripts, and asset URLs continue to work.

## Completed Stages

1. Inventoried the static export in `migration-inventory.md`.
2. Moved static assets and crawler files into `public/` without changing their browser URLs.
3. Moved all exported page documents to `legacy/` while preserving their relative paths.
4. Added `resolveLegacyPage()` with safe filesystem resolution.
5. Replaced the universal homepage fallback with the full-document legacy catch-all.

## Native Conversion Workflow

Complete the following phases in order. Keep each agent task narrow: finish one inventory, component family, or page family and validate it before opening the next slice.

### Data-Driven Page Requirement

All native pages must be fully data-driven. A page route should select and pass a typed page-data object to reusable components; it must not embed page copy, card lists, links, images, metadata, or section configuration directly in TSX markup.

- Define TypeScript content models for each page family before or alongside the components that render them.
- Store page data in a predictable dedicated location, grouped by page family and keyed by stable public pathname or slug.
- Keep content, image paths, calls to action, SEO metadata, structured data, and section ordering in the page-data object.
- Keep components responsible for rendering and behavior only. Components may contain stable UI labels required by their behavior, but not page-specific editorial content.
- Prefer discriminated section types for genuinely different content bands over large components with unrelated optional props.
- Make a routine page edit possible by updating its page-data object without changing component code.

**Exit criteria:** A representative native page can be updated for content, media, metadata, calls to action, and section composition through typed page data alone.

### Phase 1: Inventory Layout Families

Build an evidence-based inventory of every distinct layout represented in `legacy/`. Do not create React pages in this phase.

For every legacy document, record:

- Public URL and source path below `legacy/`.
- Layout family and the representative document for that family.
- Shared regions: announcement/header, navigation, breadcrumbs, hero, content bands, calls to action, footer, cookie/analytics scripts.
- Repeated content patterns: cards, grids, logo strips, accordions, tab panels, testimonials, related content, lead forms, author metadata, pagination.
- Page-specific or family-specific sections.
- Client behavior and its source script: menu, carousel, modal, accordion, tab, form, tracking, or other interaction.
- Existing CSS/JS asset dependencies and whether they can remain legacy temporarily or need a native replacement.
- Metadata and SEO features: title, description, canonical URL, Open Graph values, JSON-LD, robots directives, and sitemap inclusion.

Group pages by real DOM and behavior similarity, not just URL prefix. Expected families include the homepage, service/landing pages, case studies, insight articles, archive/pagination pages, author pages, testimonials, CTA/funnel pages, and utility pages. Store the result in a versioned migration document or typed data file with a page count that matches `legacy/`.

**Exit criteria:** Every legacy page belongs to one layout family, each family has a representative document, and repeated versus unique sections are explicitly identified.

### Phase 2: Establish The Generic App Shell

Use the inventory to create the common native shell before rebuilding individual pages.

- Add a root native page only when it is ready to replace `/`; a specific `app/page.tsx` will take precedence over the legacy catch-all.
- Create typed server components for the shared header, navigation, footer, global container, section spacing, shared links, and page metadata.
- Move shared visual tokens, fonts, resets, and layout styles into a deliberate global styling layer. Do not blindly import the entire legacy stylesheet into native pages.
- Model repeated shared content as typed data, such as navigation groups, footer groups, contact links, and global calls to action.
- Establish the page-data directory and page-family schemas before adding multiple native routes.
- Keep server components as the default. Isolate interactive behavior in small client components with explicit props and accessible keyboard behavior.
- Continue to use existing `public/` asset URLs during the transition. Do not move or rename assets while extracting components.

**Exit criteria:** A native shell can render a representative page with correct global layout, responsive behavior, metadata, header/footer links, and no dependency on injected legacy HTML.

### Phase 3: Build Family-Level Reusable Components

For each layout family, extract components shared by multiple pages in that family before implementing individual page variants.

Examples:

- Service pages: hero, service summary, capability grid, technology list, process sections, related services, lead CTA.
- Case studies: case-study hero, client facts, challenge/solution/results bands, metrics, technology stack, related work.
- Insight articles: article header, author/date metadata, table of contents, rich content blocks, related articles, newsletter/lead CTA.
- Archive pages: listing header, filters when present, card grid, author/category metadata, pagination.
- Testimonials: testimonial hero, quote panel, company profile, related case study CTA.

Give each component a narrow typed data contract. Avoid a single generic component with a large collection of optional props; split components when markup, visual hierarchy, or behavior materially differs.

**Exit criteria:** Each layout family has reusable components for its repeated patterns and one representative page can be assembled from typed data plus those components.

### Phase 4: Extract Remaining Components And Content Models

Convert the remaining repeated and page-specific sections only after the shared and family-level patterns are stable.

- Extract narrow components for one-off but meaningful patterns instead of embedding large HTML strings in pages.
- Create explicit TypeScript content models for each page family.
- Keep each route thin: it should load a typed page-data object, supply it to the page-family renderer, and define only route-specific server concerns.
- Keep rich text structured where practical; use MDX or a CMS only after the required content model is understood.
- Replace legacy jQuery plugins with native React or small client components only when migrating the owning page. Do not add global jQuery to new native pages.
- Keep third-party services behind dedicated integrations with server-safe configuration and graceful client-side failure behavior.
- Migrate one route or cohesive route family at a time. Each native route must retain the legacy URL and must not change unrelated fallback routes.

**Exit criteria:** A migrated family has no raw legacy document dependency, no untyped page data, and no global legacy script requirement for its own UI behavior.

### Phase 5: Visual, Behavioral, And SEO Parity

Before retiring a legacy page, compare the native page against its legacy equivalent at desktop and mobile viewports.

Verify:

- Structure, content order, headings, links, images, alt text, and responsive layout.
- Header, navigation, footer, and all calls to action.
- Interactive behavior: menus, tabs, accordions, carousels, modals, forms, loading/error states, and keyboard access.
- Title, description, canonical URL, Open Graph data, JSON-LD, robots directives, and HTTP status.
- Public asset loading without console errors, broken URLs, or legacy script failures.
- Native route ownership and continued legacy fallback for at least one unrelated unmigrated route.

Use screenshots or browser-based checks where available, plus `npm run build` and a focused runtime request check. Fix parity issues in the same route family before beginning another migration.

**Exit criteria:** The native route is visually and behaviorally equivalent for required user flows, meets the SEO contract, and can safely replace its document under `legacy/`.

### Final Cleanup

After every route is native:

1. Remove the legacy catch-all handler and `legacy/` documents.
2. Remove unused WordPress CSS, JavaScript, plugins, and assets from `public/` only after reference checks.
3. Replace static sitemap files with generated Next sitemap routes.
4. Remove `npm run static` and `static-server.js` once Next is the only supported server.

## Working Rules

- Preserve public URLs and absolute asset paths during migration.
- Keep browser-served files under `public/`; do not serve them through a custom filesystem middleware.
- Keep legacy HTML immutable unless a narrow compatibility fix is required.
- Prefer server components and server-side data loading. Add client components only for interactive behavior.
- Do not change `app/[[...slug]]/route.ts` unless a native route or a legacy resolution rule requires it.
- Validate every routing change with `npm run build` and a focused runtime check of the changed native URL, one remaining legacy URL, and a representative public asset URL.
- Do not expose application source, `.next/`, or `node_modules/` through legacy resolution.

## Commands

- `npm run dev` starts the development server.
- `npm run build` validates the production build.
- `npm run start` starts the production server after a build.
- `npm run static` starts the old standalone static server. It is retained only as a reference during migration; use Next.js for normal development and validation.