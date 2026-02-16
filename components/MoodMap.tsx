"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { useMood } from "@/components/providers/MoodProvider";
import { siteContent } from "@/content/site";
import { localize } from "@/lib/i18n";

export function MoodMap() {
  const shouldReduceMotion = useReducedMotion();
  const { lang, t } = useLanguage();
  const { allMoods, mood, moodId, setMoodId } = useMood();

  return (
    <section className="mx-auto mt-16 w-full max-w-6xl px-4 md:mt-20 md:px-8" aria-labelledby="mood-map">
      <div className="panel overflow-hidden p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <h2 id="mood-map" className="font-serif text-4xl text-warm-cream">
              {t("moodMap.title")}
            </h2>
            <p className="mt-3 max-w-2xl text-text-muted">{t("moodMap.subtitle")}</p>

            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-text-muted">
              {t("moodMap.chooseMood")}
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {allMoods.map((entry) => {
                const isActive = entry.id === moodId;
                return (
                  <button
                    key={entry.id}
                    type="button"
                    onClick={() => setMoodId(entry.id)}
                    aria-pressed={isActive}
                    className={`rounded-2xl border px-4 py-3 text-left transition ${
                      isActive
                        ? "border-[var(--accent2)] bg-surface text-text shadow-glow"
                        : "border-white/10 bg-background text-text-muted hover:border-white/30 hover:text-text"
                    }`}
                  >
                    <p className="font-serif text-2xl leading-none text-warm-cream">
                      {localize(lang, entry.title)}
                    </p>
                    <p className="mt-2 text-sm">{localize(lang, entry.vibeLine)}</p>
                    {isActive ? (
                      <span className="mt-3 inline-flex rounded-full border border-[var(--accent2)] px-2 py-0.5 text-[11px] uppercase tracking-[0.15em] text-[var(--accent2)]">
                        {t("moodMap.active")}
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-background p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-text-muted">{t("moodMap.outputTitle")}</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={mood.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: "easeOut" }}
                className="mt-4 space-y-4"
              >
                <div>
                  <h3 className="font-serif text-3xl text-warm-cream">{localize(lang, mood.title)}</h3>
                  <p className="mt-1 text-text-muted">{localize(lang, mood.vibeLine)}</p>
                </div>

                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-text-muted">{t("moodMap.whatToOrder")}</dt>
                    <dd className="mt-1 text-text">{localize(lang, mood.whatToOrder)}</dd>
                  </div>
                  <div>
                    <dt className="text-text-muted">{t("moodMap.bestTime")}</dt>
                    <dd className="mt-1 text-text">{localize(lang, mood.bestTime)}</dd>
                  </div>
                  <div>
                    <dt className="text-text-muted">{t("moodMap.todayNote")}</dt>
                    <dd className="mt-1 text-text">{localize(lang, siteContent.todayVibeNote)}</dd>
                  </div>
                </dl>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
