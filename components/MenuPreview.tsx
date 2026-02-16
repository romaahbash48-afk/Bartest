"use client";

import Link from "next/link";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { useMood } from "@/components/providers/MoodProvider";
import { siteContent } from "@/content/site";
import { localize } from "@/lib/i18n";

const previewLimit = 8;

export function MenuPreview() {
  const { lang, t } = useLanguage();
  const { mood } = useMood();
  const previewItems = siteContent.menuItems.slice(0, previewLimit);

  return (
    <section className="mx-auto mt-16 w-full max-w-6xl px-4 md:mt-20 md:px-8" aria-labelledby="menu-preview">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id="menu-preview" className="font-serif text-4xl text-warm-cream">
            {t("menuPreview.title")}
          </h2>
          <p className="mt-2 max-w-2xl text-text-muted">{t("menuPreview.subtitle")}</p>
        </div>
        <Link href="/menu" className="btn btn-primary">
          {t("menuPreview.seeFullMenu")}
        </Link>
      </div>

      <p className="mt-4 text-sm text-text-muted">
        {t("menuPreview.moodPick")}:{" "}
        <span className="text-[var(--accent2)]">{t(`menu.category.${mood.highlightCategory}` as const)}</span>
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {previewItems.map((item) => {
          const isHighlighted = item.category === mood.highlightCategory;
          return (
            <article
              key={item.id}
              className={`group rounded-2xl border bg-surface p-4 transition duration-300 ${
                isHighlighted
                  ? "border-[var(--accent)] shadow-glow"
                  : "border-white/10 hover:border-[var(--accent)]"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.15em] text-text-muted">
                {t(`menu.category.${item.category}` as const)}
              </p>
              <div className="mt-2 flex items-start justify-between gap-3">
                <h3 className="font-serif text-2xl leading-tight text-warm-cream">{item.name}</h3>
                <p className="text-sm text-[var(--accent2)]">{item.price}</p>
              </div>
              <p className="mt-2 text-sm text-text-muted">{localize(lang, item.description)}</p>
            </article>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-text-muted">{t("menuPreview.selectionChanges")}</p>
    </section>
  );
}
