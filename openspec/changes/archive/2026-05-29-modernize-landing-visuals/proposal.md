## Why

The InnovatioX landing already has a strong, dark-first foundation: an `--ix-*` token system, flicker-free theming, reveal-on-scroll, a dual tech marquee, animated count-ups and a scroll progress bar. What dates it for 2025/2026 is not missing basics — it's the absence of **living motion, cursor-reactive depth, and bold layout rhythm**. Today the brand gradient is static, surfaces are flat, the hero is a fixed two-column block, and Services is a uniform 2×2 grid. This change is a deliberate, bold visual modernization that raises perceived craft and "wow" factor while staying true to the project's identity: **zero new dependencies, no backend, fully static, fast, accessible, themeable and bilingual.**

## What Changes

- **Living brand gradient** — animate `--ix-gradient` through a registered `@property` angle so gradient text, primary buttons, the logo and accents shift slowly instead of sitting static.
- **Film-grain + aurora foundation** — add a subtle grain texture overlay and a refreshed, higher-contrast aurora background layered over the existing radial gradients, giving the flat surfaces depth.
- **Cursor-reactive surfaces** — a radial *spotlight* that tracks the pointer across Service, strength and contact cards (replacing today's static hover halo), plus a **3D-tilt hero card** with layered parallax of its floating chips and logo.
- **Kinetic hero** — word-by-word title reveal, an animated logo "draw-in" (stroke), and scroll-linked parallax of the hero orbs/watermark using native CSS `animation-timeline: scroll()` (no JS scroll handlers).
- **Bento Services** — restructure the uniform Services grid into a true **bento** layout with varied tile sizes and emphasis. **BREAKING** (internal Services DOM/classname contract changes).
- **Page rhythm** — aurora/gradient section dividers, a **scroll-spy** active state in the header nav (`aria-current`), and a closing CTA micro-section to end the page with intent.
- **Elevated micro-interactions** — refined hover/press feedback on buttons, pills and links (magnetic hover, press states, gradient sheen).
- **Motion & input governance** — every new effect is gated behind `prefers-reduced-motion`, coarse-pointer and reduced-data, so the page degrades gracefully and stays fully usable and accessible.

Non-goals: no new dependencies, no router/multi-page, no backend or forms, no content/copy rewrite, no change to the theme-storage or i18n mechanisms.

## Capabilities

### New Capabilities
- `visual-foundation`: The global look-and-motion base — the living `@property` gradient, film-grain + aurora background, bolder contrast tokens, and the cross-cutting governance rules (`prefers-reduced-motion`, coarse-pointer, reduced-data) that every other effect must obey.
- `interactive-surfaces`: Pointer-reactive components — spotlight-tracking cards (services, strengths, contact), the 3D-tilt hero mark card with layered parallax, and elevated micro-interactions on buttons, pills and links.
- `hero-redesign`: The hero section experience — kinetic word-by-word title reveal, logo stroke draw-in, scroll-linked parallax of orbs/watermark, and a bolder overall composition.
- `layout-and-rhythm`: Page-level structure and flow — Services as a true bento grid, aurora/gradient section dividers, scroll-spy active navigation in the header, and a closing CTA micro-section.

### Modified Capabilities
<!-- None — openspec/specs/ is empty; this is the first set of specs for the project. -->

## Impact

- **Code:** primarily `src/styles.css` (the single global stylesheet); component markup in `src/components/` (`Hero`, `Services`, `Header`, `Contact`, `About`, `Logo`, plus a new closing CTA); new minimal, fully-typed hooks in `src/hooks/` (e.g. `usePointerSpotlight`, `useTilt`, `useActiveSection`); possible small additions to `index.html` (grain/meta). The `@/` path alias and `App.tsx` section order are preserved.
- **Dependencies:** none added — implemented with modern CSS (`@property`, `color-mix()`, scroll-driven animations, conic gradients, mask) and tiny React hooks. Build stays `tsc -b && vite build`; `noUnusedLocals`/`noUnusedParameters` strictness means every new hook/param must be wired.
- **Performance:** GPU-friendly `transform`/`opacity` only; pointer/scroll effects disabled under reduced-motion or coarse pointers; no layout thrash, no heavy libraries — keeps the static SWA fast.
- **Accessibility:** decorative layers stay `aria-hidden`; nav gains `aria-current`; `:focus-visible` and keyboard flows preserved; no color-contrast regression in either theme.
- **Theming & i18n:** all effects work in dark *and* light themes and in EN *and* ES; kinetic text reveal must wrap translated strings without altering their content; theme-storage and `ix-lang`/`ix-theme` logic untouched.
