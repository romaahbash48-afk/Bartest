'use client';

import { useLocale } from '@/context/LocaleContext';
import { useMood } from '@/context/MoodContext';
import { moods } from '@/content/moods';
import { site } from '@/content/site';
import { motion, AnimatePresence } from 'framer-motion';

export function MoodMap() {
  const { t, locale } = useLocale();
  const { moodId, setMoodId, mood } = useMood();

  return (
    <section
      className="py-20 px-6 bg-surface/30"
      aria-labelledby="mood-map-title"
    >
      <div className="max-w-4xl mx-auto">
        <h2 id="mood-map-title" className="font-serif text-3xl text-text mb-2">
          {t('mood_title')}
        </h2>
        <p className="text-text-muted text-sm mb-8">{t('mood_subtitle')}</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-wrap gap-2">
            {moods.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMoodId(m.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all focus-visible:outline-accent outline-offset-2 ${
                  moodId === m.id
                    ? 'border-2'
                    : 'border border-surface bg-background/50 hover:border-accent/50'
                }`}
                style={
                  moodId === m.id
                    ? {
                        borderColor: m.accent,
                        backgroundColor: `${m.accent}20`,
                        color: m.accent2,
                      }
                    : {}
                }
                aria-pressed={moodId === m.id}
              >
                {t(m.titleKey)}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={moodId}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-xl border border-surface bg-background/50"
              >
                <p className="text-text-muted text-sm mb-8">{t(mood.vibeKey)}</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                      {t('mood_what_to_order')}
                    </p>
                    <p className="text-text" style={{ color: 'var(--accent)' }}>
                      {t(mood.orderKey)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                      {t('mood_best_time')}
                    </p>
                    <p className="text-text-muted">{t(mood.timeKey)}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="p-4 rounded-lg bg-velvet-green/20 border border-velvet-green/30">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                {t('mood_todays_note')}
              </p>
              <p className="text-warm-cream text-sm">
                {site.todayVibeNote[locale]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
