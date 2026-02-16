/**
 * Bar Henrietta — Mood Map data
 * Each mood affects accent colors and recommendations.
 */

export type MoodId = 'quiet_talk' | 'date_night' | 'buzz' | 'solo' | 'wine';

export interface Mood {
  id: MoodId;
  titleKey: string;
  vibeKey: string;
  orderKey: string;
  timeKey: string;
  /** CSS accent color (hex) */
  accent: string;
  /** Secondary accent */
  accent2: string;
  /** Glow color for highlights */
  glow: string;
  /** Category to highlight in menu preview */
  highlightCategory: 'natural_wine' | 'cocktails' | 'beer' | 'non_alcoholic' | null;
}

export const moods: Mood[] = [
  {
    id: 'quiet_talk',
    titleKey: 'mood_quiet_talk',
    vibeKey: 'mood_quiet_talk_vibe',
    orderKey: 'mood_quiet_talk_order',
    timeKey: 'mood_quiet_talk_time',
    accent: '#B65A3C',
    accent2: '#C9A46A',
    glow: 'rgba(182, 90, 60, 0.3)',
    highlightCategory: 'natural_wine',
  },
  {
    id: 'date_night',
    titleKey: 'mood_date_night',
    vibeKey: 'mood_date_night_vibe',
    orderKey: 'mood_date_night_order',
    timeKey: 'mood_date_night_time',
    accent: '#B8774E',
    accent2: '#C9A46A',
    glow: 'rgba(184, 119, 78, 0.35)',
    highlightCategory: 'cocktails',
  },
  {
    id: 'buzz',
    titleKey: 'mood_buzz',
    vibeKey: 'mood_buzz_vibe',
    orderKey: 'mood_buzz_order',
    timeKey: 'mood_buzz_time',
    accent: '#C9A46A',
    accent2: '#B8774E',
    glow: 'rgba(201, 164, 106, 0.35)',
    highlightCategory: 'beer',
  },
  {
    id: 'solo',
    titleKey: 'mood_solo',
    vibeKey: 'mood_solo_vibe',
    orderKey: 'mood_solo_order',
    timeKey: 'mood_solo_time',
    accent: '#1F3A2E',
    accent2: '#B8774E',
    glow: 'rgba(31, 58, 46, 0.4)',
    highlightCategory: 'natural_wine',
  },
  {
    id: 'wine',
    titleKey: 'mood_wine',
    vibeKey: 'mood_wine_vibe',
    orderKey: 'mood_wine_order',
    timeKey: 'mood_wine_time',
    accent: '#B65A3C',
    accent2: '#C9A46A',
    glow: 'rgba(182, 90, 60, 0.3)',
    highlightCategory: 'natural_wine',
  },
];

export const defaultMood: MoodId = 'quiet_talk';
