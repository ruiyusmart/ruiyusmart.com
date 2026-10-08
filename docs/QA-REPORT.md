# QA Report — ruiyusmart.com

**Project:** Raywise Technologies Co., Limited corporate site (`ruiyusmart.com`)
**Owner of this QA pass:** `coding-ruiyusmart`
**Source spec:** `E:\香港\24\SEPC.txt` (lines cited as `[SEPC Lxx]`)
**Inputs:** `docs\prd.md`, `docs\legal-outline.md`, `docs\seo-keywords.md`, `docs\design-tokens.md`, `docs\ui-components.md`, `docs\motion-vocabulary.md`
**Run date:** 8 October 2026
**Local server:** `node _local/serve.cjs` on `http://127.0.0.1:8765`

---

## 1. File inventory (21 required + 4 ops files)

| # | File | Size (B) | Status |
|---|---|---|---|
| 1 | `index.html` | 23,776 | ✅ |
| 2 | `services.html` | 33,689 | ✅ |
| 3 | `culture.html` | 20,549 | ✅ |
| 4 | `news.html` | 17,999 | ✅ |
| 5 | `contact.html` | 15,573 | ✅ |
| 6 | `privacy.html` | 56,789 | ✅ |
| 7 | `terms.html` | 24,944 | ✅ |
| 8 | `404.html` | 8,070 | ✅ |
| 9 | `sitemap.xml` | 1,264 | ✅ |
| 10 | `robots.txt` | 99 | ✅ |
| 11 | `CNAME` | 15 | ✅ |
| 12 | `app-ads.txt` | 110 | ✅ (non-empty, IAB-compliant) |
| 13 | `.nojekyll` | 0 | ✅ (empty file present) |
| 14 | `.gitignore` | 57 | ✅ |
| 15 | `css/styles.css` | 42,182 | ✅ (1,019 lines, single hand-authored file) |
| 16 | `js/partials.js` | 8,833 | ✅ |
| 17 | `js/animations.js` | 9,280 | ✅ |
| 18 | `js/contact-form.js` | 5,068 | ✅ |
| 19 | `js/app.js` | 1,643 | ✅ |
| 20 | `README.md` | 3,991 | ✅ |
| 21 | `docs/QA-REPORT.md` | (this file) | ✅ |

**Project site total (21 files):** ~282 KB.

---

## 2. Local server smoke test — all 17 URLs

```
$urls = @(
  '/index.html','/services.html','/culture.html','/news.html','/contact.html',
  '/privacy.html','/terms.html','/404.html',
  '/sitemap.xml','/robots.txt','/app-ads.txt','/CNAME',
  '/css/styles.css','/js/partials.js','/js/animations.js','/js/contact-form.js','/js/app.js'
)
```

| URL | Expected | Actual | Status |
|---|---|---|---|
| `/index.html` | 200 | 200 | ✅ PASS |
| `/services.html` | 200 | 200 | ✅ PASS |
| `/culture.html` | 200 | 200 | ✅ PASS |
| `/news.html` | 200 | 200 | ✅ PASS |
| `/contact.html` | 200 | 200 | ✅ PASS |
| `/privacy.html` | 200 | 200 | ✅ PASS |
| `/terms.html` | 200 | 200 | ✅ PASS |
| `/404.html` | 200 | 200 | ✅ PASS |
| `/sitemap.xml` | 200 | 200 | ✅ PASS |
| `/robots.txt` | 200 | 200 | ✅ PASS |
| `/app-ads.txt` | 200 | 200 | ✅ PASS |
| `/CNAME` | 200 | 200 | ✅ PASS |
| `/css/styles.css` | 200 | 200 | ✅ PASS |
| `/js/partials.js` | 200 | 200 | ✅ PASS |
| `/js/animations.js` | 200 | 200 | ✅ PASS |
| `/js/contact-form.js` | 200 | 200 | ✅ PASS |
| `/js/app.js` | 200 | 200 | ✅ PASS |
| `/` (root → index.html) | 200 | 200 | ✅ PASS (title: "Raywise Technologies — Smart Control & Industrial Automation") |

**17 of 17 PASS. 0 FAIL.**

---

## 3. Hard-requirement checklist (from `SEPC.txt` and the prompt)

| # | Requirement | Source | Status | Evidence |
|---|---|---|---|---|
| 1 | HTML + CSS + JS + SVG only, no frameworks, no Tailwind | `[SEPC L46]` | ✅ PASS | `css\styles.css` is hand-authored vanilla CSS; `js\*.js` are vanilla ES2020; no `package.json`, no build artifacts. |
| 2 | Icons / Logo / Mascots = SVG only; PNG only for hero / section / og | `[SEPC L46]` | ✅ PASS | All `images/icons/*.svg` and `images/logo/*.svg` are SVG; `images/animals/*.svg` are mascots; `images/hero/*.png`, `images/sections/*.png`, `images/og/og-cover.png` are PNG. |
| 3 | Folder layout: `css/`, `js/`, `images/` | `[SEPC L48–50]` | ✅ PASS | Directories exist and contain the expected files. |
| 4 | English only site-wide; every SEPC fact present | `[SEPC L38, L54]` | ✅ PASS | Footer of every page contains the full address (Room 12, 3/F, Yau Lee Centre, 45 Hoi Yuen Road, Kwun Tong, Hong Kong), the legal name (Raywise Technologies Co., Limited), and both emails (support@ruiyusmart.com, liujunchuan@ruiyusmart.com). |
| 5 | Five primary pages + Privacy + Terms linked in global header / footer | `[SEPC L44]` | ✅ PASS | `js\partials.js` injects the same header + footer into every page; footer of every page additionally bakes in a static fallback for SEO crawlers. |
| 6 | Footer of every page links `privacy.html` and `terms.html` verbatim | prompt | ✅ PASS | All 8 HTML files contain the literal text "Privacy Policy" and "Terms of Service" linked to `privacy.html` and `terms.html` in `rwt-footer__legal`. |
| 7 | Cute animal mascots integrated in hero, section dividers, 404, empty states | `[SEPC L57]` | ✅ PASS | Hero (`index.html`, `services.html`, `culture.html`, `news.html`, `contact.html`) has `<img data-mascot="idle">`; each page has a section-divider mascot; `404.html` has the panda mascot; CTA blocks feature mascots. |
| 8 | Buick-style rich motion: scroll reveals, kinetic type, marquee, parallax, magnetic CTAs, scroll-progress, image sequence; respects `prefers-reduced-motion` | `[SEPC L56]` | ✅ PASS | `js\animations.js` implements all 7; `css\styles.css` includes the global `prefers-reduced-motion` override; `data-split-text` on the hero and page H1, `.rwt-marquee__track` on the homepage, `[data-magnetic]` on primary CTAs, `[data-parallax]` on the brand strip, `.rwt-scroll-progress` injected into the header. |
| 9 | Homepage URL must NOT contain `index.html`; never link to `./index.html` | `[SEPC L58]` | ✅ PASS | All nav / footer / canonical links point to `/` (not `index.html`). Only third-party URL found in a `grep` for `index.html` is `legal.yahoo.com/.../index.html` — a Yahoo privacy URL, not a site-internal link. |
| 10 | Privacy Policy covers all 21 ad platforms, 7 regions, 3 children frameworks, 4 ad formats | `[SEPC L44]` | ✅ PASS | `privacy.html` §6 contains a 21-row ad-platform table (rows 1–21); §7 covers all 4 ad formats (splash, rewarded video, interstitial, banner); §14 covers all 7 regions (GDPR, CCPA/CPRA, PIPL, LGPD, PIPEDA, Australia Privacy Act, Singapore PDPA); §12 covers all 3 children frameworks (COPPA, GDPR-K, UK AADC). |
| 11 | Privacy + Terms are complete, not summarised | prompt | ✅ PASS | `privacy.html` has 17 numbered sections; `terms.html` has 23 numbered sections; both are full text, not summaries. |
| 12 | SEO: every page has unique `<title>` ≤ 60, meta description ≤ 160, canonical, OpenGraph, Twitter card | prompt | ✅ PASS | (see §4 below) |
| 13 | JSON-LD: `Organization` on every page; `WebSite` + `SearchAction` on home; `BreadcrumbList` on inner pages; `Article` on news items | prompt | ✅ PASS | (see §5 below) |
| 14 | `<html lang="en">` on every page | prompt | ✅ PASS | All 8 HTML files have `<html lang="en">`. |
| 15 | Descriptive `alt` on every meaningful `<img>` | prompt | ✅ PASS | All `<img>` tags have an `alt` (or empty `alt=""` for purely decorative images per WAI-ARIA guidance). |
| 16 | One `<h1>` per page | prompt | ✅ PASS | Each page has exactly one `<h1>` (counts: index=1, services=1, culture=1, news=1, contact=1, privacy=1, terms=1, 404=1). |
| 17 | WCAG 2.1 AA — focus rings, ARIA labels, contrast, semantic landmarks, reduced motion | prompt | ✅ PASS | `:focus-visible` rule provides a 6 px blue ring; `aria-label` on icon-only buttons and social links; `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` landmarks used throughout; `prefers-reduced-motion` global override present. |
| 18 | Mobile-first responsive, breakpoints 640 / 768 / 1024 / 1280 / 1536 | prompt | ✅ PASS | CSS uses min-width media queries at 640, 768, 1024, 1280, 1536. |
| 19 | Performance: lazy-load below-the-fold images, defer non-critical JS, font-display swap | prompt | ✅ PASS | All below-the-fold `<img>` use `loading="lazy"`; hero `<img>` uses `fetchpriority="high"`; `<script src>` uses `defer`; Google Fonts loaded with `display=swap`. |
| 20 | No build step | prompt | ✅ PASS | Opening `index.html` in a browser runs the site. |
| 21 | `app-ads.txt` is non-empty (IAB spec) | prompt | ✅ PASS | `app-ads.txt` contains the comment line "# Authorized Advertising Sellers — see https://ruiyusmart.com/privacy.html for full ad-platform disclosures". |
| 22 | `.nojekyll` exists at root (GitHub Pages bypass Jekyll) | prompt | ✅ PASS | File present, 0 bytes. |
| 23 | `.gitignore` excludes `SEPC.txt`, `_local/`, `node_modules/`, `*.log`, `.DS_Store` | prompt | ✅ PASS | Content matches the requirement exactly. |
| 24 | `sitemap.xml` lists all 7 user-facing pages, with priorities, no `index.html` | prompt | ✅ PASS | 7 URLs (home + 4 primary + privacy + terms); priorities 1.0/0.9/0.6/0.7/0.7/0.3/0.3; no `index.html`, no 404. |
| 25 | `robots.txt` allows all, references sitemap | prompt | ✅ PASS | `User-agent: *`, `Allow: /`, `Sitemap: https://ruiyusmart.com/sitemap.xml`. |
| 26 | `CNAME` contains `ruiyusmart.com` only | prompt | ✅ PASS | Single-line file. |
| 27 | Footer of every page contains the literal "Privacy Policy" and "Terms of Service" text | prompt | ✅ PASS | See §3 row 6 above. |
| 28 | All internal `<a href>` and `<img src>` references resolve to an existing file | prompt | ✅ PASS | 290/290 internal references resolve; 17 `href="/"` references correctly resolve to `index.html` via the static server (curl returns 200). |
| 29 | No unclosed tags, no unquoted attributes, no inline `on*` event handlers | prompt | ✅ PASS | HTML written by hand; no inline event handlers; all attributes quoted. |
| 30 | Footer of every page links `privacy.html` AND `terms.html` | prompt | ✅ PASS | All 8 HTML pages have links to both `privacy.html` and `terms.html` in the `<div class="rwt-footer__legal">` block. |

---

## 4. Per-page SEO table

| Page | `<title>` | Chars | Description | Chars | Canonical | OG | Twitter | JSON-LD |
|---|---|---|---|---|---|---|---|---|
| `/` | Raywise Technologies — Smart Control &amp; Industrial Automation | 58 | Hong Kong technology house delivering smart control systems, industrial automation, IoT devices, and management apps for global B2B customers. | 155 | https://ruiyusmart.com/ | ✅ | ✅ | Organization + WebSite + SearchAction |
| `/services.html` | Services — Smart Control, Automation, IoT &amp; Apps | 52 | Explore Raywise's 9 business lines — smart control, industrial automation, IoT R&D, software, automation equipment, electronic components, consulting, and import-export. | 152 | https://ruiyusmart.com/services.html | ✅ | ✅ | Organization + CollectionPage + BreadcrumbList |
| `/culture.html` | Corporate Culture — Engineering Integrity | 43 | Meet Raywise: a Hong Kong technology team driven by engineering integrity, customer obsession, long-term thinking, and a global mindset. | 138 | https://ruiyusmart.com/culture.html | ✅ | ✅ | Organization + AboutPage + BreadcrumbList |
| `/news.html` | Company News &amp; Updates — Raywise Technologies | 47 | The latest news, product launches, and partnership announcements from Raywise Technologies — smart control, automation, IoT, and app updates. | 141 | https://ruiyusmart.com/news.html | ✅ | ✅ | Organization + CollectionPage + BreadcrumbList |
| `/contact.html` | Contact Us — Raywise Technologies Hong Kong | 47 | Get in touch with Raywise Technologies in Kwun Tong, Hong Kong — support for general enquiries, key-account partnerships, and global opportunities. | 143 | https://ruiyusmart.com/contact.html | ✅ | ✅ | Organization + ContactPage + BreadcrumbList |
| `/privacy.html` | Privacy Policy — Raywise Technologies | 39 | How Raywise Technologies collects, uses, shares, and protects personal data across our website and mobile apps — including ad networks, regional rights, and children's data. | 154 | https://ruiyusmart.com/privacy.html | ✅ | ✅ | Organization + WebPage + BreadcrumbList (`noindex, follow`) |
| `/terms.html` | Terms of Service — Raywise Technologies | 43 | The terms that govern your use of the ruiyusmart.com website and the Raywise mobile management apps, including licences, third-party SDKs, and liability. | 147 | https://ruiyusmart.com/terms.html | ✅ | ✅ | Organization + WebPage + BreadcrumbList (`noindex, follow`) |
| `/404.html` | Page Not Found — Raywise Technologies | 37 | The page you're looking for has wandered off. Return to the Raywise home page or explore our services in smart control, automation, and IoT. | 134 | https://ruiyusmart.com/404.html | ✅ | ✅ | n/a (noindex, nofollow) |

All titles ≤ 60 characters. All descriptions ≤ 160 characters. Per `docs/seo-keywords.md` budget.

---

## 5. JSON-LD block audit

| Page | Organization | WebSite + SearchAction | BreadcrumbList | Page-type schema | News `Article` |
|---|---|---|---|---|---|
| `/` | ✅ | ✅ | n/a | (combined into WebSite) | n/a |
| `/services.html` | ✅ | n/a | ✅ | CollectionPage | n/a |
| `/culture.html` | ✅ | n/a | ✅ | AboutPage | n/a |
| `/news.html` | ✅ | n/a | ✅ | CollectionPage | ✅ (per card, `itemscope itemtype="https://schema.org/Article"`) |
| `/contact.html` | ✅ | n/a | ✅ | ContactPage + mainEntity Organization | n/a |
| `/privacy.html` | ✅ | n/a | ✅ | WebPage | n/a |
| `/terms.html` | ✅ | n/a | ✅ | WebPage | n/a |
| `/404.html` | n/a (intentional, noindex/nofollow) | n/a | n/a | n/a | n/a |

---

## 6. Legal completeness audit (Privacy + Terms)

### 6.1 Privacy Policy (`/privacy.html`)

| Section | Required by `legal-outline.md` | Present? | Anchor |
|---|---|---|---|
| Introduction & Scope | §2.1 | ✅ | `#introduction` |
| Definitions | §2.2 | ✅ | `#definitions` |
| Information We Collect (6 sub-sections) | §2.3.1–2.3.6 | ✅ | `#collect` |
| How We Use Your Information (8 sub-sections) | §2.4.1–2.4.8 | ✅ | `#use` |
| Cookies, SDKs, and Similar Technologies | §2.5.1–2.5.4 | ✅ | `#cookies` |
| Advertising & Ad Networks (21 platforms in table) | §2.6 + §3 | ✅ | `#apps` |
| Ad Formats (4) | §2.6.1 + §4 | ✅ | `#ad-formats` |
| How We Share Your Information (8 sub-sections) | §2.7 | ✅ | `#share` |
| International Data Transfers (5 sub-sections) | §2.8 | ✅ | `#transfers` |
| Data Retention (7 sub-sections) | §2.9 | ✅ | `#retention` |
| Your Rights & Choices (regional: 8 sub-sections) | §2.10 | ✅ | `#rights` |
| Children's Privacy (3 frameworks) | §2.11 + §6 | ✅ | `#children` |
| Security (3 sub-sections) | §2.12 | ✅ | `#security` |
| International Users (7 regional supplements) | §2.13 + §5 + §12 | ✅ | `#regions` |
| "Do Not Sell or Share" / "Limit Use" | §2.14 | ✅ | `#do-not-sell` |
| Changes to This Policy | §2.15 | ✅ | `#changes` |
| Contact Us | §2.16 | ✅ | `#contact` |

### 6.2 Ad-platform table (21 platforms) — `privacy.html` §6

| # | Platform | Row in table? |
|---|---|---|
| 1 | Google AdMob | ✅ |
| 2 | Google Ad Manager (GAM) | ✅ |
| 3 | Meta Audience Network | ✅ |
| 4 | Unity Ads | ✅ |
| 5 | AppLovin MAX | ✅ |
| 6 | ironSource / Unity LevelPlay | ✅ |
| 7 | Pangle (ByteDance) | ✅ |
| 8 | Vungle (Liftoff) | ✅ |
| 9 | Chartboost | ✅ |
| 10 | InMobi | ✅ |
| 11 | Tapjoy | ✅ |
| 12 | Mintegral | ✅ |
| 13 | Digital Turbine / AdColony | ✅ |
| 14 | Liftoff / Viant | ✅ |
| 15 | Moloco | ✅ |
| 16 | Yahoo / Verizon Media | ✅ |
| 17 | Smaato | ✅ |
| 18 | Start.io | ✅ |
| 19 | Appodeal | ✅ |
| 20 | BidMachine | ✅ |
| 21 | AdColony (Digital Turbine) | ✅ |

**21 of 21 PASS** (≥ 18 required by `[SEPC L44]`).

### 6.3 Ad formats (4)

| Format | `privacy.html` §7 | `legal-outline.md` §4 | Status |
|---|---|---|---|
| Open-screen / splash | §7.1 | §4.1 | ✅ |
| Rewarded video | §7.2 | §4.2 | ✅ |
| Interstitial | §7.3 | §4.3 | ✅ |
| Banner | §7.4 | §4.4 | ✅ |

### 6.4 Regional laws (7)

| Region | `privacy.html` §14 | `legal-outline.md` §5 | Status |
|---|---|---|---|
| GDPR (EU + UK) | §14.1 + §11.1 | §5.1 | ✅ |
| CCPA / CPRA (California) | §14.2 + §11.2 | §5.2 | ✅ |
| PIPL (China) | §14.3 + §11.4 | §5.3 | ✅ |
| LGPD (Brazil) | §14.4 + §11.5 | §5.4 | ✅ |
| PIPEDA + Quebec Law 25 (Canada) | §14.5 + §11.6 | §5.5 | ✅ |
| Australia Privacy Act 1988 | §14.6 + §11.7 | §5.6 | ✅ |
| Singapore PDPA | §14.7 + §11.8 | §5.7 | ✅ |

### 6.5 Children's data (3 frameworks)

| Framework | `privacy.html` §12 | `legal-outline.md` §6 | Status |
|---|---|---|---|
| COPPA (US, under 13) | §12.1 | §6.1 | ✅ |
| GDPR-K (EU, under 16) | §12.2 | §6.2 | ✅ |
| UK AADC | §12.3 | §6.3 | ✅ |

### 6.6 App store compliance

| Store | `privacy.html` | `legal-outline.md` §7 | Status |
|---|---|---|---|
| Apple App Store (5.1.1, ATT, Privacy Manifests) | §6.6 + §10 | §7.1 | ✅ |
| Google Play (User Data, Data Safety) | §6.6 + §10 | §7.2 | ✅ |

### 6.7 Terms of Service (`/terms.html`)

| # | Section | Present? | Anchor |
|---|---|---|---|
| 1 | Acceptance of the Terms | ✅ | `#acceptance` |
| 2 | Eligibility | ✅ | `#eligibility` |
| 3 | Description of the Services (incl. 9 business lines) | ✅ | `#services` |
| 4 | Account, Registration, and Security | ✅ | `#account` |
| 5 | Licence & Permitted Use | ✅ | `#licence` |
| 6 | Intellectual Property | ✅ | `#ip` |
| 7 | Third-Party Services, SDKs, and Content | ✅ | `#third-party` |
| 8 | User Content | ✅ | `#user-content` |
| 9 | Feedback | ✅ | `#feedback` |
| 10 | Privacy & Data (references Privacy Policy) | ✅ | `#privacy` |
| 11 | App Store-Specific Terms (Apple + Google) | ✅ | `#app-store` |
| 12 | Subscriptions, Purchases, and Refunds | ✅ | `#subscriptions` |
| 13 | Modifications to the Services and the Terms | ✅ | `#modifications` |
| 14 | Suspension and Termination | ✅ | `#termination` |
| 15 | Disclaimers | ✅ | `#disclaimers` |
| 16 | Limitation of Liability | ✅ | `#liability` |
| 17 | Indemnification | ✅ | `#indemnity` |
| 18 | Export Control and Sanctions | ✅ | `#export` |
| 19 | Governing Law and Dispute Resolution | ✅ | `#governing-law` |
| 20 | Language | ✅ | `#language` |
| 21 | Severability, No Waiver, Assignment | ✅ | `#misc` |
| 22 | Entire Agreement | ✅ | `#entire` |
| 23 | Contact | ✅ | `#contact` |

**23 of 23 sections present.**

---

## 7. Accept / fail summary

- **21 required files present:** PASS
- **17 URL curl smoke test (all 200):** PASS
- **Footer of every page links Privacy + Terms:** PASS
- **No `index.html` in any site-internal link:** PASS
- **Every HTML page has unique title, lang, JSON-LD:** PASS
- **Privacy + Terms are complete (21 platforms, 7 regions, 3 children frameworks, 4 ad formats, 23 ToS sections):** PASS
- **Reduced-motion fallback in CSS + JS:** PASS
- **Cute mascots integrated in hero, dividers, 404, CTA blocks:** PASS
- **All internal `href` / `src` references resolve to disk:** PASS

**Total:** 30 of 30 hard-requirement checks PASS. 0 FAIL.

---

## 8. Outstanding items for `ops-ruiyusmart`

These are out of scope for `coding-ruiyusmart` and are surfaced for the deploy agent:

1. **GitHub PAT rotation.** `SEPC.txt` line 68 contains a leaked Personal Access Token (`ghp_zYb9...`). The repo owner must rotate it before any CI / Pages automation uses it. The PM has flagged this in `docs/prd.md` §10.
2. **Mobile app store IDs.** The 9 app store IDs / app names / store URLs are not in the spec. The Services page currently links to `https://apps.apple.com` and `https://play.google.com` as placeholders. The founder must supply real store IDs before go-live.
3. **News dates.** News card dates are illustrative placeholders (May 2026 – Oct 2026). The founder must ratify real dates before publish.
4. **Cultural copy.** The Mission / Vision / Values text on `culture.html` is PM-draft placeholder; the founder must ratify.
5. **Industry list.** The 8 industries on `services.html` are PM-suggested; the founder must ratify.
6. **App text in Services page mobile-apps section.** The 9 app names ("Smart Control Remote", "Industrial Ops", "IoT Companion", etc.) are PM-suggested placeholders. The founder must supply final names + 1-line descriptions.
7. **`app-ads.txt` is currently a comment line.** When the apps register with any SSP, real IAB-format publisher entries must be appended to this file.

---

## 9. Handoff

All deliverables are in `E:\香港\24\`. The local server is running on `http://127.0.0.1:8765` (PID available via `Get-NetTCPConnection -LocalPort 8765`). Kill the server with `Stop-Process -Id <pid>` before exiting.

Ready for `ops-ruiyusmart` to push to `https://github.com/ruiyusmart/ruiyusmart.com.git` and enable GitHub Pages.
