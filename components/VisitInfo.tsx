"use client";

import { OpeningHoursTable } from "@/components/OpeningHoursTable";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteContent } from "@/content/site";
import { localize } from "@/lib/i18n";

export function VisitInfo() {
  const { lang, t } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-8 md:px-8">
      <div className="mb-10">
        <h1 className="font-serif text-5xl text-warm-cream md:text-6xl">{t("visit.title")}</h1>
        <p className="mt-3 max-w-3xl text-text-muted">{t("visit.subtitle")}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="panel p-6">
          <h2 className="font-serif text-3xl text-warm-cream">{t("visit.howToGet")}</h2>
          <p className="mt-3 text-text">{siteContent.address}</p>
          <p className="mt-3 text-sm text-text-muted">{t("visit.transportNote")}</p>
          <a href={siteContent.googleMapsUrl} className="btn btn-primary mt-6 inline-flex">
            {t("map.openInMaps")}
          </a>
        </article>

        <article className="panel p-6">
          <h2 className="font-serif text-3xl text-warm-cream">{t("visit.contactTitle")}</h2>
          <div className="mt-4 space-y-3 text-text">
            <p>
              <span className="text-text-muted">{t("map.address")}: </span>
              {siteContent.address}
            </p>
            <p>
              <span className="text-text-muted">Email: </span>
              <a href={`mailto:${siteContent.email}`} className="underline decoration-[var(--accent2)]">
                {siteContent.email}
              </a>
            </p>
            <p>
              <span className="text-text-muted">{t("footer.followInstagram")}: </span>
              <a href={siteContent.instagram} target="_blank" rel="noreferrer" className="underline">
                @bar.henrietta.berlin
              </a>
            </p>
          </div>
        </article>

        <article className="panel p-6">
          <h2 className="font-serif text-3xl text-warm-cream">{t("visit.hoursTitle")}</h2>
          <div className="mt-3">
            <OpeningHoursTable />
          </div>
        </article>

        <article className="panel p-6">
          <h2 className="font-serif text-3xl text-warm-cream">{t("visit.reservationTitle")}</h2>
          <ul className="mt-3 space-y-3 text-sm text-text">
            {siteContent.reservationRules.map((rule) => (
              <li key={rule.en} className="rounded-xl border border-white/10 bg-background px-3 py-2">
                {localize(lang, rule)}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
