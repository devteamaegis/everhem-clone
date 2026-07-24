/* everhem-clone interaction runtime (framework-free).
 * Ditto reproduces appearance, not behaviour. everhem's live theme is jQuery-driven with very
 * little scripted motion (no GSAP/Swiper/scroll libraries — verified against theme.js), so the
 * only interactions that need re-implementing are the ones whose captured markup is inert:
 *   1. announcement-bar dismiss (the "Free shipping" bar's ✕)
 *   2. carousel prev/next arrows (the scroll tracks are native overflow-auto; the arrows were dead)
 * The SHOP / GUIDANCE mega-menu panels are NOT reproduced: Ditto did not capture their panel
 * fragments, so those nav items fall back to plain links (clicking navigates to the section page).
 */
(function () {
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    /* 1 ── announcement bar dismiss ─────────────────────────────────────── */
    document.querySelectorAll('button[aria-label="Dismiss announcement" i]').forEach(function (btn) {
      btn.addEventListener("click", function () {
        // Walk up to the full-width announcement row and collapse it.
        var el = btn;
        for (var i = 0; i < 6 && el.parentElement; i++) {
          el = el.parentElement;
          var r = el.getBoundingClientRect();
          if (r.width > 600 && r.height < 80) break;
        }
        el.style.display = "none";
      });
    });

    /* 2 ── carousel prev/next arrows ────────────────────────────────────── */
    function scrollTrackFor(btn) {
      // Search the button's section for the nearest horizontally-scrollable track.
      var scope = btn.closest('[id^="shopify-section"]') || btn.closest("section") || document.body;
      var candidates = [].slice.call(scope.querySelectorAll("div, ul"));
      var tracks = candidates.filter(function (e) {
        return e.scrollWidth > e.clientWidth + 16 && e.clientWidth > 200;
      });
      // Prefer the widest track (the actual card row, not an inner wrapper).
      tracks.sort(function (a, b) { return b.clientWidth - a.clientWidth; });
      return tracks[0] || null;
    }
    // Match every arrow-label variant everhem uses: "Scroll left/right" (explore),
    // "Next/Previous slide" (collab), and generic next/prev/forward/back.
    var arrowSel =
      'button[aria-label*="scroll" i], button[aria-label*="slide" i],' +
      'button[aria-label*="next" i], button[aria-label*="prev" i],' +
      'button[aria-label*="forward" i], button[aria-label*="back" i]';
    document.querySelectorAll(arrowSel).forEach(function (btn) {
      var lbl = (btn.getAttribute("aria-label") || "").toLowerCase();
      // Skip buttons that aren't directional (defensive).
      if (!/scroll|slide|next|prev|forward|back|left|right/.test(lbl)) return;
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var track = scrollTrackFor(btn);
        if (!track) return; // transform-based carousels with no scroll track are left as-is
        var card = track.firstElementChild;
        var step = card ? Math.round(card.getBoundingClientRect().width) + 16 : Math.round(track.clientWidth * 0.85);
        var forward = /next|right|forward/.test(lbl) && !/left|prev|back/.test(lbl);
        track.scrollBy({ left: forward ? step : -step, behavior: "smooth" });
      });
    });
  });
})();
