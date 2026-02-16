/**
 * Bar Henrietta — Translations (DE/EN)
 * Add or edit keys here. Use t(key) in components.
 */

export type Locale = 'de' | 'en';

export const translations: Record<Locale, Record<string, string>> = {
  de: {
    // Nav
    nav_menu: 'Menü',
    nav_info: 'Info',
    nav_find_us: 'Find us',
    nav_reserve: 'Reservieren',

    // Hero
    hero_cta_find: 'Find us',
    hero_cta_reserve: 'Reservieren',
    hero_tonight: 'Heute Abend:',

    // Story sections
    story_1: 'Natural wine • Beer • Cocktails',
    story_2: 'Living-room Stimmung, gedämpftes Licht, gute Gespräche',
    story_3: 'Wedding, Berlin',

    // Today
    today_title: 'Heute',
    today_open: 'Geöffnet',
    today_closed: 'Geschlossen',
    today_next_open: 'Öffnet um',
    today_next_close: 'Schließt um',

    // Menu
    menu_title: 'Menü',
    menu_see_full: 'Vollständiges Menü',
    menu_natural_wine: 'Natural Wine',
    menu_cocktails: 'Cocktails',
    menu_beer: 'Bier',
    menu_non_alcoholic: 'Alkoholfrei',
    menu_snacks: 'Snacks',
    menu_all: 'Alle',
    menu_disclaimer: 'Auswahl kann sich ändern',

    // Mood Map
    mood_title: 'Mood Map',
    mood_subtitle: 'Wähle deine Stimmung für heute Abend',
    mood_what_to_order: 'Was bestellen',
    mood_best_time: 'Beste Zeit',
    mood_todays_note: "Heute's Note",

    // Moods
    mood_quiet_talk: 'Ruhige Gespräche',
    mood_quiet_talk_vibe: 'Entspannt, vertraut',
    mood_quiet_talk_order: 'Ein Glas Rotwein — warm, unaufdringlich',
    mood_quiet_talk_time: 'Früher Abend',

    mood_date_night: 'Date Night',
    mood_date_night_vibe: 'Romantisch, intim',
    mood_date_night_order: 'Spritz — leicht, gesellig',
    mood_date_night_time: 'Später Abend',

    mood_buzz: 'Buzz / Social',
    mood_buzz_vibe: 'Leute kennenlernen, feiern',
    mood_buzz_order: 'Craft IPA — locker, gesprächig',
    mood_buzz_time: 'Später Abend',

    mood_solo: 'Solo Reset',
    mood_solo_vibe: 'Alleine kommen, ausatmen',
    mood_solo_order: 'Orange Wine — ruhig, besinnlich',
    mood_solo_time: 'Früher Abend',

    mood_wine: 'Wine Exploration',
    mood_wine_vibe: 'Neues probieren',
    mood_wine_order: 'Gamay aus der Loire — überraschend',
    mood_wine_time: 'Jederzeit',

    // Reservation
    reservation_title: 'Reservierung',
    reservation_no_fri_sat: 'Keine Reservierungen Fr & Sa',
    reservation_hold: 'Tische reserviert bis 21:00 (So–Do)',
    reservation_email: 'E-Mail für Reservierung',
    reservation_form_date: 'Datum',
    reservation_form_time: 'Uhrzeit',
    reservation_form_party: 'Personen',
    reservation_form_message: 'Nachricht',
    reservation_generate: 'E-Mail generieren',

    // Map
    map_title: 'Find us',
    map_open_maps: 'In Google Maps öffnen',

    // Footer
    footer_instagram: 'Instagram',
    footer_copyright: '© Bar Henrietta, Wedding Berlin',

    // 404
    not_found_title: 'Verloren im Wedding',
    not_found_text: 'Diese Seite existiert nicht. Komm vorbei — wir haben den richtigen Weg.',
    not_found_back: 'Zurück',

    // Easter egg
    easter_egg: 'Henrietta sagt: Prost! 🥂',
  },
  en: {
    // Nav
    nav_menu: 'Menu',
    nav_info: 'Info',
    nav_find_us: 'Find us',
    nav_reserve: 'Reserve',

    // Hero
    hero_cta_find: 'Find us',
    hero_cta_reserve: 'Reserve',
    hero_tonight: 'Tonight:',

    // Story sections
    story_1: 'Natural wine • Beer • Cocktails',
    story_2: 'Living-room mood, dim lights, good conversations',
    story_3: 'Wedding, Berlin',

    // Today
    today_title: 'Today',
    today_open: 'Open',
    today_closed: 'Closed',
    today_next_open: 'Opens at',
    today_next_close: 'Closes at',

    // Menu
    menu_title: 'Menu',
    menu_see_full: 'See full menu',
    menu_natural_wine: 'Natural Wine',
    menu_cocktails: 'Cocktails',
    menu_beer: 'Beer',
    menu_non_alcoholic: 'Non-Alcoholic',
    menu_snacks: 'Snacks',
    menu_all: 'All',
    menu_disclaimer: 'Selection changes',

    // Mood Map
    mood_title: 'Mood Map',
    mood_subtitle: 'Choose your vibe for tonight',
    mood_what_to_order: 'What to order',
    mood_best_time: 'Best time',
    mood_todays_note: "Today's note",

    // Moods
    mood_quiet_talk: 'Quiet talk',
    mood_quiet_talk_vibe: 'Relaxed, familiar',
    mood_quiet_talk_order: 'A glass of red — warm, unobtrusive',
    mood_quiet_talk_time: 'Early evening',

    mood_date_night: 'Date night',
    mood_date_night_vibe: 'Romantic, intimate',
    mood_date_night_order: 'Spritz — light, sociable',
    mood_date_night_time: 'Later night',

    mood_buzz: 'Buzz / Social',
    mood_buzz_vibe: 'Meet people, hang out',
    mood_buzz_order: 'Craft IPA — casual, chatty',
    mood_buzz_time: 'Later night',

    mood_solo: 'Solo reset',
    mood_solo_vibe: 'Come alone, exhale',
    mood_solo_order: 'Orange wine — quiet, contemplative',
    mood_solo_time: 'Early evening',

    mood_wine: 'Wine exploration',
    mood_wine_vibe: 'Try something new',
    mood_wine_order: 'Gamay from the Loire — surprising',
    mood_wine_time: 'Anytime',

    // Reservation
    reservation_title: 'Reservation',
    reservation_no_fri_sat: 'No reservations Fri & Sat',
    reservation_hold: 'Tables held until 21:00 (Sun–Thu)',
    reservation_email: 'Email for reservation',
    reservation_form_date: 'Date',
    reservation_form_time: 'Time',
    reservation_form_party: 'Party size',
    reservation_form_message: 'Message',
    reservation_generate: 'Generate email',

    // Map
    map_title: 'Find us',
    map_open_maps: 'Open in Google Maps',

    // Footer
    footer_instagram: 'Instagram',
    footer_copyright: '© Bar Henrietta, Wedding Berlin',

    // 404
    not_found_title: 'Lost in Wedding',
    not_found_text: "This page doesn't exist. Come by — we'll point you the right way.",
    not_found_back: 'Back',

    // Easter egg
    easter_egg: "Henrietta says: Cheers! 🥂",
  },
};
