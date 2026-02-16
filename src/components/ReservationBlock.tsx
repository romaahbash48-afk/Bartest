"use client";

import { useCallback, useState } from "react";
import { useLocale } from "./LocaleProvider";
import { siteConfig } from "@content/site";
import ScrollReveal from "./ScrollReveal";

interface FormData {
  date: string;
  time: string;
  partySize: string;
  message: string;
}

export default function ReservationBlock() {
  const { locale, t } = useLocale();
  const [form, setForm] = useState<FormData>({
    date: "",
    time: "19:00",
    partySize: "2",
    message: "",
  });

  const handleChange = useCallback(
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    },
    [],
  );

  const generateMailto = useCallback(() => {
    const subject = encodeURIComponent(
      locale === "de"
        ? `Reservierung – ${form.date}, ${form.time}, ${form.partySize} Pers.`
        : `Reservation – ${form.date}, ${form.time}, ${form.partySize} guests`,
    );
    const body = encodeURIComponent(
      locale === "de"
        ? `Hallo Bar Henrietta,\n\nich möchte gerne reservieren:\n\nDatum: ${form.date}\nUhrzeit: ${form.time}\nPersonen: ${form.partySize}\n${form.message ? `Nachricht: ${form.message}\n` : ""}\nVielen Dank!`
        : `Hello Bar Henrietta,\n\nI'd like to make a reservation:\n\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.partySize}\n${form.message ? `Message: ${form.message}\n` : ""}\nThank you!`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }, [form, locale]);

  return (
    <section
      className="mx-auto max-w-3xl px-5 py-24"
      id="reservation"
      aria-label={t("reservation.title")}
    >
      <ScrollReveal>
        <div className="rounded-2xl border border-white/5 bg-surface p-8 sm:p-12">
          <h2 className="text-center font-serif text-3xl font-semibold text-warm-cream">
            {t("reservation.title")}
          </h2>

          {/* Rules */}
          <div className="mt-8 space-y-3 text-center">
            <p className="font-sans text-sm text-terracotta font-medium">
              {t("reservation.noWeekend")}
            </p>
            <p className="font-sans text-sm text-text-muted">
              {t("reservation.held")}
            </p>
            <p className="font-sans text-sm text-text-muted">
              {t("reservation.confirm")}
            </p>
          </div>

          {/* Direct email CTA */}
          <div className="mt-8 text-center">
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn-primary"
            >
              {t("reservation.emailCta")}
            </a>
          </div>

          {/* Form */}
          <div className="mt-8">
            <p className="text-center font-sans text-xs text-text-muted uppercase tracking-widest">
              {t("reservation.or")}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div>
                <label
                  htmlFor="res-date"
                  className="mb-1.5 block font-sans text-xs font-medium text-text-muted"
                >
                  {t("reservation.date")}
                </label>
                <input
                  id="res-date"
                  type="date"
                  value={form.date}
                  onChange={handleChange("date")}
                  className="w-full rounded-lg border border-white/10 bg-background px-4 py-2.5 font-sans text-sm text-warm-cream placeholder:text-text-muted/50 focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="res-time"
                  className="mb-1.5 block font-sans text-xs font-medium text-text-muted"
                >
                  {t("reservation.time")}
                </label>
                <input
                  id="res-time"
                  type="time"
                  value={form.time}
                  onChange={handleChange("time")}
                  className="w-full rounded-lg border border-white/10 bg-background px-4 py-2.5 font-sans text-sm text-warm-cream placeholder:text-text-muted/50 focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="res-size"
                  className="mb-1.5 block font-sans text-xs font-medium text-text-muted"
                >
                  {t("reservation.partySize")}
                </label>
                <input
                  id="res-size"
                  type="number"
                  min="1"
                  max="20"
                  value={form.partySize}
                  onChange={handleChange("partySize")}
                  className="w-full rounded-lg border border-white/10 bg-background px-4 py-2.5 font-sans text-sm text-warm-cream placeholder:text-text-muted/50 focus:border-accent focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="res-message"
                className="mb-1.5 block font-sans text-xs font-medium text-text-muted"
              >
                {t("reservation.message")}
              </label>
              <textarea
                id="res-message"
                rows={3}
                value={form.message}
                onChange={handleChange("message")}
                className="w-full rounded-lg border border-white/10 bg-background px-4 py-2.5 font-sans text-sm text-warm-cream placeholder:text-text-muted/50 focus:border-accent focus:outline-none resize-none"
              />
            </div>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={generateMailto}
                className="btn-secondary"
              >
                {t("reservation.generate")}
              </button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
