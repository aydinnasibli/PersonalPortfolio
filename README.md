# Personal Portfolio — Aydin Nasibli

Editorial, single-page portfolio. Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind v4. Fully static — no database, no API routes, no runtime server work.

## Commands

```bash
npm run dev        # dev server
npm run build      # production build
npm run lint       # eslint (flat config)
npm run typecheck  # tsc --noEmit
npm run check      # typecheck + lint + build
```

> ESLint is pinned to v9. `eslint-config-next` bundles `eslint-plugin-react@7.37.5`, whose peer range stops at `^9.7`; on ESLint 10 the linter crashes loading `react/display-name`. Don't bump the major until that plugin supports it.

## Layout

```
app/
  layout.tsx            fonts, metadata, viewport, no-js bootstrap
  page.tsx              section assembly + JSON-LD
  globals.css           tokens, components, responsive, reduced-motion
  icon.tsx              generated favicon
  opengraph-image.tsx   generated 1200×630 share card
  robots.ts sitemap.ts
components/
  ui/         Cursor, Magnetic, ParallaxWord, ScrollDirector, CanvasBg, ClientInit, TopMeta
  hero/       Hero (PeekCard, Crosshair, ScrollHint inline)
  intro/      IntroSection
  projects/   ProjectShowcase → ProjectRow → ProjectVisuals → mocks/*
  tech/       TechStack + FloatingField
  process/    ProcessStrip
  footer/     Footer + BackToTop
lib/data.ts   PROJECTS, STACK, SOCIAL_LINKS, SITE_URL, EMAIL
types/        Project, StackItem, SocialLink
hooks/        useReveal
```

## Adding or editing a project

Everything lives in `lib/data.ts` — display order is array order. Each entry needs a `visual` naming one of the mocks in `components/projects/mocks/`, and a `host` for the mock's browser chrome. Rows alternate sides automatically.

To add a new mock: drop a component in `mocks/` taking `{ accent }`, register it in the `MOCKS` map in `ProjectVisuals.tsx`, and add its key to `ProjectVisual` in `types/index.ts`.

## Conventions worth knowing

- **Server-first.** Only components needing browser APIs carry `'use client'`. `ProjectRow` is a server component; the client part is the thin `ScrollProgress` wrapper, so the eight mock trees never reach the client bundle.
- **Scroll parallax rides a CSS variable.** `ScrollProgress` writes `--p` (0 → 1) to the DOM; CSS reads it. No React state on scroll.
- **The mocks are decorative.** `ProjectVisuals` is `aria-hidden` — it draws invented interface chrome, and every fact it depicts is also in the adjacent text.
- **Reduced motion is honoured everywhere.** CSS strips transforms; JS effects bail before attaching listeners.
- **`.rv` / `.mask-line` start hidden and are revealed by IntersectionObserver.** The `no-js` class on `<html>` (removed by an inline script before paint) keeps content visible if scripting never runs.
