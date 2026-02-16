/**
 * Bar Henrietta — Single Source of Truth
 * Edit all site content here. No programming knowledge required.
 */

export const site = {
  name: 'Bar Henrietta',
  tagline: {
    de: 'Natural wine • Beer • Cocktails',
    en: 'Natural wine • Beer • Cocktails',
  },
  area: 'Berlin-Wedding',
  address: {
    street: 'Malplaquetstraße 28',
    city: '13347 Berlin',
    full: 'Malplaquetstraße 28, 13347 Berlin',
  },
  email: 'bar.henrietta.berlin@gmail.com',
  instagram: 'https://www.instagram.com/bar.henrietta.berlin/',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Malplaquetstraße+28,+13347+Berlin',

  /** Owner can change this daily — shown in MoodMap as "Today's note" */
  todayVibeNote: {
    de: 'Heute: besondere Weine aus dem Loire-Tal.',
    en: "Today: special wines from the Loire Valley.",
  },

  /** Opening hours — edit times here. Format: "HH:mm" (24h) */
  openingHours: [
    { day: 'mon', label: { de: 'Mo', en: 'Mon' }, open: '18:00', close: '00:00' },
    { day: 'tue', label: { de: 'Di', en: 'Tue' }, open: '18:00', close: '01:00' },
    { day: 'wed', label: { de: 'Mi', en: 'Wed' }, open: '18:00', close: '01:00' },
    { day: 'thu', label: { de: 'Do', en: 'Thu' }, open: '18:00', close: '01:00' },
    { day: 'fri', label: { de: 'Fr', en: 'Fri' }, open: '18:00', close: '02:00' },
    { day: 'sat', label: { de: 'Sa', en: 'Sat' }, open: '18:00', close: '02:00' },
    { day: 'sun', label: { de: 'So', en: 'Sun' }, open: '18:00', close: '00:00' },
  ],

  /** Reservation rules */
  reservationRules: {
    noReservationDays: { de: 'Fr & Sa', en: 'Fridays & Saturdays' },
    holdUntil: { de: 'Tische reserviert bis 21:00 (So–Do)', en: 'Tables held until 21:00 (Sun–Thu)' },
    confirmation: { de: 'Bestätigung innerhalb eines Tages', en: 'Confirmation within a day' },
  },

  /** Menu categories for full menu page */
  menuCategories: ['natural_wine', 'cocktails', 'beer', 'non_alcoholic', 'snacks'] as const,
} as const;

export type MenuCategory = (typeof site.menuCategories)[number];

/** Full menu items — edit here. Add/remove items as needed. */
export const menuItems = [
  // Natural Wine
  { id: '1', category: 'natural_wine' as const, name: 'Orange Wine, Georgia', price: '8', desc: { de: 'Amber, fruchtig', en: 'Amber, fruity' } },
  { id: '2', category: 'natural_wine' as const, name: 'Riesling, Pfalz', price: '7', desc: { de: 'Trocken, mineralisch', en: 'Dry, mineral' } },
  { id: '3', category: 'natural_wine' as const, name: 'Gamay, Loire', price: '9', desc: { de: 'Leicht, würzig', en: 'Light, spicy' } },
  { id: '4', category: 'natural_wine' as const, name: 'Glas Rotwein', price: '6–10', desc: { de: 'Tagesauswahl', en: 'Daily selection' } },
  // Cocktails
  { id: '5', category: 'cocktails' as const, name: 'Negroni', price: '11', desc: { de: 'Klassiker', en: 'Classic' } },
  { id: '6', category: 'cocktails' as const, name: 'Spritz', price: '9', desc: { de: 'Aperol oder Campari', en: 'Aperol or Campari' } },
  { id: '7', category: 'cocktails' as const, name: 'Gin Tonic', price: '10', desc: { de: 'Hausgin', en: 'House gin' } },
  { id: '8', category: 'cocktails' as const, name: 'Tagescocktail', price: '10', desc: { de: 'Wechselnde Kreation', en: 'Rotating creation' } },
  // Beer
  { id: '9', category: 'beer' as const, name: 'Pils', price: '5', desc: { de: 'Fass', en: 'Draft' } },
  { id: '10', category: 'beer' as const, name: 'Craft IPA', price: '6', desc: { de: 'Flasche', en: 'Bottle' } },
  { id: '11', category: 'beer' as const, name: 'Weizen', price: '5.5', desc: { de: 'Fass', en: 'Draft' } },
  // Non-Alcoholic
  { id: '12', category: 'non_alcoholic' as const, name: 'Tonic', price: '4', desc: { de: 'Fever Tree', en: 'Fever Tree' } },
  { id: '13', category: 'non_alcoholic' as const, name: 'Apfelsaft', price: '4', desc: { de: 'Regional', en: 'Regional' } },
  { id: '14', category: 'non_alcoholic' as const, name: 'Espresso', price: '3', desc: { de: 'Doppio', en: 'Doppio' } },
  // Snacks
  { id: '15', category: 'snacks' as const, name: 'Oliven', price: '5', desc: { de: 'Mariniert', en: 'Marinated' } },
  { id: '16', category: 'snacks' as const, name: 'Käseplatte', price: '12', desc: { de: '3 Sorten', en: '3 varieties' } },
  { id: '17', category: 'snacks' as const, name: 'Brot & Butter', price: '4', desc: { de: 'Hausbrot', en: 'House bread' } },
];

/** Preview items for homepage — subset of menuItems */
export const menuPreviewIds = ['1', '3', '5', '6', '9', '12', '15'];
