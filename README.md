# Bar Henrietta — Website

Premium website for **Bar Henrietta**, a natural wine, beer & cocktails bar in Berlin-Wedding.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **TailwindCSS** for styling
- **Framer Motion** for subtle animations
- **Google Fonts** (Cormorant Garamond + Inter) via `next/font`

## Content Management (for the Owner)

All editable content lives in the `/content/` folder. No code knowledge required — just edit the text between quotes.

### Files to Edit

| File | What's inside |
|------|---------------|
| `/content/site.ts` | Bar name, address, email, Instagram, opening hours, menu items, gallery placeholders, daily vibe note |
| `/content/i18n.ts` | All text on the site in German (DE) and English (EN) |
| `/content/moods.ts` | "Mood Map" feature data — mood titles, descriptions, drink recommendations, accent colors |

### Common Tasks

#### Change opening hours
Edit `openingHours` array in `/content/site.ts`. Each day has `open` and `close` times in 24h format.

#### Update menu
Edit the `menu` array in `/content/site.ts`. Each item has:
- `id` — unique identifier
- `category` — one of: `natural-wine`, `cocktails`, `beer`, `non-alcoholic`, `snacks`
- `name` — drink/item name
- `description` — `{ de: "...", en: "..." }`
- `price` — e.g. `"€8"`
- `highlight` — set to `true` for featured items

#### Change the daily note
Edit `todayVibeNote` in `/content/site.ts` — appears on the homepage.

#### Add real photos
1. Place photos in `/public/gallery/` (e.g. `photo1.jpg`)
2. Update the `gallery` array in `/content/site.ts` with real image paths
3. Update gallery component to use `next/image` with the real paths

#### Change any text
Find the key in `/content/i18n.ts` and edit both `de` and `en` values.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, story, mood map, hours, menu preview, gallery, reservations, map |
| `/menu` | Full menu catalog with category filters |
| `/visit` | Address, hours, how to get here, reservation rules, contact |
| 404 | Custom branded 404 page |

## Features

- **Bilingual** (DE/EN) with localStorage persistence
- **Mood Map** — interactive mood selector that subtly changes accent colors and highlights matching drinks
- **Open/Closed status** — real-time calculation based on Europe/Berlin timezone
- **Reservation form** — generates a pre-filled mailto link (no backend needed)
- **Easter egg** — click the logo 5 times for a hidden message
- **SEO** — OpenGraph, Twitter Cards, JSON-LD LocalBusiness schema
- **Accessibility** — semantic HTML, ARIA labels, focus-visible, prefers-reduced-motion support
- **Performance** — no heavy libraries, CSS variables for dynamic theming, Google Fonts optimized

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Git Repository
3. Vercel auto-detects Next.js — click "Deploy"
4. (Optional) Add your custom domain in Vercel dashboard

After deploying, update `url` in `/content/site.ts` with your actual domain.

## OG Image

A placeholder SVG is at `/public/og-image.svg`. For production:
1. Create a 1200×630 PNG image
2. Save as `/public/og-image.png`
3. The metadata in `layout.tsx` already points to it

## Development

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Editable Fields (Owner Checklist)

- [ ] `url` in `/content/site.ts` — your domain
- [ ] `googleMapsEmbed` in `/content/site.ts` — get your embed URL from Google Maps
- [ ] `todayVibeNote` in `/content/site.ts` — update daily/weekly
- [ ] Menu items in `/content/site.ts` — update prices, add/remove items
- [ ] Opening hours in `/content/site.ts` — update if schedule changes
- [ ] Gallery photos — replace gradient placeholders with real images
- [ ] `/public/og-image.png` — replace with a real branded image
- [ ] `/public/favicon.ico` — add your favicon
