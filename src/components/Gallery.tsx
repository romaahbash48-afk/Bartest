"use client";

import { useLocale } from "./LocaleProvider";
import { siteConfig } from "@content/site";
import ScrollReveal from "./ScrollReveal";

export default function Gallery() {
  const { locale, t } = useLocale();

  return (
    <section
      className="mx-auto max-w-5xl px-5 py-24"
      id="gallery"
      aria-label={t("gallery.title")}
    >
      <ScrollReveal>
        <h2 className="text-center font-serif text-3xl font-semibold text-warm-cream sm:text-4xl">
          {t("gallery.title")}
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {siteConfig.gallery.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.05}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/5">
                {/* Gradient placeholder — replace with next/image when photos are ready */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-sans text-xs text-text-muted/80">
                    {item.alt[locale]}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
