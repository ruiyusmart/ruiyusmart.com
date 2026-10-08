# PRD — ruiyusmart.com Corporate Website

**Source spec:** `E:\香港\24\SEPC.txt` (lines cited inline as `[SEPC Lxx]`)
**Audience:** European / North American (English-only)
**Owner:** `pm-ruiyusmart` · **UI:** `ui-ruiyusmart` · **Code:** `coding-ruiyusmart` · **Ops:** `ops-ruiyusmart`
**Repo:** `https://github.com/ruiyusmart/ruiyusmart.com.git`
**Live domain:** `https://ruiyusmart.com` (custom domain, HTTPS enforced, GitHub Pages)

---

## 1. Goals & Non-Goals

### Goals
- Present Raywise Technologies Co., Limited to a Western B2B audience as a credible Hong Kong technology & automation house. `[SEPC L4, L38–40]`
- Communicate the 9 business lines (services + mobile management apps) under a single Services narrative. `[SEPC L40, L42]`
- Be discoverable on Google Search for English keywords across the listed service areas. `[SEPC L52]`
- Publish a Privacy Policy and Terms of Service that are complete (not summarised) and cover every ad platform, regional law, age-protection framework, and app-store rule the apps touch. `[SEPC L44]`
- Look-and-feel: rich, premium, animated (Buick.com-style), accented with cute animal mascots. `[SEPC L56–57]`
- Mobile management apps are an integrated part of the Services page, **not** a separate page. `[SEPC L40, L44]`

### Non-Goals
- No Chinese language anywhere on the site. `[SEPC L38, L54]`
- No backend, no CMS, no SSR — pure static HTML/CSS/JS/SVG/PNG, deployed to GitHub Pages. `[SEPC L46–50, L71]`
- No placeholder content, no "Coming soon" pages, no Lorem ipsum.
- No ad-tech or analytics tags embedded in the **public website** (ads live in the apps only).

---

## 2. Company Facts (verbatim, do not omit any)

| Field | Value | SEPC line |
|---|---|---|
| Legal name | **Raywise Technologies Co., Limited** | L4 |
| Office address | **Room 12, 3/F, Yau Lee Centre, 45 Hoi Yuen Road, Kwun Tong, Hong Kong** | L2 |
| Website | **ruiyusmart.com** | L8 |
| Support email | **support@ruiyusmart.com** | L16 |
| Key-account email | **liujunchuan@ruiyusmart.com** | L23 |
| Distribution | Google Play + Apple App Store | L42, L44 |
| Repo | `https://github.com/ruiyusmart/ruiyusmart.com.git` | L64 |

> **Security note (PM-issued, blocks `ops-ruiyusmart`):** The PAT on `SEPC.txt` line 68 is leaked and must be **rotated by the repo owner before** any CI / Pages deploy that uses it. The PM does not echo the token into any document under `docs/`; `ops-ruiyusmart` should read it from a local secret, not from the repo. `[SEPC L68]`

### 2.1 9 Business Lines (English rendering, mapped to SEPC L42)

| # | English (Services page) | SEPC L42 (zh) |
|---|---|---|
| 1 | Smart Control Systems | 智能控制系統 |
| 2 | Industrial Automation Products | 工業自動化產品 |
| 3 | IoT Device R&D & Technical Services | 物聯網設備研發與技術服務 |
| 4 | Software Development | 軟件開發 |
| 5 | Automation Equipment Sales | 自動化設備銷售 |
| 6 | Electronic Components Sales | 電子元器件銷售 |
| 7 | Technology Transfer & Consulting | 技術轉讓、技術諮詢 |
| 8 | Business Information Consulting | 商務信息諮詢 |
| 9 | Import & Export of Goods and Technology | 貨物及技術進出口業務 |

---

## 3. Sitemap

| URL | File | Purpose | Linked from footer? |
|---|---|---|---|
| `/` | `index.html` (default-served; never linked as `index.html`) | Home / brand entry | yes (Privacy, Terms) |
| `/services.html` | `services.html` | 9 business lines + mobile app portfolio | yes |
| `/culture.html` | `culture.html` | Corporate Culture | yes |
| `/news.html` | `news.html` | Company News | yes |
| `/contact.html` | `contact.html` | Contact Us (HK address + 2 emails) | yes |
| `/privacy.html` | `privacy.html` | Privacy Policy (full) | yes |
| `/terms.html` | `terms.html` | Terms of Service (full) | yes |
| `/404.html` | `404.html` | Friendly not-found | linked from error response only |
| `/app-ads.txt` | `app-ads.txt` | Empty file, app-store supply-chain | n/a |
| `/sitemap.xml` | `sitemap.xml` | SEO | referenced by `robots.txt` |
| `/robots.txt` | `robots.txt` | SEO | n/a |
| `/css/` | folder | All stylesheets | n/a |
| `/js/` | folder | All scripts | n/a |
| `/images/` | folder | SVG (icons, logo) + generated PNG (large visuals) | n/a |

Rules: `[SEPC L46–50, L58, L60]`
- The home page **must not** be linked as `index.html` from nav/footer/canonical — Pages default-serves it, so just link to `/`. `[SEPC L58]`
- `/app-ads.txt` exists at root; empty body is acceptable. `[SEPC L60]`

---

## 4. Per-Page Content Outline

### 4.1 Home (`/`)
**Hero** — Premium auto-style full-bleed animated banner; rotating copy: "Engineered intelligence for the connected world." / "From chips to systems — built in Hong Kong." Cute animal mascot waves from the lower-right corner. `[SEPC L56–57]`
**Brand strip** — 9 mini-icons, one per business line (SVG), with hover-reveal copy.
**Value pillars (3-up animated cards)** — "Smart Control", "Industrial Automation", "IoT & Software".
**Mobile Apps promo** — "Manage on the go." 2 store badges (Google Play + App Store) with deep-links to the relevant app store page; teaser copy that frames the apps as a natural extension of the Services narrative. `[SEPC L40, L42]`
**Global footprint** — "Headquartered in Hong Kong. Serving customers worldwide." with the HK address. `[SEPC L2]`
**CTA** — "Talk to us" → `/contact.html`; "Explore services" → `/services.html`.
**Footer** — nav (Home / Services / Culture / News / Contact) + **Privacy Policy** + **Terms of Service** + the 2 emails + HK address.

### 4.2 Services (`/services.html`)
This is the heaviest narrative page. Order:

1. **Intro strip** — One paragraph positioning Raywise as an integrated hardware + software + consulting house, plus the mobile app layer.
2. **Business line 1 — Smart Control Systems** `[SEPC L42]`
3. **Business line 2 — Industrial Automation Products** `[SEPC L42]`
4. **Business line 3 — IoT Device R&D & Technical Services** `[SEPC L42]`
5. **Business line 4 — Software Development** `[SEPC L42]`
6. **Business line 5 — Automation Equipment Sales** `[SEPC L42]`
7. **Business line 6 — Electronic Components Sales** `[SEPC L42]`
8. **Business line 7 — Technology Transfer & Consulting** `[SEPC L42]`
9. **Business line 8 — Business Information Consulting** `[SEPC L42]`
10. **Business line 9 — Import & Export of Goods and Technology** `[SEPC L42]`
11. **Mobile Management Apps** — Dedicated section that **integrates** the apps into the 9-line narrative (NOT a separate page). `[SEPC L40, L44]`
    - Headline: "Manage on the move — apps for every business line."
    - 2-column grid: each business line that has an app surfaces the matching store badge (Google Play + App Store) with one-line description. Apps cover the 9 lines from SEPC L42.
    - "Privacy and ad disclosures for our apps" → links to `/privacy.html#apps`.
12. **Industries served** — manufacturing, energy, logistics, smart buildings, consumer IoT (PM-assigned; refine with sales input).
13. **CTA** — "Need a custom solution?" → `/contact.html` (liujunchuan@ruiyusmart.com prefilled for key-account queries).
**Footer** — same 5 + Privacy + Terms.

### 4.3 Corporate Culture (`/culture.html`)
- **Mission** — succinct, product-led.
- **Vision** — "A connected, automated, sustainable industrial future." (PM-draft placeholder, to be ratified by founder.)
- **Values** — 4 cards: Engineering integrity, Customer obsession, Long-term thinking, Global mindset.
- **Team & place** — "We are based in Kwun Tong, Hong Kong — Asia's hardware heartland." (HK address from L2.)
- **Mascot strip** — 3-4 cute animal illustrations tying the culture to the brand voice. `[SEPC L57]`
**Footer** — same 5 + Privacy + Terms.

### 4.4 Company News (`/news.html`)
- **Index of news cards** — date · title · 1-line excerpt. PM seeds with 6 placeholder items (founder-approved titles, not invented facts): "Raywise establishes IoT R&D line", "First industrial automation shipment to EU customer", "New office in Kwun Tong", "Mobile app portfolio launched on Google Play & App Store", "Smart Control Systems product update", "Partnership with regional distributor".
- **No** invented dates or invented facts. Items must be ratified by the founder before publish.
**Footer** — same 5 + Privacy + Terms.

### 4.5 Contact Us (`/contact.html`)
- **Address block** — verbatim from SEPC L2: Room 12, 3/F, Yau Lee Centre, 45 Hoi Yuen Road, Kwun Tong, Hong Kong.
- **Email block** — support@ruiyusmart.com (general) and liujunchuan@ruiyusmart.com (key accounts) from L16, L23.
- **Static contact form** — no backend; uses `mailto:` fallback with the two addresses. (Form is a "form", not a "service" — no user data is stored.)
- **Map embed** — OpenStreetMap iframe keyed to the Kwun Tong address (Google Maps requires an API key; OSM keeps the site 100% static and free).
- **Hours** — "Mon–Fri, 09:00–18:00 HKT" (PM-default; founder to confirm).
**Footer** — same 5 + Privacy + Terms.

### 4.6 Privacy Policy (`/privacy.html`)
Outline only — see `docs/legal-outline.md` for the exhaustive section-by-section blueprint and per-platform data table. Must cover all 7 regional laws, all 3 children's-data frameworks, all 4 ad formats, and **≥ 18 ad platforms** in detail. `[SEPC L44]`

### 4.7 Terms of Service (`/terms.html`)
Outline only — see `docs/legal-outline.md`. Must include an "Apps & Third-Party SDKs" section that names the 9 business lines and references the Privacy Policy's ad-platform table. `[SEPC L44]`

### 4.8 404 (`/404.html`)
- Brand-consistent, animated, cute-mascot illustration.
- Friendly copy: "This page wandered off — like our mascot on a tea break."
- Two buttons: "Back to home" → `/`; "Explore services" → `/services.html`.
- Footer + Privacy + Terms link present.

---

## 5. Mobile Management Apps — Integration Spec

Mobile apps are **not** a separate page. They are a **sub-section of `/services.html`**, called out in the Home hero, and cross-linked from the Privacy Policy's "Apps" anchor. `[SEPC L40, L44]`

### 5.1 What the apps cover
Apps are published to Google Play and Apple App Store and **map 1-to-1 to the 9 business lines** in SEPC L42. Each app is a thin companion to a business line:

| Business line | App purpose (PM-default) |
|---|---|
| Smart Control Systems | Remote control & scheduling for installed systems |
| Industrial Automation Products | Equipment dashboards, alarms, logs |
| IoT Device R&D & Technical Services | Device onboarding, telemetry, firmware update |
| Software Development | Dev tools / utilities shipped alongside custom software |
| Automation Equipment Sales | Catalogue, quote requests, order tracking |
| Electronic Components Sales | Part search, stock, datasheets, BOM share |
| Technology Transfer & Consulting | Knowledge base, document vault, scheduling |
| Business Information Consulting | Report viewers, dashboards |
| Import & Export of Goods and Technology | Shipment tracking, customs docs, HS-code helper |

> **PM decision:** the actual app names/icons are not specified in SEPC. They are **founder input**. The PRD ships app-*slot* layouts, not invented app names. `ui-ruiyusmart` designs 9 slot cards with placeholder logos; `coding-ruiyusmart` renders them; founder replaces text + asset before go-live.

### 5.2 App ad & privacy behaviour
Apps monetise with **4 ad formats**: open-screen / splash, rewarded video, interstitial, banner. Apps use the ad platforms listed in `legal-outline.md §3` (≥ 18 platforms). All ad SDK behaviour is described in the Privacy Policy. `[SEPC L44]`

### 5.3 Store presence
- Each app page on Google Play and the App Store must be linked from the matching business-line card.
- Both store badges are placed in the Services mobile-apps section and the Home mobile-apps promo.
- Privacy Policy URL is mandatory on both store listings (Apple Guidelines 5.1.1; Google Play User Data Policy).

---

## 6. SEO Checklist (one-page summary)

`[SEPC L52]`

- **HTML5 semantic landmarks** on every page: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`.
- **One `<h1>` per page**; logical heading order; descriptive `<title>` and `<meta name="description">` per page (see `seo-keywords.md`).
- **No orphan pages** — every page is reachable from nav + footer + breadcrumb + `sitemap.xml`.
- **Canonical URL** set on every page (absolute, trailing-slash style or no-trailing — pick one sitewide).
- **OpenGraph + Twitter card** meta on every page; preview image per page (large PNG, generated by `ui-ruiyusmart`).
- **JSON-LD structured data**:
  - `Organization` on every page (site-wide, in footer or template).
  - `WebSite` with `SearchAction` on Home.
  - `BreadcrumbList` on every non-home page.
  - `ContactPage` on `/contact.html`; `AboutPage` on `/culture.html`; `CollectionPage` on `/services.html` and `/news.html`.
- **`<html lang="en">`** sitewide.
- **`robots.txt`** allows all, points to `sitemap.xml`, disallows nothing material.
- **`sitemap.xml`** lists all 5 primary pages + privacy + terms (no `index.html`, no 404). `Lastmod` set per page.
- **Image SEO** — every `<img>` has `alt`; SVGs have `<title>`/`<desc>`; PNGs are generated with descriptive filenames (`hero-home.png`, `services-iot.png`).
- **Performance** — inline critical CSS, defer non-critical JS, lazy-load below-the-fold images, prefer SVG over raster for icons.
- **HTTPS enforced** — HSTS preload, no mixed content. `[SEPC L71]`
- **Custom domain** — `ruiyusmart.com` apex + `www` redirect; Pages "Enforce HTTPS" on. `[SEPC L71]`
- **International** — `hreflang` not needed (English-only). `[SEPC L54]`
- **Accessibility (bonus, supports SEO)** — colour contrast ≥ 4.5:1, focus styles visible, prefers-reduced-motion respected for the rich animations.

---

## 7. Look-and-Feel Reference

`[SEPC L56–57]`

Premium, confident, **Buick.com-style** ("rich animation effects, not simplified/简易"):

- **Visual language** — wide hero with cinematic auto-playing video/animated SVG; layered parallax on scroll; long horizontal "feature reels" that auto-advance and pause on hover; oversized headline type; generous negative space; dark navy + warm metallic accent palette; subtle film-grain overlay.
- **Motion** — entrance animations on every section (staggered reveal), scroll-tied parallax, button-press feedback, 3D-tilt on hero cards, marquee strips for logos. Reduced-motion users (`prefers-reduced-motion: reduce`) get a static fallback.
- **Cute animal mascots** — 1-2 recurring mascots (e.g. a friendly bear mechanic, a curious fox engineer) appear in the hero, on 404, and as section accents. Mascots have animated wave/peek idle states. Always secondary to the typography; never clip-art-cheesy. `[SEPC L57]`
- **Tone of voice** — concise, expert, slightly playful. No marketing puffery. Cute mascots are the only "playful" element; the copy stays professional.
- **Anti-patterns** — no lorem ipsum, no flat material design, no minimal bootstrap look, no stock-photo people-shaking-hands.

---

## 8. Tech Stack & File Layout

`[SEPC L46–50, L71]`

- **HTML5** semantic markup; **CSS3** with custom properties and `prefers-reduced-motion`; **vanilla JS** (ES2022) for animations and interactivity; **SVG** for icons, logo, illustrations, decorative shapes; **generated PNG** for large hero/feature images.
- **Folder layout** at repo root:
  ```
  /index.html
  /services.html
  /culture.html
  /news.html
  /contact.html
  /privacy.html
  /terms.html
  /404.html
  /app-ads.txt
  /sitemap.xml
  /robots.txt
  /css/*.css
  /js/*.js
  /images/*.svg
  /images/*.png
  ```
- **No build step required**, but a single `prettier` HTML pass is acceptable.
- **Deploy:** `main` branch → GitHub Pages, custom domain `ruiyusmart.com`, HTTPS enforced. `[SEPC L64, L71]`

---

## 9. Handoff Plan

| Stage | Owner | Input | Output |
|---|---|---|---|
| 1. PRD (this doc) | `pm-ruiyusmart` ✅ | `SEPC.txt` | `docs/prd.md` |
| 2. Legal outline | `pm-ruiyusmart` ✅ | `SEPC.txt` | `docs/legal-outline.md` |
| 3. SEO keyword map | `pm-ruiyusmart` ✅ | `SEPC.txt` | `docs/seo-keywords.md` |
| 4. Visual design | `ui-ruiyusmart` | `docs/prd.md` §7 | `images/*.svg`, `images/*.png` mockups |
| 5. Implementation | `coding-ruiyusmart` | `docs/prd.md`, `docs/legal-outline.md`, `docs/seo-keywords.md`, visuals from step 4 | All HTML/CSS/JS at repo root |
| 6. Deploy | `ops-ruiyusmart` | Repo + custom domain | `https://ruiyusmart.com` live, HTTPS |

> **Hard handoff order:** PM → UI (mockups in parallel with coding skeletons) → coding writes pages using PM docs + UI assets → ops pushes. PM does not write code; ops does not write marketing copy.

---

## 10. Open Issues & Ambiguities (PM flagged, awaiting founder)

1. **GitHub PAT** is present in `SEPC.txt` L68. The PM redacts it from all docs and flags it for **immediate rotation** by the repo owner before deploy. `[SEPC L68]`
2. **Mobile-app names, store IDs, and exact feature copy** are not in the spec. PM ships 9 *slot* cards. Founder must supply the 9 app names, store URLs, and 1-line descriptions before the Services page goes live. `[SEPC L42]`
3. **Corporate Culture copy** (mission / vision / values) is PM-drafted placeholder text in §4.3. Founder must ratify before publish. `[SEPC L44]`
4. **News items** in §4.4 are *titles only* with no invented dates. Founder must supply real dates + bodies. `[SEPC L44]`
5. **Industry list** in Services §4.2 item 12 is PM-suggested and must be ratified. `[SEPC L42]`
6. **OpenStreetMap** vs Google Maps on Contact: PM chose OSM to keep the site fully static and free of API keys. Founder can override if a Google Maps key is available. `[SEPC L50]`
7. **Animation intensity** — "Buick-style rich animation" leaves room for interpretation. `ui-ruiyusmart` will produce a motion spec for founder sign-off before `coding-ruiyusmart` implements. `[SEPC L56]`
8. **Animal mascot species** — not specified. PM proposes 1-2 recurring characters; founder to confirm. `[SEPC L57]`
9. **Business hours** on `/contact.html` are PM-default (Mon–Fri 09:00–18:00 HKT); needs founder confirmation.
10. **Analytics** — none specified. PM defaults to "no third-party analytics on the public website" (apps have their own ad/analytics SDKs, fully disclosed in the Privacy Policy).

---

## 11. Acceptance Checklist (this PRD)

- [x] All 5 primary pages defined with per-page outline. `[SEPC L44]`
- [x] 9 business lines from SEPC L42 mapped to English rendering.
- [x] Mobile apps integrated into Services, not a separate page. `[SEPC L40, L44]`
- [x] Footer Privacy + Terms link mandated on all 5 primary pages + 404. `[SEPC L44]`
- [x] No `index.html` in any nav/footer/canonical link. `[SEPC L58]`
- [x] `/app-ads.txt` noted as empty file at root. `[SEPC L60]`
- [x] English-only, no Chinese in user-facing strings. `[SEPC L54]`
- [x] Buick-style rich animation + cute animals noted. `[SEPC L56–57]`
- [x] Tech stack (HTML+CSS+JS+SVG; PNG for large images; folder layout). `[SEPC L46–50]`
- [x] HTTPS + custom domain + GitHub Pages noted. `[SEPC L71]`
- [x] SEO checklist delivered. `[SEPC L52]`
- [x] Open issues surfaced to root session, not silently invented.
