# UI Components — Raywise Technologies

> Inventory of every reusable UI component on `ruiyusmart.com`. Each entry lists: purpose, anatomy (class names), HTML usage snippet, and token references. The frontend implementation MUST mirror this contract — naming, structure, and class hooks are the contract; the visual style comes from `css/tokens.css` + the rules referenced in `design-tokens.md`.

Conventions:
- All component class names are BEM-like: `.rwt-{component}__{element}--{modifier}`.
- All interactive elements expose a `data-*` attribute for analytics / motion hooks.
- Icons reference `images/icons/{name}.svg` via inline `<svg>` (NOT `<img>`) so currentColor works.
- Mascots reference `images/animals/{name}.svg` inline.

---

## 1. Header (`rwt-header`)

**Purpose:** Persistent top navigation with logo, primary links, language/theme toggle, and CTA.
**Anatomy:**
- `.rwt-header` — sticky container, `--z-header`.
- `.rwt-header__brand` — wraps logo SVG.
- `.rwt-header__nav` — desktop nav.
- `.rwt-header__nav-item--active` — current page.
- `.rwt-header__cta` — pill button (e.g., "Contact us").
- `.rwt-header__menu-btn` — hamburger on mobile.
- `.rwt-header__sub-nav` — secondary service links (mega menu trigger).

**HTML:**

```html
<header class="rwt-header" data-component="header">
  <a class="rwt-header__brand" href="/" aria-label="Raywise Technologies home">
    <img src="images/logo/raywise-logo.svg" width="160" height="32" alt="Raywise" />
  </a>
  <nav class="rwt-header__nav" aria-label="Primary">
    <a class="rwt-header__nav-item" href="/">Home</a>
    <a class="rwt-header__nav-item rwt-header__nav-item--active" aria-current="page" href="services.html">Services</a>
    <a class="rwt-header__nav-item" href="culture.html">Culture</a>
    <a class="rwt-header__nav-item" href="news.html">News</a>
    <a class="rwt-header__nav-item" href="contact.html">Contact</a>
  </nav>
  <a class="rwt-header__cta rwt-button rwt-button--primary rwt-button--pill" href="contact.html">
    Get in touch
  </a>
  <button class="rwt-header__menu-btn" aria-label="Open menu" aria-expanded="false" data-action="toggle-menu">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
  </button>
</header>
```

---

## 2. Footer (`rwt-footer`)

**Purpose:** Multi-column footer with sitemap, contact, social, legal (Privacy / Terms).
**Anatomy:**
- `.rwt-footer` — dark surface.
- `.rwt-footer__col` — column.
- `.rwt-footer__legal` — bottom row with Privacy / Terms links and copyright.
- `.rwt-footer__social` — inline social icons.

**HTML:**

```html
<footer class="rwt-footer" data-component="footer">
  <div class="rwt-footer__inner">
    <div class="rwt-footer__col">
      <img src="images/logo/raywise-logo-mono.svg" width="140" alt="Raywise" />
      <p class="rwt-footer__address">
        Room 12, 3/F, Yau Lee Centre,<br />
        45 Hoi Yuen Road, Kwun Tong,<br />
        Hong Kong
      </p>
    </div>
    <div class="rwt-footer__col">
      <h3 class="rwt-footer__heading">Services</h3>
      <ul>
        <li><a href="services.html#smart-control">Smart Control Systems</a></li>
        <li><a href="services.html#industrial-automation">Industrial Automation</a></li>
        <li><a href="services.html#iot">IoT Devices R&D</a></li>
        <li><a href="services.html#software">Software Development</a></li>
      </ul>
    </div>
    <div class="rwt-footer__col">
      <h3 class="rwt-footer__heading">Company</h3>
      <ul>
        <li><a href="culture.html">Culture</a></li>
        <li><a href="news.html">News</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="rwt-footer__col">
      <h3 class="rwt-footer__heading">Apps</h3>
      <a class="rwt-footer__store" href="#"><img src="images/icons/app-store.svg" alt="App Store" /></a>
      <a class="rwt-footer__store" href="#"><img src="images/icons/google-play.svg" alt="Google Play" /></a>
      <ul class="rwt-footer__social">
        <li><a href="#" aria-label="LinkedIn"><svg>…linkedin icon…</svg></a></li>
        <li><a href="#" aria-label="GitHub"><svg>…github icon…</svg></a></li>
      </ul>
    </div>
  </div>
  <div class="rwt-footer__legal">
    <p>© 2026 Raywise Technologies Co., Limited. All rights reserved.</p>
    <ul>
      <li><a href="privacy.html">Privacy Policy</a></li>
      <li><a href="terms.html">Terms of Service</a></li>
      <li><a href="app-ads.txt">app-ads.txt</a></li>
    </ul>
  </div>
</footer>
```

---

## 3. Button (`rwt-button`)

**Purpose:** Action trigger.
**Modifiers:** `--primary` (blue fill), `--secondary` (ink fill), `--ghost` (transparent, underline), `--gold` (gold gradient fill), `--pill`, `--icon-only`, `--size-sm` / `--size-md` / `--size-lg`.

**HTML:**

```html
<a class="rwt-button rwt-button--primary rwt-button--pill rwt-button--size-md" href="contact.html">
  <span>Contact sales</span>
  <svg class="rwt-button__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
</a>
<button class="rwt-button rwt-button--ghost" type="button">Learn more</button>
<button class="rwt-button rwt-button--gold rwt-button--pill" data-magnetic>Get a quote</button>
```

---

## 4. Card — basic & featured (`rwt-card`)

**Purpose:** Service teaser / news card.
**Modifiers:** `--featured` (large, hover lift), `--compact` (news grid), `--media-top` (image on top), `--ink` (dark surface).

**HTML (basic):**

```html
<article class="rwt-card rwt-card--media-top" data-component="card">
  <div class="rwt-card__media">
    <img src="images/sections/iot.png" alt="IoT control room" loading="lazy" />
  </div>
  <div class="rwt-card__body">
    <span class="rwt-card__eyebrow">IoT</span>
    <h3 class="rwt-card__title">Connected devices, end to end</h3>
    <p class="rwt-card__lede">From sensor to cloud, we design IoT hardware and firmware that survives the field.</p>
    <a class="rwt-card__link" href="services.html#iot">
      Read more
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  </div>
</article>
```

**HTML (featured — used for hero sub-cards):**

```html
<article class="rwt-card rwt-card--featured rwt-card--ink" data-component="card-featured">
  <span class="rwt-card__kicker">01</span>
  <h3 class="rwt-card__title">Smart Control Systems</h3>
  <p>PLC, SCADA, edge controllers — engineered for industrial-grade reliability.</p>
  <a class="rwt-card__cta" href="services.html#smart-control">Explore</a>
</article>
```

---

## 5. Input (`rwt-input`)

**Purpose:** Form field — single line.
**Anatomy:** `.rwt-input__label`, `.rwt-input__field`, `.rwt-input__hint`, `.rwt-input__error`.

**HTML:**

```html
<label class="rwt-input">
  <span class="rwt-input__label">Your name</span>
  <input class="rwt-input__field" type="text" name="name" required autocomplete="name" />
  <span class="rwt-input__hint">We will only use this to reply to your message.</span>
</label>
```

---

## 6. Textarea (`rwt-textarea`)

**HTML:**

```html
<label class="rwt-textarea">
  <span class="rwt-textarea__label">Message</span>
  <textarea class="rwt-textarea__field" name="message" rows="6" required></textarea>
  <span class="rwt-textarea__hint rwt-input__hint">Tell us about your project (max 2000 chars).</span>
</label>
```

---

## 7. Hero (editorial) (`rwt-hero`)

**Purpose:** Buick-style full-bleed hero with kinetic display type.
**Anatomy:** `.rwt-hero` (full viewport, dark image overlay), `.rwt-hero__eyebrow`, `.rwt-hero__title` (with split-text animation), `.rwt-hero__lede`, `.rwt-hero__cta-row`, `.rwt-hero__mascot` (animated SVG), `.rwt-hero__scroll-hint`.

**HTML:**

```html
<section class="rwt-hero" data-component="hero">
  <div class="rwt-hero__media">
    <img src="images/hero/home.png" alt="" />
    <div class="rwt-hero__overlay"></div>
  </div>
  <div class="rwt-hero__inner">
    <span class="rwt-hero__eyebrow">Raywise Technologies · Hong Kong</span>
    <h1 class="rwt-hero__title" data-split-text>
      Engineering the unseen layer of industry.
    </h1>
    <p class="rwt-hero__lede">
      Smart control, industrial automation, and connected devices — designed in Hong Kong,
      deployed across the world.
    </p>
    <div class="rwt-hero__cta-row">
      <a class="rwt-button rwt-button--primary rwt-button--pill" href="services.html">Explore services</a>
      <a class="rwt-button rwt-button--ghost rwt-button--invert" href="contact.html">Talk to us →</a>
    </div>
  </div>
  <svg class="rwt-hero__mascot" data-mascot="idle" viewBox="0 0 200 200" aria-hidden="true">
    <use href="images/animals/fox.svg#root"/>
  </svg>
  <div class="rwt-hero__scroll-hint" aria-hidden="true">
    <span>Scroll</span>
    <span class="rwt-hero__scroll-line"></span>
  </div>
</section>
```

---

## 8. Marquee (`rwt-marquee`)

**Purpose:** Continuous horizontal ticker (logos, words, mascots).
**Anatomy:** `.rwt-marquee__track` (animated, duplicated content), `.rwt-marquee__item`.

**HTML:**

```html
<div class="rwt-marquee" data-component="marquee" aria-label="Trusted by partners">
  <div class="rwt-marquee__track">
    <span class="rwt-marquee__item">Smart Control</span>
    <span class="rwt-marquee__item">·</span>
    <span class="rwt-marquee__item">Industrial Automation</span>
    <span class="rwt-marquee__item">·</span>
    <span class="rwt-marquee__item">IoT Devices</span>
    <span class="rwt-marquee__item">·</span>
    <span class="rwt-marquee__item">Software Development</span>
    <!-- duplicate for seamless loop -->
    <span class="rwt-marquee__item" aria-hidden="true">Smart Control</span>
    <span class="rwt-marquee__item" aria-hidden="true">·</span>
    <span class="rwt-marquee__item" aria-hidden="true">Industrial Automation</span>
  </div>
</div>
```

---

## 9. Breadcrumbs (`rwt-breadcrumbs`)

**HTML:**

```html
<nav class="rwt-breadcrumbs" aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="services.html">Services</a></li>
    <li aria-current="page">Smart Control Systems</li>
  </ol>
</nav>
```

---

## 10. News card (`rwt-news-card`)

**Purpose:** Date + title + excerpt in a grid; opens news detail.
**Anatomy:** `.rwt-news-card__date` (mono), `.rwt-news-card__title`, `.rwt-news-card__excerpt`, `.rwt-news-card__tag`.

**HTML:**

```html
<article class="rwt-news-card" data-component="news-card">
  <time class="rwt-news-card__date" datetime="2026-09-12">2026 · 09 · 12</time>
  <h3 class="rwt-news-card__title">Raywise ships firmware v3.2 for SCADA controllers</h3>
  <p class="rwt-news-card__excerpt">
    A 40% reduction in cold-boot time, with optional Modbus Secure and an updated safety stack.
  </p>
  <span class="rwt-news-card__tag">Firmware</span>
  <a class="rwt-news-card__link" href="news/firmware-3-2.html" aria-label="Read full release notes"></a>
</article>
```

---

## 11. Contact form (`rwt-contact-form`)

**Purpose:** Long-form contact — name, email, company, topic select, message, consent.
**Anatomy:** Stack of inputs, textarea, checkbox consent, submit button.

**HTML:**

```html
<form class="rwt-contact-form" data-component="contact-form" novalidate>
  <div class="rwt-contact-form__row">
    <label class="rwt-input">
      <span class="rwt-input__label">Full name</span>
      <input class="rwt-input__field" type="text" name="name" required autocomplete="name" />
    </label>
    <label class="rwt-input">
      <span class="rwt-input__label">Work email</span>
      <input class="rwt-input__field" type="email" name="email" required autocomplete="email" />
    </label>
  </div>
  <label class="rwt-input">
    <span class="rwt-input__label">Company</span>
    <input class="rwt-input__field" type="text" name="company" autocomplete="organization" />
  </label>
  <label class="rwt-input">
    <span class="rwt-input__label">Topic</span>
    <select class="rwt-input__field" name="topic" required>
      <option value="">Select a topic</option>
      <option>Smart Control Systems</option>
      <option>Industrial Automation</option>
      <option>IoT Devices R&D</option>
      <option>Software Development</option>
      <option>Automation Equipment</option>
      <option>Electronic Components</option>
      <option>Tech Transfer</option>
      <option>Consulting</option>
      <option>Import / Export</option>
    </select>
  </label>
  <label class="rwt-textarea">
    <span class="rwt-textarea__label">How can we help?</span>
    <textarea class="rwt-textarea__field" name="message" rows="6" required></textarea>
  </label>
  <label class="rwt-contact-form__consent">
    <input type="checkbox" name="consent" required />
    <span>I agree to the <a href="privacy.html">Privacy Policy</a> and consent to being contacted.</span>
  </label>
  <button class="rwt-button rwt-button--primary rwt-button--pill" type="submit">Send message</button>
</form>
```

---

## 12. 404 panel (`rwt-not-found`)

**Purpose:** Friendly not-found page with mascot + quick links.
**Anatomy:** Big kinetic headline, mascot illustration, search input, link chips.

**HTML:**

```html
<section class="rwt-not-found" data-component="not-found">
  <div class="rwt-not-found__inner">
    <span class="rwt-not-found__code" aria-hidden="true">404</span>
    <h1 class="rwt-not-found__title" data-split-text>Wrong door — try the next one.</h1>
    <p class="rwt-not-found__lede">
      The page you are looking for has been moved, retired, or never existed.
    </p>
    <div class="rwt-not-found__mascot" aria-hidden="true">
      <svg data-mascot="idle" viewBox="0 0 200 200">
        <use href="images/animals/panda.svg#root"/>
      </svg>
    </div>
    <form class="rwt-not-found__search" role="search" action="/search">
      <input class="rwt-input__field" type="search" name="q" placeholder="Search the site…" />
      <button class="rwt-button rwt-button--primary" type="submit" aria-label="Search">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" fill="none"/><path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
    </form>
    <ul class="rwt-not-found__links">
      <li><a class="rwt-button rwt-button--ghost" href="/">Home</a></li>
      <li><a class="rwt-button rwt-button--ghost" href="services.html">Services</a></li>
      <li><a class="rwt-button rwt-button--ghost" href="contact.html">Contact</a></li>
    </ul>
  </div>
</section>
```

---

## 13. Section divider with mascot (`rwt-section-divider`)

**Purpose:** Visual break between dark/light sections, with a mascot accent.
**HTML:**

```html
<div class="rwt-section-divider" aria-hidden="true">
  <div class="rwt-section-divider__rule"></div>
  <svg class="rwt-section-divider__mascot" viewBox="0 0 80 80">
    <use href="images/animals/cat.svg#root"/>
  </svg>
  <div class="rwt-section-divider__rule"></div>
</div>
```

---

## 14. Stat block (`rwt-stat`)

**Purpose:** Big number with caption — used in "Why us" rail.
**Anatomy:** `.rwt-stat__value` (mono, display), `.rwt-stat__caption`, `.rwt-stat__delta`.

**HTML:**

```html
<div class="rwt-stat">
  <span class="rwt-stat__value">+120</span>
  <span class="rwt-stat__caption">Industrial deployments</span>
  <span class="rwt-stat__delta" data-trend="up">▲ since 2023</span>
</div>
```

---

## 15. App store badge (`rwt-store-badge`)

**Purpose:** Download CTA for App Store / Google Play.
**HTML:**

```html
<a class="rwt-store-badge" href="#">
  <img src="images/icons/app-store.svg" alt="Download on the App Store" />
</a>
<a class="rwt-store-badge" href="#">
  <img src="images/icons/google-play.svg" alt="Get it on Google Play" />
</a>
```

---

## 16. Tag / chip (`rwt-chip`)

**HTML:**

```html
<span class="rwt-chip rwt-chip--gold">Featured</span>
<span class="rwt-chip rwt-chip--coral">New</span>
<span class="rwt-chip">Documentation</span>
```

---

## 17. Testimonial (`rwt-testimonial`)

**HTML:**

```html
<figure class="rwt-testimonial">
  <blockquote class="rwt-testimonial__quote">
    "Raywise shipped a control upgrade in 8 weeks that two other vendors couldn't scope in a year."
  </blockquote>
  <figcaption class="rwt-testimonial__cite">
    <span class="rwt-testimonial__name">Operations Director</span>
    <span class="rwt-testimonial__org">European packaging group</span>
  </figcaption>
</figure>
```

---

## 18. FAQ item (`rwt-faq`)

**HTML:**

```html
<details class="rwt-faq" name="faq">
  <summary class="rwt-faq__question">Which app stores do you publish to?</summary>
  <div class="rwt-faq__answer">
    <p>We publish on Apple's App Store and Google Play under the Raywise publisher account.</p>
  </div>
</details>
```

---

## 19. Toast / status banner (`rwt-toast`)

**HTML:**

```html
<div class="rwt-toast rwt-toast--success" role="status" aria-live="polite">
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
  <span>Message sent. We will reply within one business day.</span>
</div>
```

---

## 20. Skip link & accessibility helpers

- `.rwt-skip-link` — visible on focus, jumps to `#main`.
- `.rwt-sr-only` — screen-reader only.
- `data-component="…"` — analytics / motion hook.

```html
<a class="rwt-skip-link" href="#main">Skip to content</a>
<main id="main" tabindex="-1">…</main>
```
