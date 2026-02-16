"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function SkipLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2"
    >
      {t("site.skipToContent")}
    </a>
  );
}
