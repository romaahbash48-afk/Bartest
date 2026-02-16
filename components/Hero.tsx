'use client';

import { useLocale } from '@/context/LocaleContext';
import { useMood } from '@/context/MoodContext';
import { motion } from 'framer-motion';

export function Hero() {
  const { t } = useLocale();
  const { mood } = useMood();

  return (
    <section
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
      aria-label="Welcome"
    >
      <div className="grain-overlay" aria-hidden="true" />

      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-text mb-4">
          Bar Henrietta
        </h1>
        <p className="font-serif text-xl md:text-2xl text-text-muted mb-2">
          Natural wine • Beer • Cocktails
        </p>
        <p className="text-sm text-accent mb-8" style={{ color: 'var(--accent)' }}>
          {t('hero_tonight')} {t(mood.titleKey)}
        </p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a
            href="#map"
            className="btn-press px-6 py-3 bg-surface border border-accent/50 text-accent rounded-lg hover:bg-accent/10 transition-colors focus-visible:outline-accent outline-offset-2"
          >
            {t('hero_cta_find')}
          </a>
          <a
            href="#reservation"
            className="btn-press px-6 py-3 bg-accent text-background rounded-lg hover:opacity-90 transition-opacity focus-visible:outline-accent outline-offset-2"
            style={{ backgroundColor: 'var(--accent)' }}
          >
            {t('hero_cta_reserve')}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
