## Context

The landing is a fully static Vite + React 18 + TS single page (no router, no backend) deployed to Azure Static Web Apps. Styling lives in one ~2000-line global `src/styles.css` using `--ix-*` custom properties; theming is a `data-theme` attribute on `<html>` with a pre-paint inline script; content is bilingual (EN/ES) via `useLanguage`. The page already uses IntersectionObserver reveals (`useReveal`), a count-up (`useCountUp`), scroll state (`useScrollState`), CSS marquees, drifting orbs and a static brand gradient.

This change is a **bold visual modernization** (the "Audaz" option) layered on top of that foundation. The hard constraint is **no new runtime dependencies**: the build must stay `tsc -b && vite build`, and `noUnusedLocals`/`noUnusedParameters` is the only quality gate, so every new hook and parameter must be wired. All work must preserve theming, i18n, accessibility and the static deploy.

## Goals / Non-Goals

**Goals:**
- Raise perceived craft with living motion, cursor-reactive depth and bold layout rhythm.
- Implement entirely with modern CSS (`@property`, `color-mix()`, `animation-timeline: scroll()/view()`, conic gradients, mask) plus a few tiny, fully-typed React hooks.
- Keep the page fast: GPU-only `transform`/`opacity`, no scroll-handler JS, no per-frame React state.
- Degrade gracefully: full functionality under reduced-motion, coarse pointers, reduced-data, and on browsers lacking `@property`/`animation-timeline`.
- Preserve dark/light theming and EN/ES content with no regressions.

**Non-Goals:**
- No new dependencies, no animation library (Framer Motion / GSAP), no router or multi-page.
- No backend, no contact form submission, no analytics.
- No rewrite of existing marketing copy (a small amount of *new* bilingual copy for the closing CTA is in scope — see Open Questions).
- No change to the theme-storage or `ix-lang`/`ix-theme` mechanisms.

## Decisions

### 1. Pure CSS + tiny hooks, no animation library
Use modern CSS primitives and ~3 small hooks instead of a library. **Rationale:** the project's whole identity is zero-dependency, static and fast; Framer Motion/GSAP would add tens of KB for effects CSS now does natively. **Alternatives:** Framer Motion (rejected — bundle weight, overkill for declarative effects); GSAP ScrollTrigger (rejected — same).

### 2. Living gradient via `@property`
Register an angle custom property and animate it:
```css
@property --ix-grad-angle { syntax: "<angle>"; inherits: false; initial-value: 135deg; }
```
The gradient becomes `linear-gradient(var(--ix-grad-angle), …)` with a slow keyframe rotating the angle. **Rationale:** `@property` lets the angle interpolate smoothly on the GPU; a plain custom property cannot animate. **Alternatives:** animating `background-position` on an oversized gradient (works but less crisp); a rAF JS loop (rejected — JS cost, re-renders). **Fallback:** `@supports not (background: linear-gradient(var(--ix-grad-angle), red, red))` keeps the current static gradient.

### 3. Scroll effects via `animation-timeline`, not scroll listeners
Hero parallax and any scroll-progress visuals use `animation-timeline: scroll()` / `view()`. **Rationale:** runs off the main thread, jank-free, no JS. **Alternatives:** IntersectionObserver (already used for *reveal*, but not for continuous parallax); scroll event + rAF (rejected — main-thread cost). **Fallback:** wrapped in `@supports (animation-timeline: scroll())`; without support the hero is static (current behavior). `useScrollState`/`useReveal` stay as-is for what they already do well.

### 4. Pointer effects write CSS variables via refs, never React state
`usePointerSpotlight` and `useTilt` attach `pointermove`/`pointerleave` listeners and write `--mx`/`--my` (and tilt angles) directly to the element's `style` inside a `requestAnimationFrame`, reading `matchMedia('(pointer: fine)')` and `(prefers-reduced-motion)` to no-op otherwise. **Rationale:** moving the pointer must cause zero React re-renders; CSS consumes the variables. **Alternatives:** `useState` per move (rejected — re-render storm); a global mousemove (possible later optimization, start per-element for clarity).

### 5. Spotlight as a masked radial overlay
Each card gets a pseudo-element/overlay painting `radial-gradient(circle at var(--mx) var(--my), accent, transparent)` clipped to the card radius, fading via opacity on enter/leave. Reuses/upgrades the existing `.card__halo`. **Alternatives:** `box-shadow` follow (rejected — can't track a point well).

### 6. 3D tilt with `transform-style: preserve-3d`
Hero visual gets `perspective`; the card rotates `rotateX/rotateY` from pointer offset; chips/logo get small `translateZ` for parallax. Resting state keeps today's `rotate(-2deg)`. Spring-back via transition on `pointerleave`.

### 7. Bento via CSS grid spans, same card component
Services keeps its card component; the grid gains explicit `grid-template` areas/spans for an asymmetric bento. The featured card already spans — we generalize this into a deliberate bento (e.g. one large tile + varied small tiles). DOM/classname tweaks are internal only. **Alternative:** masonry (`grid-template-rows: masonry`) rejected — limited support today.

### 8. Grain as inline SVG `fractalNoise`
A fixed, `aria-hidden`, pointer-events-none `::after` (or dedicated layer) uses a tiny inline `data:` SVG `feTurbulence` as `background-image`, with `mix-blend-mode` and low opacity tuned per theme. **Rationale:** no extra network request, resolution-independent, a few hundred bytes. **Alternative:** PNG noise tile (rejected — asset request, fixed resolution). Dropped under `prefers-reduced-data`.

### 9. Scroll-spy via one IntersectionObserver hook
`useActiveSection(ids)` observes the section anchors and returns the active id; the header sets `aria-current="true"` and an active class on the matching link. **Rationale:** consistent with the existing IO approach; cheap. **Alternative:** scroll math (rejected).

### 10. Color/contrast: extend tokens with `color-mix()`
Introduce a few additional `--ix-*` tokens (e.g. a stronger heading color, an `accent-strong`) derived with `color-mix()` for the bolder look, scoped per theme. Keep the existing naming convention; do not rename existing tokens.

## Risks / Trade-offs

- **`@property` / `animation-timeline` support gaps (older Safari/Firefox)** → wrap each in `@supports`; base experience (static gradient, no parallax) is always intact. Effects are progressive enhancement.
- **Compositing cost of grain + large blurs + many gradients** → cap simultaneous blur layers, prefer `transform`/`opacity`, gate the heaviest layers behind `prefers-reduced-data` and coarse-pointer; sanity-check on mid-tier hardware.
- **Pointer hooks causing jank or re-renders** → write to `style`/CSS vars via ref inside rAF; never `setState` on move; throttle to one write per frame.
- **`noUnusedLocals`/`noUnusedParameters` build failures** → ensure every new hook return value and param is consumed; run `npm run type-check` as each piece lands.
- **Kinetic word-splitting breaking i18n / screen readers** → wrap words at render time keeping the text node contiguous per word; verify EN/ES read correctly; if needed, mark the animated container `aria-label` with the full string and the spans `aria-hidden`.
- **Bento + hero restructure changes internal DOM/classnames (BREAKING internal contract)** → contained to component + CSS; no public/exported API; reflected in the specs.
- **Touch devices getting desktop-only effects** → all pointer effects gated on `(pointer: fine)`; verify a clean static resting state on touch.
- **Theme drift** (an effect tuned for dark looking wrong in light) → every new layer gets explicit `[data-theme='light']` tuning, matching the existing pattern.

## Migration Plan

Incremental and front-end only; each step must leave `npm run build` green and the page shippable.

1. **Foundation** — add governance tokens/utilities, motion/pointer/data guards, the `@property` living gradient and the grain+aurora layer (`visual-foundation`).
2. **Micro-interactions** — refine button/pill/link hover & press states (`interactive-surfaces`, low risk first).
3. **Pointer depth** — `usePointerSpotlight` + spotlight overlay on cards; `useTilt` on the hero card (`interactive-surfaces`).
4. **Hero** — kinetic title reveal, logo draw-in, scroll parallax (`hero-redesign`).
5. **Layout & rhythm** — Services bento, aurora dividers, `useActiveSection` scroll-spy nav, closing CTA micro-section (`layout-and-rhythm`).
6. **Pass** — cross-theme, cross-language, reduced-motion, coarse-pointer and Lighthouse check.

**Rollback:** purely client-side; revert the commit(s). Because effects are additive CSS layers + opt-in hook wiring, an individual effect can be disabled by removing its hook call / CSS block without touching content or structure. No data or config migration.

## Open Questions

- **Closing CTA copy:** the CTA micro-section needs short new EN + ES strings in `useLanguage`. What headline/sub/button label and `mailto`/anchor target? (Default: reuse the Contact CTA intent and target until specified.)
- **Gradient animation breadth & speed:** animate the gradient on text + logo only, or also on filled buttons? What loop duration reads as "alive" but not distracting (proposing ~8–16s)?
- **Bento composition:** exact tile arrangement — keep the current "Payments" card dominant, or promote a different service as the hero tile?
- **New token scope:** how much bolder on contrast? Confirm we extend tokens rather than retune the existing palette.
