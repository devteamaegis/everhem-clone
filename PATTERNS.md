# Interaction / animation pattern library

The canonical web-interaction patterns Ditto reproduces, their DOM fingerprint, and how each is reproduced deterministically. Source of truth: `src/patterns/library.ts`.

| Pattern | Status | Reproduction | Fingerprint | Notes |
| --- | --- | --- | --- | --- |
| carousel | functional | dittowire | .swiper-slide/.slick-slide/[aria-roledescription=slide] grouped by a track parent, ≥2 slides + a next-button or index-aligned bullets | Track transform paged to the captured per-index translateX; frozen off-screen tracks reset by normalize/ir.ts:resetFrozenCarousels. |
| accordion | functional | component | aria-expanded+aria-controls region, OR native <details>/<summary>, OR a non-ARIA collapsed region (overflow-hidden + scrollHeight>clientHeight + a cursor:pointer ancestor) |  |
| tabs | functional | dittowire | role=tablist with role=tab triggers toggling role=tabpanel display |  |
| dropdown-menu | functional | dittowire | aria-haspopup + aria-controls trigger whose panel is present in the DOM |  |
| mega-menu | functional | component | mount-on-open panel under a nav trigger (Radix portal / Framer in-place), captured as self-contained inline-styled HTML | Emitted on SITE clones since Feature 4 (was single-page-only). |
| modal | functional | dittowire | aria-haspopup=dialog / role=dialog / aria-modal, or a non-ARIA fixed full-layer overlay revealed on click |  |
| hover-zoom | functional | css | a hover computed-style delta on transform/scale over the captured PSEUDO_PROPS |  |
| hover-swap | conditional | css | two stacked <img> in a product card where the 2nd fades in on card hover | Reproduced when the 2nd image is present in the captured DOM; a JS-lazy 2nd image is not. |
| marquee | functional | dittomotion | a continuously rAF-translating track (median non-zero velocity across sampled frames), or a CSS @keyframes translate loop | Emitted on SITE clones since Feature 4. |
| scroll-reveal | functional | dittomotion | an element hidden pre-scroll (opacity≤0.05 / transform offset + a transition) that becomes visible after scrolling into view | Emitted on SITE clones since Feature 4; the motion gate asserts the armed pre-scroll state. |
| rotating-text | functional | dittomotion | an element whose textContent cycles through a fixed set (observed via MutationObserver) |  |
| search-overlay | conditional | component | a search-labeled control (aria-label/class/href hint) opening a mount-on-open panel outside the top nav row | Feature 4 widened captureMenus to probe search/cart/account/menu controls anywhere in the chrome. Live predictive-search results (server-driven) are not reproducible; the overlay chrome is. |
| cart-drawer | conditional | component | a cart/bag-labeled control opening a mount-on-open right-anchored panel | The drawer chrome reproduces from the captured open panel; live cart state is backend-driven and out of scope. |
| mobile-menu | conditional | dittowire | a hamburger control toggling a fixed full-screen nav panel | Reproduced when captured as a display-flip disclosure; capture drives at the canonical width, so a purely mobile-viewport hamburger may be missed. |
| sticky-header | conditional | css | position:sticky/fixed header, optionally hide-on-scroll-down / show-on-scroll-up | Static sticky positioning reproduces; the scroll-direction show/hide behavior is not captured (no runtime probe yet) — the honest gap for a future StickyHeader runtime. |
| tooltip | conditional | css | a pre-existing hidden descendant revealed on hover, or an aria-describedby/title pair | Pre-mounted tooltips reproduce; JS-constructed ones do not. |
| lightbox | conditional | component | an image/zoom control opening a fixed full-layer image viewer | Caught when the viewer is a display-flip / mount-on-open overlay; a canvas-zoom gallery is not. |
| parallax | absent | capture-replay | scroll-linked transform/opacity sampled across a scroll pass | The honest capture-and-replay route: record the full scroll→{opacity,transform} track and replay on a ScrollTimeline. Flattened to a one-shot reveal today. |
| toast | absent | none | a transient server-triggered notification | No deterministic capture source (server/event-triggered); out of scope by design. |

_10 functional, 7 conditional, 2 absent._
