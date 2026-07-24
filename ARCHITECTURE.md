# ARCHITECTURE.md

## Overview

This app is a generated ditto.site clone. The generator captured the source pages, normalized the rendered DOM into an IR, inferred assets/tokens/sections/recipes, and emitted a static Next.js App Router project.

## Structure

- `src/app/layout.tsx`: root App Router layout, language, metadata, viewport, JSON-LD, and shared shell.
- `src/app/page.tsx` and nested route `page.tsx` files: generated route bodies.
- `src/app/globals.css`: reset, font faces, design tokens, and global page base.
- `src/app/ditto.css`: route or page fidelity CSS.
- `src/app/content.ts`: editable data layer when repeated regions were promoted.
- `src/app/components/`, `src/app/sections/`, `src/app/svgs/`: generated JSX modules.
- `src/app/ditto/`: runtime helpers for interaction and motion recipes.
- `public/assets/cloned/`: materialized source assets.

## Styling

The generator uses Tailwind classes for declarations that can be represented as stable utilities. Some styles remain in `ditto.css` because they are route-scoped, pseudo-element based, keyframe based, interaction-state based, or too specific to translate safely without changing the rendered result.

## Anchors

`data-ditto-id` exists in delivered apps where runtime utilities or generated CSS still need a stable DOM anchor. Validation-only capture ids are stripped from production output and should not be reintroduced.

## Recipes And Runtime

Recipes identify higher-level patterns such as repeated cards, logo clouds, navigation, disclosures, accordions, tabs, carousels, and motion. Sections and components provide editable structure, SVG modules preserve source artwork, and `src/app/ditto` applies the small runtime behaviors that were captured safely. Runtime utilities emitted for this clone: none emitted for this capture.

## Clone Metadata

- routes: 21
- extracted components: 68
- section modules: 0
- SVG modules: 0
- content module: no
- component extraction requested: yes

## Routes

- / - Everhem
- /pages/shop - Shop – Everhem
- /pages/all-shades - All Shades – Everhem
- /pages/all-drapery - All Drapery – Everhem
- /pages/all-cafe-curtains - All Café Curtains – Everhem
- /pages/all-fixed-curtains - All Fixed Curtains – Everhem
- /pages/all-hardware - All Hardware – Everhem
- /pages/jake-arnold-for-everhem - Jake Arnold for Everhem
- /pages/this-oak-house-for-everhem - This Oak House for Everhem
- /pages/amber-lewis - Amber Lewis × Everhem
- /pages/the-carly-kuhn-collection - The Carly Kuhn Collection – Everhem
- /pages/collaborations - Collaborations – Everhem
- /pages/samples - Samples – Everhem
- /pages/guidance - Guidance – Everhem
- /pages/how-it-works - How It Works – Everhem
- /pages/faq - FAQ – Everhem
- /pages/design-services - Design Services – Everhem
- /pages/design-services-trade - Design Services - Trade – Everhem
- /pages/trade - Trade – Everhem
- /pages/about-us - About Us – Everhem
- /pages/contact - Contact – Everhem

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.

---

## Hand-authored fidelity layer (applied on top of raw Ditto output)

The raw clone was audited page-by-page against the live site at 1440px (see `docs/everhem-clone-audit.pdf`). Three **systemic** defects were fixed at the root, plus several per-section image-sizing fixes:

### Systemic (each fixed once, resolved many pages)
1. **Scroll-hijack un-clamp** — `globals.css` `body.cn0` override. The live theme pins `html`/`body` to one viewport and scrolls `body` internally via JS; Ditto captured that clamp and only un-clamped it at ≥1601px, freezing the built page at ~800px below that. Native document scroll is restored at all breakpoints.
2. **Wide-viewport completeness** — the raw output tagged every element `2xl:hidden` with no ≥1536px layer, so the page went blank on 1080p+ monitors. Stripped `2xl:hidden` from the audit-set pages and their components (2078 tokens); the desktop layout now renders at every width. No effect below 1536px.
3. **Fluid container grid** — `grid-cols-[20px_1240px_20px]` (fixed 1280px, left-packed) → `grid-cols-[minmax(20px,1fr)_minmax(0,1400px)_minmax(20px,1fr)]`. Reproduces the live responsive behaviour (20px gutters at 1440, `260px 1400px 260px` at 1920) and cascaded to fix full-bleed image width, heading line-wraps, card widths, and the footer CTA button row in one change.

### Per-section image sizing (fixed-height → `h-full`)
Ditto captures a fixed pixel height for images at the 1280px breakpoint; inside an aspect-ratio box that flexes wider at 1440px this leaves a gap or a dark band. Fixed on: collection-page heroes (dark `bg-foreground` band), product-grid cards, "You may also like" cards, and the Designer Picks grid (a 2-row template that injected a ~950px phantom gap). Two zero-width regressions were also fixed by restoring the captured element width: the fabric swatch circles (`w-14 h-14`) and the home "explore" carousel cards (`w-70`).

## Interaction runtime — `public/cloned-interactions.js`

Ditto reproduces appearance, not behaviour. everhem's live theme is **jQuery-driven with almost no scripted motion** — `theme.js` has no GSAP/Swiper/scroll library and only a handful of `addClass`/`toggleClass` calls (verified by reading the source). So the only interactions that needed re-implementing are the ones whose captured markup is inert. A single framework-free script (loaded once from `layout.tsx`, ~3 KB, no dependencies) wires:

- **Announcement-bar dismiss** — the "Free shipping" bar's ✕ collapses the bar. *(verified working)*
- **Carousel prev/next arrows** — arrow buttons scroll their nearest native `overflow-auto` track by one card width; transform-based carousels with no scroll track are left untouched.
- **SHOP / GUIDANCE hover mega-menus** — reconstructed by hand (see above).

**Not reproduced (documented static limitations):**
- **SHOP / GUIDANCE mega-menus** — Ditto captured the nav links but not the hover dropdown panels, so these were **rebuilt by hand** in `cloned-interactions.js` from the live site's content + styling (full-width cream bar below the header, two link columns, Wigrum 10px uppercase headings). Hover to open, mouse-leave / Esc to close; clicking a top-level item still navigates.
- **Cart / checkout / Shop Pay, account, search, live inventory/pricing** — dynamic Shopify features render as static stand-ins and do not transact.
