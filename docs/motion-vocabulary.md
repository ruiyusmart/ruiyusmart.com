# Motion Vocabulary — Raywise Technologies

> Catalog of every animation primitive used on `ruiyusmart.com`. Each entry: name, keyframes (exact percentages), timing, easing, trigger, accessibility fallback. All entries MUST be wrapped in the global `prefers-reduced-motion` rule from `design-tokens.md` § 6.4.

Implementation notes:
- All durations / easings reference CSS custom properties from `design-tokens.md` § 6 (`--dur-*`, `--ease-*`).
- Each keyframe block is also published as a CSS class under `.rwt-anim--{name}` in `css/motion.css`.
- The JS layer (`js/motion.js`) is responsible only for adding `is-in-view` toggles via IntersectionObserver, never for hard-coded keyframes.
- All transitions also use the `is-in-view` modifier so animations never play "behind" the user.

---

## 1. `fade-up`

**Purpose:** The default reveal. Element rises 24px and fades in.
**Trigger:** `[data-fade-up].is-in-view`.
**Keyframes:**

```css
@keyframes rwt-fade-up {
  0%   { opacity: 0; transform: translate3d(0, 24px, 0); }
  100% { opacity: 1; transform: translate3d(0, 0, 0); }
}
```

- Duration: `var(--dur-slow)` (480ms).
- Easing: `var(--ease-out)`.
- Stagger: children get `--delay-1` … `--delay-4`.

**Reduced-motion fallback:** `opacity: 1; transform: none;` (no movement, no fade).

---

## 2. `split-text-kinetic`

**Purpose:** Display headline reveals character-by-character with a 4ms stagger.
**Trigger:** `[data-split-text].is-in-view`.
**Mechanism:** JS splits each word's text into `<span class="rwt-split__char">` nodes, then each char animates.

**Keyframes (per character):**

```css
@keyframes rwt-split-rise {
  0%   { opacity: 0; transform: translate3d(0, 60%, 0) skewY(8deg); }
  60%  { opacity: 1; }
  100% { opacity: 1; transform: translate3d(0, 0, 0) skewY(0); }
}
```

- Duration per char: `var(--dur-slow)` (480ms).
- Easing: `var(--ease-out)`.
- Stagger: `cubic-bezier` curve, 24ms between characters.
- Container: each character starts hidden via `overflow: hidden` on a wrapper span, so the slide-in feels like a curtain.

**Reduced-motion fallback:** All characters rendered immediately, `opacity: 1`, no transform.

---

## 3. `marquee`

**Purpose:** Infinite horizontal ticker for service / partner lists.
**Trigger:** `[data-component="marquee"]`.

**Keyframes:**

```css
@keyframes rwt-marquee {
  0%   { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); } /* content is duplicated */
}
```

- Duration: `40s` baseline (overridable via `--marquee-dur` per instance).
- Easing: `var(--ease-marquee)` (linear).
- Pauses on `:hover` and on `prefers-reduced-motion: reduce`.

**Reduced-motion fallback:** Track scrolls manually to start position with `transform: none`; mark with a static "—" break instead of motion.

---

## 4. `parallax`

**Purpose:** Element moves at a fraction of scroll speed.
**Trigger:** `[data-parallax]`, read `data-parallax-speed` (0–1).
**Mechanism:** `requestAnimationFrame` scroll listener updates `transform: translate3d(0, calc(scrollY * speed * -1), 0)`. No keyframe — this is procedural.

- Default speed: `0.2`.
- Clamp: `0 ≤ translateY ≤ 200px` to avoid runaway on tall pages.
- `will-change: transform` while in view.

**Reduced-motion fallback:** Element receives `transform: none` on every scroll tick.

---

## 5. `scroll-progress`

**Purpose:** A fixed top bar that fills 0→100% with the page scroll.
**Trigger:** `[data-scroll-progress]`.

**Keyframes:** none — JS sets `--scroll-progress: var(--p)` and CSS renders.

```css
.rwt-scroll-progress {
  position: fixed; top: 0; left: 0; right: 0; height: 3px;
  background: var(--grad-gold-sheen);
  transform-origin: left center;
  transform: scaleX(var(--scroll-progress, 0));
  transition: transform var(--dur-instant) linear;
  z-index: var(--z-header);
}
```

**Reduced-motion fallback:** Same fill, but `transition-duration: 0` — appears instantly at end on snap-scroll pages.

---

## 6. `image-sequence`

**Purpose:** A frame-swapping image stack on hover or scroll progress (used for product reveals, factory close-ups).
**Trigger:** `[data-image-sequence]`, attribute `data-trigger="hover" | "scroll"`.
**Mechanism:** Pre-rendered frames are absolutely positioned; `opacity` is animated in stack — only one visible at a time.

**Keyframes:**

```css
@keyframes rwt-frame-flash {
  0%, 40%   { opacity: 1; }
  50%, 100% { opacity: 0; }
}
```

- Per-frame duration: `120ms` (staggered across stack).
- Easing: `var(--ease-in-out)`.
- Total: 8 frames ≈ `1s`.

**Reduced-motion fallback:** Show middle frame statically.

---

## 7. `magnetic-cta`

**Purpose:** Primary CTA follows the cursor up to 8px, snapping back on leave.
**Trigger:** `[data-magnetic]`.
**Mechanism:** `mousemove` handler writes `transform: translate3d(x, y, 0)` with eased lerp; on `mouseleave`, springs back via `cubic-bezier(--ease-back)`.

- Max offset: `8px`.
- Spring back duration: `var(--dur-base)`.
- Easing: `var(--ease-out)` (active), `var(--ease-back)` (release).

**Reduced-motion fallback:** Disabled — CTA remains static.

---

## 8. `mascot-idle`

**Purpose:** Subtle breathing/bobbing for SVG mascots scattered through the page.
**Trigger:** `[data-mascot="idle"]`.

**Keyframes (default — vertical breathing):**

```css
@keyframes rwt-mascot-idle {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0); }
  50%      { transform: translate3d(0, -4px, 0) rotate(0.5deg); }
}
```

- Duration: `3.4s` (different mascots use slightly different durations to feel asynchronous).
- Easing: `var(--ease-in-out)`.
- Iteration: `infinite`.

**Alternate variant — head tilt:**

```css
@keyframes rwt-mascot-tilt {
  0%, 100% { transform: rotate(-1.2deg); }
  50%      { transform: rotate(1.2deg); }
}
```

- Apply to `g.rwt-mascot__head` only.

**Reduced-motion fallback:** `transform: none; animation: none;` — mascots render static.

---

## 9. Bonus: Page transition (curtain)

**Purpose:** When the user navigates between pages, a gold sheen curtain wipes across.
**Trigger:** automatically on internal `<a>` clicks via `js/motion.js` (intercepting, using `View Transitions API` where supported; CSS keyframes fallback).

**Keyframes:**

```css
@keyframes rwt-curtain-out {
  0%   { transform: scaleX(0); transform-origin: right center; }
  100% { transform: scaleX(1); transform-origin: right center; }
}
@keyframes rwt-curtain-in {
  0%   { transform: scaleX(1); transform-origin: left center; }
  100% { transform: scaleX(0); transform-origin: left center; }
}
```

- Duration: `var(--dur-base)`.
- Easing: `var(--ease-in-out)`.

**Reduced-motion fallback:** No curtain; instant navigation.

---

## 10. Bonus: Magnetic section reveal (scroll pin)

**Purpose:** A pinned section's content advances as the user scrolls (used on Services page chapter list).
**Mechanism:** `position: sticky; top: 0;` plus per-child `transform: translate3d` based on `IntersectionObserver` thresholds.

**Reduced-motion fallback:** Section is rendered as a normal vertical stack.

---

## Accessibility rules (always)

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
  [data-parallax],
  [data-magnetic] { transform: none !important; }
  [data-marquee] .rwt-marquee__track { animation: none !important; transform: none !important; }
}
```

JS must additionally check `window.matchMedia('(prefers-reduced-motion: reduce)').matches` before binding `mousemove` / scroll listeners and skip them.

---

## Performance rules (always)

- `will-change: transform` only while a node is in view; remove on `IntersectionObserver` leave.
- Never animate `top` / `left` / `width` / `height` — only `transform` and `opacity`.
- All keyframe targets are GPU-compositable layers.
- No animation exceeds `1200ms` total wall time per element.
- `transform: translate3d(0, 0, 0)` is used in idle states to promote layers lazily.
