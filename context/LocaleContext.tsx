'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Locale } from '@/content/i18n';
import { translations } from '@/content/i18n';

const STORAGE_KEY = 'bar-henrietta-locale';

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
} | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('de');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && (stored === 'de' || stored === 'en')) {
      setLocaleState(stored);
    } else {
      const nav = typeof navigator !== 'undefined' ? navigator.language : 'de';
      setLocaleState(nav.startsWith('de') ? 'de' : 'en');
    }
    setMounted(true);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, l);
    }
  };

  const t = (key: string): string => {
    const dict = translations[locale];
    return dict[key] ?? key;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
