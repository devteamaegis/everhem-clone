# AGENTS.md

This is a generated ditto.site clone app for https://everhem.com/. It is a static Next.js App Router project produced from captured DOM, CSS, assets, metadata, and interaction recipes.

## Run

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run start`

## Safe Edit Areas

- `src/app/content.ts` or `src/app/content.tsx`: editable structured content extracted from repeated components and sections when present.
- `src/app/components/`: generated component modules. Edit copy, links, and simple JSX structure with care.
- `src/app/sections/`: generated section modules for single-page section splits when present.
- `src/app/svgs/`: hoisted inline SVG modules. Edit only when intentionally changing artwork.
- `src/app/ditto.css`: fidelity CSS for captured layout, pseudos, keyframes, and interaction states. Small visual tweaks are reasonable; broad rewrites can break clone fidelity.
- Root SEO/docs files such as `AGENTS.md`, `ARCHITECTURE.md`, and `src/app/robots.ts`, `src/app/sitemap.ts`, and `src/app/llms.txt/route.ts`.

## Generated Runtime

`src/app/ditto` contains generated runtime utilities for captured interactions and motion. Current runtime utilities: none emitted for this capture. Do not casually rewrite these files; they are plumbing that maps captured recipes to stable `data-ditto-id` anchors in delivered apps.

## File Meanings

- `src/app/page.tsx` and nested route `page.tsx` files: generated route bodies.
- `src/app/content.ts`: structured data extracted from repeated clone regions.
- `src/app/components/`: reusable JSX components promoted from repeated captured subtrees.
- `src/app/sections/`: page sections split from the captured body.
- `src/app/svgs/`: inline SVGs hoisted out of page/section files.
- `src/app/ditto.css`: generated CSS that preserves source layout and visual details not represented by Tailwind utilities.
- `src/app/ditto-meta.ts`: delivered-app metadata for anchors that still need runtime or stylesheet targeting after validation-only ids are stripped.

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

## Do Not Edit Casually

- `src/app/ditto/` runtime utilities.
- Generated anchor metadata such as `ditto-meta.ts`.
- Validation-only files in working captures, including `_cids.ts` and `_styles.ts` before export stripping.
- Framework shell plumbing unless you are intentionally changing global metadata or page mounting behavior.
