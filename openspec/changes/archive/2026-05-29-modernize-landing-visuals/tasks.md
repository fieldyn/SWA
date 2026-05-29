## 1. Foundation & governance (visual-foundation)

- [x] 1.1 Add motion/input/data guards: a `matchMedia` helper (or inline checks) for `(prefers-reduced-motion: reduce)`, `(pointer: fine)` and `(prefers-reduced-data: reduce)`, reusable by hooks
- [x] 1.2 Add a global reduced-motion CSS block that neutralizes all new animations (extend the existing `@media (prefers-reduced-motion: reduce)` rule)
- [x] 1.3 Extend `--ix-*` tokens for the bolder look (e.g. `--ix-accent-strong`, stronger heading color) using `color-mix()`, with `[data-theme='light']` overrides; do not rename existing tokens
- [x] 1.4 Verify `npm run type-check` and `npm run build` stay green after foundation changes

## 2. Living gradient + texture (visual-foundation)

- [x] 2.1 Register `@property --ix-grad-angle` and refactor `--ix-gradient` to use the angle variable
- [x] 2.2 Add a slow rotation keyframe for `--ix-grad-angle` applied to gradient text, primary buttons, logo and accents
- [x] 2.3 Add `@supports` fallback so unsupported browsers keep the current static gradient
- [x] 2.4 Add the film-grain layer (inline SVG `feTurbulence` data-URI, fixed, `aria-hidden`, `pointer-events:none`) with per-theme opacity/blend tuning
- [x] 2.5 Add/refresh the aurora background glow over the existing radial gradients; verify text contrast stays WCAG AA in both themes
- [x] 2.6 Drop grain + heavy blur under `@media (prefers-reduced-data: reduce)`

## 3. Micro-interactions (interactive-surfaces)

- [x] 3.1 Refine hover/press feedback on `.hero__btn`, `.contact__cta`, `.header__cta` (lift, gradient sheen) keeping `:focus-visible` rings intact
- [x] 3.2 Refine `.pill` and link (`.header__link`, `.footer__link`, `.card__link`) hover/active states
- [x] 3.3 Confirm keyboard activation shows press + focus state on all controls

## 4. Pointer depth: spotlight + tilt (interactive-surfaces)

- [x] 4.1 Create `usePointerSpotlight` hook: writes `--mx`/`--my` to the element via ref inside `requestAnimationFrame`; no-ops on coarse pointer / reduced motion; no React state
- [x] 4.2 Upgrade `.card__halo` into a pointer-tracked radial spotlight overlay driven by `--mx`/`--my`; fade in/out on enter/leave
- [x] 4.3 Wire spotlight into Service cards, strength cards and the contact card
- [x] 4.4 Create `useTilt` hook: pointer-driven `rotateX/rotateY` + layer parallax via CSS vars; spring-back on leave; gated by pointer/motion guards
- [x] 4.5 Apply tilt + `preserve-3d`/`perspective` to `.hero__mark-card`, with chips/logo on parallax planes; keep resting `rotate(-2deg)` as the static fallback
- [x] 4.6 Verify no re-render on pointer move (effects update via CSS vars only) and a clean static resting state on touch

## 5. Hero redesign (hero-redesign)

- [x] 5.1 Split the hero title into per-word/line spans at render time without changing the EN/ES strings; add staggered reveal keyframes
- [x] 5.2 Verify title reads correctly in EN and ES and to assistive tech (no spurious pauses); add `aria-label`/`aria-hidden` fallback if needed
- [x] 5.3 Add logo stroke draw-in: `stroke-dasharray/offset` animation on the `Logo` X strokes on first paint, settling into the existing glow
- [x] 5.4 Ensure logo renders fully drawn immediately under reduced motion
- [x] 5.5 Add scroll-linked parallax to `.hero__orbs` / `.hero__watermark` using `animation-timeline: scroll()`, wrapped in `@supports`
- [x] 5.6 Verify hero is static and error-free where `@property`/`animation-timeline` are unsupported

## 6. Layout & rhythm (layout-and-rhythm)

- [x] 6.1 Restructure `.services__grid` into an asymmetric bento (varied grid spans, dominant featured tile); keep the card component
- [x] 6.2 Verify bento collapses to a single readable column on mobile with no overflow
- [x] 6.3 Add aurora/gradient section dividers between major sections, tuned per theme
- [x] 6.4 Create `useActiveSection(ids)` IntersectionObserver hook returning the in-view section id
- [x] 6.5 Wire scroll-spy into the header nav: active class + `aria-current` on the matching link; click still smooth-anchors
- [x] 6.6 Add a closing CTA micro-section component between Contact and Footer in `App.tsx`
- [x] 6.7 Add EN + ES copy for the closing CTA to `useLanguage` content (headline, sub, button, target) — see design Open Questions

## 7. Cross-cutting QA & verification

- [x] 7.1 `npm run build` passes (tsc strict + `noUnusedLocals`/`noUnusedParameters`); every new hook/param is wired
- [x] 7.2 Manual pass in dark and light themes — no contrast or color regressions
- [x] 7.3 Manual pass in EN and ES — no clipped/overflowing or broken strings
- [x] 7.4 Reduced-motion pass: all new motion disabled, page fully composed
- [x] 7.5 Coarse-pointer (touch) pass: spotlight/tilt disabled, clean resting states
- [x] 7.6 Lighthouse/perf sanity check on mid-tier hardware (no jank, no layout shift); confirm `dist/` builds and previews via `npm run preview`
