/**
 * Bar Henrietta — Localization (DE / EN)
 *
 * Owner: edit any text below to change what appears on the site.
 * Keep both "de" and "en" versions updated.
 */

export type Locale = "de" | "en";

const translations = {
  // Navigation
  "nav.home": { de: "Start", en: "Home" },
  "nav.menu": { de: "Karte", en: "Menu" },
  "nav.visit": { de: "Besuch", en: "Visit" },
  "nav.reserve": { de: "Reservieren", en: "Reserve" },

  // Hero
  "hero.slogan": {
    de: "Naturwein · Bier · Cocktails — in deinem Wohnzimmer in Wedding.",
    en: "Natural wine · Beer · Cocktails — your living room in Wedding.",
  },
  "hero.findUs": { de: "Finde uns", en: "Find us" },
  "hero.reserve": { de: "Reservieren", en: "Reserve" },
  "hero.tonight": { de: "Heute Abend", en: "Tonight" },

  // Story sections
  "story.drinks.title": {
    de: "Natural Wine · Bier · Cocktails",
    en: "Natural Wine · Beer · Cocktails",
  },
  "story.drinks.text": {
    de: "Handverlesene Weine kleiner Winzer, Berliner Craft-Biere und Cocktails, die Geschichten erzählen.",
    en: "Hand-picked wines from small producers, Berlin craft beers, and cocktails that tell stories.",
  },
  "story.mood.title": {
    de: "Wohnzimmer-Stimmung, gedimmtes Licht, gute Gespräche",
    en: "Living-room mood, dim lights, good conversations",
  },
  "story.mood.text": {
    de: "Kein Lärm, kein Stress. Ein Ort, an dem Abende so enden, wie sie sollen — langsam.",
    en: "No noise, no rush. A place where evenings end the way they should — slowly.",
  },
  "story.location.title": { de: "Wedding, Berlin", en: "Wedding, Berlin" },
  "story.location.text": {
    de: "Zwischen Kiez-Charme und Großstadtpuls. Malplaquetstraße 28.",
    en: "Between neighborhood charm and city pulse. Malplaquetstraße 28.",
  },

  // Today / Open status
  "today.title": { de: "Heute", en: "Today" },
  "today.open": { de: "Jetzt geöffnet", en: "Open now" },
  "today.closed": { de: "Gerade geschlossen", en: "Closed now" },
  "today.opensAt": { de: "Öffnet um", en: "Opens at" },
  "today.closesAt": { de: "Schließt um", en: "Closes at" },
  "today.nextOpen": { de: "Nächste Öffnung", en: "Next opening" },
  "today.hours": { de: "Öffnungszeiten", en: "Opening hours" },

  // Days
  "day.Mon": { de: "Mo", en: "Mon" },
  "day.Tue": { de: "Di", en: "Tue" },
  "day.Wed": { de: "Mi", en: "Wed" },
  "day.Thu": { de: "Do", en: "Thu" },
  "day.Fri": { de: "Fr", en: "Fri" },
  "day.Sat": { de: "Sa", en: "Sat" },
  "day.Sun": { de: "So", en: "Sun" },

  // Menu
  "menu.title": { de: "Karte", en: "Menu" },
  "menu.preview.title": { de: "Unsere Auswahl", en: "Our Selection" },
  "menu.seeAll": { de: "Vollständige Karte", en: "See full menu" },
  "menu.disclaimer": {
    de: "Auswahl wechselt regelmäßig.",
    en: "Selection changes regularly.",
  },
  "menu.filter.all": { de: "Alle", en: "All" },
  "menu.filter.natural-wine": { de: "Naturwein", en: "Natural Wine" },
  "menu.filter.cocktails": { de: "Cocktails", en: "Cocktails" },
  "menu.filter.beer": { de: "Bier", en: "Beer" },
  "menu.filter.non-alcoholic": { de: "Alkoholfrei", en: "Non-Alcoholic" },
  "menu.filter.snacks": { de: "Snacks", en: "Snacks" },

  // Gallery
  "gallery.title": { de: "Eindrücke", en: "Impressions" },

  // Reservation
  "reservation.title": { de: "Reservierung", en: "Reservation" },
  "reservation.noWeekend": {
    de: "Keine Reservierungen für Freitag & Samstag.",
    en: "No reservations for Fridays & Saturdays.",
  },
  "reservation.held": {
    de: "Tische werden bis 21:00 Uhr gehalten (So–Do).",
    en: "Tables are held until 21:00 (Sun–Thu).",
  },
  "reservation.confirm": {
    de: "Bestätigung innerhalb eines Tages.",
    en: "Confirmation within a day.",
  },
  "reservation.emailCta": {
    de: "E-Mail für Reservierung",
    en: "Email for reservation",
  },
  "reservation.or": { de: "oder nutze das Formular:", en: "or use the form:" },
  "reservation.date": { de: "Datum", en: "Date" },
  "reservation.time": { de: "Uhrzeit", en: "Time" },
  "reservation.partySize": { de: "Personenanzahl", en: "Party size" },
  "reservation.message": { de: "Nachricht (optional)", en: "Message (optional)" },
  "reservation.generate": {
    de: "E-Mail erstellen",
    en: "Generate email",
  },

  // Map
  "map.title": { de: "So findest du uns", en: "How to find us" },
  "map.openMaps": { de: "In Google Maps öffnen", en: "Open in Google Maps" },

  // Visit page
  "visit.title": { de: "Besuch uns", en: "Visit us" },
  "visit.address": { de: "Adresse", en: "Address" },
  "visit.howToGet": { de: "Anfahrt", en: "How to get here" },
  "visit.transit": {
    de: "U-Bahn: U6 Leopoldplatz oder Seestraße (5 Min. Fußweg). Bus: M27, 142.",
    en: "U-Bahn: U6 Leopoldplatz or Seestraße (5 min walk). Bus: M27, 142.",
  },
  "visit.reservationRules": {
    de: "Reservierungsregeln",
    en: "Reservation rules",
  },
  "visit.contact": { de: "Kontakt", en: "Contact" },

  // Footer
  "footer.copy": {
    de: `© ${new Date().getFullYear()} Bar Henrietta. Alle Rechte vorbehalten.`,
    en: `© ${new Date().getFullYear()} Bar Henrietta. All rights reserved.`,
  },

  // 404
  "404.title": { de: "Verirrt?", en: "Lost?" },
  "404.text": {
    de: "Dieser Drink existiert nicht. Aber viele andere schon.",
    en: "This drink doesn't exist. But many others do.",
  },
  "404.back": { de: "Zurück zur Bar", en: "Back to the bar" },

  // Mood Map
  "mood.title": { de: "Dein Abend", en: "Your Evening" },
  "mood.subtitle": {
    de: "Wähle deine Stimmung — wir passen den Abend an.",
    en: "Pick your mood — we'll shape the evening.",
  },
  "mood.recommendation": { de: "Unsere Empfehlung", en: "Our recommendation" },
  "mood.bestTime": { de: "Beste Zeit", en: "Best time" },
  "mood.todayNote": { de: "Tagesnotiz", en: "Today's note" },

  // Easter egg
  "easter.message": {
    de: "Du hast uns gefunden 🖤 Dein erster Drink geht auf die gute Stimmung.",
    en: "You found us 🖤 Your first drink is on the good vibes.",
  },

  // Language toggle
  "lang.switch": { de: "EN", en: "DE" },
  "lang.label": { de: "Sprache wechseln", en: "Switch language" },
} as const;

export type TranslationKey = keyof typeof translations;

export function getTranslation(key: TranslationKey, locale: Locale): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[locale] ?? entry["en"];
}

export default translations;
