"use client";

import { useLocale } from "./LocaleProvider";
import ScrollReveal from "./ScrollReveal";

const stories = [
  { titleKey: "story.drinks.title", textKey: "story.drinks.text", accent: "terracotta" },
  { titleKey: "story.mood.title", textKey: "story.mood.text", accent: "velvet-green" },
  { titleKey: "story.location.title", textKey: "story.location.text", accent: "copper" },
] as const;

export default function StorySections() {
  const { t } = useLocale();

  return (
    <section className="mx-auto max-w-4xl px-5 py-24 space-y-32" aria-label="About">
      {stories.map((story, i) => (
        <ScrollReveal key={story.titleKey} delay={i * 0.1}>
          <div className="text-center">
            <div
              className="mx-auto mb-6 h-[1px] w-12"
              style={{
                backgroundColor:
                  story.accent === "terracotta"
                    ? "var(--terracotta)"
                    : story.accent === "velvet-green"
                      ? "var(--velvet-green)"
                      : "var(--copper)",
              }}
            />
            <h2 className="font-serif text-3xl font-semibold leading-snug text-warm-cream sm:text-4xl">
              {t(story.titleKey)}
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-text-muted">
              {t(story.textKey)}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </section>
  );
}
