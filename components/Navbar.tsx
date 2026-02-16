'use client';

import Link from 'next/link';
import { useLocale } from '@/context/LocaleContext';
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const { locale, setLocale, t } = useLocale();
  const [easterCount, setEasterCount] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const handleLogoClick = useCallback(() => {
    const next = easterCount + 1;
    setEasterCount(next);
    if (next >= 5) {
      setShowToast(true);
      setEasterCount(0);
      setTimeout(() => setShowToast(false), 3000);
    }
  }, [easterCount]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-surface"
        role="navigation"
        aria-label="Main"
      >
        <Link
          href="/"
          className="font-serif text-xl text-text hover:text-accent transition-colors focus-visible:outline-accent outline-offset-2"
          onClick={handleLogoClick}
          aria-label="Bar Henrietta - Home"
        >
          Bar Henrietta
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/menu"
            className="text-sm text-text-muted hover:text-text transition-colors focus-visible:outline-accent outline-offset-2"
          >
            {t('nav_menu')}
          </Link>
          <Link
            href="/info"
            className="text-sm text-text-muted hover:text-text transition-colors focus-visible:outline-accent outline-offset-2"
          >
            {t('nav_info')}
          </Link>
          <a
            href="#map"
            className="text-sm text-text-muted hover:text-text transition-colors focus-visible:outline-accent outline-offset-2"
          >
            {t('nav_find_us')}
          </a>
          <a
            href="#reservation"
            className="text-sm text-text-muted hover:text-text transition-colors focus-visible:outline-accent outline-offset-2"
          >
            {t('nav_reserve')}
          </a>

          <div
            className="flex gap-1"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => setLocale('de')}
              className={`px-2 py-1 text-sm rounded transition-colors focus-visible:outline-accent outline-offset-2 ${
                locale === 'de' ? 'text-accent font-medium' : 'text-text-muted hover:text-text'
              }`}
              aria-pressed={locale === 'de'}
              aria-label="Deutsch"
            >
              DE
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`px-2 py-1 text-sm rounded transition-colors focus-visible:outline-accent outline-offset-2 ${
                locale === 'en' ? 'text-accent font-medium' : 'text-text-muted hover:text-text'
              }`}
              aria-pressed={locale === 'en'}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 bg-surface border border-accent/50 rounded-lg shadow-lg"
            role="status"
            aria-live="polite"
          >
            <span className="text-warm-cream font-serif text-lg">
              {t('easter_egg')}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
