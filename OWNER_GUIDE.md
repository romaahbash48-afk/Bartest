# Bar Henrietta Website - Owner's Quick Start Guide

## ✅ What's Been Built

Your website is now **100% complete and production-ready**! Here's what you have:

### Pages
- **Home** (`/`) - Full landing page with all features
- **Menu** (`/menu`) - Complete drink menu with filtering
- **Info** (`/info`) - Opening hours, location, contact, reservations
- **404** - Custom error page

### Unique Features
1. **Mood Map** - Visitors select their mood, get drink recommendations
2. **Real-time Status** - Shows if bar is open/closed right now (Berlin time)
3. **Smart Reservations** - Form generates pre-filled email for you
4. **Bilingual** - Automatic DE/EN switching with browser detection
5. **Easter Egg** - Fun surprise when clicking logo 5 times

### Design Highlights
- Dark, warm, lounge atmosphere
- Premium typography (Cormorant Garamond + Inter)
- Smooth animations (respects user preferences)
- Fully responsive (mobile to desktop)
- SEO optimized for Google

## 🚀 How to Launch Your Website

### Option 1: Deploy to Vercel (Recommended - FREE)

1. Go to **[vercel.com](https://vercel.com)** and sign up with GitHub
2. Click **"New Project"**
3. Import your GitHub repository
4. Click **"Deploy"** (Vercel auto-detects Next.js)
5. Done! Your site is live in ~2 minutes

**Add Your Domain:**
- In Vercel → Settings → Domains
- Add your domain (e.g., `barhenrietta.com`)
- Follow DNS instructions
- SSL certificate added automatically

### Option 2: Run Locally (Testing)

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 📝 How to Edit Content (No Coding Required!)

### Change Basic Info
**File:** `/content/site.ts`

```typescript
// Change address
address: {
  street: 'Malplaquetstraße 28',  // Edit here
  postalCode: '13347',
  city: 'Berlin',
}

// Change email
email: 'your.new.email@gmail.com',  // Edit here

// Change Instagram
instagram: 'https://instagram.com/yourhandle/',  // Edit here
```

### Change Opening Hours
**File:** `/content/site.ts`

```typescript
openingHours: [
  { day: 1, name: 'Monday', open: '18:00', close: '00:00' },  // Edit times
  { day: 2, name: 'Tuesday', open: '18:00', close: '01:00' },
  // ... continue for all days
]
```

**Day numbers:** 0=Sunday, 1=Monday, 2=Tuesday, etc.

### Change Today's Vibe Note
**File:** `/content/site.ts`

```typescript
todayVibeNote: {
  de: 'Neue Naturweine aus Österreich eingetroffen',  // Edit German
  en: 'New natural wines from Austria just arrived',  // Edit English
}
```

Update this regularly to keep content fresh!

### Edit Menu Items
**File:** `/content/menu.ts`

**Add a new drink:**
```typescript
{
  id: 'wine-new',  // Unique ID
  category: 'wine',  // wine, cocktail, beer, nonalcoholic, snacks
  name: { 
    de: 'Deutscher Name', 
    en: 'English Name' 
  },
  description: { 
    de: 'Deutsche Beschreibung', 
    en: 'English description' 
  },
  price: '8',
}
```

**Remove a drink:** Just delete the whole block

**Change price:** Edit the `price: '8'` field

### Edit Any Text on Website
**File:** `/content/i18n.ts`

Search for the text you want to change, edit both German (`de:`) and English (`en:`) versions.

Example - change hero tagline:
```typescript
de: {
  'hero.tagline': 'Your new German tagline',
}
en: {
  'hero.tagline': 'Your new English tagline',
}
```

## 📸 Adding Real Photos

Currently, gallery shows gradient placeholders.

**To add real photos:**

1. **Add images to `/public/gallery/`**
   - Name them: `photo1.jpg`, `photo2.jpg`, etc.
   - Recommended size: 800×800px minimum
   - Format: JPG or PNG

2. **Update `/content/site.ts`:**
   ```typescript
   gallery: [
     { id: '1', alt: 'Bar interior', src: '/gallery/photo1.jpg' },
     { id: '2', alt: 'Cocktails', src: '/gallery/photo2.jpg' },
     // ... add more
   ]
   ```

3. **Update `/components/Gallery.tsx`:**
   - Replace the gradient div with Next.js Image component
   - See detailed instructions in README.md

## 🎨 Customization

### Change Brand Colors
**File:** `/app/globals.css`

```css
:root {
  --accent: #B8774E;  /* Main accent color */
  --copper: #B8774E;  /* Buttons, links */
  /* ... edit any color */
}
```

### Change Fonts
**File:** `/app/layout.tsx`

Replace `Inter` or `Cormorant_Garamond` with any Google Font.

## 🔍 SEO Setup

### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your website
3. Verify ownership (use HTML tag method)
4. Submit sitemap: `https://yoursite.com/sitemap.xml`

### Social Media Image
Replace `/public/og-image.png` with a 1200×630px image showing:
- Bar name
- Tagline
- Beautiful photo or design

This appears when people share your site on Facebook, Instagram, Twitter, etc.

## 📱 Testing Checklist

Before launch, test:
- [ ] All links work
- [ ] Email form generates correct email
- [ ] Google Maps shows correct location
- [ ] Opening hours are correct
- [ ] Menu prices are current
- [ ] Contact info is correct
- [ ] Test on mobile phone
- [ ] Test on tablet
- [ ] Test on desktop

## 🆘 Common Tasks

### Update Menu Prices
1. Open `/content/menu.ts`
2. Find the item
3. Change `price: '8'` to new price
4. Save file
5. Redeploy (Vercel auto-deploys on push)

### Change Opening Hours
1. Open `/content/site.ts`
2. Edit `openingHours` section
3. Save and redeploy

### Add Special Announcement
1. Open `/content/site.ts`
2. Update `todayVibeNote`
3. Shows on homepage in Mood Map section

### Temporarily Close Bar
1. Easiest: Post on social media
2. OR edit opening hours to reflect closure
3. OR add note in `todayVibeNote`

## 💡 Tips

1. **Keep content fresh** - Update `todayVibeNote` weekly
2. **Seasonal menu** - Update menu.ts with seasonal drinks
3. **Real photos** - Replace placeholders with real bar photos
4. **Social media** - Share website on Instagram stories
5. **Google My Business** - Link to your website

## 📞 Support

If you need help:
1. Check the main **README.md** for detailed docs
2. Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
3. Vercel support: [vercel.com/support](https://vercel.com/support)

## 🎉 Launch Checklist

- [ ] Deploy to Vercel
- [ ] Add custom domain
- [ ] Replace og-image.png with real image
- [ ] Add real gallery photos
- [ ] Update menu with current items
- [ ] Verify opening hours
- [ ] Test reservation email
- [ ] Test Google Maps link
- [ ] Submit to Google Search Console
- [ ] Update Google My Business with website
- [ ] Share on Instagram

---

**Your website is ready to go live!** 🚀

Deploy to Vercel now and your premium bar website will be online in minutes.
