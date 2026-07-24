/* everhem-clone interaction runtime (framework-free).
 * Ditto reproduces appearance, not behaviour. everhem's live theme is jQuery-driven with very
 * little scripted motion (no GSAP/Swiper/scroll libraries — verified against theme.js), so the
 * interactions re-implemented here are the ones whose captured markup is inert:
 *   1. announcement-bar dismiss (the "Free shipping" bar's ✕)
 *   2. carousel prev/next arrows (the scroll tracks are native overflow-auto; the arrows were dead)
 *   3. SHOP / GUIDANCE hover mega-menus — Ditto captured the nav links but NOT the dropdown panels,
 *      so they are rebuilt by hand here from the live site's content + styling (cream full-width bar).
 */
(function () {
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  /* Mega-menu content — mirrors everhem.com's SHOP / GUIDANCE dropdown panels. */
  var MEGA = {
    Shop: [
      { head: "Shop By Type", links: [["Shades", "/pages/all-shades"], ["Drapery", "/pages/all-drapery"], ["Café Curtains", "/pages/all-cafe-curtains"], ["Fixed Curtains", "/pages/all-fixed-curtains"], ["Hardware", "/pages/all-hardware"], ["Shop All", "/pages/shop"]] },
      { head: "Collaborations", links: [["Jake Arnold", "/pages/jake-arnold-for-everhem"], ["This Oak House", "/pages/this-oak-house-for-everhem"], ["Amber Lewis", "/pages/amber-lewis"], ["Carly Kuhn", "/pages/the-carly-kuhn-collection"], ["All Collaborations", "/pages/collaborations"], ["Order free swatches →", "/pages/samples"]] },
    ],
    Guidance: [
      { head: "Your Window Treatment Experts", links: [["Everhem Expertise", "/pages/guidance"], ["How It Works", "/pages/how-it-works"], ["FAQs", "/pages/faq"]] },
      { head: "Design Services", links: [["Residential", "/pages/design-services"], ["Trade", "/pages/design-services-trade"]] },
    ],
  };

  function buildMegaMenus() {
    var header = document.querySelector("header");
    if (!header) return;
    // one shared panel, reused for whichever trigger is hovered
    var panel = document.createElement("div");
    panel.className = "clone-mega";
    var inner = document.createElement("div");
    inner.className = "clone-mega__inner";
    panel.appendChild(inner);
    document.body.appendChild(panel);

    // scoped styles (Wigrum 10px uppercase headings + 14px links on a cream full-width bar)
    var css = document.createElement("style");
    css.textContent =
      ".clone-mega{position:fixed;left:0;right:0;z-index:98;background:#f5f0e6;border-top:1px solid rgba(40,39,33,.12);" +
      "box-shadow:0 12px 24px -18px rgba(40,39,33,.35);opacity:0;visibility:hidden;transition:opacity .22s ease;padding:30px 0 34px}" +
      ".clone-mega.open{opacity:1;visibility:visible}" +
      ".clone-mega__inner{max-width:1400px;margin:0 auto;padding:0 20px;display:flex;gap:96px}" +
      ".clone-mega__col-h{font-family:Wigrum,-apple-system,system-ui,sans-serif;font-size:10px;font-weight:500;" +
      "text-transform:uppercase;letter-spacing:1.8px;color:#282721;margin:0 0 12px}" +
      ".clone-mega a{display:block;font-family:Wigrum,-apple-system,system-ui,sans-serif;font-size:14px;line-height:1.5;" +
      "color:#282721;text-decoration:none;padding:4px 0;opacity:.85}" +
      ".clone-mega a:hover{opacity:1;text-decoration:underline}";
    document.head.appendChild(css);

    function fill(cols) {
      inner.innerHTML = "";
      cols.forEach(function (c) {
        var col = document.createElement("div");
        var h = document.createElement("p");
        h.className = "clone-mega__col-h";
        h.textContent = c.head;
        col.appendChild(h);
        c.links.forEach(function (l) {
          var a = document.createElement("a");
          a.href = l[1];
          a.textContent = l[0];
          col.appendChild(a);
        });
        inner.appendChild(col);
      });
    }
    function place() {
      var r = header.getBoundingClientRect();
      panel.style.top = Math.round(r.bottom) + "px";
    }
    var openKey = null, hideT = null;
    function open(key) {
      clearTimeout(hideT);
      if (openKey !== key) { fill(MEGA[key]); openKey = key; }
      place();
      panel.classList.add("open");
    }
    function scheduleClose() {
      clearTimeout(hideT);
      hideT = setTimeout(function () { panel.classList.remove("open"); openKey = null; }, 140);
    }

    // Attach to the SHOP / GUIDANCE nav links (match by text; keep click navigation intact).
    var triggers = [].slice.call(header.querySelectorAll("a")).filter(function (a) {
      return /^(shop|guidance)$/i.test((a.textContent || "").trim());
    });
    triggers.forEach(function (a) {
      var key = /shop/i.test(a.textContent) ? "Shop" : "Guidance";
      var hot = a.closest("li") || a.parentElement || a;
      hot.addEventListener("mouseenter", function () { open(key); });
      hot.addEventListener("mouseleave", scheduleClose);
      a.addEventListener("focus", function () { open(key); });
    });
    panel.addEventListener("mouseenter", function () { clearTimeout(hideT); });
    panel.addEventListener("mouseleave", scheduleClose);
    window.addEventListener("scroll", function () { if (openKey) place(); }, { passive: true });
    window.addEventListener("resize", function () { if (openKey) place(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { panel.classList.remove("open"); openKey = null; } });
  }

  ready(function () {
    buildMegaMenus();

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
    /* 2b ── drag-to-scroll on horizontal tracks (native scrollbar is hidden to match live) ── */
    document.querySelectorAll(".flex.overflow-auto").forEach(function (track) {
      if (track.scrollWidth <= track.clientWidth + 8) return; // nothing to scroll
      track.style.cursor = "grab";
      track.style.userSelect = "none";
      var down = false, startX = 0, startL = 0, moved = 0, pid = null;
      track.addEventListener("pointerdown", function (e) {
        if (e.button !== 0) return;
        down = true; moved = 0; startX = e.clientX; startL = track.scrollLeft; pid = e.pointerId;
        track.style.cursor = "grabbing";
        try { track.setPointerCapture(e.pointerId); } catch (_) {}
      });
      track.addEventListener("pointermove", function (e) {
        if (!down) return;
        var dx = e.clientX - startX;
        moved = Math.max(moved, Math.abs(dx));
        track.scrollLeft = startL - dx;
      });
      function end() {
        if (!down) return;
        down = false; track.style.cursor = "grab";
        try { track.releasePointerCapture(pid); } catch (_) {}
      }
      track.addEventListener("pointerup", end);
      track.addEventListener("pointercancel", end);
      track.addEventListener("pointerleave", end);
      // a drag must not also fire a click on the swatch/card underneath
      track.addEventListener("click", function (e) {
        if (moved > 6) { e.preventDefault(); e.stopPropagation(); }
      }, true);
      // dragging an <img>/<a> shouldn't start the browser's native image/link drag
      track.addEventListener("dragstart", function (e) { e.preventDefault(); });
    });

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
