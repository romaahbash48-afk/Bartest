"use client";

import Link from "next/link";
import { useLocale } from "./LocaleProvider";
import { useMood } from "./MoodProvider";
import { siteConfig } from "@content/site";
import ScrollReveal from "./ScrollReveal";

export default function MenuPreview() {
  const { locale, t } = useLocale();
  const { selectedMood } = useMood();

  // Show first 6 items, or prioritize highlighted category
  const items = siteConfig.menu.slice(0, 8);

  return (
    <section
      className="mx-auto max-w-5xl px-5 py-24"
      id="menu-preview"
      aria-label={t("menu.preview.title")}
    >
      <ScrollReveal>
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-warm-cream sm:text-4xl">
            {t("menu.preview.title")}
          </h2>
          <p className="mt-2 font-sans text-sm text-text-muted">
            {t("menu.disclaimer")}
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const isHighlighted =
              selectedMood && item.category === selectedMood.highlightCategory;
            return (
              <div
                key={item.id}
                className={`card-hover rounded-xl border p-5 transition-all duration-300 ${
                  isHighlighted
                    ? "border-accent/40 bg-surface"
                    : "border-white/5 bg-surface/60"
                }`}
                style={
                  isHighlighted
                    ? { boxShadow: `0 0 20px ${selectedMood.glow}` }
                    : undefined
                }
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-base font-semibold text-warm-cream">
                    {item.name}
                  </h3>
                  <span
                    className="shrink-0 font-sans text-sm font-medium"
                    style={{ color: "var(--accent2)" }}
                  >
                    {item.price}
                  </span>
                </div>
                <p className="mt-2 font-sans text-xs leading-relaxed text-text-muted">
                  {item.description[locale]}
                </p>
                {isHighlighted && (
                  <div
                    className="mt-3 inline-block rounded-full px-2 py-0.5 text-[10px] font-sans font-medium uppercase tracking-widest"
                    style={{
                      backgroundColor: selectedMood.glow,
                      color: selectedMood.accent,
                    }}
                  >
                    {selectedMood.emoji} {locale === "de" ? "Empfohlen" : "Recommended"}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/menu" className="btn-secondary">
            {t("menu.seeAll")}
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
