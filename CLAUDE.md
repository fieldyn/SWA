# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page Vite + React 18 + TypeScript landing page for InnovatioX, deployed to Azure Static Web Apps. Fully static — no backend, no API, no router.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | `tsc -b && vite build` — typecheck, then bundle to `dist/` |
| `npm run type-check` | `tsc -b --pretty false` — typecheck only, no output |
| `npm run preview` | Serve the built `dist/` locally via Vite |

There is no `lint` script and no test framework — `npm run build` is the only quality gate (it fails on type errors and on `noUnusedLocals`/`noUnusedParameters` violations).

## Architecture

- **Render path:** `index.html` → `src/main.tsx` → `src/App.tsx`. `App.tsx` wraps everything in `ThemeProvider` and lays out fixed sections in order: Header, Hero, Services, About, Technology, Contact, Footer.
- **Components:** `src/components/` — Header, Hero, Services, About, Technology, Contact, Footer, Logo. Sections are page anchors (`#services`, `#about`, …); there is no routing.
- **Hooks:** `src/hooks/` — `useTheme` (theme context), `useReveal` (scroll-triggered reveal animation), `useScrollState` (scroll position), `useCountUp` (animated number counter).
- **Styling:** one global `src/styles.css` (~2000 lines). No CSS modules, no Tailwind. CSS custom properties use the `--ix-*` prefix.
- **Path alias:** `@/` → `src/`, configured in both `vite.config.ts` and `tsconfig.app.json` — keep them in sync.

## Theme system

Dark-first (`color-scheme: dark`). The theme toggle sets a `data-theme` attribute on `<html>` and persists to `localStorage` key `ix-theme`. An inline script in `index.html` applies the stored theme before paint to prevent a flash — edit that script if theme storage logic changes.

Fonts are loaded via Google Fonts links in `index.html`: Newsreader (display), Source Sans 3 (body), Chakra Petch (mono).

## Azure Static Web Apps

- `public/staticwebapp.config.json`: SPA fallback (rewrites 404s to `/index.html`) plus global security headers.
- `public/robots.txt` and `public/sitemap.xml`: search crawl assets.
- CI: `.github/workflows/azure-static-web-apps-gray-bay-0e9ab640f.yml` builds and deploys on push to `main`, and creates preview environments for PRs. The SWA `output_location` is `dist`.
