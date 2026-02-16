import type { LocalizedString } from "@/lib/i18n";
import type { MenuCategoryId } from "@/content/site";

export interface MoodEntry {
  id: string;
  title: LocalizedString;
  vibeLine: LocalizedString;
  whatToOrder: LocalizedString;
  bestTime: LocalizedString;
  accent: string;
  accent2: string;
  glow: string;
  highlightCategory: MenuCategoryId;
}

export const moods: MoodEntry[] = [
  {
    id: "quiet-talk",
    title: {
      de: "Quiet talk",
      en: "Quiet talk"
    },
    vibeLine: {
      de: "Leise Stimmen, tiefe Sofa-Ecken, langsamer Abend.",
      en: "Soft voices, deep corners, and a slower evening pace."
    },
    whatToOrder: {
      de: "Skin Contact White - aromatisch, aber nicht laut.",
      en: "Skin Contact White - aromatic but never loud."
    },
    bestTime: {
      de: "Frueher Abend, 18:30 bis 20:30",
      en: "Early evening, 18:30 to 20:30"
    },
    accent: "#B8774E",
    accent2: "#C9A46A",
    glow: "rgba(184,119,78,0.34)",
    highlightCategory: "natural-wine"
  },
  {
    id: "date-night",
    title: {
      de: "Date night",
      en: "Date night"
    },
    vibeLine: {
      de: "Waermeres Licht, naeherer Blick, ein Drink mit Tiefe.",
      en: "Warmer lights, closer glances, and a drink with depth."
    },
    whatToOrder: {
      de: "Terracotta Negroni - bitter, elegant, langsam trinken.",
      en: "Terracotta Negroni - bitter, elegant, made for slow sipping."
    },
    bestTime: {
      de: "Ab 20:00 bis spaet",
      en: "From 20:00 into the late hours"
    },
    accent: "#B65A3C",
    accent2: "#C9A46A",
    glow: "rgba(182,90,60,0.33)",
    highlightCategory: "cocktails"
  },
  {
    id: "buzz-social",
    title: {
      de: "Buzz / social",
      en: "Buzz / social"
    },
    vibeLine: {
      de: "Mehr Bewegung am Tresen, neue Gesichter, lockerer Flow.",
      en: "More movement at the bar, new faces, and easy social flow."
    },
    whatToOrder: {
      de: "Pils vom Fass - schnell, frisch, gesellig.",
      en: "Pils on tap - fresh, fast and social."
    },
    bestTime: {
      de: "Spaeter Abend, 21:30 bis Schluss",
      en: "Later night, 21:30 until close"
    },
    accent: "#C9A46A",
    accent2: "#B8774E",
    glow: "rgba(201,164,106,0.34)",
    highlightCategory: "beer"
  },
  {
    id: "solo-reset",
    title: {
      de: "Solo reset",
      en: "Solo reset"
    },
    vibeLine: {
      de: "Ankommen, tief durchatmen, im eigenen Tempo bleiben.",
      en: "Arrive, exhale, and stay in your own tempo."
    },
    whatToOrder: {
      de: "Verjus Spritz - frisch, klar und alkoholfrei.",
      en: "Verjus Spritz - clear, refreshing, and no alcohol."
    },
    bestTime: {
      de: "Direkt zur Oeffnung",
      en: "Right after opening"
    },
    accent: "#1F3A2E",
    accent2: "#C9A46A",
    glow: "rgba(31,58,46,0.35)",
    highlightCategory: "non-alcoholic"
  },
  {
    id: "wine-exploration",
    title: {
      de: "Wine exploration",
      en: "Wine exploration"
    },
    vibeLine: {
      de: "Neue Flaschen, kurze Erklaerungen, neugieriger Geschmack.",
      en: "New bottles, short guidance and curious tasting."
    },
    whatToOrder: {
      de: "Pet Nat by the Glass - lebendig und verspielt.",
      en: "Pet Nat by the Glass - lively and playful."
    },
    bestTime: {
      de: "18:00 bis 22:00",
      en: "18:00 to 22:00"
    },
    accent: "#B8774E",
    accent2: "#1F3A2E",
    glow: "rgba(184,119,78,0.38)",
    highlightCategory: "natural-wine"
  }
];

export const defaultMoodId = moods[0]?.id ?? "quiet-talk";
