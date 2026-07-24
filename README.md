# everhem-clone

A **pixel-perfect static clone of [everhem.com](https://everhem.com)** — a custom-theme Shopify storefront — produced with the [Ditto](https://github.com/ion-design/ditto.site) deterministic website cloner and then hand-audited page-by-page against the live site until every high/medium visual discrepancy was resolved.

- **Live demo:** https://everhem-clone.vercel.app
- **Stack:** Next.js 15 (App Router, `output: "export"` → fully static) · Tailwind CSS v4 · React 19
- **Pages:** 21 audited marketing routes (+ a few auto-discovered extras), all statically prerendered

> **Disclaimer.** This is an **unaffiliated fidelity-test clone** built to evaluate the Ditto cloner's output quality. It is not operated by, endorsed by, or connected to Everhem. All photography, copy, and branding belong to Everhem. Cart/checkout, account, search, and other dynamic Shopify features are **non-functional static stand-ins** — nothing here transacts.

---

## Run locally

```bash
npm install
npm run build          # produces ./out (static export)
npx serve out -l 3080  # serve the production build
```

Then open http://localhost:3080.

> ⚠️ **Judge fidelity only from the production build (`serve out`).** `next dev` renders this clone **differently** (it does not faithfully reproduce the captured layout) and will mislead you. Every fidelity decision in this repo was made against `npm run build` + `serve out`, never `next dev`.

---

## Page list

The 21 audited routes (home + Everhem's marketing pages):

| Route | Page |
|---|---|
| `/` | Homepage |
| `/pages/shop` | Shop |
| `/pages/all-shades` | All Shades |
| `/pages/all-drapery` | All Drapery |
| `/pages/all-cafe-curtains` | All Café Curtains |
| `/pages/all-fixed-curtains` | All Fixed Curtains |
| `/pages/all-hardware` | All Hardware |
| `/pages/jake-arnold-for-everhem` | Jake Arnold for Everhem |
| `/pages/this-oak-house-for-everhem` | This Oak House for Everhem |
| `/pages/amber-lewis` | Amber Lewis |
| `/pages/the-carly-kuhn-collection` | The Carly Kuhn Collection |
| `/pages/collaborations` | Collaborations |
| `/pages/samples` | Samples |
| `/pages/guidance` | Guidance |
| `/pages/how-it-works` | How It Works |
| `/pages/faq` | FAQ |
| `/pages/design-services` | Design Services |
| `/pages/design-services-trade` | Design Services (Trade) |
| `/pages/trade` | Trade |
| `/pages/about-us` | About Us |
| `/pages/contact` | Contact |

`/cart` is intentionally excluded — Everhem's `robots.txt` disallows `/cart/` and `/checkout`, and a cart is an empty shell in a static clone anyway.

---

## Repository structure

```
everhem-clone/
├── src/app/
│   ├── layout.tsx              # root shell: <html>/<body>, header + footer (shared chrome), metadata, JSON-LD
│   ├── page.tsx                # homepage body (10 sections)
│   ├── globals.css             # reset, @font-face, design tokens, and the two hand-authored fidelity fixes (see below)
│   ├── ditto.css               # per-route captured fidelity CSS (one alongside each page.tsx)
│   ├── ditto-chrome.css        # shared header/footer CSS
│   ├── components/             # reusable JSX modules promoted from repeated regions
│   │   ├── media-card.tsx      #   Designer-Picks / product card
│   │   ├── media-tile.tsx      #   fabric swatch tile
│   │   ├── feature-card.tsx    #   "How Everhem works" step
│   │   ├── nav-link.tsx, media-link.tsx, logo.tsx, list-row.tsx, …
│   └── pages/<slug>/
│       ├── page.tsx            # each marketing route's body
│       └── ditto.css           #   its captured fidelity CSS
├── public/assets/cloned/
│   ├── images/  (≈900 files)   # captured photography / product imagery
│   ├── fonts/   (48 files)     # self-hosted webfonts (Freight Big Pro, Wigrum, Work Sans, …)
│   └── svg/, manifest/
├── next.config.mjs             # output:"export", images.unoptimized, strict-mode off
├── ARCHITECTURE.md             # how Ditto generated this + the interaction model
└── README.md
```

Each route is a `page.tsx` + its own `ditto.css`; `layout.tsx` supplies the shared header/footer and loads `globals.css`.

---

## Fidelity fixes applied on top of the raw Ditto output

The raw clone had three **systemic** defects (each affecting most or all pages). All were fixed at the root, in shared CSS / the container grid — not per-page:

1. **Scroll-hijack un-clamp (`globals.css`).** Everhem's live theme pins `<html>`/`<body>` to one viewport (`position:absolute; overflow:hidden`) and scrolls `<body>` internally via JS. Ditto captured that clamp into `.cn0` and only un-clamped it at ≥1601px, so below that the built page was frozen at ~800px and could not scroll. A `body.cn0` override restores native document scrolling at every breakpoint (a static clone has no scroll JS, so native scroll is the faithful choice — identical at rest).

2. **Blank-at-wide-viewport fix.** Ditto emitted only the ≤1535px layout and tagged every element `2xl:hidden`, with no ≥1536px counterpart — so the page went **blank on any 1080p+ monitor**. Removing the blanket `2xl:hidden` lets the desktop layout render at all widths. (No effect below 1536px, so the 1440px audit was unchanged.)

3. **Fluid container grid.** The section container was a fixed `grid-cols-[20px_1240px_20px]` (1280px, left-packed) inside a full-width section — leaving a ~160px dead strip on the right at 1440px and starving the content column. Replacing it with `grid-cols-[minmax(20px,1fr)_minmax(0,1400px)_minmax(20px,1fr)]` reproduces Everhem's real responsive behaviour (20px gutters at 1440, `260px 1400px 260px` at 1920) and — in one change — fixed full-bleed image width, heading line-wraps, card widths, and the footer CTA button pair (which had wrapped to two rows only because its `% ` width resolved against the too-narrow column).

Per-section polish (hero background sizing, uniform product-card heights, swatch rows, carousel tracks) is documented in the audit and applied in the respective `ditto.css` / `page.tsx`.

---

## Verification

Fidelity was measured with an **anchored per-section pixel audit**: for all 21 pages, load LIVE and CLONE at 1440px, neutralise the scroll-hijack, force lazy content to load, then screenshot each page full-page and diff every matching section by its own bounding box (so vertical drift can't cascade). The harness records a live/clone capture-OK flag so a blank capture is flagged, never silently scored. See `docs/` for the before/after audit PDF and `discrepancies.json`.

---

## Deploy notes

Deployed as a **pure static site** — the prebuilt `out/` directory is uploaded directly (no server build):

```bash
npm run build
npx vercel deploy out --prod
```

After any deploy, curl **every** route (not just `/`) to confirm 200 — a partial/cached static deploy can 404 sub-pages while the homepage still works.

---

## Known static-clone limitations

These live Shopify features are **static stand-ins** and do not function:

- **Cart / checkout / Shop Pay** — the cart drawer and "Buy with Shop Pay" render but do not add items or transact.
- **Account / login** — the account routes are captured markup only.
- **Search overlay** — opens but does not query.
- **Live inventory / pricing / currency** — prices are frozen at capture time.
- **Klaviyo email-capture popup & chat widget** — intentionally omitted (transient overlays that Ditto does not bake in).
- **≥1920px** uses the same 1400px max content column as Everhem; **exact** parity was tuned at the 1440px audit viewport.
