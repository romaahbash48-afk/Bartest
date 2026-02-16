"use client";

import { motion, useReducedMotion } from "framer-motion";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { useMood } from "@/components/providers/MoodProvider";
import { siteContent } from "@/content/site";
import { localize } from "@/lib/i18n";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { t, lang } = useLanguage();
  const { mood } = useMood();

  return (
    <section className="grain-overlay border-b border-white/10">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 md:grid-cols-[1.3fr,0.9fr] md:gap-10 md:px-8 md:py-24">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-text-muted">{t("hero.kicker")}</p>

          <h1 className="font-serif text-5xl leading-[0.95] text-warm-cream sm:text-6xl md:text-7xl">
            Bar Henrietta
          </h1>

          <p className="max-w-2xl text-lg text-text md:text-xl">{t("hero.tagline")}</p>
          <p className="max-w-2xl text-base text-text-muted">{t("hero.subline")}</p>

          <p className="inline-flex items-center rounded-full border border-white/10 bg-surface px-4 py-2 text-sm text-text">
            {t("hero.tonight")}:{" "}
            <strong className="ml-2 font-semibold text-[var(--accent2)]">
              {localize(lang, mood.title) || t("hero.tonightFallback")}
            </strong>
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#map" className="btn btn-primary">
              {t("hero.findUs")}
            </a>
            <a href="#reserve" className="btn">
              {t("hero.reserve")}
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={shouldReduceMotion ? false : { opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: "easeOut", delay: 0.1 }}
          className="panel relative overflow-hidden p-6"
        >
          <div
            className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full blur-3xl"
            style={{ background: "color-mix(in oklab, var(--accent) 22%, transparent)" }}
          />
          <p className="text-sm uppercase tracking-[0.2em] text-text-muted">{t("hero.todayNote")}</p>
          <p className="mt-4 font-serif text-2xl leading-tight text-warm-cream">
            {localize(lang, siteContent.todayVibeNote)}
          </p>
          <p className="mt-6 text-sm text-text-muted">
            {siteContent.drinksFocus.join(" - ")} - {siteContent.area}
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
