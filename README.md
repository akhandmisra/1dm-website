# 1DM — Next.js marketing + membership site

A from-scratch rebuild of 1dm.coffee: 1DM Cafe brand story, locations, menus, the Kruptos
Coffee Roasters spotlight, and the 1DM Club / Chakara Privilege membership program — on
Next.js 16 (App Router, TypeScript, Tailwind v4).

## What's here

- **Marketing site** — home, brand story/timeline, locations (10 outlets), per-location
  menus, Kruptos roastery spotlight, Coffee Community signup flow, contact.
- **Membership** — 1DM Club and Chakara Privilege pages. Payment is a Razorpay Payment
  Button embed (created in the Razorpay dashboard, no API keys needed in this project).
- **No shop here on purpose.** All buy-or-rent commerce — roasted coffee and equipment —
  lives on [kruptoscoffee.com](https://kruptoscoffee.com), a separate site. Every "Shop"
  link on this site points there instead of to an internal cart.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying to Vercel

This project is linked to a GitHub repo (`akhandmisra/1dm-website`) and set up for
git-based deploys — push to `main` and Vercel rebuilds automatically.

```bash
git add .
git commit -m "..."
git push
```

## Project structure

```
src/
  app/                 Routes (App Router)
  components/          Shared UI (Navbar, Footer, ProductCard, …)
  lib/
    site-data.ts       Content: locations, menus, timeline, club tiers,
                        plus the coffee/equipment catalogue reference data
                        (used to build out kruptoscoffee.com, not consumed here)
    utils.ts           cn(), formatINR()
```

## Design system

- Typography: Fraunces (display/serif) + Manrope (UI/sans), self-hosted via
  `@fontsource-variable` — no runtime calls to Google Fonts, so it builds in restricted
  network environments.
- Palette: warm cream/ink base with a rust accent for 1DM Cafe; a separate near-black +
  gold treatment for Kruptos Coffee Roasters, used on `/kruptos` and
  `/club/chakara-privilege` to give the sub-brand its own register.
- Motion: scroll reveals via Framer Motion (`src/components/reveal.tsx`).

## What's still open

- Razorpay Payment Button embed for `/club` (and `/club/chakara-privilege` if it also
  takes a self-serve payment) — drop the embed snippet into those pages once created.
- Product photography — the Kruptos preview cards on the homepage/Kruptos page currently
  use a gradient placeholder.
- Menus for the 7 locations still marked "Coming soon" in `site-data.ts`.
- Google Maps links per location (`mapsUrl` field, currently empty).
- The Coffee Community form currently just shows a success state in the browser — wire
  its `onSubmit` handler to an API route, CRM, or spreadsheet once you decide where that
  data should land.
