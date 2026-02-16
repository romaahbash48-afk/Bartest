"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "./LocaleProvider";
import { useMood } from "./MoodProvider";
import { moods } from "@content/moods";
import { siteConfig } from "@content/site";
import ScrollReveal from "./ScrollReveal";

export default function MoodMap() {
  const { locale, t } = useLocale();
  const { selectedMood, selectMood, clearMood } = useMood();

  return (
    <section
      className="mx-auto max-w-5xl px-5 py-24"
      id="mood"
      aria-label={t("mood.title")}
    >
      <ScrollReveal>
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-warm-cream sm:text-4xl">
            {t("mood.title")}
          </h2>
          <p className="mt-3 font-sans text-base text-text-muted">
            {t("mood.subtitle")}
          </p>
        </div>

        {/* Mood cards */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {moods.map((mood) => {
            const isSelected = selectedMood?.id === mood.id;
            return (
              <button
                key={mood.id}
                onClick={() => (isSelected ? clearMood() : selectMood(mood.id))}
                className={`group relative flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all duration-300 ${
                  isSelected
                    ? "border-accent bg-surface shadow-lg"
                    : "border-white/5 bg-surface/50 hover:border-white/10 hover:bg-surface"
                }`}
                style={
                  isSelected
                    ? { borderColor: mood.accent, boxShadow: `0 0 30px ${mood.glow}` }
                    : undefined
                }
                aria-pressed={isSelected}
              >
                <span className="text-2xl" role="img" aria-hidden="true">
                  {mood.emoji}
                </span>
                <span className="font-sans text-xs font-medium text-warm-cream">
                  {mood.title[locale]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mood output */}
        <AnimatePresence mode="wait">
          {selectedMood && (
            <motion.div
              key={selectedMood.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mt-10 rounded-2xl border border-white/5 bg-surface p-8 sm:p-10"
              style={{ boxShadow: `0 0 60px ${selectedMood.glow}` }}
            >
              <div className="grid gap-8 md:grid-cols-3">
                {/* Vibe */}
                <div>
                  <p className="font-serif text-xl font-semibold text-warm-cream">
                    {selectedMood.emoji} {selectedMood.title[locale]}
                  </p>
                  <p className="mt-2 font-sans text-sm italic leading-relaxed text-text-muted">
                    &ldquo;{selectedMood.vibe[locale]}&rdquo;
                  </p>
                </div>

                {/* Recommendation */}
                <div>
                  <h4 className="font-sans text-xs font-medium uppercase tracking-widest text-text-muted">
                    {t("mood.recommendation")}
                  </h4>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-warm-cream">
                    <span className="font-medium" style={{ color: selectedMood.accent }}>
                      {selectedMood.whatToOrder.drink}
                    </span>
                    <br />
                    {selectedMood.whatToOrder[locale]}
                  </p>
                </div>

                {/* Best time + today's note */}
                <div>
                  <h4 className="font-sans text-xs font-medium uppercase tracking-widest text-text-muted">
                    {t("mood.bestTime")}
                  </h4>
                  <p className="mt-2 font-sans text-sm text-warm-cream">
                    {selectedMood.bestTime[locale]}
                  </p>

                  {siteConfig.todayVibeNote[locale] && (
                    <div className="mt-4 rounded-lg border border-white/5 bg-background/50 p-3">
                      <span className="font-sans text-[10px] font-medium uppercase tracking-widest text-text-muted">
                        {t("mood.todayNote")}
                      </span>
                      <p className="mt-1 font-sans text-xs text-text-muted">
                        {siteConfig.todayVibeNote[locale]}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </ScrollReveal>
    </section>
  );
}
