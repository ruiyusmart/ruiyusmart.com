# Design Tokens — Raywise Technologies

> Source of truth for every color, type, spacing, radius, shadow, and motion value used across `ruiyusmart.com`. The frontend implementation MUST read tokens from this file via the CSS custom properties declared in `css/tokens.css` (one-to-one mirror).

**Last updated:** 2026-10-08
**Scope:** Whole site (Home, Services, Culture, News, Contact) + 404 + email templates.

---

## 1. Color

### 1.1 Brand palette (hex → CSS variable)

| Token | Hex | Role |
|---|---|---|
| `--color-ink` | `#0E0F12` | Deep neutral — primary surface (dark sections, hero). |
| `--color-ink-soft` | `#1A1C22` | Elevated dark surface (cards over dark, modal). |
| `--color-ink-line` | `#2A2D36` | Hairline on dark surfaces. |
| `--color-paper` | `#F5F4F0` | Off-white — primary light surface. |
| `--color-paper-warm` | `#EFEAE0` | Tinted off-white (alternating section). |
| `--color-paper-line` | `#D9D5C8` | Hairline on light surfaces. |
| `--color-primary` | `#1F6FEB` | Accent blue — primary CTAs, links, focus ring. |
| `--color-primary-deep` | `#1655B8` | Hover state for primary. |
| `--color-primary-soft` | `#E4ECFB` | Tinted blue background (callout pills, badges). |
| `--color-gold` | `#C9A14A` | Accent gold — premium accents, numbers, kinetic type. |
| `--color-gold-soft` | `#F2E7C8` | Tinted gold background. |
| `--color-coral` | `#FF6F5B` | Playful accent — mascots, hover highlight, badges. |
| `--color-coral-soft` | `#FFE3DD` | Tinted coral background. |
| `--color-success` | `#1E9E63` | Confirmation, online indicator. |
| `--color-warning` | `#E0A11A` | Caution banner. |
| `--color-danger` | `#D6453B` | Error / required field. |
| `--color-text-strong` | `#0E0F12` | Body text on light. |
| `--color-text` | `#2B2D34` | Default body text on light. |
| `--color-text-muted` | `#6B6E78` | Captions, helper text. |
| `--color-text-invert` | `#F5F4F0` | Body text on dark. |
| `--color-text-invert-muted` | `#9A9CA3` | Muted text on dark. |

### 1.2 Gradient tokens

| Token | Value | Use |
|---|---|---|
| `--grad-hero-dark` | `linear-gradient(135deg, #0E0F12 0%, #1A1C22 55%, #1655B8 100%)` | Dark hero overlay. |
| `--grad-paper-warm` | `linear-gradient(180deg, #F5F4F0 0%, #EFEAE0 100%)` | Alternating section. |
| `--grad-gold-sheen` | `linear-gradient(120deg, #C9A14A 0%, #F2E7C8 45%, #C9A14A 100%)` | Kinetic underline / divider. |
| `--grad-coral-pulse` | `radial-gradient(circle at 30% 50%, #FF6F5B 0%, transparent 60%)` | Mascot glow. |

---

## 2. Typography

Fonts are loaded from Google Fonts via `<link>` in every page `<head>`. Tokens are sized in `rem` so the whole scale is user-zoomable.

### 2.1 Font families

| Token | Stack | Use |
|---|---|---|
| `--font-display` | `'Fraunces', 'Playfair Display', Georgia, serif` | Hero headlines, kinetic type. |
| `--font-sans` | `'Inter', 'Manrope', system-ui, -apple-system, 'Segoe UI', sans-serif` | Body, UI, buttons. |
| `--font-mono` | `'JetBrains Mono', 'SFMono-Regular', Menlo, monospace` | Numbers, badges, code. |

### 2.2 Type scale

| Token | Size (rem / px @ 16px) | Weight | Line-height | Letter-spacing | Use |
|---|---|---|---|---|---|
| `--text-hero-xl` | `5.5rem / 88px` | 600 | 0.95 | `-0.035em` | Home hero headline. |
| `--text-hero-lg` | `4rem / 64px` | 600 | 1.0 | `-0.03em` | Page hero. |
| `--text-display-lg` | `3rem / 48px` | 600 | 1.05 | `-0.025em` | Section opener. |
| `--text-display-md` | `2.25rem / 36px` | 600 | 1.1 | `-0.02em` | Card title. |
| `--text-display-sm` | `1.75rem / 28px` | 500 | 1.2 | `-0.01em` | Sub-section. |
| `--text-h1` | `2.5rem / 40px` | 600 | 1.15 | `-0.015em` | Page H1. |
| `--text-h2` | `2rem / 32px` | 600 | 1.2 | `-0.01em` | Page H2. |
| `--text-h3` | `1.5rem / 24px` | 600 | 1.3 | `-0.005em` | Card / sub-block. |
| `--text-body-lg` | `1.125rem / 18px` | 400 | 1.6 | `0` | Lede paragraph. |
| `--text-body` | `1rem / 16px` | 400 | 1.6 | `0` | Default body. |
| `--text-body-sm` | `0.875rem / 14px` | 400 | 1.55 | `0` | Helper, meta. |
| `--text-caption` | `0.75rem / 12px` | 500 | 1.4 | `0.04em uppercase` | Eyebrow, badge. |
| `--text-mono-lg` | `1.25rem / 20px` | 500 | 1.4 | `0` | Big numbers. |
| `--text-mono` | `0.875rem / 14px` | 500 | 1.4 | `0` | Code, telemetry. |

### 2.3 Font loading (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
/>
```

---

## 3. Spacing scale (px / rem @16px)

`--space-{n}` values map 1:1 to the spacing rhythm. Use these for margin, padding, gap.

| Token | px | rem | Use |
|---|---|---|---|
| `--space-1` | 4 | 0.25 | Tight inline gap. |
| `--space-2` | 8 | 0.5 | Icon-text gap. |
| `--space-3` | 12 | 0.75 | Stack small. |
| `--space-4` | 16 | 1.0 | Default inline. |
| `--space-6` | 24 | 1.5 | Card padding (compact). |
| `--space-8` | 32 | 2.0 | Card padding, section gutter (mobile). |
| `--space-12` | 48 | 3.0 | Section gap (mobile). |
| `--space-16` | 64 | 4.0 | Section gap (desktop). |
| `--space-24` | 96 | 6.0 | Section padding (hero). |
| `--space-32` | 128 | 8.0 | Page bottom padding. |

### Layout widths

| Token | Value | Use |
|---|---|---|
| `--container-narrow` | `720px` | Article body, 404 panel. |
| `--container-default` | `1200px` | Most content. |
| `--container-wide` | `1440px` | Wide hero, marquee rails. |
| `--container-bleed` | `100vw` | Full-bleed backgrounds. |

---

## 4. Radii

| Token | Value | Use |
|---|---|---|
| `--radius-xs` | `4px` | Inline tag. |
| `--radius-sm` | `8px` | Button, small input. |
| `--radius-md` | `12px` | Card, modal. |
| `--radius-lg` | `20px` | Featured card. |
| `--radius-xl` | `32px` | Hero panel. |
| `--radius-pill` | `999px` | Pill button, badge. |

---

## 5. Shadows

| Token | Value | Use |
|---|---|---|
| `--shadow-1` | `0 1px 2px rgba(14, 15, 18, 0.06), 0 1px 1px rgba(14, 15, 18, 0.04)` | Inline element. |
| `--shadow-2` | `0 6px 16px rgba(14, 15, 18, 0.08), 0 2px 4px rgba(14, 15, 18, 0.04)` | Card default. |
| `--shadow-3` | `0 16px 40px rgba(14, 15, 18, 0.12), 0 4px 12px rgba(14, 15, 18, 0.06)` | Featured card / hover. |
| `--shadow-4` | `0 32px 80px rgba(14, 15, 18, 0.18), 0 8px 24px rgba(14, 15, 18, 0.08)` | Modal, popover. |
| `--shadow-glow` | `0 0 0 6px rgba(31, 111, 235, 0.18)` | Focus ring. |
| `--shadow-gold` | `0 12px 40px -8px rgba(201, 161, 74, 0.45)` | Gold CTA hover. |

---

## 6. Motion

### 6.1 Durations (ms)

| Token | ms | Use |
|---|---|---|
| `--dur-instant` | `80` | Color / opacity toggle. |
| `--dur-fast` | `160` | Hover, button press. |
| `--dur-base` | `260` | Card lift, link underline. |
| `--dur-slow` | `480` | Page enter, panel. |
| `--dur-cinematic` | `900` | Hero kinetic, parallax settle. |

### 6.2 Easings (cubic-bezier)

| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default exit curve (ease-out-expo). |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Symmetric (in-out). |
| `--ease-soft` | `cubic-bezier(0.4, 0, 0.2, 1)` | Material-style. |
| `--ease-back` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring back (overshoot). |
| `--ease-marquee` | `linear` | Marquee / ticker (constant). |

### 6.3 Delays (ms)

| Token | ms | Use |
|---|---|---|
| `--delay-1` | `60` | Stagger child 1. |
| `--delay-2` | `120` | Stagger child 2. |
| `--delay-3` | `180` | Stagger child 3. |
| `--delay-4` | `240` | Stagger child 4. |

### 6.4 Reduced motion

All animations and transitions MUST respect:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 7. Breakpoints

| Token | px | Use |
|---|---|---|
| `--bp-sm` | `640px` | Small tablet. |
| `--bp-md` | `768px` | Tablet. |
| `--bp-lg` | `1024px` | Desktop small. |
| `--bp-xl` | `1280px` | Desktop. |
| `--bp-2xl` | `1536px` | Wide desktop. |

Mobile-first: write base styles for `< 640px`, layer up with `@media (min-width: var(--bp-md))` etc.

---

## 8. Z-index

| Token | Value | Use |
|---|---|---|
| `--z-base` | `0` | Default. |
| `--z-raised` | `10` | Sticky header at rest. |
| `--z-header` | `50` | Header bar. |
| `--z-overlay` | `80` | Modal backdrop. |
| `--z-modal` | `90` | Modal panel. |
| `--z-toast` | `100` | Toast / notification. |

---

## 9. Border

| Token | Value | Use |
|---|---|---|
| `--border-thin` | `1px solid var(--color-paper-line)` | Default light border. |
| `--border-thin-dark` | `1px solid var(--color-ink-line)` | Default dark border. |
| `--border-thick` | `2px solid var(--color-ink)` | Emphasized divider. |
| `--border-gold` | `1px solid var(--color-gold)` | Premium accent. |

---

## 10. CSS variable dump (copy-paste reference)

This is the literal block that `css/tokens.css` should expose. Keep this list in sync with the table above.

```css
:root {
  /* Color */
  --color-ink: #0E0F12;
  --color-ink-soft: #1A1C22;
  --color-ink-line: #2A2D36;
  --color-paper: #F5F4F0;
  --color-paper-warm: #EFEAE0;
  --color-paper-line: #D9D5C8;
  --color-primary: #1F6FEB;
  --color-primary-deep: #1655B8;
  --color-primary-soft: #E4ECFB;
  --color-gold: #C9A14A;
  --color-gold-soft: #F2E7C8;
  --color-coral: #FF6F5B;
  --color-coral-soft: #FFE3DD;
  --color-success: #1E9E63;
  --color-warning: #E0A11A;
  --color-danger: #D6453B;
  --color-text-strong: #0E0F12;
  --color-text: #2B2D34;
  --color-text-muted: #6B6E78;
  --color-text-invert: #F5F4F0;
  --color-text-invert-muted: #9A9CA3;

  /* Gradient */
  --grad-hero-dark: linear-gradient(135deg, #0E0F12 0%, #1A1C22 55%, #1655B8 100%);
  --grad-paper-warm: linear-gradient(180deg, #F5F4F0 0%, #EFEAE0 100%);
  --grad-gold-sheen: linear-gradient(120deg, #C9A14A 0%, #F2E7C8 45%, #C9A14A 100%);
  --grad-coral-pulse: radial-gradient(circle at 30% 50%, #FF6F5B 0%, transparent 60%);

  /* Type */
  --font-display: 'Fraunces', 'Playfair Display', Georgia, serif;
  --font-sans: 'Inter', 'Manrope', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'SFMono-Regular', Menlo, monospace;
  --text-hero-xl: 5.5rem;
  --text-hero-lg: 4rem;
  --text-display-lg: 3rem;
  --text-display-md: 2.25rem;
  --text-display-sm: 1.75rem;
  --text-h1: 2.5rem;
  --text-h2: 2rem;
  --text-h3: 1.5rem;
  --text-body-lg: 1.125rem;
  --text-body: 1rem;
  --text-body-sm: 0.875rem;
  --text-caption: 0.75rem;
  --text-mono-lg: 1.25rem;
  --text-mono: 0.875rem;

  /* Spacing */
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px;
  --space-24: 96px; --space-32: 128px;
  --container-narrow: 720px;
  --container-default: 1200px;
  --container-wide: 1440px;

  /* Radius */
  --radius-xs: 4px; --radius-sm: 8px; --radius-md: 12px;
  --radius-lg: 20px; --radius-xl: 32px; --radius-pill: 999px;

  /* Shadow */
  --shadow-1: 0 1px 2px rgba(14,15,18,0.06), 0 1px 1px rgba(14,15,18,0.04);
  --shadow-2: 0 6px 16px rgba(14,15,18,0.08), 0 2px 4px rgba(14,15,18,0.04);
  --shadow-3: 0 16px 40px rgba(14,15,18,0.12), 0 4px 12px rgba(14,15,18,0.06);
  --shadow-4: 0 32px 80px rgba(14,15,18,0.18), 0 8px 24px rgba(14,15,18,0.08);
  --shadow-glow: 0 0 0 6px rgba(31,111,235,0.18);
  --shadow-gold: 0 12px 40px -8px rgba(201,161,74,0.45);

  /* Motion */
  --dur-instant: 80ms; --dur-fast: 160ms; --dur-base: 260ms;
  --dur-slow: 480ms; --dur-cinematic: 900ms;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-soft: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-back: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-marquee: linear;
  --delay-1: 60ms; --delay-2: 120ms; --delay-3: 180ms; --delay-4: 240ms;

  /* Breakpoints (reference; use in @media) */
  --bp-sm: 640px; --bp-md: 768px; --bp-lg: 1024px;
  --bp-xl: 1280px; --bp-2xl: 1536px;

  /* Z */
  --z-base: 0; --z-raised: 10; --z-header: 50;
  --z-overlay: 80; --z-modal: 90; --z-toast: 100;

  /* Border */
  --border-thin: 1px solid var(--color-paper-line);
  --border-thin-dark: 1px solid var(--color-ink-line);
  --border-thick: 2px solid var(--color-ink);
  --border-gold: 1px solid var(--color-gold);
}
```
