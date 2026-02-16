# Bar Henrietta Website

A premium, modern website for Bar Henrietta in Berlin-Wedding. Built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

## 🌟 Features

- **Bilingual** (German/English) with automatic language detection
- **Mood Map**: Unique interactive feature for personalized drink recommendations
- **Open/Closed Status**: Real-time status based on Europe/Berlin timezone
- **Reservation System**: Email-based reservation form generator
- **Fully Responsive**: Beautiful on all devices
- **Accessible**: ARIA labels, keyboard navigation, focus management
- **SEO Optimized**: Metadata, Open Graph, JSON-LD structured data
- **Performance**: Optimized with Next.js App Router, minimal dependencies
- **Reduced Motion Support**: Respects user preferences

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📝 Content Management

All content is centralized for easy editing. No programming knowledge required!

### Main Content (`/content/site.ts`)

Edit this file to change:
- Bar name, address, contact info
- Opening hours
- Reservation rules
- Menu preview items
- Gallery placeholders
- Today's vibe note

**Example: Changing opening hours**

```typescript
openingHours: [
  { day: 1, name: 'Monday', open: '18:00', close: '00:00' },
  { day: 2, name: 'Tuesday', open: '18:00', close: '01:00' },
  // ... edit times as needed
]
```

### Translations (`/content/i18n.ts`)

Edit this file to change any text on the website in German or English.

**Example: Changing tagline**

```typescript
'hero.tagline': 'Your new tagline in German',  // German
'hero.tagline': 'Your new tagline in English', // English
```

### Full Menu (`/content/menu.ts`)

Edit this file to add, remove, or modify menu items.

**Example: Adding a new drink**

```typescript
{
  id: 'wine-new',
  category: 'wine',
  name: { de: 'Riesling', en: 'Riesling' },
  description: { de: 'Trocken & mineralisch', en: 'Dry & mineral' },
  price: '8',
}
```

### Mood Settings (`/content/moods.ts`)

Edit this file to customize the Mood Map feature (titles, recommendations, colors).

## 🎨 Design System

### Color Palette

The design uses a warm, dark, lounge-inspired palette:

- **Background**: `#0B0B0D` (almost black)
- **Surface**: `#121216` (dark surface)
- **Warm Cream**: `#F2E9DA` (primary text)
- **Terracotta**: `#B65A3C` (warm accent)
- **Copper**: `#B8774E` (interactive elements)
- **Velvet Green**: `#1F3A2E` (accent)
- **Muted Gold**: `#C9A46A` (highlights)

Colors are defined in `/app/globals.css` as CSS variables and can be customized there.

### Typography

- **Headings**: Cormorant Garamond (elegant serif)
- **Body**: Inter (modern sans-serif)

Both fonts are loaded via `next/font/google` for optimal performance.

## 📸 Adding Real Images

Currently, the gallery shows gradient placeholders. To add real images:

1. Add images to `/public/gallery/` (e.g., `image1.jpg`, `image2.jpg`)
2. Update `/content/site.ts`:

```typescript
gallery: [
  { id: '1', alt: 'Bar interior', src: '/gallery/image1.jpg' },
  { id: '2', alt: 'Cocktails', src: '/gallery/image2.jpg' },
  // ...
]
```

3. Update `/components/Gallery.tsx` to use `next/image`:

```typescript
import Image from 'next/image'

// Replace the gradient div with:
<Image
  src={item.src}
  alt={item.alt}
  fill
  className="object-cover"
/>
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy

**Custom Domain:**
- In Vercel Dashboard → Project Settings → Domains
- Add your domain (e.g., `barhenrietta.com`)
- Follow DNS configuration instructions

### Environment Variables

If needed, add in Vercel Dashboard → Project Settings → Environment Variables:
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (optional)
- `NEXT_PUBLIC_GOOGLE_VERIFICATION` - Google verification code (optional)

## 🔍 SEO Setup

### Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your website
3. Verify ownership (HTML tag method - add code to `/app/layout.tsx`)
4. Submit sitemap: `https://yoursite.com/sitemap.xml`

### Social Media Preview Image

Replace `/public/og-image.png` with a custom 1200×630px image featuring:
- Bar name
- Tagline
- Atmospheric photo or design

## 📱 Features Guide

### Mood Map

The Mood Map is a unique feature that adapts the site's accent colors and highlights relevant drinks based on the user's selected mood. Moods are saved in `localStorage`.

**How it works:**
1. User selects a mood (e.g., "Date night", "Solo reset")
2. CSS variables (`--accent`, `--accent2`, `--glow`) change
3. Relevant drink category is highlighted in menu preview
4. Recommendation shows best drink and timing

### Reservation System

The reservation form generates a pre-filled email to avoid backend complexity:
1. User fills in date, time, guests, message
2. Click "Generate email" opens their email client with pre-filled message
3. Owner receives reservation request directly in their inbox

### Open/Closed Status

The status updates in real-time based on:
- Current time in Europe/Berlin timezone
- Opening hours defined in `/content/site.ts`
- Shows next opening time when closed

### Easter Egg

Click the "Bar Henrietta" logo in the navbar 5 times quickly to trigger a small toast message. It's a subtle, fun detail that rewards curious visitors.

## 🛠 Customization

### Changing Brand Colors

Edit `/app/globals.css`:

```css
:root {
  --accent: #B8774E; /* Change to your brand color */
  --accent2: #C9A46A;
  /* ... */
}
```

### Adding a New Page

1. Create `/app/yourpage/page.tsx`
2. Add link in `/components/Navbar.tsx`
3. Add translations in `/content/i18n.ts`

### Modifying Animations

All animations use Framer Motion and respect `prefers-reduced-motion`. Edit in component files or adjust in `/app/globals.css`.

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm install
npm run build
```

### TypeScript Errors

Make sure all dependencies are installed:

```bash
npm install
```

### Animations Not Working

Check browser console for errors. Framer Motion requires client components (`'use client'` directive).

## 📦 Dependencies

- **next**: React framework with App Router
- **react** & **react-dom**: UI library
- **framer-motion**: Animation library (used sparingly)
- **tailwindcss**: Utility-first CSS
- **typescript**: Type safety

All dependencies are production-ready and actively maintained.

## 📄 License

© 2024 Bar Henrietta. All rights reserved.

## 💡 Support

For questions or issues:
- Email: bar.henrietta.berlin@gmail.com
- Check Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Check Tailwind docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

**Built with ❤️ for Bar Henrietta**
