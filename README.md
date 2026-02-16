# Bar Henrietta — Website

Premium website for Bar Henrietta (Berlin-Wedding). Natural wine, beer, cocktails. Atmospheric night-lounge experience.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **TailwindCSS** for styling
- **Framer Motion** for subtle animations
- No heavy i18n — simple DE/EN toggle with `/content/i18n.ts`

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content — Single Source of Truth

All editable content lives in `/content/`:

| File | What to edit |
|------|--------------|
| `content/site.ts` | Address, email, Instagram, opening hours, reservation rules, menu items, `todayVibeNote` |
| `content/i18n.ts` | All DE/EN translations |
| `content/moods.ts` | Mood Map options (titles, recommendations, accent colors) |

### Changing opening hours

Edit `site.openingHours` in `content/site.ts`:

```ts
{ day: 'mon', label: { de: 'Mo', en: 'Mon' }, open: '18:00', close: '00:00' },
```

### Changing the menu

Edit `menuItems` in `content/site.ts`. Add/remove items, change prices, descriptions.

### Today's vibe note

Owner can change `todayVibeNote` in `content/site.ts` — shown in Mood Map as "Today's note".

### Gallery photos

Replace the placeholder gradient cards in `components/Gallery.tsx` with real images. Use `next/image` and put images in `/public/`.

## Deploy on Vercel

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy — no env vars needed

Or via CLI:

```bash
npm i -g vercel
vercel
```

## Owner Checklist

Before going live:

- [ ] Replace gallery placeholders with real photos
- [ ] Update `todayVibeNote` in `content/site.ts`
- [ ] Verify opening hours in `content/site.ts`
- [ ] Confirm menu items and prices
- [ ] Replace Google Maps embed URL in `components/MapBlock.tsx` with the actual embed from [Google Maps](https://www.google.com/maps) (Share → Embed)
- [ ] Set custom domain in Vercel
- [ ] Update `url` in `components/JsonLd.tsx` to production URL

## Structure

```
/content/       — All editable content
/components/    — UI components
/app/           — Pages (App Router)
/context/       — Locale & Mood state
```

## Features

- **Mood Map** — User selects vibe, gets drink recommendation + accent color shift
- **DE/EN** — Language toggle, persisted in localStorage
- **Reservation** — Mailto form that generates pre-filled email
- **Open/Closed** — Live status based on Europe/Berlin timezone
- **Easter egg** — 5 clicks on logo → toast

## License

Private — Bar Henrietta.
