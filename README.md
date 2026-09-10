# 1DM — Next.js + Shopify storefront

A from-scratch rebuild of 1dm.coffee: 1DM Cafe, Kruptos Coffee Roasters, and the 1DM Club
membership program, on Next.js 16 (App Router, TypeScript, Tailwind v4) with a headless
Shopify backend for commerce.

## What's here

- **Marketing site** — home, brand story/timeline, locations (10 outlets), per-location
  menus, Kruptos roastery spotlight, 1DM Club + Chakara Privilege membership pages,
  Coffee Community signup flow, contact.
- **Commerce** — `/shop/coffee` (roasted beans) and `/shop/equipment` (grinders, drippers,
  kettles — buy outright or rent monthly), product detail pages, a cart drawer + full cart
  page (Zustand, persisted to localStorage), and a Shopify Storefront API integration layer
  in `src/lib/shopify.ts`.
- **Placeholder catalogue** — until Shopify is connected, `src/lib/site-data.ts` supplies
  realistic placeholder products/prices so every page is fully browsable out of the box.
  Once `SHOPIFY_STORE_DOMAIN` + `SHOPIFY_STOREFRONT_TOKEN` are set, `/shop/coffee` and
  `/product/[handle]` automatically switch to live Shopify data.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Connecting Shopify (headless commerce)

1. In Shopify Admin: **Settings → Apps and sales channels → Develop apps → Create an app**.
2. Under **Configuration → Storefront API**, enable the scopes you need (at minimum:
   read products, read/write checkouts or carts).
3. Install the app, copy the **Storefront API access token**.
4. Copy `.env.example` to `.env.local` and fill in:
   ```
   SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   SHOPIFY_STOREFRONT_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
5. Restart the dev server. Products tagged `coffee` in Shopify will now appear on
   `/shop/coffee` instead of the placeholder catalogue.

Recommended catalogue structure in Shopify:
- **Roasted Coffee** collection, products tagged `coffee` (The Dark Side, Bloom, Simple Men…)
- **Equipment & Tools** collection, with a metafield or tag for buy-vs-rent pricing (the
  current equipment page uses local data for the buy/rent toggle — wire this to Shopify
  metafields once your rental billing provider is chosen, e.g. Recharge or a custom
  Razorpay subscription flow)

## Deploying to Vercel

```bash
npx vercel link
npx vercel env add SHOPIFY_STORE_DOMAIN
npx vercel env add SHOPIFY_STOREFRONT_TOKEN
npx vercel deploy --prod
```

Or connect the GitHub repo directly in the Vercel dashboard and set the same two
environment variables under Project Settings → Environment Variables.

## Project structure

```
src/
  app/                 Routes (App Router)
  components/          Shared UI (Navbar, Footer, ProductCard, CartDrawer, …)
  lib/
    site-data.ts       Placeholder content: locations, menus, timeline, products
    shopify.ts         Storefront API client + fallbacks
    utils.ts           cn(), formatINR()
  store/
    cart.ts            Zustand cart store (persisted)
```

## Design system

- Typography: Fraunces (display/serif) + Manrope (UI/sans), self-hosted via
  `@fontsource-variable` — no runtime calls to Google Fonts, so it builds in restricted
  network environments.
- Palette: warm cream/ink base with a rust accent for 1DM Cafe; a separate near-black +
  gold treatment for Kruptos Coffee Roasters, used on `/kruptos` and
  `/club/chakara-privilege` to give the sub-brand its own register.
- Motion: scroll reveals via Framer Motion (`src/components/reveal.tsx`).

## What's still placeholder / needs real data

- Product photography — every product card currently uses a gradient placeholder.
  Drop real images into Shopify (or `public/`) and wire them into `ProductCard` /
  the product page.
- Menus for the 7 locations still marked "Coming soon" in `site-data.ts`.
- Google Maps links per location (`mapsUrl` field, currently empty).
- The Coffee Community and 1DM Club forms currently just show a success state in the
  browser — wire their `onSubmit` handlers to an API route, CRM, or Shopify customer
  tags once you decide where that data should land.
- Checkout is a stub (`/cart`'s "Checkout securely" button) — once Shopify is connected,
  swap it for `createCheckout()` in `lib/shopify.ts`, which creates a real Shopify cart
  and hands off to `checkoutUrl`.
