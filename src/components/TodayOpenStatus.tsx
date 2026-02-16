"use client";

import { useEffect, useState } from "react";
import { useLocale } from "./LocaleProvider";
import { siteConfig } from "@content/site";
import ScrollReveal from "./ScrollReveal";

interface StatusInfo {
  isOpen: boolean;
  label: string;
  detail: string;
}

function getStatusForTimezone(locale: "de" | "en"): StatusInfo {
  const now = new Date();
  const berlinStr = now.toLocaleString("en-US", { timeZone: siteConfig.timezone });
  const berlin = new Date(berlinStr);

  const dayIndex = berlin.getDay(); // 0=Sun
  const dayMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = dayMap[dayIndex];

  const hours = siteConfig.openingHours;
  const today = hours.find((h) => h.day === dayName);

  if (!today || today.closed) {
    const nextDay = findNextOpen(dayIndex, hours);
    return {
      isOpen: false,
      label: locale === "de" ? "Gerade geschlossen" : "Closed now",
      detail: nextDay
        ? `${locale === "de" ? "Nächste Öffnung" : "Next opening"}: ${locale === "de" ? getDayDe(nextDay.day) : nextDay.day} ${nextDay.open}`
        : "",
    };
  }

  const [openH, openM] = today.open.split(":").map(Number);
  const [closeH, closeM] = today.close.split(":").map(Number);
  const currentMinutes = berlin.getHours() * 60 + berlin.getMinutes();
  const openMinutes = openH * 60 + openM;
  let closeMinutes = closeH * 60 + closeM;

  // Handle after-midnight closing
  if (closeMinutes <= openMinutes) {
    closeMinutes += 24 * 60;
  }

  const adjustedCurrent =
    currentMinutes < openMinutes && closeMinutes > 24 * 60
      ? currentMinutes + 24 * 60
      : currentMinutes;

  if (adjustedCurrent >= openMinutes && adjustedCurrent < closeMinutes) {
    const closesAtFormatted = today.close;
    return {
      isOpen: true,
      label: locale === "de" ? "Jetzt geöffnet" : "Open now",
      detail: `${locale === "de" ? "Schließt um" : "Closes at"} ${closesAtFormatted}`,
    };
  }

  if (currentMinutes < openMinutes) {
    return {
      isOpen: false,
      label: locale === "de" ? "Gerade geschlossen" : "Closed now",
      detail: `${locale === "de" ? "Öffnet um" : "Opens at"} ${today.open}`,
    };
  }

  const nextDay = findNextOpen(dayIndex, hours);
  return {
    isOpen: false,
    label: locale === "de" ? "Gerade geschlossen" : "Closed now",
    detail: nextDay
      ? `${locale === "de" ? "Nächste Öffnung" : "Next opening"}: ${locale === "de" ? getDayDe(nextDay.day) : nextDay.day} ${nextDay.open}`
      : "",
  };
}

function findNextOpen(
  currentDayIndex: number,
  hours: typeof siteConfig.openingHours,
) {
  const dayMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  for (let i = 1; i <= 7; i++) {
    const idx = (currentDayIndex + i) % 7;
    const entry = hours.find((h) => h.day === dayMap[idx]);
    if (entry && !entry.closed) return entry;
  }
  return null;
}

function getDayDe(day: string): string {
  const map: Record<string, string> = {
    Mon: "Mo",
    Tue: "Di",
    Wed: "Mi",
    Thu: "Do",
    Fri: "Fr",
    Sat: "Sa",
    Sun: "So",
  };
  return map[day] ?? day;
}

export default function TodayOpenStatus() {
  const { locale, t } = useLocale();
  const [status, setStatus] = useState<StatusInfo | null>(null);

  useEffect(() => {
    setStatus(getStatusForTimezone(locale));
    const interval = setInterval(() => {
      setStatus(getStatusForTimezone(locale));
    }, 60_000);
    return () => clearInterval(interval);
  }, [locale]);

  if (!status) return null;

  return (
    <section className="mx-auto max-w-4xl px-5 py-20" id="today" aria-label={t("today.title")}>
      <ScrollReveal>
        <div className="rounded-2xl border border-white/5 bg-surface p-8 text-center sm:p-12">
          <h2 className="font-serif text-3xl font-semibold text-warm-cream">
            {t("today.title")}
          </h2>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span
              className={`inline-block h-2.5 w-2.5 rounded-full ${
                status.isOpen ? "bg-green-500 animate-pulse" : "bg-text-muted/50"
              }`}
            />
            <span
              className={`font-sans text-lg font-medium ${
                status.isOpen ? "text-green-400" : "text-text-muted"
              }`}
            >
              {status.label}
            </span>
          </div>

          {status.detail && (
            <p className="mt-2 font-sans text-sm text-text-muted">{status.detail}</p>
          )}

          {/* Hours table */}
          <div className="mt-8">
            <h3 className="mb-4 font-sans text-xs font-medium uppercase tracking-widest text-text-muted">
              {t("today.hours")}
            </h3>
            <div className="mx-auto inline-grid grid-cols-2 gap-x-8 gap-y-2 text-left">
              {siteConfig.openingHours.map((h) => (
                <div key={h.day} className="contents font-sans text-sm">
                  <span className="text-text-muted">
                    {t(`day.${h.day}` as "day.Mon")}
                  </span>
                  <span className="text-warm-cream">
                    {h.closed ? (locale === "de" ? "Geschlossen" : "Closed") : `${h.open} – ${h.close}`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
