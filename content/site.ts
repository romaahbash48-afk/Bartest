/**
 * Bar Henrietta — Single Source of Truth
 *
 * Owner: edit any value below to update the website.
 * No code knowledge required — just change text between quotes.
 */

export interface OpeningDay {
  day: string;
  open: string; // 24h format "HH:MM"
  close: string; // 24h format "HH:MM" (next day if < open)
  closed?: boolean;
}

export interface MenuItem {
  id: string;
  category: "natural-wine" | "cocktails" | "beer" | "non-alcoholic" | "snacks";
  name: string;
  description: { de: string; en: string };
  price: string; // e.g. "€8" or "€5.50"
  highlight?: boolean;
}

export const siteConfig = {
  name: "Bar Henrietta",
  area: "Berlin-Wedding",
  address: "Malplaquetstraße 28, 13347 Berlin",
  email: "bar.henrietta.berlin@gmail.com",
  instagram: "https://www.instagram.com/bar.henrietta.berlin/",
  instagramHandle: "@bar.henrietta.berlin",
  googleMapsUrl:
    "https://www.google.com/maps/place/Malplaquetstra%C3%9Fe+28,+13347+Berlin",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2425.5!2d13.3595!3d52.5520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851f5a5e1e5e5%3A0x0!2sMalplaquetstra%C3%9Fe+28%2C+13347+Berlin!5e0!3m2!1sde!2sde!4v1700000000000",
  url: "https://barhenrietta.de", // editable: set your domain
  timezone: "Europe/Berlin",

  /** Owner's daily vibe note — change this whenever you want */
  todayVibeNote: {
    de: "Heute Abend: Neue Naturweine aus der Pfalz.",
    en: "Tonight: New natural wines from Pfalz.",
  },

  openingHours: [
    { day: "Mon", open: "18:00", close: "00:00" },
    { day: "Tue", open: "18:00", close: "01:00" },
    { day: "Wed", open: "18:00", close: "01:00" },
    { day: "Thu", open: "18:00", close: "01:00" },
    { day: "Fri", open: "18:00", close: "02:00" },
    { day: "Sat", open: "18:00", close: "02:00" },
    { day: "Sun", open: "18:00", close: "00:00" },
  ] as OpeningDay[],

  menu: [
    {
      id: "wine-1",
      category: "natural-wine",
      name: "Pétillant Naturel Rosé",
      description: {
        de: "Leicht perlend, fruchtig, Loire-Tal",
        en: "Lightly sparkling, fruity, Loire Valley",
      },
      price: "€9",
      highlight: true,
    },
    {
      id: "wine-2",
      category: "natural-wine",
      name: "Skin-Contact Orange",
      description: {
        de: "Komplex, bernsteinfarben, georgischer Stil",
        en: "Complex, amber-hued, Georgian style",
      },
      price: "€10",
    },
    {
      id: "wine-3",
      category: "natural-wine",
      name: "Grüner Veltliner",
      description: {
        de: "Knackig, pfeffrig, Niederösterreich",
        en: "Crisp, peppery, Lower Austria",
      },
      price: "€8",
    },
    {
      id: "cocktail-1",
      category: "cocktails",
      name: "Henrietta Negroni",
      description: {
        de: "Unser Signature — mit lokalem Wermut",
        en: "Our signature — with local vermouth",
      },
      price: "€12",
      highlight: true,
    },
    {
      id: "cocktail-2",
      category: "cocktails",
      name: "Smoky Paloma",
      description: {
        de: "Mezcal, Grapefruit, Salz, Rauch",
        en: "Mezcal, grapefruit, salt, smoke",
      },
      price: "€11",
    },
    {
      id: "cocktail-3",
      category: "cocktails",
      name: "Espresso Martini",
      description: {
        de: "Kalt gebrühter Kaffee, Vodka, Kaffeelikör",
        en: "Cold brew, vodka, coffee liqueur",
      },
      price: "€12",
    },
    {
      id: "beer-1",
      category: "beer",
      name: "Rothaus Tannenzäpfle",
      description: {
        de: "Pils, Schwarzwald-Klassiker",
        en: "Pilsner, Black Forest classic",
      },
      price: "€4",
    },
    {
      id: "beer-2",
      category: "beer",
      name: "BRLO Pale Ale",
      description: {
        de: "Berliner Craft, hopfig & frisch",
        en: "Berlin craft, hoppy & fresh",
      },
      price: "€5",
    },
    {
      id: "na-1",
      category: "non-alcoholic",
      name: "Hausgemachte Limonade",
      description: {
        de: "Saisonal, heute: Rosmarin-Grapefruit",
        en: "Seasonal, today: rosemary-grapefruit",
      },
      price: "€5",
    },
    {
      id: "na-2",
      category: "non-alcoholic",
      name: "Kombucha vom Fass",
      description: {
        de: "Lokal gebraut, wechselnde Sorten",
        en: "Locally brewed, rotating flavors",
      },
      price: "€5",
    },
    {
      id: "snack-1",
      category: "snacks",
      name: "Oliven & Focaccia",
      description: {
        de: "Marinierte Oliven, warmes Brot, Kräuterbutter",
        en: "Marinated olives, warm bread, herb butter",
      },
      price: "€7",
    },
    {
      id: "snack-2",
      category: "snacks",
      name: "Käseplatte",
      description: {
        de: "Ausgewählte Käse, Feigen, Honig, Nüsse",
        en: "Selected cheeses, figs, honey, nuts",
      },
      price: "€14",
    },
  ] as MenuItem[],

  /** Gallery placeholders — replace src with real image paths in /public/gallery/ */
  gallery: [
    { id: "g1", alt: { de: "Bar-Innenraum", en: "Bar interior" }, gradient: "from-terracotta/30 to-velvet-green/20" },
    { id: "g2", alt: { de: "Cocktail-Zubereitung", en: "Cocktail making" }, gradient: "from-copper/30 to-background" },
    { id: "g3", alt: { de: "Naturwein-Auswahl", en: "Natural wine selection" }, gradient: "from-muted-gold/20 to-surface" },
    { id: "g4", alt: { de: "Gemütliche Ecke", en: "Cozy corner" }, gradient: "from-velvet-green/30 to-background" },
    { id: "g5", alt: { de: "Abendstimmung", en: "Evening mood" }, gradient: "from-terracotta/20 to-copper/20" },
    { id: "g6", alt: { de: "Bar-Theke", en: "Bar counter" }, gradient: "from-surface to-velvet-green/20" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
