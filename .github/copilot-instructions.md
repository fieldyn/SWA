# Copilot instructions for InnovatioX SWA

## Build and verification commands

- `npm run dev` — starts the Vite dev server for the landing page.
- `npm run build` — runs `tsc -b` and then `vite build`; production output goes to `dist\`.
- `npm run type-check` — runs TypeScript only (`tsc -b --pretty false`).
- `npm run preview` — serves the built `dist\` output locally through Vite.

There is currently **no lint script** and **no test runner** configured in `package.json`, so there is no single-test command in this repository yet.

## High-level architecture

- This is a **fully static single-page React/Vite site** for Azure Static Web Apps. The render path is `index.html` -> `src\main.tsx` -> `src\App.tsx`.
- `src\App.tsx` is intentionally simple: it wraps the page in `ThemeProvider` and renders the landing sections in order: `Header`, `Hero`, `Services`, `About`, `Technology`, `Contact`, `Footer`.
- There is **no router, API client, global store, or server code**. Navigation is done with in-page anchors (`#services`, `#about`, `#technology`, `#contact`).
- The page content lives directly inside the section components as top-level arrays/constants (`navLinks`, `services`, `strengths`, `techStack`, `channels`). When copy or repeated items change, edit the component-local data first rather than looking for a separate content layer.
- Styling is centralized in `src\styles.css`. The layout and visual system depend on shared utilities such as `.ix-container`, `.ix-grad-text`, `.visually-hidden`, plus the `--ix-*` CSS custom properties defined at the top of the file.
- Deployment is wired for **Azure Static Web Apps**: `public\staticwebapp.config.json` handles SPA fallback and headers, `public\robots.txt` and `public\sitemap.xml` are shipped as static assets, and `.github\workflows\azure-static-web-apps-gray-bay-0e9ab640f.yml` deploys the app root with `dist` as the output folder.

## Key conventions in this codebase

- Keep imports using the `@/` alias for code under `src\`. The alias is defined in both `vite.config.ts` and `tsconfig.app.json`.
- Theme behavior spans **two places**: the inline script in `index.html` sets the initial `data-theme` before React mounts, and `src\hooks\useTheme.tsx` keeps the theme in sync with `localStorage` key `ix-theme`. If theme initialization changes, update both places together.
- New sections that should animate into view follow the existing pattern used by `Services`, `About`, `Technology`, and `Contact`: create a section ref, call `useReveal`, and toggle a `revealed` class that `src\styles.css` animates.
- Animated numeric stats should follow `About.tsx` + `useCountUp.ts`: start counting only after reveal, and preserve the existing reduced-motion behavior.
- Keep header/footer links and section IDs synchronized. The navigation model assumes anchor targets exist in the single page.
- Reuse the existing BEM-like class naming style in `src\styles.css` (`hero__*`, `services__*`, `contact__*`, etc.) instead of introducing CSS modules or ad hoc naming patterns.
- The reusable `Logo` component generates SVG defs internally. When rendering multiple logos on the same page, pass a stable `id` prop as the existing components do to avoid gradient/filter ID collisions.
- SEO and crawl metadata are part of the app surface here, not an afterthought: `index.html` contains canonical/Open Graph/Twitter metadata, while `public\robots.txt` and `public\sitemap.xml` must stay aligned with the production domain.
