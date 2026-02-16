# Bar Henrietta - premium night postcard site

Custom Next.js + TypeScript + Tailwind site for **Bar Henrietta (Berlin-Wedding)**.

## Stack

- Next.js (App Router) + TypeScript (strict)
- TailwindCSS
- Framer Motion (only for subtle key interactions)
- Local editable content in:
  - `content/site.ts`
  - `content/i18n.ts`
  - `content/moods.ts`

## Run locally

```bash
npm i
npm run dev
```

Production build:

```bash
npm run lint
npm run build
npm run start
```

## Where the owner edits content (single source of truth)

### 1) Core business data

Edit `content/site.ts`:

- bar name, area
- address, email, instagram
- Google Maps links
- opening hours
- reservation rules
- drinks menu items and prices
- gallery placeholders
- `todayVibeNote` (small editable line shown in Hero + Mood Map)
- `websiteUrl` (IMPORTANT placeholder, must be set to real domain)

### 2) Languages (DE/EN)

Edit `content/i18n.ts`:

- all UI labels, buttons, headings, helper texts.

Language behavior:

- stored in `localStorage`
- first visit fallback from browser language (`de` or `en`)

### 3) Mood Map

Edit `content/moods.ts`:

- mood titles / vibe lines / recommendation text
- best time labels
- accent colors (`accent`, `accent2`, `glow`)
- highlighted menu category per mood

## How to change menu and hours quickly

### Menu

In `content/site.ts`, update `menuItems`:

- `category`: `"natural-wine" | "cocktails" | "beer" | "non-alcoholic" | "snacks"`
- `name`, `description.de`, `description.en`, `price`

### Opening hours

In `content/site.ts`, update `openingHours` (Mon-Sun):

- `open`, `close` in `HH:MM` format (24h).

`Today` block auto-calculates open/closed and next opening time in **Europe/Berlin**.

## Deploy to Vercel

1. Push branch to GitHub.
2. Import repository in Vercel.
3. Framework preset: Next.js (auto-detected).
4. Set production domain and then update `content/site.ts -> websiteUrl`.
5. Redeploy.

## Notes for confirmed vs editable data

Known data from brief is prefilled (name, area, address, email, instagram, rules, baseline hours).

Editable placeholders currently included:

- `websiteUrl` in `content/site.ts`
- transport guidance text in `content/i18n.ts` (`visit.transportNote`)
- gallery placeholders (replace with real photos later)

## Accessibility + SEO implemented

- semantic heading hierarchy
- focus-visible states for all key controls
- reduced-motion support (`prefers-reduced-motion`)
- metadata + OpenGraph + Twitter cards
- JSON-LD `BarOrPub`
- `robots.ts` and `sitemap.ts`

## Owner checklist before launch

- [ ] Set real domain in `content/site.ts -> websiteUrl`
- [ ] Replace gallery placeholders with real photos (or real image URLs/assets)
- [ ] Finalize menu items/prices
- [ ] Verify opening hours and reservation rules
- [ ] Update `todayVibeNote` daily/weekly if desired
- [ ] Verify Google Maps link/embed
- [ ] Smoke test mobile + desktop in both languages
