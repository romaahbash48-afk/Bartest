/**
 * Bar Henrietta — Mood Map Data
 *
 * Owner: edit moods, recommendations, colors to match the bar's vibe.
 * Each mood has an accent color that subtly shifts the site's feel.
 */

export interface Mood {
  id: string;
  title: { de: string; en: string };
  vibe: { de: string; en: string };
  emoji: string;
  whatToOrder: {
    de: string;
    en: string;
    drink: string;
  };
  bestTime: { de: string; en: string };
  /** Accent override colors (hex) */
  accent: string;
  accent2: string;
  glow: string;
  /** Which menu category to highlight */
  highlightCategory: "natural-wine" | "cocktails" | "beer" | "non-alcoholic" | "snacks";
}

export const moods: Mood[] = [
  {
    id: "quiet-talk",
    title: { de: "Leise Gespräche", en: "Quiet Talk" },
    vibe: {
      de: "Stimmen, die nicht schreien müssen. Ein Abend zum Zuhören.",
      en: "Voices that don't need to shout. An evening to listen.",
    },
    emoji: "🤫",
    whatToOrder: {
      de: "Grüner Veltliner — knackig, leise, perfekt.",
      en: "Grüner Veltliner — crisp, quiet, perfect.",
      drink: "Grüner Veltliner",
    },
    bestTime: { de: "Früher Abend, 18–20 Uhr", en: "Early evening, 6–8 PM" },
    accent: "#B8774E",
    accent2: "#C9A46A",
    glow: "rgba(184,119,78,0.15)",
    highlightCategory: "natural-wine",
  },
  {
    id: "date-night",
    title: { de: "Date Night", en: "Date Night" },
    vibe: {
      de: "Kerzenlicht optional — die Stimmung liefern wir.",
      en: "Candlelight optional — we provide the atmosphere.",
    },
    emoji: "🌙",
    whatToOrder: {
      de: "Pétillant Naturel Rosé — prickelt genau richtig.",
      en: "Pétillant Naturel Rosé — bubbles just right.",
      drink: "Pétillant Naturel Rosé",
    },
    bestTime: { de: "Ab 20 Uhr", en: "From 8 PM" },
    accent: "#B65A3C",
    accent2: "#C9A46A",
    glow: "rgba(182,90,60,0.15)",
    highlightCategory: "natural-wine",
  },
  {
    id: "buzz-social",
    title: { de: "Buzz & Social", en: "Buzz & Social" },
    vibe: {
      de: "Neue Leute, gute Energie, der Abend schreibt sich selbst.",
      en: "New people, good energy, the evening writes itself.",
    },
    emoji: "✨",
    whatToOrder: {
      de: "Henrietta Negroni — unser Signature, macht gesellig.",
      en: "Henrietta Negroni — our signature, makes you social.",
      drink: "Henrietta Negroni",
    },
    bestTime: { de: "Ab 21 Uhr", en: "From 9 PM" },
    accent: "#C9A46A",
    accent2: "#B8774E",
    glow: "rgba(201,164,106,0.18)",
    highlightCategory: "cocktails",
  },
  {
    id: "solo-reset",
    title: { de: "Solo Reset", en: "Solo Reset" },
    vibe: {
      de: "Ein Drink, ein Buch, ein Atemzug. Nur du.",
      en: "A drink, a book, a breath. Just you.",
    },
    emoji: "🫧",
    whatToOrder: {
      de: "Kombucha vom Fass — klar im Kopf, weich im Bauch.",
      en: "Kombucha on draft — clear mind, warm belly.",
      drink: "Kombucha vom Fass",
    },
    bestTime: { de: "Früher Abend, unter der Woche", en: "Early evening, weekdays" },
    accent: "#1F3A2E",
    accent2: "#B8774E",
    glow: "rgba(31,58,46,0.2)",
    highlightCategory: "non-alcoholic",
  },
  {
    id: "wine-exploration",
    title: { de: "Wein-Entdeckung", en: "Wine Exploration" },
    vibe: {
      de: "Neue Trauben, alte Böden, überraschende Flaschen.",
      en: "New grapes, old soils, surprising bottles.",
    },
    emoji: "🍷",
    whatToOrder: {
      de: "Skin-Contact Orange — komplex, mutig, anders.",
      en: "Skin-Contact Orange — complex, bold, different.",
      drink: "Skin-Contact Orange",
    },
    bestTime: { de: "Jederzeit — frag nach Empfehlungen", en: "Anytime — ask for recommendations" },
    accent: "#8B4513",
    accent2: "#B65A3C",
    glow: "rgba(139,69,19,0.15)",
    highlightCategory: "natural-wine",
  },
];

export type MoodId = (typeof moods)[number]["id"];
