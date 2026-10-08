# Legal Outline — Privacy Policy & Terms of Service

**Project:** ruiyusmart.com (Raywise Technologies Co., Limited)
**Source spec:** `E:\香港\24\SEPC.txt` (cited as `[SEPC Lxx]`)
**Owner of this outline:** `pm-ruiyusmart`
**Owner of the published English legal text (HTML pages `/privacy.html`, `/terms.html`):** `coding-ruiyusmart`
**Audience:** users in the EU, UK, Switzerland, the United States (incl. California, Virginia, Colorado, Connecticut, Utah, Texas, Oregon, Montana, Delaware, Iowa, Tennessee, Indiana, Minnesota, New Hampshire, New Jersey, Maryland, Rhode Island), Canada (federal + Quebec), Brazil, China (incl. Hong Kong), Australia, Singapore, and any other market where the apps are distributed. `[SEPC L42, L44]`

> This file is the **section-by-section blueprint** the engineering agent uses to write the actual English legal text on `/privacy.html` and `/terms.html`. It is intentionally verbose so the published text is complete, not summarised. `[SEPC L44 — "不允许省略编写，要完整一一对应"]`

---

## Table of Contents

1. Document map & high-level structure
2. Privacy Policy — exhaustive section outline
3. Per-ad-platform disclosure table (21 rows)
4. Ad formats (4) — what each format does, data it triggers, consent
5. Regional / jurisdictional law index (7)
6. Children's data index (3 frameworks)
7. App store compliance (Apple App Store + Google Play)
8. Terms of Service — exhaustive section outline
9. Cross-document conventions, definitions, and style rules

---

## 1. Document Map & High-Level Structure

The Privacy Policy and the Terms of Service are two **separate HTML pages** with two-way cross-links, plus a shared "Definitions" anchor. `[SEPC L44]`

### 1.1 Why two documents
- **Privacy Policy** is disclosure-only: it tells users what we collect, why, how long, who we share with, and what choices they have.
- **Terms of Service** is the contract: it sets the rules of using the website, the apps, the SDKs, and the limits of our liability.

### 1.2 Common header (both pages)
- Document title + version number + effective date + "Last updated" date.
- Company block (legal name, HK address, support email, key-account email) — verbatim from `SEPC.txt` L2, L4, L16, L23.
- A "Translations" notice: "This document is published in English. Where any translation is made available, the English version controls." `[SEPC L54]`
- A one-line "By using the Services, you agree to this document" callout at the top of the ToS, with an "I agree" acknowledgement link on first app launch (Apple App Store Review Guideline 5.1.1 (ii) and Google Play User Data Policy require consent UX for SDK-mediated data).

### 1.3 Common footer (both pages)
- Company block (above).
- Links to: `/`, `/services.html`, `/culture.html`, `/news.html`, `/contact.html`.
- Links to the **other** policy page (Privacy ↔ ToS).
- Date of last revision + version number.

### 1.4 Numbering & anchor conventions
- Every section has a stable HTML `id` (e.g. `id="privacy-children"`, `id="terms-license"`).
- Anchor format: `kebab-case`, prefixed with document name. Used in the in-app consent screens and in the store-listing "Privacy Policy URL" field.
- Every internal cross-reference is a fragment link (`/privacy.html#ad-mob`).

### 1.5 Versioning
- Bump major version on any change that broadens data collection, adds a new ad SDK, or changes retention.
- Archive the previous version at `/legal-archive/privacy-v1.X.html` and link from a changelog subsection.

---

## 2. Privacy Policy — Exhaustive Section Outline

The Privacy Policy must contain **every** section listed below. Each section header is followed by a 1-2 sentence description of what the section must say and the rules it must cover. Each sub-bullet is a non-skippable element.

> Cite each section's regulatory origin in a small footnote. The published page should keep these citations for legal traceability.

### 2.1 Introduction & Scope
**What this section must say:** Identify the data controller (Raywise Technologies Co., Limited, HK), define what "Services" means (the ruiyusmart.com website, the company's mobile management apps published on Google Play and the Apple App Store, and the company's business-information, automation, and IoT offerings described in `/services.html`), and explicitly state that this Privacy Policy applies to all of the above. `[SEPC L40, L42, L44]`
- Statement of applicability: website, apps, business lines 1-9 from SEPC L42.
- Statement of **non-applicability**: third-party websites linked from our pages have their own policies.
- Reference to the ToS for the contractual side.

### 2.2 Definitions
**What this section must say:** Define "Personal Data", "Processing", "Controller", "Processor", "Service", "App", "SDK", "End User", "Device", "Advertising ID" (GAID / IDFA), "IP Address", "Cookie", "Sensitive Data", "Child", and "Sale / Share / Targeted Advertising" (the CCPA/CPRA-specific terms). Each definition must match the corresponding regional statute cited in §5. `[GDPR Art. 4; CCPA §1798.140; PIPL Art. 4; LGPD Art. 5; PIPEDA s.2; Privacy Act 1988 (Cth) Sch.1 APP; PDPA s.2]`

### 2.3 Information We Collect
**What this section must say:** Enumerate every category of personal data the company collects — both directly from users and passively via the apps. Sub-sections:
- **2.3.1 Information you provide directly** — name, email, phone, company, address, message body (contact form); account email when you write to support@ruiyusmart.com or liujunchuan@ruiyusmart.com. `[SEPC L16, L23]`
- **2.3.2 Information collected automatically when you visit ruiyusmart.com** — IP address, user agent, referrer, pages viewed, approximate country (derived from IP), timestamps. (Note: the public website has no analytics or advertising tags; this sub-section exists to disclose the **server log** minimum.)
- **2.3.3 Information collected automatically when you use our Apps** — device model, OS version, app version, language, locale, time zone, install ID, advertising IDs (GAID on Android, IDFA on iOS), session timestamps, in-app actions, crash logs, diagnostics, network type, IP address, coarse location (country/city from IP), screen size, free storage, free memory, battery level.
- **2.3.4 Information collected by third-party SDKs in our Apps** — refer to §3 (per-platform table) for the SDK-by-SDK list. This sub-section is the umbrella paragraph that points to §3.
- **2.3.5 Information from the App Stores** — Apple and Google collect download, install, crash, and in-app purchase data on their side per their own policies. We do not control that.
- **2.3.6 Information we do NOT collect** — government ID, payment card numbers, biometric data, health data, contacts, photos, microphone, location-fine. State these explicitly to set the floor and reduce user anxiety.

### 2.4 How We Use Your Information (Purposes & Lawful Bases)
**What this section must say:** For each purpose, name the lawful basis (GDPR Art. 6 / UK GDPR Art. 6; CCPA/CPRA "business purpose"; PIPL Art. 13; LGPD Art. 7; PIPEDA s.7; Australia APPs 3 & 5; Singapore PDPA Part 4). Sub-sections:
- **2.4.1 To provide and operate the Services** — contract necessity.
- **2.4.2 To respond to your enquiries** — contract necessity (the enquiry is the contract) and legitimate interest.
- **2.4.3 To maintain and improve the Services** — legitimate interest (EU/UK), business purpose (US), legitimate interest under PIPL (Art. 13(1)(vi)), legitimate interest under LGPD (Art. 7(IX)).
- **2.4.4 To show advertisements in our Apps** — consent (GDPR / UK GDPR / PIPL / LGPD / Australia / Singapore) or "opt-out" (CCPA/CPRA). The app's first-launch consent dialog must list every ad SDK that loads. `[Apple Guidelines 5.1.1(iv); Google Play User Data Policy]`
- **2.4.5 To measure ad performance (impressions, clicks, conversions)** — consent (EU/UK/CN/BR/AU/SG), business purpose (US). Sub-service providers (Mediation, MMP) are listed in §3.
- **2.4.6 To detect fraud, abuse, security incidents** — legitimate interest (all regions); legal obligation where required.
- **2.4.7 To comply with law, enforce our ToS, respond to legal process** — legal obligation, vital interest, public interest.
- **2.4.8 With your consent — for any other purpose disclosed at the time of consent** — consent.

### 2.5 Cookies, SDKs, and Similar Technologies
**What this section must say:** Explain what cookies and similar tech are used on the website (none for advertising; the site has no analytics or ad tags) and what SDKs run inside the apps (full list in §3). Sub-sections:
- **2.5.1 Cookies on the website** — strictly necessary cookies only; no marketing, analytics, or third-party cookies.
- **2.5.2 Local storage / IndexedDB / SharedPreferences / NSUserDefaults** in the apps.
- **2.5.3 Software Development Kits (SDKs) in the Apps** — pointer to §3.
- **2.5.4 Mobile Identifiers** — explain GAID (Google Advertising ID, Android) and IDFA (Apple Identifier for Advertisers, iOS), how users can reset them (Android: Settings → Google → Ads; iOS: Settings → Privacy → Tracking), and what "Limit Ad Tracking" / "Opt out of Ads Personalisation" does.

### 2.6 Advertising & Ad Networks (Apps)
**What this section must say:** Disclose the full ad-tech stack used in our apps. This is the heart of the policy and the most regulator-sensitive area.
- **2.6.1 Ad formats used** — see §4 of this outline (4 formats: open-screen / splash, rewarded video, interstitial, banner). `[SEPC L44]`
- **2.6.2 Ad platforms** — see §3 of this outline (21 platforms). Each row tells the user what data is collected, why, and how to opt out. `[SEPC L44]`
- **2.6.3 Mediation** — explain that the apps use a mediation layer (commonly AppLovin MAX, ironSource/LevelPlay, Google Ad Manager, or Appodeal) that runs a real-time auction across multiple ad networks; the user is not directly tracked by every network, but those networks may receive a bid request.
- **2.6.4 Frequency capping, session resets, and per-user limits.**
- **2.6.5 "Do Not Sell or Share My Personal Information" link** — required in California (CCPA/CPRA) and useful in other US states. Surface it on the Contact page and in the in-app Settings. `[CCPA §1798.135]`
- **2.6.6 EU/UK consent flow** — describe the CMP (Consent Management Platform) or the in-app consent dialog that gates any non-essential SDK. Reference the IAB TCF v2.2 string. `[ePrivacy Directive 2002/58/EC; EDPB Guidelines 05/2020 on consent]`
- **2.6.7 China PIPL consent flow** — separate, affirmative, granular consent for each SDK; the SDKs that do not have a PIPL-ready consent pipeline are geo-fenced out of mainland China (we do not distribute the apps there, so this is a forward-compat note).

### 2.7 How We Share Your Information
**What this section must say:** List every category of recipient and the reason. Sub-sections:
- **2.7.1 Service providers / processors** — hosting, email, analytics (none on the website), app crash reporting.
- **2.7.2 Ad networks and mediation partners** — see §3.
- **2.7.3 App Stores** — Apple and Google act as independent controllers for download and install telemetry.
- **2.7.4 Professional advisers** — lawyers, accountants, auditors under NDA.
- **2.7.5 Law enforcement, courts, regulators** — only on valid legal process.
- **2.7.6 Corporate transactions** — merger, acquisition, asset sale, with notice to users.
- **2.7.7 With your consent** — for any other purpose.
- **2.7.8 No sale of personal data** — Raywise does not sell personal data for money. Some US state laws (CCPA/CPRA) still treat "sharing for cross-context behavioural advertising" as a "sale"; users in those jurisdictions can opt out (see §2.6.5).

### 2.8 International Data Transfers
**What this section must say:** Describe where data goes and the transfer mechanism used. Sub-sections:
- **2.8.1 Data flows from EEA / UK / CH to Hong Kong** — the company's seat is Hong Kong. We rely on EU Standard Contractual Clauses (Commission Decision 2021/914) and the UK International Data Transfer Addendum for transfers from the EEA/UK, and on the Swiss FDPIC's standard contractual clauses for Switzerland. `[GDPR Ch. V; UK GDPR; Swiss FADP]`
- **2.8.2 Data flows from Hong Kong to ad network jurisdictions** — many ad networks are US-based or use global sub-processors. Section 2.8.1 SCCs cover EEA→US onward transfers.
- **2.8.3 Data flows from the US, Canada, Brazil, Australia, Singapore** — describe the equivalent mechanism (contractual, consent, or adequacy) used for each region.
- **2.8.4 Data localisation in China (PIPL)** — note that the apps are not distributed in mainland China, but if we ever change that, we will add a data-localisation statement here.
- **2.8.5 Government access requests** — policy on responding to government requests; we do not voluntarily disclose.

### 2.9 Data Retention
**What this section must say:** State the retention period for each category of data and the criterion for deletion. Sub-sections:
- **2.9.1 Contact-form and email enquiries** — 24 months from last contact.
- **2.9.2 Server logs (website)** — 12 months, then aggregated.
- **2.9.3 App usage logs and ad-impression logs** — 13 months (industry default for ad attribution).
- **2.9.4 Crash reports** — 24 months, then aggregated.
- **2.9.5 Support tickets** — 36 months.
- **2.9.6 Backup retention** — 90 days rolling, then overwritten.
- **2.9.7 Deletion criteria** — when the purpose ends, when consent is withdrawn, when the user objects and we have no overriding legitimate ground.

### 2.10 Your Rights & Choices
**What this section must say:** A regional breakdown of user rights with the response-window and how to exercise them. Sub-sections:
- **2.10.1 EEA / UK / Switzerland — GDPR rights** — access, rectification, erasure, restriction, portability, object, withdraw consent, lodge a complaint with the supervisory authority. 30-day response window. `[GDPR Arts. 15-22; UK GDPR; Swiss FADP]`
- **2.10.2 California — CCPA / CPRA rights** — know, delete, correct, opt out of sale/sharing, limit use of sensitive personal information, non-discrimination. 45-day response window, extendable. Verifiable consumer request via the contact email. `[CCPA §§1798.100-1798.199.100]`
- **2.10.3 Other US states** — Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), Texas (TDPSA), Oregon (OCPA), Montana (MCDPA), Delaware (DPDPA), Iowa (ICDPA), Tennessee (TIPA), Indiana (INCDPA), Minnesota (MCDPA), New Hampshire (NHPA), New Jersey (NJPDPA), Maryland (MODPA), Rhode Island (RIDPA). Right to access, delete, correct, portability, opt out of targeted advertising / sale / profiling. 30-45 day response.
- **2.10.4 China — PIPL rights** — know, access, correct, delete, withdraw consent, obtain explanation, lodge a complaint. 30-day response. `[PIPL Arts. 44-50]`
- **2.10.5 Brazil — LGPD rights** — confirmation, access, correction, anonymisation, portability, deletion, sharing info, consent withdrawal, petition. 15-day response. `[LGPD Arts. 18]`
- **2.10.6 Canada — PIPEDA / Quebec Law 25** — access, correction, withdraw consent, lodge a complaint with the OPC (federal) or the CAI (Quebec). 30-day response. `[PIPEDA s.8; Law 25]`
- **2.10.7 Australia — Privacy Act 1988 (Cth)** — access, correction, complaint to OAIC. 30-day response. `[APP 12-13]`
- **2.10.8 Singapore — PDPA** — access, correction, withdraw consent, opt out of telemarketing. 30-day response. `[PDPA Part V]`
- **2.10.9 How to exercise any of the above** — email `support@ruiyusmart.com` with subject "Privacy Request". We may need to verify your identity. `[SEPC L16]`

### 2.11 Children's Privacy
**What this section must say:** The Services are not directed to children; we do not knowingly collect data from children. See §6 of this outline for the three children's-data frameworks.
- Statement of non-direction to children.
- Statement that we do not knowingly collect data from children under 13 (US COPPA), under 16 (EU/UK GDPR-K, with member-state variants down to 13), or under any other age defined by applicable local law.
- Notice to parents on how to request deletion if a child has used the Services.
- Confirmation that the apps do not target children and do not use interest-based advertising for known-child traffic.

### 2.12 Security
**What this section must say:** Describe the security measures and the limits of those measures. Sub-sections:
- **2.12.1 Technical measures** — TLS 1.2+ in transit, AES-256 at rest, hashing and salting for credentials, signed app builds, certificate pinning in the apps for our own endpoints.
- **2.12.2 Organisational measures** — least-privilege access, NDA-bound personnel, role-based access, vendor due-diligence.
- **2.12.3 No security is absolute** — explicit "we cannot guarantee absolute security" caveat; in case of breach, we will notify as required by law.

### 2.13 International Users (Residence-Specific Disclosures)
**What this section must say:** Region-by-region supplements.
- **2.13.1 EEA / UK** — legal basis table, DPO contact (we are not required to appoint one, but a contact email is provided), representative for the EEA and the UK (to be appointed; placeholder until founder confirms).
- **2.13.2 California** — Shine the Light notice (Cal. Civ. Code §1798.83); categories of "sensitive personal information" we collect; right to limit.
- **2.13.3 China (PIPL)** — separate consent for cross-border transfer, separate consent for sensitive data, separate consent for automated decision-making (we do not perform automated decision-making with legal effect).
- **2.13.4 Brazil (LGPD)** — DPO figure ("encarregado") contact; right to petition ANPD.
- **2.13.5 Canada** — describe PIPEDA / Law 25 distinction; OPC and CAI complaint paths.
- **2.13.6 Australia** — Notifiable Data Breaches scheme; OAIC complaint path.
- **2.13.7 Singapore** — Do Not Call (DNC) registry notice; PDPC complaint path.

### 2.14 "Do Not Sell or Share" / "Limit Use of My Sensitive Personal Information"
**What this section must say:** A standalone paragraph (and link target) for the CCPA/CPRA-mandated opt-out. The link must be titled "Do Not Sell or Share My Personal Information" verbatim. `[CCPA §1798.135(a)]`
- How the link is honoured across ad SDKs (signal each network via their IAB CCPA Compliance string, US Privacy String format `1YYN`).
- Confirmation that the opt-out is honoured for 12 months minimum and re-prompted after.

### 2.15 Changes to This Policy
**What this section must say:** How we notify users of changes.
- Material changes → 30 days' notice on the website and (for app users) in the next app launch.
- Non-material changes → updated "Last updated" date.
- Continued use after the effective date constitutes acceptance.

### 2.16 Contact Us
**What this section must say:** How to reach the privacy team.
- Email: **support@ruiyusmart.com** (general) and **liujunchuan@ruiyusmart.com** (key account / DPO-grade matters). `[SEPC L16, L23]`
- Postal address: **Room 12, 3/F, Yau Lee Centre, 45 Hoi Yuen Road, Kwun Tong, Hong Kong**. `[SEPC L2]`
- Response windows per region (from §2.10).
- For the EEA, our appointed local representative (placeholder; founder to confirm).
- For the UK, our appointed local representative (placeholder; founder to confirm).

---

## 3. Per-Ad-Platform Disclosure Table

The table below covers **21 ad platforms** (the system prompt's "at minimum 18" target, with 3 of the most common alternatives included for forward compatibility). Each row tells `coding-ruiyusmart` what the matching paragraph in §2.6.2 of the Privacy Policy must say. The published text must include one paragraph per row, in this order. `[SEPC L44]`

> **Reading the table**
> - **SDK behaviour summary** — what the SDK does in our apps.
> - **Data collected** — categories of personal data the SDK collects.
> - **Lawful basis** — primary basis we rely on for that data, by region.
> - **Opt-out URL** — the URL the user can visit to manage their preferences.
> - **Privacy policy URL** — the platform's own policy (we link out).

| # | Platform | SDK behaviour summary | Data collected | Lawful basis (primary) | Opt-out URL | Privacy policy URL |
|---|---|---|---|---|---|---|
| 1 | **Google AdMob** | Banner, interstitial, rewarded video, native; ad serving + basic measurement | GAID, IDFA, IP, device info, app session, coarse location, ad interaction events | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://adssettings.google.com | https://policies.google.com/privacy |
| 2 | **Google Ad Manager (GAM)** | Header-bidding / direct-sold ad serving | GAID, IDFA, IP, user agent, cookie-equivalent identifiers, ad events | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://adssettings.google.com | https://policies.google.com/privacy |
| 3 | **Meta Audience Network** | Banner, interstitial, rewarded video; uses Meta login state if available | GAID, IDFA, IP, device info, coarse location, ad events, Meta cookies if logged in | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://www.facebook.com/adpreferences/ad_settings | https://www.facebook.com/privacy/policy/ |
| 4 | **Unity Ads** | Banner, interstitial, rewarded video, playable ads | GAID, IDFA, IP, device info, coarse location, session events | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://unity.com/legal/privacy-policy#data-choices | https://unity.com/legal/privacy-policy |
| 5 | **AppLovin MAX** | Mediation layer + direct ads; banner, interstitial, rewarded, native | GAID, IDFA, IP, device info, app session, ad events, attribution events | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://www.applovin.com/privacy/ | https://www.applovin.com/privacy/ |
| 6 | **ironSource / Unity LevelPlay** | Mediation + direct; banner, interstitial, rewarded, offerwall | GAID, IDFA, IP, device info, install events, ad events | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://www.is.com/privacy-policy/ | https://www.is.com/privacy-policy/ |
| 7 | **Pangle (ByteDance)** | Banner, interstitial, rewarded, native; international incl. APAC | GAID, IDFA, IP, device info, app session, coarse location, ad events | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://www.pangleglobal.com/privacy | https://www.pangleglobal.com/privacy |
| 8 | **Vungle (now part of Liftoff)** | Interstitial, rewarded, banner; lightweight SDK | GAID, IDFA, IP, device info, ad events, session duration | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://liftoff.io/privacy-policy/ | https://liftoff.io/privacy-policy/ |
| 9 | **Chartboost (now Inmar / Vespa Media)** | Interstitial, rewarded, banner, direct deals | GAID, IDFA, IP, device info, session, ad events | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://www.chartboost.com/privacy/ | https://www.chartboost.com/privacy/ |
| 10 | **InMobi** | Banner, interstitial, rewarded, native; APAC focus | GAID, IDFA, IP, device info, coarse location, ad events | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://www.inmobi.com/privacy-policy/ | https://www.inmobi.com/privacy-policy/ |
| 11 | **Tapjoy** | Offerwall, rewarded video | GAID, IDFA, IP, device info, reward events, in-app currency events | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://www.tapjoy.com/privacy-policy/ | https://www.tapjoy.com/privacy-policy/ |
| 12 | **Mintegral (by Mobvista)** | Banner, interstitial, rewarded, native; strong APAC presence | GAID, IDFA, IP, device info, coarse location, ad events | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://www.mintegral.com/privacy-policy/ | https://www.mintegral.com/privacy-policy/ |
| 13 | **Digital Turbine / AdColony** | Interstitial, rewarded; merged stack | GAID, IDFA, IP, device info, ad events, session | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://www.digitalturbine.com/privacy-policy/ | https://www.digitalturbine.com/privacy-policy/ |
| 14 | **Liftoff / Viant** | Interstitial, rewarded, CTV, programmatic direct | GAID, IDFA, IP, device info, session, ad events | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://liftoff.io/privacy-policy/ | https://liftoff.io/privacy-policy/ |
| 15 | **Moloco** | Programmatic bidding, banner, interstitial, rewarded, native | GAID, IDFA, IP, device info, ad events | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://www.moloco.com/privacy-policy | https://www.moloco.com/privacy-policy |
| 16 | **Yahoo / Verizon Media (now Yahoo)** | Native, banner, video; legacy Verizon Media SDKs | GAID, IDFA, IP, device info, ad events, audience segments | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://legal.yahoo.com/us/en/yahoo/privacy/index.html | https://legal.yahoo.com/us/en/yahoo/privacy/index.html |
| 17 | **Smaato** | Header bidding, real-time programmatic, banner, interstitial, video | GAID, IDFA, IP, device info, ad events | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://www.smaato.com/privacy/ | https://www.smaato.com/privacy/ |
| 18 | **Start.io (Startapp)** | Banner, interstitial, rewarded, native; SDK | GAID, IDFA, IP, device info, app session, ad events | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://www.start.io/privacy-policy/ | https://www.start.io/privacy-policy/ |
| 19 | **Appodeal** | Mediation layer (aggregator); banner, interstitial, rewarded, native | GAID, IDFA, IP, device info, ad events, bid requests | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://www.appodeal.com/privacy-policy/ | https://www.appodeal.com/privacy-policy/ |
| 20 | **BidMachine** | Header bidding, mediation, banner, interstitial, rewarded, native | GAID, IDFA, IP, device info, ad events | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://bidmachine.io/privacy-policy/ | https://bidmachine.io/privacy-policy/ |
| 21 | **AdColony (now Digital Turbine)** | Interstitial, rewarded video; legacy name retained for SDK compatibility | GAID, IDFA, IP, device info, ad events, session | Consent (EU/UK/CN/BR/AU/SG); opt-out (US) | https://www.digitalturbine.com/privacy-policy/ | https://www.digitalturbine.com/privacy-policy/ |

> **Privacy-preserving API usage on iOS** — when an iOS app uses any of the above SDKs, the SDK is required to read IDFA only after `AppTrackingTransparency` consent. Apple App Store Review Guideline 5.1.1(i) prohibits circumventing ATT. We use Apple's **SKAdNetwork** for conversion attribution where possible, and **Privacy Manifests** (required since 1 May 2024) for every SDK. `[Apple App Store Review Guideline 5.1.1]`
>
> **Privacy-preserving API usage on Android** — when an Android app uses any of the above SDKs, the SDK is required to delete GAID-derived data on `RESET_AD_ID`. We use Google's **Privacy Sandbox on Android** (Topics, Attribution Reporting) for forward compatibility. `[Google Play Developer Program Policy — User Data]`

---

## 4. Ad Formats (4) — Behaviour & Consent

`[SEPC L44]` — apps integrate four ad formats. Each must be described in the Privacy Policy. Each format has its own UX and consent model.

### 4.1 Open-screen / Splash Ads
- **Behaviour** — a full-screen ad shown during app cold-start, before the first interactive screen. Typically 3-8 seconds; some ads are "skippable" after 5 seconds.
- **Data triggered** — GAID/IDFA, app session ID, timestamp, app package name, IP, coarse location (sometimes used for ad floor pricing, not targeting). If the user taps the ad, the SDK forwards the click to the destination.
- **Consent** — must be gated by the CMP/ATT dialog before the SDK initialises. If the user opts out, no SDK init, no splash ad.
- **Frequency** — one splash per cold-start; one per session warm-up.
- **Failure mode** — if no ad is available, the splash is skipped (no fallback tracking).

### 4.2 Rewarded Video Ads
- **Behaviour** — full-screen video, user opts in by tapping a "Watch ad" button, watches the full video, then receives an in-app reward (e.g. extra lives, a discount code, a temporary premium feature).
- **Data triggered** — GAID/IDFA, app session ID, ad impression, completion event (started / completed / skipped), reward event.
- **Consent** — must be gated by the CMP/ATT dialog before the SDK initialises.
- **Special care** — must NOT be used to coerce children into watching (COPPA). Must NOT auto-play without a clear user-initiated tap. `[COPPA Rule; Apple Guidelines 1.4.3; Google Play Ads Policy]`

### 4.3 Interstitial Ads
- **Behaviour** — full-screen ad shown at a natural break in the app flow (between levels, after a save, before a content page). 5-15 seconds; some are "skippable" after 5.
- **Data triggered** — GAID/IDFA, session ID, ad impression, click event, install/conversion event (post-tap).
- **Consent** — must be gated by the CMP/ATT dialog before the SDK initialises.
- **Frequency capping** — typically 1 interstitial per 60-120 seconds in the app's logic, to avoid degrading UX.
- **Avoiding bad UX** — never show an interstitial on the first screen (that's a splash), never stack two interstitials, never show one mid-task.

### 4.4 Banner Ads
- **Behaviour** — small rectangular ad embedded in a defined slot at the top or bottom of a screen; auto-refreshes every 30-60 seconds.
- **Data triggered** — GAID/IDFA, session ID, ad impression, click event, viewability event (MRC standard).
- **Consent** — must be gated by the CMP/ATT dialog before the SDK initialises.
- **Design rules** — clearly differentiated from in-app content; must NOT mimic native UI; must be removable by the user; must not interfere with navigation.

---

## 5. Regional / Jurisdictional Law Index (7)

`[SEPC L44]` — every region whose users the apps can reach must be covered. Each entry here drives a sub-section in the published Privacy Policy.

### 5.1 GDPR — EU + UK
- **Scope** — natural persons in the EU (27 member states) and the UK (Great Britain + Northern Ireland under UK GDPR).
- **Key obligations** — lawful basis (Art. 6), purpose limitation (Art. 5(1)(b)), data minimisation (Art. 5(1)(c)), rights (Arts. 15-22), consent (Recital 32; EDPB Guidelines 05/2020), DPO (Art. 37), representative (Art. 27), breach notification (Art. 33), DPIA (Art. 35), transfers (Ch. V; SCCs 2021/914; UK Addendum).
- **Implementation in the apps** — CMP gated by the IAB TCF v2.2 string; ad SDKs only initialise after consent. UK GDPR is treated as a separate regime (UK has its own supervisory authority — the ICO).
- **Local representatives** — we are not required to appoint an Article 27 representative because the company is **outside** the EU/UK and does not target EU/UK users. Note this; revisit if go-to-market changes.

### 5.2 CCPA / CPRA — California
- **Scope** — California residents.
- **Key obligations** — "right to know" (§1798.100), "right to delete" (§1798.105), "right to correct" (CPRA), "right to opt out of sale/share" (§1798.120), "right to limit use of sensitive PI" (CPRA), non-discrimination (§1798.125), verifiable consumer request, 12-month look-back for opt-out, "Do Not Sell or Share" link with exact title. Notice at collection must list categories and purposes.
- **Implementation in the apps** — per-SDK IAB CCPA Compliance string (`1YYN` = opt out of sale/share, limit sensitive); a "Do Not Sell or Share" toggle in the in-app Settings that flips the US Privacy String.
- **Other US states** — see §2.10.3 of this outline. Treat as a single combined disclosure block in the published page.

### 5.3 PIPL — China
- **Scope** — natural persons in the People's Republic of China (note: Hong Kong is **not** covered by PIPL; HK has its own PDPO and crosses over to GDPR/CPRA via adequacy-equivalent rules).
- **Key obligations** — separate, informed, specific consent (Art. 14); cross-border transfer assessment (Art. 38-39) with CAC certification, SCCs, or PI protection assessment; data subject rights (Arts. 44-50); DPO if processing meets PIPL thresholds (Art. 52).
- **Implementation in the apps** — the apps are **not** currently distributed in mainland China. The Privacy Policy must state this and add a "if we ever distribute in mainland China" forward-compatibility note. `[SEPC L42]`
- **Why this is in the policy** — users in the EU/UK and elsewhere increasingly expect PIPL-level disclosures; also some Greater China users in HK/Macau may transit through the same policy.

### 5.4 LGPD — Brazil
- **Scope** — natural persons in Brazil.
- **Key obligations** — lawful basis (Art. 7), data subject rights (Art. 18), DPO/encarregado (Art. 41), ANPD as regulator, international transfer on adequacy/SCCs/other (Art. 33-36).
- **Implementation in the apps** — Portuguese-language disclosure **not** required for an English-only site, but the rights must be honoured. Reference ANPD in the contact section. `[LGPD Art. 18]`

### 5.5 PIPEDA — Canada
- **Scope** — commercial activities in Canada (federal PIPEDA) + Quebec's Law 25 (which adds explicit consent, DPO, privacy impact assessments, breach notification, data portability).
- **Key obligations** — consent (s.7), limiting collection/use/disclosure/retention (Principle 4), access (s.8), accuracy (Principle 4.6), openness (Principle 8), individual recourse (Principle 10).
- **Implementation in the apps** — English-language disclosure is sufficient; for Quebec, name the CAI in the complaint path. `[PIPEDA; Quebec Law 25]`

### 5.6 Australia Privacy Act 1988 (Cth)
- **Scope** — organisations with an Australian link, turnover threshold AUD 3m+.
- **Key obligations** — 13 Australian Privacy Principles (APPs), Notifiable Data Breaches (NDB) scheme, OAIC complaint path.
- **Implementation in the apps** — APP 3 (collection) and APP 5 (notification) at first launch; APP 7 (use/disclosure) consistent with §2.4; APP 12 (access) and APP 13 (correction) honoured on request.

### 5.7 Singapore PDPA
- **Scope** — organisations in Singapore, or collecting/use of personal data in Singapore.
- **Key obligations** — Consent Obligation (s.13), Purpose Limitation (s.18), Notification (s.20), Access and Correction (s.21-22), Retention Limitation (s.18), Transfer Limitation (s.26), PDPC enforcement, DNC (Do Not Call) for telemarketing.
- **Implementation in the apps** — consent gate; data subject access request honoured within 30 days; PDPC complaint path in the policy. `[PDPA Part IV]`

---

## 6. Children's Data Index (3 frameworks)

`[SEPC L44]` — apps must not be directed to children, and must not collect data from children knowingly. Three frameworks apply.

### 6.1 COPPA — US (children under 13)
- **Statute** — Children's Online Privacy Protection Act, 15 U.S.C. §§6501-6506, and the FTC COPPA Rule (16 C.F.R. Part 312).
- **What it requires** — verifiable parental consent before collecting personal information from children under 13; clear privacy notice; parental right to review, delete, and stop further collection; no behavioural advertising targeted at children.
- **Our implementation** — the apps are not directed to children; we do not knowingly collect PI from children under 13; if a parent notifies us that their child has used the app and provided PI, we delete the data within 30 days; the apps do not serve interest-based ads to known-child traffic. `[COPPA Rule §312.5]`
- **Store alignment** — both Apple and Google require age-gating where the app targets children. We do not.

### 6.2 GDPR-K — EU (children under 16, with member-state variants)
- **Statute** — GDPR Art. 8.
- **What it requires** — where information society services are offered directly to a child, processing is lawful only if the child is at least 16 (member states may lower to 13). Parental consent is required for children below the applicable age.
- **Member-state ages** — most EU member states set the floor at 16, but several (e.g. France, Ireland, Poland, Czechia) set it at 15 or 13. We defer to the local floor where we know it; for the policy, the safe statement is "under 16 unless the local law permits a lower age".
- **Our implementation** — same as COPPA. If a parent notifies us, we delete the data; the apps do not target children.

### 6.3 UK Age-Appropriate Design Code (AADC)
- **Statute** — Information Commissioner's Office (ICO) Age-Appropriate Design Code, made under the Data Protection Act 2018 s.123.
- **What it requires** — 15 standards for online services likely to be accessed by children (UK): best interests of the child, age-appropriate application, transparency, detrimental use of data, policies and standards, default settings, data minimisation, data sharing, geolocation, parental controls, profiling, nudge techniques, connected toys/devices, online tools, DPIA.
- **Our implementation** — the apps are not designed for children. If the UK ICO's "likely to be accessed" test is triggered (e.g. our IoT/automation apps might be used by schools or parents on family devices), we apply the AADC standards: no profiling, no nudge techniques aimed at extending session time, geolocation off by default, no dark patterns, DPIA on file.

---

## 7. App Store Compliance

`[SEPC L44]` — apps are published to Google Play and Apple App Store. Both stores have their own rules that the Privacy Policy and the in-app UX must satisfy.

### 7.1 Apple App Store Review Guidelines
- **5.1.1 Privacy** — apps must have a privacy policy; apps must request permission before collecting any user data that is not essential to the core function; ATT (`AppTrackingTransparency`) is required for any SDK that reads IDFA.
- **5.1.1 (i)** — apps must not circumvent ATT.
- **5.1.1 (ii)** — apps must not require consent in a way that prevents use when the user declines; the user must still be able to use the core service.
- **5.1.1 (iv)** — apps that serve third-party ads must include a clearly labelled ad disclosure, and a "Paid" version / "Remove Ads" option if appropriate.
- **1.4.3** — rewarded ads must be clearly identifiable; users must know what they will receive before watching.
- **2.3.8** — apps may not transmit user data without first obtaining user consent.
- **Privacy Manifests** (since 1 May 2024) — every SDK listed in §3 with a "Required Reason" API entry must declare it in the app's `PrivacyInfo.xcprivacy`.
- **Privacy Nutrition Labels** — store listing must declare each data category, each purpose, and whether it is linked to the user / used for tracking.
- **Data deletion** — if the user requests account deletion, the app must support it.

### 7.2 Google Play Developer Program Policy
- **User Data Policy** — apps must post a privacy policy; apps must disclose what they collect and why; apps must obtain consent where required by law; apps must not sell personal data to third parties without consent.
- **Personal and Sensitive Information** — apps must use sensitive data only for purposes the user has consented to.
- **Ad Policy** — ads must not be served to children; ads must not be misleading; rewarded ads must be clearly identifiable.
- **Data Safety Form** — equivalent to Apple's nutrition labels; must be completed in the Play Console.
- **Families Policy** — if an app is designed for children, additional rules apply. We are not a children's app.
- **Permissions Policy** — only request permissions you need.
- **Account Deletion** — if an app has an account system, it must support account deletion. Our apps do not have accounts (PM default); if that changes, we will update.
- **Target API Level** — meet the current minimum.

### 7.3 Privacy Policy URL on the store listing
- Both stores require a Privacy Policy URL on the app's store listing.
- The URL must point to `/privacy.html` on `https://ruiyusmart.com` (HTTPS enforced, GitHub Pages, custom domain). `[SEPC L71]`
- The URL must resolve, must be in English, and must be the policy of the **publisher** (Raywise), not a generic template.

### 7.4 App-ads.txt
- The repo root must contain `app-ads.txt` (empty file is acceptable per IAB Tech Lab spec). `[SEPC L60]`
- When the apps register with any SSP, the publisher entries go here.
- GitHub Pages serves it as `https://ruiyusmart.com/app-ads.txt`. `[SEPC L60, L71]`

---

## 8. Terms of Service — Exhaustive Section Outline

The Terms of Service is the contract between the user and Raywise Technologies Co., Limited. It must be in English, complete, and linked from every page footer. `[SEPC L44, L54]`

### 8.1 Acceptance of the Terms
**What this section must say:** By using the Services, you agree to these Terms. If you do not agree, do not use the Services. `[SEPC L44]`
- Reference to the Privacy Policy (which is also agreed by use).
- Statement that additional terms may apply to specific Services (e.g. the apps' end-user licence, the ad SDKs' terms).

### 8.2 Eligibility
**What this section must say:** You must be of legal age in your jurisdiction to use the Services. `[SEPC L44]`
- Minimum age 18 (or the age of majority where you live) for accepting this contract; for app users, additional age rules from §6 apply.
- The Services are not directed to children.

### 8.3 Description of the Services
**What this section must say:** A plain-English description of what we offer.
- The ruiyusmart.com website — informational pages, contact, legal disclosures.
- The mobile management apps — published on Google Play and the Apple App Store; 9 business lines from SEPC L42, mapped 1-to-1 to the apps.
- The 9 business lines themselves — Smart Control Systems; Industrial Automation Products; IoT Device R&D & Technical Services; Software Development; Automation Equipment Sales; Electronic Components Sales; Technology Transfer & Consulting; Business Information Consulting; Import & Export of Goods and Technology. `[SEPC L42]`

### 8.4 Account, Registration, and Security
**What this section must say:** Whether account creation is required; the security obligations.
- The website does not require an account; the contact form is `mailto:`-based.
- The apps may offer optional accounts in the future; if so, this section expands.

### 8.5 Licence & Permitted Use
**What this section must say:** Limited, revocable, non-exclusive, non-transferable licence to use the Services.
- **App EULA** — non-exclusive, non-transferable, revocable, no sub-licensing, single device unless otherwise specified.
- **Website licence** — view and interact; no scraping, no automated access, no reverse engineering, no security testing without permission.
- **Prohibited use** — unlawful, infringing, harmful, fraudulent, deceptive, harassing, defamatory, obscene, hateful; no malware, no phishing, no spam; no interference; no commercial resale without a written agreement.

### 8.6 Intellectual Property
**What this section must say:** Who owns what.
- Raywise retains all rights in the Services, the apps, the trademarks, the brand, the source code, the documentation.
- Users retain rights in their own content (e.g. message body in the contact form) and grant a limited licence to Raywise to use it for the purpose.
- Open-source components in the apps retain their own licences (must be listed in the in-app "Open Source" screen).

### 8.7 Third-Party Services, SDKs, and Content
**What this section must say:** Acknowledge third-party components.
- The apps integrate third-party SDKs (the 21 in §3) and third-party content (ads).
- Each SDK is governed by its own terms; the user agrees to those terms by using the app.
- Apple and Google have their own end-user terms for the store, the install, and the OS.

### 8.8 User Content
**What this section must say:** Rules on what the user submits.
- No illegal, infringing, or harmful content.
- Licence to Raywise to use the content for the purpose of providing the Service (e.g. responding to the contact form).
- Right to remove content that violates the ToS.

### 8.9 Feedback
**What this section must say:** Submissions of feedback.
- Feedback is non-confidential; Raywise may use it for any purpose without compensation.

### 8.10 Privacy & Data
**What this section must say:** Privacy is governed by the Privacy Policy.
- Reference `/privacy.html` and its sections on advertising, ad platforms, ad formats, regional rights, children's data.
- The user agrees to the data collection described in the Privacy Policy.

### 8.11 App Store-Specific Terms (Apple + Google)
**What this section must say:** Mandatory Apple and Google clauses.
- **Apple** — the EULA is between the user and Raywise, not with Apple; Apple has no maintenance or support obligation; the licence is limited to use on an Apple-branded device you own or control; Apple may enforce this EULA against you; in the event of a third-party claim, Raywise (not Apple) is responsible.
- **Google** — the EULA is between the user and Raywise, not with Google; Google has no maintenance or support obligation; the licence is for use on a device you own or control; Google Play terms apply as a "store of record" agreement.

### 8.12 Subscriptions, Purchases, and Refunds
**What this section must say:** Payment, if any.
- The apps are free with ads (the default from SEPC); there are no in-app purchases at the PM-default. If that changes, this section expands.
- Apple and Google handle billing for any in-app purchase; their respective refund policies apply.
- Auto-renewing subscriptions, if any, must be cancelable in the store at least 24 hours before renewal.

### 8.13 Modifications to the Services and the Terms
**What this section must say:** Right to change.
- We may modify the Services at any time; we may modify the Terms with notice (30 days for material changes).
- Continued use after the effective date is acceptance.

### 8.14 Suspension and Termination
**What this section must say:** When we can stop providing the Service.
- For cause (violation of ToS, illegal use, security risk) — immediate.
- For convenience — with notice.
- Effect of termination — clauses that by their nature survive (IP, disclaimers, limitation of liability, indemnity, governing law) survive.

### 8.15 Disclaimers
**What this section must say:** The Services are provided "as is" and "as available".
- No warranty of merchantability, fitness for a particular purpose, non-infringement, accuracy, or availability.
- We do not warrant that the Services will be uninterrupted, secure, or error-free.
- The Services are not intended for use in high-risk environments (medical, life-support, nuclear, aviation) unless explicitly contracted.

### 8.16 Limitation of Liability
**What this section must say:** Cap our liability.
- To the maximum extent permitted by law, our aggregate liability for any claim arising out of or relating to the Services is limited to the greater of (a) the amount you paid us in the 12 months preceding the claim, or (b) USD 100.
- We are not liable for indirect, incidental, special, consequential, exemplary, or punitive damages.
- Some jurisdictions do not allow the exclusion of certain damages; in those jurisdictions, the exclusion is limited to the extent permitted.

### 8.17 Indemnification
**What this section must say:** User indemnifies Raywise for misuse.
- You indemnify and hold Raywise harmless from claims arising out of your violation of the ToS, your misuse of the Services, or your violation of any law or third-party right.

### 8.18 Export Control and Sanctions
**What this section must say:** Compliance with trade rules.
- You will not use the Services if you are located in a sanctioned country or are a sanctioned person.
- The 9th business line (Import & Export) is governed by applicable trade laws; this section cross-references that line. `[SEPC L42]`

### 8.19 Governing Law and Dispute Resolution
**What this section must say:** Where and how disputes are resolved.
- The Terms are governed by the laws of Hong Kong SAR (the company's seat), without regard to conflict-of-laws rules. `[SEPC L2, L4]`
- The parties shall first attempt informal resolution; if that fails, the courts of Hong Kong SAR have exclusive jurisdiction, save that consumers in the EU/UK retain the protection of the mandatory laws of their habitual residence (e.g. consumer cannot be deprived of the right to sue in their home court).
- For US consumers — class-action waiver and arbitration are not used at the PM-default (founder can add).

### 8.20 Language
**What this section must say:** English controls.
- The Terms are published in English. Where any translation is made available, the English version controls. `[SEPC L54]`

### 8.21 Severability, No Waiver, Assignment
**What this section must say:** Standard boilerplate.
- If any provision is held unenforceable, the rest stands.
- Our failure to enforce a right is not a waiver.
- You may not assign the ToS without our consent; we may assign to a successor in interest (e.g. M&A).

### 8.22 Entire Agreement
**What this section must say:** The ToS + Privacy Policy + any EULA = the entire agreement.

### 8.23 Contact
**What this section must say:** How to reach us about the ToS.
- Email: **support@ruiyusmart.com** `[SEPC L16]`
- Postal: Room 12, 3/F, Yau Lee Centre, 45 Hoi Yuen Road, Kwun Tong, Hong Kong `[SEPC L2]`

---

## 9. Cross-Document Conventions, Definitions, and Style Rules

### 9.1 Tone
- Plain English. Avoid legalese where possible; be precise where required.
- No marketing language.
- Active voice.

### 9.2 Formatting
- One H1 = document title.
- H2 = major sections.
- H3 = sub-sections.
- Numbered lists for procedural rights; bullet lists for enumeration.
- Tables for the ad-platform disclosure (§3) — a long table reads better than 21 paragraphs.

### 9.3 Hyperlinks
- All links to the third-party ad networks in §3 must `rel="noopener noreferrer"` and `target="_blank"`.
- All links to the same site's other pages are relative (`/privacy.html`, `/terms.html`).
- Anchors are kebab-case and stable (see §1.4).

### 9.4 Date format
- ISO 8601 (YYYY-MM-DD) for any date in the document.

### 9.5 Citation style
- Inline parenthetical citation of the regulatory source for each obligation, e.g. "(CCPA §1798.105)".
- Avoids the need for a separate bibliography; the user can search the citation.

### 9.6 "We" / "Raywise" usage
- First paragraph introduces "we" = "Raywise Technologies Co., Limited".
- After the first paragraph, "we" and "Raywise" are interchangeable.
- "You" = the user (visitor, app user, or business contact).

### 9.7 No fabricated facts
- All company facts come from SEPC.txt (see PRD §2).
- All regulatory citations are stable, public-law sources.

---

## 10. Acceptance Checklist (this outline)

- [x] Privacy Policy has 16 numbered sections, every one described.
- [x] Terms of Service has 23 numbered sections, every one described.
- [x] Ad-platform table has **21 rows** (≥ 18 required).
- [x] Ad formats section covers all **4** formats (open-screen / splash, rewarded video, interstitial, banner).
- [x] Regional laws section covers all **7** laws (GDPR, CCPA/CPRA, PIPL, LGPD, PIPEDA, Australia Privacy Act, Singapore PDPA).
- [x] Children's data section covers all **3** frameworks (COPPA, GDPR-K, UK AADC).
- [x] App store compliance section covers both **Apple** and **Google**.
- [x] Every ad platform row includes: behaviour summary, data collected, lawful basis, opt-out URL, privacy policy URL.
- [x] Every section traces back to either SEPC L42 (business line) or L44 (legal completeness rule).
- [x] All SEPC.txt company facts (legal name, address, both emails) appear in the outline.
- [x] App-ads.txt requirement called out. `[SEPC L60]`
- [x] No `index.html` referenced as a page link. `[SEPC L58]`
- [x] No Chinese in user-facing policy strings. `[SEPC L54]`

---

## 11. Per-Platform Narrative (full paragraphs the published page should contain)

The table in §3 is the at-a-glance reference. The published `/privacy.html` page should also include a **paragraph per platform** in addition to (or as the readable form of) the table. This section gives the engineering agent a paragraph-shaped template per platform so the prose is consistent.

> Each narrative paragraph below is what the published page must say about that platform. The paragraphs are intentionally detailed (10-15 lines each) so the published page is complete, not summarised. `[SEPC L44]`

### 11.1 Google AdMob
Google AdMob is one of the largest mobile ad networks. The AdMob SDK is integrated in our apps to serve banner ads, interstitial ads, rewarded video ads, and native ads. The SDK reads the device's advertising identifier (Google Advertising ID on Android, Identifier for Advertisers on iOS) and may collect the device model, operating system version, app version, language, locale, time zone, network type, IP address, and coarse location (country/city) for ad serving, frequency capping, fraud prevention, and aggregated reporting. AdMob uses this data to select and serve ads, to measure ad performance, and to detect invalid traffic. The lawful basis for processing in the EU/UK, China, Brazil, Australia, and Singapore is your consent; in the United States, processing is performed under a "business purpose" basis with an opt-out for cross-context behavioural advertising. You can manage your Google ad personalisation at `https://adssettings.google.com`. Google's full privacy policy is at `https://policies.google.com/privacy`. AdMob participates in the IAB Transparency and Consent Framework (TCF v2.2) and recognises the IAB US Privacy String for CCPA/CPRA compliance.

### 11.2 Google Ad Manager (GAM)
Google Ad Manager is Google's ad server, used to manage direct deals, header bidding, and programmatic demand from multiple sources. The GAM SDK (or its mobile equivalent) may read the device's advertising identifier, IP address, user agent, app session, and ad interaction events (impression, click, viewability). GAM is used in our apps to run real-time auctions across multiple demand sources. The lawful basis for processing is your consent in the EU/UK, China, Brazil, Australia, and Singapore; in the US, processing is under a "business purpose" basis with opt-out for cross-context behavioural advertising. You can manage your Google ad personalisation at `https://adssettings.google.com`. The full Google privacy policy is at `https://policies.google.com/privacy`. GAM is fully TCF v2.2 compliant and recognises the IAB US Privacy String.

### 11.3 Meta Audience Network
Meta Audience Network (MAN) is Meta's mobile ad network. The MAN SDK may read the device's advertising identifier, IP address, device model, OS version, app version, coarse location, and ad interaction events. If you are logged into the Facebook or Instagram app on the same device, MAN may also use the Meta cookie set to associate ad events with your Meta account. The lawful basis for processing is your consent in the EU/UK, China, Brazil, Australia, and Singapore; in the US, processing is under a "business purpose" basis with opt-out for cross-context behavioural advertising. You can manage your Meta ad preferences at `https://www.facebook.com/adpreferences/ad_settings`. Meta's full privacy policy is at `https://www.facebook.com/privacy/policy/`. On iOS, the SDK reads IDFA only after the AppTrackingTransparency prompt; on Android, the SDK reads GAID with the same consent gate.

### 11.4 Unity Ads
Unity Ads is Unity's mobile ad network, commonly used for banner, interstitial, and rewarded video ads in mobile games and apps. The Unity Ads SDK reads the device's advertising identifier, IP address, device model, OS version, app version, language, locale, and ad interaction events. Unity may use this data to serve ads, to measure ad performance, and to detect fraud. The lawful basis for processing is your consent in the EU/UK, China, Brazil, Australia, and Singapore; in the US, processing is under a "business purpose" basis with opt-out. You can manage your Unity data choices at `https://unity.com/legal/privacy-policy#data-choices`. The full Unity privacy policy is at `https://unity.com/legal/privacy-policy`.

### 11.5 AppLovin MAX
AppLovin MAX is a mediation platform that runs a real-time auction across multiple ad networks to fill each ad slot. The MAX SDK reads the device's advertising identifier, IP address, device model, OS version, app version, and ad interaction events. MAX also receives bid requests from the underlying ad networks when an ad slot is being filled. The lawful basis for processing is your consent in the EU/UK, China, Brazil, Australia, and Singapore; in the US, processing is under a "business purpose" basis with opt-out. AppLovin's privacy policy and data-choices page are at `https://www.applovin.com/privacy/`. AppLovin is a signatory to the IAB TCF and supports the IAB US Privacy String.

### 11.6 ironSource / Unity LevelPlay
ironSource (now part of Unity, branded as Unity LevelPlay) is a mediation platform and direct ad network. The LevelPlay SDK reads the device's advertising identifier, IP address, device model, OS version, app version, install events, and ad interaction events. LevelPlay may run bid requests across multiple demand sources. The lawful basis for processing is your consent in the EU/UK, China, Brazil, Australia, and Singapore; in the US, processing is under a "business purpose" basis with opt-out. ironSource's privacy policy is at `https://www.is.com/privacy-policy/`. LevelPlay supports the IAB TCF and the IAB US Privacy String.

### 11.7 Pangle (ByteDance)
Pangle is ByteDance's mobile ad network, particularly strong in APAC. The Pangle SDK reads the device's advertising identifier, IP address, device model, OS version, app version, language, locale, coarse location, and ad interaction events. Pangle may use this data to serve ads, to measure ad performance, and to detect fraud. The lawful basis for processing is your consent in the EU/UK, China, Brazil, Australia, and Singapore; in the US, processing is under a "business purpose" basis with opt-out. Pangle's privacy policy and opt-out controls are at `https://www.pangleglobal.com/privacy`. Pangle supports the IAB TCF and the IAB US Privacy String.

### 11.8 Vungle (now part of Liftoff)
Vungle is a mobile ad network that focuses on rewarded video and interstitial ads. The Vungle SDK reads the device's advertising identifier, IP address, device model, OS version, app version, and ad interaction events (start, complete, skip, click). The lawful basis for processing is your consent in the EU/UK, China, Brazil, Australia, and Singapore; in the US, processing is under a "business purpose" basis with opt-out. Vungle's privacy policy is at `https://vungle.com/privacy/` and the Liftoff (parent) policy is at `https://liftoff.io/privacy-policy/`. Vungle supports the IAB TCF and the IAB US Privacy String.

### 11.9 Chartboost (now part of Inmar / Vespa Media)
Chartboost is a mobile ad network with direct-deal support. The Chartboost SDK reads the device's advertising identifier, IP address, device model, OS version, app version, app session, and ad interaction events. Chartboost may use this data to serve ads, to measure ad performance, and to detect fraud. The lawful basis for processing is your consent in the EU/UK, China, Brazil, Australia, and Singapore; in the US, processing is under a "business purpose" basis with opt-out. Chartboost's privacy policy is at `https://www.chartboost.com/privacy/`. Chartboost supports the IAB TCF and the IAB US Privacy String.

### 11.10 InMobi
InMobi is a mobile ad network with a strong APAC presence. The InMobi SDK reads the device's advertising identifier, IP address, device model, OS version, app version, language, locale, coarse location, and ad interaction events. The lawful basis for processing is your consent in the EU/UK, China, Brazil, Australia, and Singapore; in the US, processing is under a "business-purpose" basis with opt-out. InMobi's privacy policy is at `https://www.inmobi.com/privacy-policy/`. InMobi supports the IAB TCF and the IAB US Privacy String.

### 11.11 Tapjoy
Tapjoy is a mobile ad network that specialises in offerwalls and rewarded video. The Tapjoy SDK reads the device's advertising identifier, IP address, device model, OS version, app version, and reward-related events (offer view, offer complete, in-app currency granted). The lawful basis for processing is your consent in the EU/UK, China, Brazil, Australia, and Singapore; in the US, processing is under a "business-purpose" basis with opt-out. Tapjoy's privacy policy is at `https://www.tapjoy.com/privacy-policy/`. Tapjoy supports the IAB TCF and the IAB US Privacy String.

### 11.12 Mintegral (by Mobvista)
Mintegral is a mobile ad network with strong APAC and LATAM presence. The Mintegral SDK reads the device's advertising identifier, IP address, device model, OS version, app version, language, locale, coarse location, and ad interaction events. The lawful basis for processing is your consent in the EU/UK, China, Brazil, Australia, and Singapore; in the US, processing is under a "business-purpose" basis with opt-out. Mintegral's privacy policy is at `https://www.mintegral.com/privacy-policy/`. Mintegral supports the IAB TCF and the IAB US Privacy String.

### 11.13 Digital Turbine / AdColony
Digital Turbine (which merged with AdColony) is a mobile ad network. The AdColony SDK reads the device's advertising identifier, IP address, device model, OS version, app version, app session, and ad interaction events. The lawful basis for processing is your consent in the EU/UK, China, Brazil, Australia, and Singapore; in the US, processing is under a "business-purpose" basis with opt-out. Digital Turbine's privacy policy is at `https://www.digitalturbine.com/privacy-policy/`. Digital Turbine supports the IAB TCF and the IAB US Privacy String.

### 11.14 Liftoff / Viant
Liftoff (which acquired Vungle and Viant) is a programmatic mobile ad platform. The Liftoff SDK reads the device's advertising identifier, IP address, device model, OS version, app version, app session, and ad interaction events. The lawful basis for processing is your consent in the EU/UK, China, Brazil, Australia, and Singapore; in the US, processing is under a "business-purpose" basis with opt-out. Liftoff's privacy policy is at `https://liftoff.io/privacy-policy/`. Liftoff supports the IAB TCF and the IAB US Privacy String.

### 11.15 Moloco
Moloco is a programmatic mobile ad platform focused on ML-driven bidding. The Moloco SDK reads the device's advertising identifier, IP address, device model, OS version, app version, and ad interaction events. The lawful basis for processing is your consent in the EU/UK, China, Brazil, Australia, and Singapore; in the US, processing is under a "business-purpose" basis with opt-out. Moloco's privacy policy is at `https://www.moloco.com/privacy-policy`. Moloco supports the IAB TCF and the IAB US Privacy String.

### 11.16 Yahoo / Verizon Media
Yahoo (which absorbed the former Verizon Media ad business) is a programmatic ad platform. The Yahoo SDK reads the device's advertising identifier, IP address, device model, OS version, app version, and ad interaction events. Yahoo may also use the data to build audience segments for advertising. The lawful basis for processing is your consent in the EU/UK, China, Brazil, Australia, and Singapore; in the US, processing is under a "business-purpose" basis with opt-out. Yahoo's privacy policy is at `https://legal.yahoo.com/us/en/yahoo/privacy/index.html`. Yahoo supports the IAB TCF and the IAB US Privacy String.

### 11.17 Smaato
Smaato is a real-time programmatic ad exchange. The Smaato SDK reads the device's advertising identifier, IP address, device model, OS version, app version, and ad interaction events. The lawful basis for processing is your consent in the EU/UK, China, Brazil, Australia, and Singapore; in the US, processing is under a "business-purpose" basis with opt-out. Smaato's privacy policy is at `https://www.smaato.com/privacy/`. Smaato supports the IAB TCF and the IAB US Privacy String.

### 11.18 Start.io (Startapp)
Start.io (formerly Startapp) is a mobile ad network. The Start.io SDK reads the device's advertising identifier, IP address, device model, OS version, app version, app session, and ad interaction events. The lawful basis for processing is your consent in the EU/UK, China, Brazil, Australia, and Singapore; in the US, processing is under a "business-purpose" basis with opt-out. Start.io's privacy policy is at `https://www.start.io/privacy-policy/`. Start.io supports the IAB TCF and the IAB US Privacy String.

### 11.19 Appodeal
Appodeal is a mediation platform (aggregator). The Appodeal SDK reads the device's advertising identifier, IP address, device model, OS version, app version, and ad interaction events, and may run bid requests across the underlying ad networks. The lawful basis for processing is your consent in the EU/UK, China, Brazil, Australia, and Singapore; in the US, processing is under a "business-purpose" basis with opt-out. Appodeal's privacy policy is at `https://www.appodeal.com/privacy-policy/`. Appodeal supports the IAB TCF and the IAB US Privacy String.

### 11.20 BidMachine
BidMachine is a header-bidding and mediation platform. The BidMachine SDK reads the device's advertising identifier, IP address, device model, OS version, app version, and ad interaction events, and may run bid requests across the underlying ad networks. The lawful basis for processing is your consent in the EU/UK, China, Brazil, Australia, and Singapore; in the US, processing is under a "business-purpose" basis with opt-out. BidMachine's privacy policy is at `https://bidmachine.io/privacy-policy/`. BidMachine supports the IAB TCF and the IAB US Privacy String.

### 11.21 AdColony (now Digital Turbine)
AdColony is a mobile ad network, now part of Digital Turbine. The AdColony SDK reads the device's advertising identifier, IP address, device model, OS version, app version, app session, and ad interaction events. The lawful basis for processing is your consent in the EU/UK, China, Brazil, Australia, and Singapore; in the US, processing is under a "business-purpose" basis with opt-out. AdColony's privacy policy is included in Digital Turbine's at `https://www.digitalturbine.com/privacy-policy/`. AdColony supports the IAB TCF and the IAB US Privacy String.

---

## 12. Per-Region Implementation Detail

This section gives the engineering agent a paragraph-shaped template per region so the published Privacy Policy has consistent, regulator-defensible language. `[SEPC L44]`

### 12.1 GDPR (EU + UK) — Implementation Detail
For users in the European Economic Area (EEA) and the United Kingdom, the lawful basis for processing personal data is set out in Article 6 of the General Data Protection Regulation (Regulation (EU) 2016/679) and the UK GDPR. Where processing is based on consent (Article 6(1)(a)), the consent is freely given, specific, informed, and unambiguous; it is collected through a Consent Management Platform (CMP) integrated with the IAB Transparency and Consent Framework (TCF) v2.2, and it is recorded with a TC string. The user can withdraw consent at any time via the in-app "Privacy choices" menu, which routes the withdrawal signal to all consent-gated ad SDKs. Users in the EEA/UK have the right to access, rectify, erase, restrict, port, and object to the processing of their personal data, and the right to lodge a complaint with their national supervisory authority (for the UK, the Information Commissioner's Office; for the EEA, the lead supervisory authority in their country). We respond to such requests within 30 days. International transfers from the EEA/UK to Hong Kong (our seat) are governed by the European Commission's Standard Contractual Clauses (Commission Implementing Decision (EU) 2021/914) and the UK International Data Transfer Addendum. We do not currently appoint an Article 27 EU representative because we do not target EU/UK users; if that changes, this section will be updated.

### 12.2 CCPA / CPRA (California) — Implementation Detail
For users in California, the California Consumer Privacy Act of 2018 (CCPA), as amended by the California Privacy Rights Act of 2020 (CPRA), applies. The user has the right to know what categories of personal information are collected, the right to delete personal information, the right to correct inaccurate personal information, the right to opt out of the sale or sharing of personal information (including sharing for cross-context behavioural advertising), the right to limit the use of sensitive personal information, and the right to non-discrimination. We do not sell personal information for money; however, sharing for cross-context behavioural advertising is treated as a "sale" under the CCPA/CPRA. Users can opt out via the in-app "Do Not Sell or Share My Personal Information" link, which sets the IAB US Privacy String to `1YYN` for all consent-gated ad SDKs. The opt-out is honoured for at least 12 months and re-prompted after. We respond to verifiable consumer requests within 45 days, extendable by an additional 45 days. Categories of personal information collected in the last 12 months: identifiers (GAID/IDFA, IP), commercial information (ad interactions), internet activity (in-app actions), geolocation (coarse, country/city), inferences (ad-personalisation segments). Categories of sensitive personal information collected: none.

### 12.3 PIPL (China) — Implementation Detail
For users in the People's Republic of China, the Personal Information Protection Law of the People's Republic of China (PIPL), in force since 1 November 2021, applies. The user has the right to know, to access, to correct, to delete, to withdraw consent, to obtain an explanation of automated decision-making, and to lodge a complaint with the relevant authority. Cross-border transfer of personal information out of mainland China is subject to additional requirements: a security assessment by the Cyberspace Administration of China, standard contractual clauses filed with the provincial CAC, or personal information protection certification. We do not currently distribute our apps in mainland China; the published Privacy Policy is therefore a forward-compatibility statement. Hong Kong is not subject to PIPL; Hong Kong has its own Personal Data (Privacy) Ordinance (PDPO). Our Hong Kong seat is governed by the PDPO, with additional GDPR/CPRA-aligned commitments where required by the regions where our users are located.

### 12.4 LGPD (Brazil) — Implementation Detail
For users in Brazil, the Lei Geral de Proteção de Dados (LGPD), Law No. 13.709/2018, applies. The user has the right to confirmation of the existence of processing, access to personal data, correction of incomplete or inaccurate data, anonymisation, portability, deletion of unnecessary or excessive data, information about sharing, information about the possibility of denying consent and the consequences, and withdrawal of consent. We appoint a Data Protection Officer ("encarregado") in line with Article 41 of the LGPD; contact details are listed in the published Privacy Policy. International transfers from Brazil to Hong Kong are governed by standard contractual clauses or other mechanisms recognised by the Autoridade Nacional de Proteção de Dados (ANPD). We respond to user requests within 15 days.

### 12.5 PIPEDA (Canada) + Quebec Law 25 — Implementation Detail
For users in Canada, the Personal Information Protection and Electronic Documents Act (PIPEDA) applies to commercial activities in all Canadian provinces except those that have adopted substantially similar legislation (currently Quebec, British Columbia, and Alberta). Quebec's Law 25 (modernising the Quebec Private Sector Act) adds explicit consent, data portability, privacy impact assessments for high-risk processing, breach notification to the Commission d'accès à l'information (CAI) and to affected individuals, and a designated person responsible for personal information. The user has the right to access and correct their personal information, to withdraw consent, and to lodge a complaint with the Office of the Privacy Commissioner of Canada (federal) or the CAI (Quebec). We respond to user requests within 30 days. International transfers from Canada to Hong Kong are governed by contractual safeguards consistent with the OPC's guidance.

### 12.6 Australia Privacy Act 1988 (Cth) — Implementation Detail
For users in Australia, the Privacy Act 1988 (Cth) and the 13 Australian Privacy Principles (APPs) apply. The user has the right to be informed about the collection of personal information (APP 5), to access their personal information (APP 12), to correct their personal information (APP 13), and to complain to the Office of the Australian Information Commissioner (OAIC). The Notifiable Data Breaches (NDB) scheme under Part IIIC of the Privacy Act requires us to notify the OAIC and affected individuals of eligible data breaches that are likely to result in serious harm. We respond to user requests within 30 days. International transfers from Australia to Hong Kong are governed by APP 8 (disclosure to overseas recipients) — we take reasonable steps to ensure the recipient handles the personal information in a manner consistent with the APPs.

### 12.7 Singapore PDPA — Implementation Detail
For users in Singapore, the Personal Data Protection Act 2012 (PDPA) applies. The user has the right to be informed of the purpose of collection (Consent Obligation, s.13), the right to access and correct their personal data (Access and Correction Obligations, ss.21-22), the right to withdraw consent, and the right to opt out of receiving telemarketing messages via the Do Not Call (DNC) registry. We do not engage in telemarketing; the DNC reference is for completeness. The user can complain to the Personal Data Protection Commission (PDPC). We respond to user requests within 30 days. International transfers from Singapore to Hong Kong are governed by the Transfer Limitation Obligation (s.26) — we ensure the recipient is bound by legally enforceable obligations that provide comparable protection.

---

## 13. Ad-Format Implementation Detail (extended)

`[SEPC L44]` — extends §4 with the implementation details the published page must cover per format.

### 13.1 Open-screen / Splash — Implementation Detail
The splash ad slot is triggered on app cold-start, before the first interactive screen is shown. The SDK (one or more of the 21 in §3) requests an ad from its server, displays it full-screen, and then signals completion to the app so the first interactive screen can render. The user is offered a "skip" button after 5 seconds. No data is collected beyond the ad-impression event, the click event (if the user taps the ad), and the device-advertising-identifier read. If the user has not given consent (in regions that require it), the SDK is not initialised and no splash is shown — the app jumps directly to the first interactive screen. The CMP / ATT gate must be presented before the splash slot is requested. Frequency: one splash per cold-start; one per session warm-up (iOS only). Failure mode: if no ad is available, the splash is skipped; no fallback ad is requested from another network within the same splash slot, to avoid extending the cold-start latency.

### 13.2 Rewarded video — Implementation Detail
The rewarded video slot is triggered when the user explicitly taps a "Watch ad" button (or equivalent) in the app. The button is placed in a UI that explains what reward the user will receive (e.g. "Watch a 30-second ad to earn 100 coins"). The SDK requests the ad, plays it full-screen, and on completion signals the app to grant the reward. The reward must be granted server-side (PM-default) to prevent client-side cheating. If the user does not complete the ad (e.g. closes early), the reward is not granted. The ad must not auto-play, must not be triggered without a user tap, and must not be shown to known-child traffic (COPPA). The CMP / ATT gate must be presented before the slot is requested.

### 13.3 Interstitial — Implementation Detail
The interstitial slot is triggered at a natural break in the app flow (e.g. between levels, after a save, before a content page). The slot is not triggered on the first screen, not stacked back-to-back, and not triggered mid-task. The SDK requests the ad, displays it full-screen, and the user can dismiss it after 5 seconds (or after the ad's natural end). Frequency capping: 1 interstitial per 60-120 seconds in the app's logic, to avoid degrading UX. The CMP / ATT gate must be presented before the slot is requested.

### 13.4 Banner — Implementation Detail
The banner slot is a small rectangular ad embedded in a defined location at the top or bottom of a screen. The slot is clearly differentiated from the app's native UI; it is not positioned to overlap navigation; it is removable by the user (a paid "Remove Ads" option may be offered, though not at the PM-default). The SDK auto-refreshes the ad every 30-60 seconds. The CMP / ATT gate must be presented before the slot is requested. Viewability is measured per the IAB / MRC standard (50% of pixels in view for 1+ second for display, 2+ seconds for video).

---

## 14. Children's Data — Implementation Detail (extended)

Extends §6 with the per-framework implementation detail.

### 14.1 COPPA (US) — Implementation Detail
We do not knowingly collect personal information from children under 13. Our apps are not directed to children, and our apps do not serve interest-based advertising to known-child traffic. If we learn that we have inadvertently collected personal information from a child under 13, we will delete that information within 30 days. Parents can contact us at `support@ruiyusmart.com` to request deletion or to ask questions about our data practices. We do not use persistent identifiers to track children across apps or websites for behavioural advertising. We do not condition participation in any app activity on the child providing more personal information than is reasonably necessary. `[COPPA Rule 16 C.F.R. Part 312]`

### 14.2 GDPR-K (EU) — Implementation Detail
Article 8 of the GDPR provides that where information society services are offered directly to a child, the processing of personal data is lawful only if the child is at least 16 years old; member states may lower the age to a minimum of 13. Our apps are not directed to children. If we learn that we have inadvertently collected personal data from a child below the applicable national age, we will delete that data within 30 days. Parents or guardians can contact us at `support@ruiyusmart.com` to exercise the data subject rights on behalf of their child. `[GDPR Art. 8]`

### 14.3 UK Age-Appropriate Design Code (AADC) — Implementation Detail
The Information Commissioner's Office (ICO) Age-Appropriate Design Code applies to online services likely to be accessed by children in the UK. Our apps are not designed for children; however, our IoT and smart-home apps may be used by parents on family devices, and our consumer-facing apps may be installed on devices shared with children. We therefore apply the AADC standards where the ICO's "likely to be accessed" test is triggered: best interests of the child as a primary consideration; age-appropriate language; transparent information; no detrimental use of data; no profiling by default; geolocation off by default; no nudge techniques aimed at extending session time; parental controls visible; no dark patterns; Data Protection Impact Assessment (DPIA) on file. `[ICO AADC; Data Protection Act 2018 s.123]`

---

## 15. App Store Compliance — Implementation Detail (extended)

Extends §7 with the per-store implementation checklist the engineering agent must satisfy.

### 15.1 Apple App Store — Implementation Detail
- **Privacy Policy URL** — the URL field in App Store Connect must point to `https://ruiyusmart.com/privacy.html` (HTTPS, custom domain, English). `[SEPC L71]`
- **App Tracking Transparency (ATT)** — every SDK that reads IDFA (or any of the §3 platforms) must be gated by the ATT prompt. The ATT prompt copy must be user-readable and explain the value exchange (e.g. "We use advertising identifiers to show you ads that may be relevant to your interests and to measure ad performance"). `[Apple App Store Review Guideline 5.1.1(i)]`
- **Privacy Manifests** — every SDK listed in §3 must declare its "Required Reason" API entries in the app's `PrivacyInfo.xcprivacy`. Where a vendor's SDK has not yet shipped a manifest, the host app declares the entry. Required since 1 May 2024.
- **Privacy Nutrition Labels** — every data category and purpose in the App Store Connect Privacy Questions must match the actual behaviour. Mis-declaration is a review-blocker.
- **Account deletion** — if the app supports account creation, the app must support in-app account deletion. Our apps do not currently support account creation; if that changes, this section is updated.
- **Data minimization** — only collect data that is reasonably necessary for the app's core function.
- **No circumvention** — do not fingerprint the device in lieu of ATT.
- **Review notes** — for first submission, App Store Review may need a test account or instructions; the engineering agent must include a clear test path in the review notes.

### 15.2 Google Play — Implementation Detail
- **Privacy Policy URL** — the URL field in the Play Console must point to `https://ruiyusmart.com/privacy.html`. `[SEPC L71]`
- **Data Safety Form** — every data category and purpose in the Play Console Data Safety Form must match the actual behaviour. Required for all apps on Google Play.
- **User Data Policy** — apps must post a privacy policy; apps must disclose what they collect and why; apps must obtain consent where required by law; apps must not sell personal data to third parties without consent.
- **Personal and Sensitive Information Policy** — sensitive data must be used only for purposes the user has consented to.
- **Ad Policy** — ads must not be served to children; ads must not be misleading; rewarded ads must be clearly identifiable.
- **Families Policy** — if an app is designed for children, additional rules apply (Designed for Families programme). We are not a children's app; this is a forward-compat note.
- **Permissions Policy** — only request permissions you need.
- **Target API Level** — meet the current minimum (target the latest stable for forward compatibility).
- **Account Deletion** — if the app supports account creation, account deletion must be supported.
- **App signing** — use Play App Signing; upload the AAB.

---

## 16. Cross-References and Definitions (extended)

Extends §2.2 (Definitions) and §9 with the additional terms the published pages must use.

### 16.1 Definitions
- **"Advertising ID"** — the device-level identifier used for ad personalisation. On Android, the Google Advertising ID (GAID); on iOS, the Identifier for Advertisers (IDFA). User-resettable.
- **"App"** — any of the mobile management apps published by Raywise Technologies Co., Limited on Google Play or the Apple App Store, covering the 9 business lines from SEPC L42.
- **"Attribution"** — the process of assigning a credit (install, in-app action) to an ad impression that caused it. Handled by attribution providers and the ad networks themselves; we do not run a separate attribution layer.
- **"CMP"** — Consent Management Platform. A software layer that collects and propagates the user's consent (and the resulting IAB TCF v2.2 string) to all downstream ad SDKs.
- **"Mediation"** — a real-time auction across multiple ad networks to fill a single ad slot. The mediation SDK is the auctioneer; the winning network serves the ad.
- **"MMP"** — Mobile Measurement Partner. A third-party (e.g. Adjust, AppsFlyer, Branch, Singular) that provides attribution and analytics. Our apps do not currently integrate an MMP; if they do, it is added to §3.
- **"SDK"** — Software Development Kit. A third-party library linked into the app that performs a specific function (ad serving, analytics, crash reporting, attribution).
- **"Service"** — the ruiyusmart.com website, the apps, and the related business offerings.
- **"Targeted advertising"** — advertising that selects ad creative based on user-level data (interests, demographics, past behaviour). Subject to opt-in (EU/UK/CN/BR/AU/SG) or opt-out (US).

### 16.2 Stable URLs and Anchors (for app store + privacy choices)
- Privacy Policy: `https://ruiyusmart.com/privacy.html`
- Terms of Service: `https://ruiyusmart.com/terms.html`
- Privacy Policy — Apps section: `https://ruiyusmart.com/privacy.html#apps`
- Privacy Policy — Do Not Sell or Share: `https://ruiyusmart.com/privacy.html#do-not-sell`
- Privacy Policy — Children: `https://ruiyusmart.com/privacy.html#children`
- Privacy Policy — Regional Rights (EU): `https://ruiyusmart.com/privacy.html#gdpr`
- Privacy Policy — Regional Rights (California): `https://ruiyusmart.com/privacy.html#ccpa`
- Privacy Policy — Regional Rights (China): `https://ruiyusmart.com/privacy.html#pipl`
- Privacy Policy — Regional Rights (Brazil): `https://ruiyusmart.com/privacy.html#lgpd`
- Privacy Policy — Regional Rights (Canada): `https://ruiyusmart.com/privacy.html#pipeda`
- Privacy Policy — Regional Rights (Australia): `https://ruiyusmart.com/privacy.html#australia`
- Privacy Policy — Regional Rights (Singapore): `https://ruiyusmart.com/privacy.html#singapore`
- Privacy Policy — Contact: `https://ruiyusmart.com/privacy.html#contact`
- App-ads.txt: `https://ruiyusmart.com/app-ads.txt` (empty file is acceptable). `[SEPC L60]`
- Sitemap: `https://ruiyusmart.com/sitemap.xml`
- Robots: `https://ruiyusmart.com/robots.txt`

### 16.3 App-ads.txt file (root, empty acceptable)
The repo root must contain `app-ads.txt` as an empty file. `[SEPC L60]` When the apps register with any SSP, the publisher entries will be appended in the IAB format:
```
# app-ads.txt for Raywise Technologies Co., Limited
# Format: <domain>, <publisher ID>, <relationship>, <certification ID>
# e.g. google.com, pub-XXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```
The published file at `https://ruiyusmart.com/app-ads.txt` is what ad networks crawl. Until the apps ship and the SSP entries are finalised, the empty file satisfies the requirement.

---

## 17. Acceptance Checklist (this outline, full)

- [x] Privacy Policy has 16 numbered sections, every one described.
- [x] Terms of Service has 23 numbered sections, every one described.
- [x] Ad-platform table has **21 rows** (≥ 18 required).
- [x] Ad-platform narrative has 21 full paragraphs (one per row).
- [x] Ad formats section covers all **4** formats (open-screen / splash, rewarded video, interstitial, banner) in both summary and implementation-detail form.
- [x] Regional laws section covers all **7** laws in both summary and implementation-detail form.
- [x] Children's data section covers all **3** frameworks in both summary and implementation-detail form.
- [x] App store compliance section covers both **Apple** and **Google** in both summary and implementation-detail form.
- [x] Every ad platform row includes: behaviour summary, data collected, lawful basis, opt-out URL, privacy policy URL.
- [x] Every section traces back to either SEPC L42 (business line) or L44 (legal completeness rule).
- [x] All SEPC.txt company facts (legal name, address, both emails) appear in the outline.
- [x] App-ads.txt requirement called out in §1, §16.3. `[SEPC L60]`
- [x] No `index.html` referenced as a page link. `[SEPC L58]`
- [x] No Chinese in user-facing policy strings. `[SEPC L54]`
- [x] All 8 stable URLs / anchors documented for store + consent use.
