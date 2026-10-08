/* app.js
 * Page-specific boot logic. Each page sets <body data-page="...">.
 * Keep this small — animations, partials, and forms have their own files.
 */
(function () {
  'use strict';

  function $(sel) { return document.querySelector(sel); }

  // Smooth in-page anchor scroll for hash links.
  function initSmoothAnchors() {
    document.addEventListener('click', function (e) {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Move focus for accessibility.
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  }

  // Stagger the reveal delays of every .rwt-reveal inside a container,
  // so children animate one after another.
  function staggerChildren(container) {
    const kids = container.querySelectorAll(':scope > .rwt-reveal, :scope .rwt-reveal');
    kids.forEach(function (el, i) {
      const d = (i % 4) + 1;
      el.setAttribute('data-reveal-delay', String(d));
    });
  }

  function init() {
    initSmoothAnchors();
    // Apply stagger to all major grids and service stacks on the page.
    document.querySelectorAll('.rwt-grid, .rwt-service, .rwt-value, .rwt-app-card, .rwt-news-card, .rwt-stat')
      .forEach(staggerChildren);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
