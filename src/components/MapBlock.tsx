"use client";

import { useLocale } from "./LocaleProvider";
import { siteConfig } from "@content/site";
import ScrollReveal from "./ScrollReveal";

export default function MapBlock() {
  const { t } = useLocale();

  return (
    <section
      className="mx-auto max-w-5xl px-5 py-24"
      id="map"
      aria-label={t("map.title")}
    >
      <ScrollReveal>
        <h2 className="text-center font-serif text-3xl font-semibold text-warm-cream sm:text-4xl">
          {t("map.title")}
        </h2>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/5">
          <iframe
            src={siteConfig.googleMapsEmbed}
            width="100%"
            height="400"
            style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.7)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bar Henrietta location on Google Maps"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="font-sans text-base text-warm-cream">{siteConfig.address}</p>
          <p className="mt-1 font-sans text-sm text-text-muted">{siteConfig.area}</p>

          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary mt-6 inline-flex"
          >
            {t("map.openMaps")}
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
