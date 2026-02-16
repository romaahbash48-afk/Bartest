"use client";

import { motion } from "framer-motion";
import { useLocale } from "./LocaleProvider";
import { useMood } from "./MoodProvider";
import { siteConfig } from "@content/site";

export default function Hero() {
  const { locale, t } = useLocale();
  const { selectedMood } = useMood();

  const moodLine = selectedMood
    ? `${t("hero.tonight")}: ${selectedMood.vibe[locale]}`
    : null;

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-5 text-center"
      aria-label="Hero"
    >
      {/* Radial glow background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, var(--glow) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-2xl"
      >
        <h1 className="font-serif text-5xl font-semibold leading-tight tracking-wide text-warm-cream sm:text-6xl md:text-7xl">
          Bar Henrietta
        </h1>

        <p className="mt-6 font-sans text-lg leading-relaxed text-text-muted sm:text-xl">
          {t("hero.slogan")}
        </p>

        {/* Mood-reactive subtitle */}
        {moodLine && (
          <motion.p
            key={selectedMood?.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-3 font-sans text-sm italic"
            style={{ color: "var(--accent)" }}
          >
            {moodLine}
          </motion.p>
        )}

        {/* Owner's daily note */}
        {siteConfig.todayVibeNote[locale] && (
          <p className="mt-2 font-sans text-xs text-text-muted/70">
            {siteConfig.todayVibeNote[locale]}
          </p>
        )}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#map" className="btn-primary">
            {t("hero.findUs")}
          </a>
          <a href="#reservation" className="btn-secondary">
            {t("hero.reserve")}
          </a>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-8 w-[1px] bg-gradient-to-b from-text-muted to-transparent" />
      </motion.div>
    </section>
  );
}
