"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Lang } from "@/lib/i18n";

const languages: Lang[] = ["de", "en"];

export function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("nav.language")}
      className="inline-flex items-center rounded-full border border-white/15 bg-surface p-1"
    >
      {languages.map((option) => {
        const isActive = option === lang;

        return (
          <button
            key={option}
            type="button"
            onClick={() => setLang(option)}
            aria-pressed={isActive}
            className={`rounded-full px-3 py-1 text-xs font-medium tracking-widest transition ${
              isActive
                ? "bg-[var(--accent)] text-white"
                : "text-text-muted hover:bg-white/5 hover:text-text"
            }`}
          >
            {option.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
