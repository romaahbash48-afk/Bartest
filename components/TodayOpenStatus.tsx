"use client";

import { useEffect, useState } from "react";

import { OpeningHoursTable } from "@/components/OpeningHoursTable";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteContent } from "@/content/site";
import { getOpenStatus, type OpenStatus } from "@/lib/opening-hours";

function createStatus(): OpenStatus {
  return getOpenStatus(siteContent.openingHours);
}

export function TodayOpenStatus() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<OpenStatus>(() => createStatus());

  useEffect(() => {
    const updateStatus = () => setStatus(createStatus());
    updateStatus();

    const timer = window.setInterval(updateStatus, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const statusLine = status.isOpen
    ? t("today.openUntil", {
        time: status.currentInterval?.close ?? "--:--"
      })
    : t("today.nextOpening", {
        day: t(`day.${status.nextOpening.day}` as const),
        time: status.nextOpening.time
      });

  return (
    <section className="mx-auto mt-16 w-full max-w-6xl px-4 md:mt-20 md:px-8" aria-labelledby="today">
      <div className="panel p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 id="today" className="font-serif text-4xl text-warm-cream">
              {t("today.title")}
            </h2>
            <p className="mt-2 text-sm text-text-muted">{t("today.timezone")}</p>
          </div>
          <span
            className={`inline-flex rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] ${
              status.isOpen
                ? "border-[var(--accent2)] text-[var(--accent2)]"
                : "border-white/20 text-text-muted"
            }`}
          >
            {status.isOpen ? t("today.openNow") : t("today.closedNow")}
          </span>
        </div>

        <p className="mt-4 text-lg text-text">{statusLine}</p>
        <p className="mt-1 text-sm text-text-muted">
          {t("today.clockLabel", {
            time: status.berlinTime
          })}
        </p>

        <div className="mt-6">
          <h3 className="mb-2 text-sm uppercase tracking-[0.2em] text-text-muted">{t("today.hoursTitle")}</h3>
          <OpeningHoursTable />
        </div>
      </div>
    </section>
  );
}
