"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { type Locale, getTranslation, type TranslationKey } from "@content/i18n";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: TranslationKey) => string;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  setLocale: () => {},
  t: (key) => key,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("henrietta-lang") as Locale | null;
    if (stored === "de" || stored === "en") {
      setLocaleState(stored);
    } else {
      const nav = navigator.language.toLowerCase();
      setLocaleState(nav.startsWith("de") ? "de" : "en");
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("henrietta-lang", l);
    document.documentElement.lang = l;
  }, []);

  const t = useCallback(
    (key: TranslationKey) => getTranslation(key, locale),
    [locale],
  );

  // Prevent flash of wrong language
  if (!mounted) {
    return (
      <LocaleContext.Provider value={{ locale: "en", setLocale, t: (key) => getTranslation(key, "en") }}>
        {children}
      </LocaleContext.Provider>
    );
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
