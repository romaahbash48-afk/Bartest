export const siteConfig = {
  name: 'Bar Henrietta',
  area: 'Berlin-Wedding',
  address: {
    street: 'Malplaquetstraße 28',
    postalCode: '13347',
    city: 'Berlin',
    country: 'Germany',
  },
  fullAddress: 'Malplaquetstraße 28, 13347 Berlin',
  email: 'bar.henrietta.berlin@gmail.com',
  instagram: 'https://www.instagram.com/bar.henrietta.berlin/',
  googleMapsUrl: 'https://www.google.com/maps/place/Malplaquetstra%C3%9Fe+28,+13347+Berlin',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.8!2d13.353!3d52.556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMzJzIxLjYiTiAxM8KwMjEnMTAuOCJF!5e0!3m2!1sen!2sde!4v1234567890',
  
  // Opening hours (24-hour format, Europe/Berlin timezone)
  openingHours: [
    { day: 1, name: 'Monday', open: '18:00', close: '00:00' },
    { day: 2, name: 'Tuesday', open: '18:00', close: '01:00' },
    { day: 3, name: 'Wednesday', open: '18:00', close: '01:00' },
    { day: 4, name: 'Thursday', open: '18:00', close: '01:00' },
    { day: 5, name: 'Friday', open: '18:00', close: '02:00' },
    { day: 6, name: 'Saturday', open: '18:00', close: '02:00' },
    { day: 0, name: 'Sunday', open: '18:00', close: '00:00' },
  ],

  // Reservation rules
  reservationRules: {
    noReservationDays: [5, 6], // Friday, Saturday
    confirmationTime: '24 hours',
    tableHeldUntil: '21:00',
  },

  // Today's vibe note (editable by owner)
  todayVibeNote: {
    de: 'Neue Naturweine aus Österreich eingetroffen',
    en: 'New natural wines from Austria just arrived',
  },

  // Menu preview items (for homepage)
  menuPreview: [
    {
      id: '1',
      category: 'wine',
      name: { de: 'Naturwein des Tages', en: 'Natural Wine of the Day' },
      description: { de: 'Wechselnde Auswahl', en: 'Rotating selection' },
      price: '6-12',
    },
    {
      id: '2',
      category: 'cocktail',
      name: { de: 'Negroni', en: 'Negroni' },
      description: { de: 'Klassisch oder mit Twist', en: 'Classic or with a twist' },
      price: '10',
    },
    {
      id: '3',
      category: 'beer',
      name: { de: 'Craft Beer', en: 'Craft Beer' },
      description: { de: 'Lokale Auswahl', en: 'Local selection' },
      price: '5-7',
    },
    {
      id: '4',
      category: 'cocktail',
      name: { de: 'Spritz Variationen', en: 'Spritz Variations' },
      description: { de: 'Aperitivo Klassiker', en: 'Aperitivo classics' },
      price: '8',
    },
    {
      id: '5',
      category: 'wine',
      name: { de: 'Orange Wine', en: 'Orange Wine' },
      description: { de: 'Mazeriert & lebendig', en: 'Macerated & vibrant' },
      price: '7-10',
    },
    {
      id: '6',
      category: 'nonalcoholic',
      name: { de: 'Hausgemachte Limonade', en: 'Homemade Lemonade' },
      description: { de: 'Saisonal', en: 'Seasonal' },
      price: '5',
    },
  ],

  // Gallery placeholders (owner can replace with real images)
  gallery: [
    { id: '1', alt: 'Interior view', gradient: 'from-terracotta to-copper' },
    { id: '2', alt: 'Bar detail', gradient: 'from-velvet-green to-background' },
    { id: '3', alt: 'Drink presentation', gradient: 'from-muted-gold to-warm-cream' },
    { id: '4', alt: 'Evening atmosphere', gradient: 'from-background to-surface' },
    { id: '5', alt: 'Wine selection', gradient: 'from-copper to-muted-gold' },
    { id: '6', alt: 'Corner seating', gradient: 'from-velvet-green to-terracotta' },
  ],
}

export type SiteConfig = typeof siteConfig
