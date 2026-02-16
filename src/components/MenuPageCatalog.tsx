"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "./LocaleProvider";
import { useMood } from "./MoodProvider";
import { siteConfig, type MenuItem } from "@content/site";

type Category = MenuItem["category"] | "all";

const categories: Category[] = [
  "all",
  "natural-wine",
  "cocktails",
  "beer",
  "non-alcoholic",
  "snacks",
];

export default function MenuPageCatalog() {
  const { locale, t } = useLocale();
  const { selectedMood } = useMood();
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered =
    activeCategory === "all"
      ? siteConfig.menu
      : siteConfig.menu.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const filterKey = `menu.filter.${cat}` as "menu.filter.all";
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 font-sans text-xs font-medium tracking-wide transition-all duration-200 ${
                isActive
                  ? "text-background"
                  : "border border-white/10 text-text-muted hover:border-white/20 hover:text-warm-cream"
              }`}
              style={
                isActive
                  ? { backgroundColor: "var(--accent)" }
                  : undefined
              }
            >
              {t(filterKey)}
            </button>
          );
        })}
      </div>

      {/* Items grid */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => {
            const isHighlighted =
              selectedMood && item.category === selectedMood.highlightCategory;
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className={`card-hover rounded-xl border p-6 ${
                  isHighlighted
                    ? "border-accent/40 bg-surface"
                    : "border-white/5 bg-surface/60"
                }`}
                style={
                  isHighlighted && selectedMood
                    ? { boxShadow: `0 0 24px ${selectedMood.glow}` }
                    : undefined
                }
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-warm-cream">
                      {item.name}
                    </h3>
                    <p className="mt-1 font-sans text-xs leading-relaxed text-text-muted">
                      {item.description[locale]}
                    </p>
                  </div>
                  <span
                    className="shrink-0 font-sans text-base font-medium"
                    style={{ color: "var(--accent2)" }}
                  >
                    {item.price}
                  </span>
                </div>
                {item.highlight && (
                  <span className="mt-3 inline-block rounded-full bg-terracotta/20 px-2.5 py-0.5 font-sans text-[10px] font-medium uppercase tracking-widest text-terracotta">
                    {locale === "de" ? "Highlight" : "Highlight"}
                  </span>
                )}
                {isHighlighted && selectedMood && (
                  <span
                    className="mt-3 ml-2 inline-block rounded-full px-2.5 py-0.5 font-sans text-[10px] font-medium uppercase tracking-widest"
                    style={{
                      backgroundColor: selectedMood.glow,
                      color: selectedMood.accent,
                    }}
                  >
                    {selectedMood.emoji} {locale === "de" ? "Passt zu deinem Abend" : "Matches your mood"}
                  </span>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Disclaimer */}
      <p className="mt-10 text-center font-sans text-xs text-text-muted/60">
        {t("menu.disclaimer")}
      </p>
    </div>
  );
}
