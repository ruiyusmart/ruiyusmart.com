/* partials.js
 * DOM-injects shared <header> + <footer> + <a class="rwt-skip-link"> on every page.
 * The current page is highlighted via the <body data-page="..."> attribute.
 * No build step. Vanilla ES2020.
 */
(function () {
  'use strict';

  // SVG icons used inside header / footer (currentColor)
  const ICON_MENU = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`;
  const ICON_CLOSE = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`;
  const ICON_ARROW = `<svg class="rwt-button__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const ICON_LINKEDIN = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v2c.7-1.2 2-2 4-2 3 0 4 2 4 5v5h-4v-5c0-1-.3-2-1.5-2S14 14 14 15v5h-4z" fill="currentColor"/></svg>`;
  const ICON_GITHUB   = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.2-1.5-1.2-1.5-1-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 1 1.6 2.5 1.2 3 .9.1-.7.4-1.2.7-1.5-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.5 5 .4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A10 10 0 0012 2z" fill="currentColor"/></svg>`;
  const ICON_INSTAGRAM = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-3a1 1 0 100 2 1 1 0 000-2z" fill="currentColor"/></svg>`;
  const ICON_FACEBOOK = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 22v-8h3l.5-4H13V7.5c0-1.2.3-2 2-2h2V2.1c-.3 0-1.6-.1-3-.1-3 0-5 1.8-5 5.2V10H6v4h3v8h4z" fill="currentColor"/></svg>`;
  const ICON_TWITTER = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 5.8c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1A4.1 4.1 0 0011.7 9c-3.4-.2-6.4-1.8-8.4-4.3a4.1 4.1 0 001.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.3.2-1.9.1.5 1.7 2.1 2.9 4 2.9A8.3 8.3 0 012 18.3 11.7 11.7 0 008.3 20c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" fill="currentColor"/></svg>`;

  const PAGES = {
    home:     { label: 'Home',     href: '/' },
    services: { label: 'Services', href: 'services.html' },
    culture:  { label: 'Culture',  href: 'culture.html' },
    news:     { label: 'News',     href: 'news.html' },
    contact:  { label: 'Contact',  href: 'contact.html' }
  };

  function currentPage() {
    const b = document.body;
    return b && b.dataset && b.dataset.page ? b.dataset.page : '';
  }

  function navLinks(active) {
    return Object.keys(PAGES).map(function (key) {
      const p = PAGES[key];
      const isActive = key === active;
      const cls = 'rwt-header__nav-item' + (isActive ? ' rwt-header__nav-item--active' : '');
      const aria = isActive ? ' aria-current="page"' : '';
      return `<a class="${cls}"${aria} href="${p.href}">${p.label}</a>`;
    }).join('');
  }

  function mobileNavLinks(active) {
    return Object.keys(PAGES).map(function (key) {
      const p = PAGES[key];
      const isActive = key === active;
      const aria = isActive ? ' aria-current="page"' : '';
      return `<a href="${p.href}"${aria} style="${isActive ? 'color:var(--color-primary-deep);font-weight:600;' : ''}">${p.label}</a>`;
    }).join('');
  }

  function renderHeader() {
    const active = currentPage();
    const slot = document.getElementById('rwt-header-slot');
    if (!slot) return;
    slot.outerHTML = `
<a class="rwt-skip-link" href="#main">Skip to content</a>
<header class="rwt-header" data-component="header">
  <div class="rwt-header__inner">
    <a class="rwt-header__brand" href="/" aria-label="Raywise Technologies — home">
      <img src="images/logo/raywise-logo.svg" width="160" height="32" alt="Raywise" />
    </a>
    <nav class="rwt-header__nav" aria-label="Primary">${navLinks(active)}</nav>
    <a class="rwt-header__cta rwt-button rwt-button--primary rwt-button--pill rwt-button--size-sm" href="contact.html">
      <span>Get in touch</span>${ICON_ARROW}
    </a>
    <button class="rwt-header__menu-btn" type="button" aria-label="Open menu" aria-expanded="false" data-action="toggle-menu">${ICON_MENU}</button>
  </div>
  <div class="rwt-header__mobile-nav" data-component="mobile-nav" aria-label="Mobile">${mobileNavLinks(active)}</div>
</header>
<div class="rwt-scroll-progress" data-scroll-progress aria-hidden="true"></div>
    `;
  }

  function renderFooter() {
    const slot = document.getElementById('rwt-footer-slot');
    if (!slot) return;
    // If the slot is already populated (static fallback in the page), leave it.
    if (slot.children && slot.children.length > 0 && slot.querySelector('.rwt-footer')) return;
    const year = new Date().getFullYear();
    slot.outerHTML = `
<footer class="rwt-footer" data-component="footer">
  <div class="rwt-footer__inner">
    <div class="rwt-footer__col rwt-footer__brand">
      <img src="images/logo/raywise-logo-mono.svg" width="140" height="28" alt="Raywise" />
      <p class="rwt-footer__address">
        Room 12, 3/F, Yau Lee Centre,<br />
        45 Hoi Yuen Road, Kwun Tong,<br />
        Hong Kong
      </p>
      <a class="rwt-footer__email" href="mailto:support@ruiyusmart.com">support@ruiyusmart.com</a>
      <a class="rwt-footer__email" href="mailto:liujunchuan@ruiyusmart.com">liujunchuan@ruiyusmart.com</a>
    </div>
    <div class="rwt-footer__col">
      <h3>Services</h3>
      <ul>
        <li><a href="services.html#smart-control">Smart Control Systems</a></li>
        <li><a href="services.html#industrial-automation">Industrial Automation</a></li>
        <li><a href="services.html#iot">IoT Devices R&amp;D</a></li>
        <li><a href="services.html#software">Software Development</a></li>
        <li><a href="services.html#import-export">Import &amp; Export</a></li>
        <li><a href="services.html#apps">Mobile Apps</a></li>
      </ul>
    </div>
    <div class="rwt-footer__col">
      <h3>Company</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="culture.html">Culture</a></li>
        <li><a href="news.html">News</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="rwt-footer__col">
      <h3>Apps &amp; Legal</h3>
      <div class="rwt-footer__stores">
        <a class="rwt-store-badge" href="https://apps.apple.com" rel="noopener noreferrer" target="_blank" aria-label="Download on the App Store"><img src="images/icons/app-store.svg" alt="" /></a>
        <a class="rwt-store-badge" href="https://play.google.com" rel="noopener noreferrer" target="_blank" aria-label="Get it on Google Play"><img src="images/icons/google-play.svg" alt="" /></a>
      </div>
      <ul class="rwt-footer__social" aria-label="Social">
        <li><a href="#" aria-label="LinkedIn">${ICON_LINKEDIN}</a></li>
        <li><a href="#" aria-label="GitHub">${ICON_GITHUB}</a></li>
        <li><a href="#" aria-label="Twitter">${ICON_TWITTER}</a></li>
        <li><a href="#" aria-label="Facebook">${ICON_FACEBOOK}</a></li>
        <li><a href="#" aria-label="Instagram">${ICON_INSTAGRAM}</a></li>
      </ul>
      <ul style="margin-top:var(--space-4);">
        <li><a href="privacy.html">Privacy Policy</a></li>
        <li><a href="terms.html">Terms of Service</a></li>
        <li><a href="app-ads.txt">app-ads.txt</a></li>
      </ul>
    </div>
  </div>
  <div class="rwt-footer__legal">
    <p>&copy; ${year} Raywise Technologies Co., Limited. All rights reserved.</p>
    <ul>
      <li><a href="privacy.html">Privacy Policy</a></li>
      <li><a href="terms.html">Terms of Service</a></li>
      <li><a href="sitemap.xml">Sitemap</a></li>
    </ul>
  </div>
</footer>
    `;
  }

  function bindHeaderInteractions() {
    const btn = document.querySelector('[data-action="toggle-menu"]');
    const nav = document.querySelector('[data-component="mobile-nav"]');
    if (!btn || !nav) return;
    btn.addEventListener('click', function () {
      const open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      btn.innerHTML = open ? ICON_CLOSE : ICON_MENU;
    });
  }

  function init() {
    renderHeader();
    renderFooter();
    bindHeaderInteractions();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
