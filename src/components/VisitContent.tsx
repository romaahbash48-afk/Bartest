"use client";

import { useLocale } from "./LocaleProvider";
import { siteConfig } from "@content/site";

export default function VisitContent() {
  const { locale, t } = useLocale();

  return (
    <div className="space-y-16">
      <h1 className="text-center font-serif text-4xl font-semibold text-warm-cream sm:text-5xl">
        {t("visit.title")}
      </h1>

      {/* Address */}
      <section>
        <h2 className="font-sans text-xs font-medium uppercase tracking-widest text-text-muted">
          {t("visit.address")}
        </h2>
        <p className="mt-3 font-serif text-xl text-warm-cream">{siteConfig.address}</p>
        <a
          href={siteConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block font-sans text-sm text-copper hover:underline"
        >
          {t("map.openMaps")} →
        </a>
      </section>

      {/* How to get here */}
      <section>
        <h2 className="font-sans text-xs font-medium uppercase tracking-widest text-text-muted">
          {t("visit.howToGet")}
        </h2>
        <p className="mt-3 font-sans text-sm leading-relaxed text-text-muted">
          {t("visit.transit")}
        </p>
      </section>

      {/* Opening hours */}
      <section>
        <h2 className="font-sans text-xs font-medium uppercase tracking-widest text-text-muted">
          {t("today.hours")}
        </h2>
        <div className="mt-4 space-y-2">
          {siteConfig.openingHours.map((h) => (
            <div
              key={h.day}
              className="flex items-center justify-between border-b border-white/5 pb-2"
            >
              <span className="font-sans text-sm text-text-muted">
                {t(`day.${h.day}` as "day.Mon")}
              </span>
              <span className="font-sans text-sm text-warm-cream">
                {h.closed
                  ? locale === "de"
                    ? "Geschlossen"
                    : "Closed"
                  : `${h.open} – ${h.close}`}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation rules */}
      <section>
        <h2 className="font-sans text-xs font-medium uppercase tracking-widest text-text-muted">
          {t("visit.reservationRules")}
        </h2>
        <ul className="mt-4 space-y-3">
          <li className="flex items-start gap-3">
            <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
            <span className="font-sans text-sm text-text-muted">
              {t("reservation.noWeekend")}
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
            <span className="font-sans text-sm text-text-muted">
              {t("reservation.held")}
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-gold" />
            <span className="font-sans text-sm text-text-muted">
              {t("reservation.confirm")}
            </span>
          </li>
        </ul>
        <div className="mt-6">
          <a href={`mailto:${siteConfig.email}`} className="btn-primary">
            {t("reservation.emailCta")}
          </a>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="font-sans text-xs font-medium uppercase tracking-widest text-text-muted">
          {t("visit.contact")}
        </h2>
        <div className="mt-4 space-y-2">
          <a
            href={`mailto:${siteConfig.email}`}
            className="block font-sans text-sm text-copper hover:underline"
          >
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-sans text-sm text-copper hover:underline"
          >
            {siteConfig.instagramHandle}
          </a>
        </div>
      </section>
    </div>
  );
}
