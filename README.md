# Pathway landing page

A polished, responsive SaaS landing page for **Pathway** — a calm workspace for teams to plan work and build momentum.

## Highlights

- Responsive, keyboard-accessible navigation with an escape-to-close mobile menu
- Semantic section landmarks, a skip link, clear focus states, and meaningful image alternatives
- Smooth anchor navigation, billing-cycle pricing control, and motion that respects `prefers-reduced-motion`
- Optimized local images through `next/image`; no build-time dependency on a remote font service
- Modern Next.js 16, ESLint flat config, TypeScript checks, and an audited dependency graph

## Tech stack

- Next.js 16 (App Router)
- React 18 and TypeScript
- Tailwind CSS
- Framer Motion for lightweight hero/product parallax

## Getting started

Requires Node.js 20.9 or later.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
# or run all three
npm run check
```

## Project structure

- `src/app` — application shell, metadata, global styles, and route entry point
- `src/sections` — landing-page sections
- `src/components` — reusable UI primitives such as inline SVG icons
- `src/assets` — local visual assets used by the page
