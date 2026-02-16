"use client";

import { useMemo, useState } from "react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { useMood } from "@/components/providers/MoodProvider";
import { menuCategories, siteContent, type MenuCategoryId } from "@/content/site";
import { localize } from "@/lib/i18n";

type ActiveFilter = "all" | MenuCategoryId;

export function MenuPageCatalog() {
  const { lang, t } = useLanguage();
  const { mood } = useMood();
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>("all");

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") {
      return siteContent.menuItems;
    }

    return siteContent.menuItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-8 md:px-8">
      <div className="rounded-2xl border border-white/10 bg-surface p-4">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${
              activeFilter === "all"
                ? "border-[var(--accent2)] text-[var(--accent2)]"
                : "border-white/10 text-text-muted hover:text-text"
            }`}
          >
            {t("menuPage.filterAll")}
          </button>

          {menuCategories.map((category) => {
            const isActive = category.id === activeFilter;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveFilter(category.id)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${
                  isActive
                    ? "border-[var(--accent2)] text-[var(--accent2)]"
                    : "border-white/10 text-text-muted hover:text-text"
                }`}
              >
                {t(`menu.category.${category.id}` as const)}
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-sm text-text-muted">
          {t("menuPreview.moodPick")}:{" "}
          <span className="text-[var(--accent2)]">{t(`menu.category.${mood.highlightCategory}` as const)}</span>
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-white/10 bg-surface p-5 transition hover:border-[var(--accent)] hover:shadow-glow"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-serif text-3xl leading-tight text-warm-cream">{item.name}</h3>
              <p className="text-sm text-[var(--accent2)]">{item.price}</p>
            </div>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-text-muted">
              {t(`menu.category.${item.category}` as const)}
            </p>
            <p className="mt-3 text-sm text-text-muted">{localize(lang, item.description)}</p>
          </article>
        ))}
      </div>

      <p className="mt-5 text-sm text-text-muted">{t("menuPage.selectionChanges")}</p>
    </section>
  );
}
