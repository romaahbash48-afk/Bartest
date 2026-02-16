"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteContent } from "@/content/site";

export function MapBlock() {
  const { t } = useLanguage();

  return (
    <section
      id="map"
      className="mx-auto mt-16 w-full max-w-6xl scroll-mt-28 px-4 pb-4 md:mt-20 md:px-8"
      aria-labelledby="find-us"
    >
      <div className="panel overflow-hidden">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr]">
          <iframe
            title="Bar Henrietta map"
            src={siteContent.googleMapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[340px] w-full border-0 lg:h-full"
          />
          <div className="p-6 md:p-8">
            <h2 id="find-us" className="font-serif text-4xl text-warm-cream">
              {t("map.title")}
            </h2>
            <p className="mt-2 text-text-muted">{t("map.subtitle")}</p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-text-muted">{t("map.address")}</p>
            <p className="mt-1 text-text">{siteContent.address}</p>

            <a href={siteContent.googleMapsUrl} className="btn btn-primary mt-6 inline-flex">
              {t("map.openInMaps")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
