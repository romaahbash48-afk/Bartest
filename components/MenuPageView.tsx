"use client";

import { MenuPageCatalog } from "@/components/MenuPageCatalog";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function MenuPageView() {
  const { t } = useLanguage();

  return (
    <div className="pb-8 pt-12 md:pt-16">
      <div className="mx-auto mb-8 w-full max-w-6xl px-4 md:px-8">
        <h1 className="font-serif text-5xl text-warm-cream md:text-6xl">{t("menuPage.title")}</h1>
        <p className="mt-3 max-w-3xl text-text-muted">{t("menuPage.subtitle")}</p>
      </div>
      <MenuPageCatalog />
    </div>
  );
}
