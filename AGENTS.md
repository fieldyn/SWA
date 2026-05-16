# InnovatioX SWA — Agent Guide

Single-page Vite + React 18 + TypeScript landing page, deployed to Azure Static Web Apps.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | `tsc -b && vite build` — typecheck then bundle to `dist/` |
| `npm run type-check` | `tsc -b --pretty false` (typecheck only, no output) |
| `npm run preview` | Serve `dist/` locally via Vite |

**Build runs both typecheck and bundle.** There is no separate `lint` script.

## Architecture

- **Entrypoint:** `index.html` → `src/main.tsx` → `src/App.tsx`
- **Components:** `src/components/` — 8 files: Header, Hero, Services, About, Technology, Contact, Footer, Logo
- **Hooks:** `src/hooks/` — 4 files: useTheme, useReveal, useScrollState, useCountUp
- **Styling:** Single `src/styles.css` (~2000 lines). No CSS modules, no Tailwind.
- **Routing:** None. Sections are single-page anchors (`#services`, `#about`, etc.)
- **Path alias:** `@/` → `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`)

## Key conventions

- **Dark-first theme:** `color-scheme: dark` by default. Theme toggle uses `data-theme` attribute on `<html>`, persisted to `localStorage` key `ix-theme`. Inline script in `index.html` prevents flash.
- **CSS custom properties** use `--ix-*` prefix (e.g. `--ix-bg`, `--ix-surface`, `--ix-sky`)
- **Fonts:** Google Fonts loaded in `index.html` — Newsreader (display), Source Sans 3 (body), Chakra Petch (mono)
- **TypeScript:** Strict mode, `noUnusedLocals`, `noUnusedParameters` enabled
- **No test framework** is configured.

## Azure Static Web Apps

- SPA fallback: `public/staticwebapp.config.json` rewrites all 404s to `/index.html`
- Search assets: `public/robots.txt`, `public/sitemap.xml`
- CI: `.github/workflows/azure-static-web-apps-*.yml` (build + deploy on push to `main`, PR preview for PRs)
