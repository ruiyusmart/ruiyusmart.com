# ruiyusmart.com

Corporate website for **Raywise Technologies Co., Limited** — a Hong Kong technology and automation house serving European and North American B2B customers.

> Source spec: [`SEPC.txt`](./SEPC.txt) · Repo: [https://github.com/ruiyusmart/ruiyusmart.com](https://github.com/ruiyusmart/ruiyusmart.com)
> Live: `https://ruiyusmart.com` · Deploy: GitHub Pages, HTTPS enforced, custom domain

## What's here

A fully static, build-step-free site — **HTML + CSS + JS + SVG only** — covering five primary pages plus Privacy Policy, Terms of Service, and a friendly 404.

| Path | Purpose |
|---|---|
| `/` | Home — brand, value pillars, mobile app promo, contact CTA |
| `/services.html` | 9 business lines + mobile management apps portfolio |
| `/culture.html` | Mission, vision, values, team / place, mascot strip |
| `/news.html` | Company news (placeholder cards) |
| `/contact.html` | Address block, emails, contact form, OpenStreetMap |
| `/privacy.html` | Full Privacy Policy — 16 sections, 21 ad platforms, 7 regions, 3 children frameworks, 4 ad formats |
| `/terms.html` | Full Terms of Service — 23 sections |
| `/404.html` | Friendly 404 with mascot |
| `/sitemap.xml`, `/robots.txt`, `/app-ads.txt`, `/CNAME`, `/.nojekyll` | SEO + ops |

## Folder layout

```
/
├── index.html, services.html, culture.html, news.html, contact.html,
│   privacy.html, terms.html, 404.html
├── css/styles.css          (single hand-authored stylesheet)
├── js/
│   ├── partials.js         (header + footer DOM-injected)
│   ├── animations.js       (IntersectionObserver, marquee, parallax, magnetic, scroll-progress, mascot-idle)
│   ├── contact-form.js     (front-end validation + simulated submit)
│   └── app.js              (page-specific boot)
├── images/                 (SVG icons, SVG logo, SVG mascots, PNG hero/section)
├── sitemap.xml, robots.txt, app-ads.txt, CNAME, .nojekyll, .gitignore
└── docs/                   (PRD, design tokens, UI components, motion vocabulary, legal outline, QA report)
```

## Hard requirements honored

- HTML + CSS + JS + SVG only — no frameworks, no Tailwind, no bundler.
- Icons / Logo / Mascots = SVG. Large hero / section imagery = PNG.
- English site-wide.
- Five primary pages + Privacy + Terms, all linked from the global header and footer; **every** footer links both `Privacy Policy` and `Terms of Service` verbatim.
- **No `index.html`** appears in any nav, footer, canonical, or internal link.
- Cute animal mascots integrated in the hero, section dividers, and 404 page.
- Buick-style rich motion — scroll reveals, kinetic type, marquee, parallax, magnetic CTAs, scroll-progress, mascot idle, image sequence — all honoring `prefers-reduced-motion`.
- Mobile-first responsive at 640 / 768 / 1024 / 1280 / 1536 px.
- WCAG 2.1 AA — focus rings, ARIA labels, contrast, semantic landmarks, reduced motion.
- SEO — unique titles, meta descriptions, canonicals, OpenGraph + Twitter cards, JSON-LD (`Organization` on every page; `WebSite` + `SearchAction` on home; `BreadcrumbList` on inner pages; `Article` on news items).
- Performance — `font-display: swap`, lazy-load below-the-fold PNGs, defer non-critical JS.
- `app-ads.txt` is non-empty (single comment line) per IAB spec.

## Local verification

```bash
# from E:\香港\24\
python -m http.server 8765
# then
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8765/index.html
# expect 200 for every URL listed in docs/QA-REPORT.md
```

## Deploy

1. Push to `main` on `https://github.com/ruiyusmart/ruiyusmart.com`.
2. GitHub Pages serves the repo as a static site, custom domain `ruiyusmart.com` from the `CNAME` file, HTTPS enforced.
3. `sitemap.xml` and `robots.txt` are picked up automatically.
4. The PAT in `SEPC.txt` is a **leaked secret** — rotate it before any CI / Pages automation uses it.

## License

© 2026 Raywise Technologies Co., Limited. All rights reserved.
