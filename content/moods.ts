export const moods = [
  {
    id: 'quiet-talk',
    title: {
      de: 'Ruhiges Gespräch',
      en: 'Quiet talk',
    },
    vibe: {
      de: 'Tiefer Dialog, leise Ecke',
      en: 'Deep dialogue, quiet corner',
    },
    whatToOrder: {
      de: 'Naturwein (Weißburgunder) – rund, nicht aufdringlich',
      en: 'Natural wine (Pinot Blanc) – round, unobtrusive',
    },
    bestTime: {
      de: 'Früher Abend (18:00–20:00)',
      en: 'Early evening (18:00–20:00)',
    },
    accentColor: '#1F3A2E',
    accent2Color: '#C9A46A',
    glowColor: 'rgba(31, 58, 46, 0.3)',
    highlightCategory: 'wine',
  },
  {
    id: 'date-night',
    title: {
      de: 'Date Night',
      en: 'Date night',
    },
    vibe: {
      de: 'Romantisch, entspannt, charmant',
      en: 'Romantic, relaxed, charming',
    },
    whatToOrder: {
      de: 'Spritz Variation – leicht, elegant, perfekt zum Teilen',
      en: 'Spritz variation – light, elegant, perfect to share',
    },
    bestTime: {
      de: 'Nach 20:00, wenn die Stimmung weicher wird',
      en: 'After 20:00, when the vibe softens',
    },
    accentColor: '#B65A3C',
    accent2Color: '#B8774E',
    glowColor: 'rgba(182, 90, 60, 0.3)',
    highlightCategory: 'cocktail',
  },
  {
    id: 'buzz-social',
    title: {
      de: 'Socializing',
      en: 'Buzz / social',
    },
    vibe: {
      de: 'Leute treffen, lachen, kennenlernen',
      en: 'Meet people, laugh, connect',
    },
    whatToOrder: {
      de: 'Craft Beer – unkompliziert und gesellig',
      en: 'Craft beer – uncomplicated and social',
    },
    bestTime: {
      de: 'Donnerstag–Samstag, späterer Abend',
      en: 'Thursday–Saturday, later evening',
    },
    accentColor: '#C9A46A',
    accent2Color: '#B8774E',
    glowColor: 'rgba(201, 164, 106, 0.3)',
    highlightCategory: 'beer',
  },
  {
    id: 'solo-reset',
    title: {
      de: 'Solo Reset',
      en: 'Solo reset',
    },
    vibe: {
      de: 'Alleine kommen, durchatmen, sein',
      en: 'Come alone, breathe, just be',
    },
    whatToOrder: {
      de: 'Negroni – bitter, ehrlich, kein Schnickschnack',
      en: 'Negroni – bitter, honest, no fuss',
    },
    bestTime: {
      de: 'Montag–Mittwoch, früher oder später',
      en: 'Monday–Wednesday, early or late',
    },
    accentColor: '#B8774E',
    accent2Color: '#B65A3C',
    glowColor: 'rgba(184, 119, 78, 0.3)',
    highlightCategory: 'cocktail',
  },
]

export type Mood = typeof moods[0]
export type MoodId = typeof moods[number]['id']
