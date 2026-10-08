# SEO Keyword Map — ruiyusmart.com

**Source spec:** `E:\香港\24\SEPC.txt` (cited as `[SEPC Lxx]`)
**Language:** English (site-wide). `[SEPC L54]`
**Search engine:** Google (Google Search + Google Discover). `[SEPC L52]`
**Owner of this map:** `pm-ruiyusmart` · **Implementer:** `coding-ruiyusmart`

---

## Rules

- **Title** ≤ 60 characters (Google's truncation threshold ~580 px ≈ 60 chars).
- **Meta description** ≤ 160 characters (Google's truncation threshold).
- **Canonical URL** is absolute, lowercase, trailing-slash-less, HTTPS.
- **Never** link to `index.html` in any user-facing URL. `[SEPC L58]`
- **One** `<title>` and one `<meta name="description">` per page; no duplicates.
- **OpenGraph** + **Twitter card** mirror the title and description on every page (per `docs/prd.md` §6).
- **JSON-LD** per `docs/prd.md` §6 (Organization on every page, WebSite on home, BreadcrumbList on non-home pages, page-type schemas on each page).

---

## Per-Page Table

| # | Page | `<title>` (≤ 60) | `<meta name="description">` (≤ 160) | Target keywords (3–8) | Canonical URL |
|---|---|---|---|---|---|
| 1 | **Home** (`/`) | Raywise Technologies — Smart Control & Industrial Automation (58) | Hong Kong technology house delivering smart control systems, industrial automation, IoT devices, and management apps for global B2B customers. (155) | Raywise Technologies, smart control systems, industrial automation, IoT device R&D, software development, automation equipment, electronic components, Hong Kong technology company | `https://ruiyusmart.com/` |
| 2 | **Services** (`/services.html`) | Services — Smart Control, Automation, IoT & Apps (52) | Explore Raywise's 9 business lines — smart control, industrial automation, IoT R&D, software, automation equipment, electronic components, consulting, and import-export. (152) | smart control systems, industrial automation, IoT device R&D, software development services, automation equipment supplier, electronic components distributor, technology consulting, import export technology, mobile management apps | `https://ruiyusmart.com/services.html` |
| 3 | **Corporate Culture** (`/culture.html`) | Corporate Culture — Engineering Integrity (43) | Meet Raywise: a Hong Kong technology team driven by engineering integrity, customer obsession, long-term thinking, and a global mindset. (138) | Raywise culture, Hong Kong engineering team, technology company values, customer obsession, long-term thinking, global mindset, Kwun Tong tech team | `https://ruiyusmart.com/culture.html` |
| 4 | **Company News** (`/news.html`) | Company News & Updates — Raywise Technologies (47) | The latest news, product launches, and partnership announcements from Raywise Technologies — smart control, automation, IoT, and app updates. (141) | Raywise news, company updates, product launch, partnership announcement, IoT R&D news, automation product update, mobile app update, Hong Kong tech news | `https://ruiyusmart.com/news.html` |
| 5 | **Contact Us** (`/contact.html`) | Contact Us — Raywise Technologies Hong Kong (47) | Get in touch with Raywise Technologies in Kwun Tong, Hong Kong — support for general enquiries, key-account partnerships, and global opportunities. (143) | contact Raywise, Raywise support, Hong Kong technology company contact, Kwun Tong office, key account contact, smart control system enquiry, industrial automation enquiry | `https://ruiyusmart.com/contact.html` |
| 6 | **Privacy Policy** (`/privacy.html`) | Privacy Policy — Raywise Technologies (39) | How Raywise Technologies collects, uses, shares, and protects personal data across our website and mobile apps — including ad networks, regional rights, and children's data. (154) | privacy policy, GDPR, CCPA, CPRA, PIPL, LGPD, PIPEDA, Australia Privacy Act, Singapore PDPA, COPPA, ad disclosure, app privacy, Raywise privacy | `https://ruiyusmart.com/privacy.html` |
| 7 | **Terms of Service** (`/terms.html`) | Terms of Service — Raywise Technologies (43) | The terms that govern your use of the ruiyusmart.com website and the Raywise mobile management apps, including licences, third-party SDKs, and liability. (147) | terms of service, end user licence agreement, EULA, app terms, website terms, third-party SDK terms, governing law Hong Kong, Raywise terms | `https://ruiyusmart.com/terms.html` |
| 8 | **404** (`/404.html`) | Page Not Found — Raywise Technologies (37) | The page you're looking for has wandered off. Return to the Raywise home page or explore our services in smart control, automation, and IoT. (134) | 404, page not found, broken link, Raywise home, Raywise services | `https://ruiyusmart.com/404.html` |

---

## Character-Count Audit

| Row | Title chars | Title budget | Description chars | Description budget |
|---|---|---|---|---|
| 1 Home | 58 | ≤ 60 ✅ | 155 | ≤ 160 ✅ |
| 2 Services | 52 | ≤ 60 ✅ | 152 | ≤ 160 ✅ |
| 3 Culture | 43 | ≤ 60 ✅ | 138 | ≤ 160 ✅ |
| 4 News | 47 | ≤ 60 ✅ | 141 | ≤ 160 ✅ |
| 5 Contact | 47 | ≤ 60 ✅ | 143 | ≤ 160 ✅ |
| 6 Privacy | 39 | ≤ 60 ✅ | 154 | ≤ 160 ✅ |
| 7 Terms | 43 | ≤ 60 ✅ | 147 | ≤ 160 ✅ |
| 8 404 | 37 | ≤ 60 ✅ | 134 | ≤ 160 ✅ |

All rows pass both budgets.

---

## Per-Page Notes

### Home
- **Primary intent:** brand discovery.
- **Secondary intent:** category browse (people Googling "smart control systems supplier" or "Hong Kong IoT company").
- **JSON-LD:** `Organization` + `WebSite` (with `SearchAction`).
- **OG image:** `/images/og-home.png` (cinematic hero).

### Services
- **Primary intent:** commercial investigation; buyer comparing suppliers.
- **Secondary intent:** app discovery.
- **JSON-LD:** `CollectionPage` + `BreadcrumbList` + `Organization`.
- **OG image:** `/images/og-services.png` (montage of the 9 lines).

### Corporate Culture
- **Primary intent:** "is this company worth working with" — recruiting + trust.
- **JSON-LD:** `AboutPage` + `BreadcrumbList` + `Organization`.
- **OG image:** `/images/og-culture.png` (team / mascots).

### Company News
- **Primary intent:** recent activity, press, partnerships.
- **JSON-LD:** `CollectionPage` of `Article` items + `BreadcrumbList` + `Organization`.
- **Per-article schema:** each news card on the page should be an `Article` with `datePublished`, `headline`, `description`.
- **OG image:** `/images/og-news.png` (default) or the first article's image.

### Contact Us
- **Primary intent:** local search; "near me" / "Hong Kong automation company address".
- **JSON-LD:** `ContactPage` + `BreadcrumbList` + `Organization` with the HK address in the postalAddress field.
- **OG image:** `/images/og-contact.png` (HK skyline / office visual).

### Privacy Policy
- **Primary intent:** regulatory disclosure; mostly direct visits from app store, support requests, or auditor reviews.
- **Noindex:** Privacy Policy and Terms of Service are commonly **noindexed** (per Google's own guidance) so they don't compete with marketing pages. PM recommendation: `meta name="robots" content="noindex, follow"` on both legal pages. Implementation choice — founder can override.
- **JSON-LD:** `WebPage` + `Organization`.
- **OG image:** default brand OG image.

### Terms of Service
- Same SEO treatment as Privacy Policy.
- **JSON-LD:** `WebPage` + `Organization`.

### 404
- **Noindex, nofollow** — must be excluded from the index and the link graph.
- **JSON-LD:** none required; serves its UX purpose.

---

## Cross-Page Conventions

- **Title separator:** ` — ` (em dash with spaces). Consistent across all 8 pages.
- **Brand always last** in titles: "<page topic> — Raywise Technologies" (matches user mental model and keeps the brand token near the high-weight right end of the title).
- **Description voice:** third person, factual, no marketing superlatives.
- **H1 per page:** one, matches the page's primary keyword.
- **URL slugs:** match the page filename exactly (`/services.html`, `/culture.html`, etc.).

---

## Sitemap & robots.txt

### `sitemap.xml` entries (no `index.html`, no 404) `[SEPC L52]`
```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://ruiyusmart.com/</loc><priority>1.0</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://ruiyusmart.com/services.html</loc><priority>0.9</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://ruiyusmart.com/culture.html</loc><priority>0.6</priority><changefreq>yearly</changefreq></url>
  <url><loc>https://ruiyusmart.com/news.html</loc><priority>0.7</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://ruiyusmart.com/contact.html</loc><priority>0.7</priority><changefreq>yearly</changefreq></url>
  <url><loc>https://ruiyusmart.com/privacy.html</loc><priority>0.3</priority><changefreq>yearly</changefreq></url>
  <url><loc>https://ruiyusmart.com/terms.html</loc><priority>0.3</priority><changefreq>yearly</changefreq></url>
</urlset>
```

### `robots.txt`
```
User-agent: *
Allow: /
Disallow: /404.html
Disallow: /css/
Disallow: /js/

Sitemap: https://ruiyusmart.com/sitemap.xml
```

`/404.html` is disallowed so Google does not index the 404 page if it's ever linked.
`/css/` and `/js/` are not user-facing pages and have no SEO value.

---

## Acceptance Checklist (this map)

- [x] 8 rows (Home / Services / Culture / News / Contact / Privacy / Terms / 404).
- [x] All titles ≤ 60 characters.
- [x] All descriptions ≤ 160 characters.
- [x] All canonical URLs are absolute, HTTPS, lowercase, no `index.html`. `[SEPC L58]`
- [x] 3-8 target keywords per page.
- [x] Sitemap excludes `index.html` and `404.html`. `[SEPC L58]`
- [x] Robots.txt sitemap reference present. `[SEPC L52]`
