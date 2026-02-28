# The Forge

A curated marketplace for handmade objects — ceramics, woodwork, blown glass, forged metal, and hand-woven textiles. Built for makers who chose time over speed.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design tokens
- **Typography**: Cormorant Garamond, Outfit, JetBrains Mono (Google Fonts)
- **Deployment**: Vercel

## Structure

```
app/
  page.tsx          — Homepage (hero video, maker portraits, shop preview)
  about/            — Origin story, standards, maker application
  makers/[slug]/    — Individual maker profiles
  shop/             — Product grid and individual product pages
components/         — Navigation, Footer, ScrollReveal, ProductCard, etc.
data/               — Maker and product data
public/videos/      — Hero background video
```

## Development

```bash
npm install
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```
