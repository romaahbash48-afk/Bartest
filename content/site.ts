import type { LocalizedString } from "@/lib/i18n";

export type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export type MenuCategoryId =
  | "natural-wine"
  | "cocktails"
  | "beer"
  | "non-alcoholic"
  | "snacks";

export interface OpeningHoursEntry {
  open: string;
  close: string;
}

export interface MenuItem {
  id: string;
  category: MenuCategoryId;
  name: string;
  description: LocalizedString;
  price: string;
}

export interface GalleryPlaceholder {
  id: string;
  title: LocalizedString;
  caption: LocalizedString;
  gradientFrom: string;
  gradientTo: string;
}

export const dayOrder: DayKey[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

export const menuCategories: Array<{ id: MenuCategoryId }> = [
  { id: "natural-wine" },
  { id: "cocktails" },
  { id: "beer" },
  { id: "non-alcoholic" },
  { id: "snacks" }
];

export const siteContent = {
  name: "Bar Henrietta",
  area: "Berlin-Wedding",
  address: "Malplaquetstraße 28, 13347 Berlin",
  email: "bar.henrietta.berlin@gmail.com",
  instagram: "https://www.instagram.com/bar.henrietta.berlin/",
  websiteUrl: "https://bar-henrietta.example",
  googleMapsUrl: "https://www.google.com/maps?q=Malplaquetstraße+28,+13347+Berlin",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Malplaquetstraße+28,+13347+Berlin&output=embed",
  drinksFocus: ["Natural wine", "Beer", "Cocktails"],
  todayVibeNote: {
    de: "Heute im Fokus: sanfte Rotweine und ein ruhiger Tresen.",
    en: "Tonight's note: gentle reds and an easy bar rhythm."
  },
  openingHours: {
    mon: { open: "18:00", close: "00:00" },
    tue: { open: "18:00", close: "01:00" },
    wed: { open: "18:00", close: "01:00" },
    thu: { open: "18:00", close: "01:00" },
    fri: { open: "18:00", close: "02:00" },
    sat: { open: "18:00", close: "02:00" },
    sun: { open: "18:00", close: "00:00" }
  } satisfies Record<DayKey, OpeningHoursEntry>,
  reservationRules: [
    {
      de: "Keine Reservierungen am Freitag und Samstag.",
      en: "No reservations for Fridays and Saturdays."
    },
    {
      de: "Bitte sende Datum, Uhrzeit und Personenzahl per E-Mail. Bestaetigung innerhalb eines Tages.",
      en: "For reservations, send date, time and number of seats by email. Confirmation within a day."
    },
    {
      de: "Tische werden von Sonntag bis Donnerstag bis 21:00 gehalten.",
      en: "Tables are held until 21:00 (Sun-Thu)."
    }
  ] satisfies LocalizedString[],
  menuItems: [
    {
      id: "wine-1",
      category: "natural-wine",
      name: "Pet Nat by the Glass",
      description: {
        de: "Spritzig, trocken, leichter Hefeton.",
        en: "Sparkling and dry with a soft yeasty edge."
      },
      price: "8 EUR"
    },
    {
      id: "wine-2",
      category: "natural-wine",
      name: "Skin Contact White",
      description: {
        de: "Aromatisch, Tee-Noten, zarte Struktur.",
        en: "Aromatic, tea-like notes with gentle grip."
      },
      price: "9 EUR"
    },
    {
      id: "wine-3",
      category: "natural-wine",
      name: "Light Red (Chilled)",
      description: {
        de: "Saftig, rote Beeren, leicht gekuehlt serviert.",
        en: "Juicy red berries, served lightly chilled."
      },
      price: "9 EUR"
    },
    {
      id: "cocktail-1",
      category: "cocktails",
      name: "Henrietta Highball",
      description: {
        de: "Whisky, Oolong, Soda, Zitronenzeste.",
        en: "Whisky, oolong, soda and lemon peel."
      },
      price: "12 EUR"
    },
    {
      id: "cocktail-2",
      category: "cocktails",
      name: "Terracotta Negroni",
      description: {
        de: "Bitter, kraeutrig, mit roter Orange.",
        en: "Bitter and herbal with blood orange."
      },
      price: "12 EUR"
    },
    {
      id: "cocktail-3",
      category: "cocktails",
      name: "Velvet Martini",
      description: {
        de: "Klar, trocken, salzige Olive.",
        en: "Clear, dry and olive-salty."
      },
      price: "13 EUR"
    },
    {
      id: "beer-1",
      category: "beer",
      name: "Pils vom Fass",
      description: {
        de: "Klassisch, knackig und frisch gezapft.",
        en: "Classic crisp pils on tap."
      },
      price: "4.5 EUR"
    },
    {
      id: "beer-2",
      category: "beer",
      name: "Seasonal Craft Can",
      description: {
        de: "Wechselnde Berliner und europaeische Brauer.",
        en: "Rotating Berlin and EU craft picks."
      },
      price: "6 EUR"
    },
    {
      id: "na-1",
      category: "non-alcoholic",
      name: "Verjus Spritz",
      description: {
        de: "Herb-frisch mit Rosmarin.",
        en: "Tart and refreshing with rosemary."
      },
      price: "7 EUR"
    },
    {
      id: "na-2",
      category: "non-alcoholic",
      name: "House Ginger Lemonade",
      description: {
        de: "Ingwer, Zitrone, wenig Zucker.",
        en: "Fresh ginger, lemon and low sugar."
      },
      price: "6 EUR"
    },
    {
      id: "snack-1",
      category: "snacks",
      name: "Olives + Citrus Peel",
      description: {
        de: "Marinierte Oliven mit Zitrusnote.",
        en: "Marinated olives with citrus peel."
      },
      price: "5 EUR"
    },
    {
      id: "snack-2",
      category: "snacks",
      name: "Cheese Board Small",
      description: {
        de: "Zwei Kaesesorten, Brot, Chutney.",
        en: "Two cheeses, bread and chutney."
      },
      price: "9 EUR"
    }
  ] satisfies MenuItem[],
  galleryPlaceholders: [
    {
      id: "gallery-1",
      title: { de: "Kupfer am Tresen", en: "Copper at the bar" },
      caption: { de: "Waerme und Glanz", en: "Warmth and glow" },
      gradientFrom: "#B65A3C",
      gradientTo: "#121216"
    },
    {
      id: "gallery-2",
      title: { de: "Samtgruene Ecken", en: "Velvet green corners" },
      caption: { de: "Leise Gespraeche", en: "Soft conversations" },
      gradientFrom: "#1F3A2E",
      gradientTo: "#0B0B0D"
    },
    {
      id: "gallery-3",
      title: { de: "Nachtfenster", en: "Night windows" },
      caption: { de: "Wedding nach Mitternacht", en: "Wedding after dark" },
      gradientFrom: "#121216",
      gradientTo: "#B8774E"
    },
    {
      id: "gallery-4",
      title: { de: "Kerzenlicht", en: "Candle light" },
      caption: { de: "Ruhiger Takt", en: "Slow rhythm" },
      gradientFrom: "#C9A46A",
      gradientTo: "#121216"
    },
    {
      id: "gallery-5",
      title: { de: "Flaschenwand", en: "Bottle wall" },
      caption: { de: "Natural Wine Fokus", en: "Natural wine focus" },
      gradientFrom: "#B8774E",
      gradientTo: "#1F3A2E"
    },
    {
      id: "gallery-6",
      title: { de: "Spaeter Tresen", en: "Late bar counter" },
      caption: { de: "02:00 Vibe", en: "02:00 vibe" },
      gradientFrom: "#0B0B0D",
      gradientTo: "#B65A3C"
    },
    {
      id: "gallery-7",
      title: { de: "Wohnzimmerblick", en: "Living-room angle" },
      caption: { de: "Niedrige Lichter", en: "Low lights" },
      gradientFrom: "#1F3A2E",
      gradientTo: "#B8774E"
    },
    {
      id: "gallery-8",
      title: { de: "Barhocker", en: "Bar stools" },
      caption: { de: "Ankommen und bleiben", en: "Arrive and stay" },
      gradientFrom: "#121216",
      gradientTo: "#C9A46A"
    }
  ] satisfies GalleryPlaceholder[]
} as const;
