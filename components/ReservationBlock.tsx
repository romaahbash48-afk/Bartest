"use client";

import { useMemo, useState, type ChangeEvent } from "react";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteContent } from "@/content/site";
import { localize } from "@/lib/i18n";

interface ReservationFormState {
  date: string;
  time: string;
  partySize: string;
  message: string;
}

const initialFormState: ReservationFormState = {
  date: "",
  time: "",
  partySize: "",
  message: ""
};

export function ReservationBlock() {
  const { lang, t } = useLanguage();
  const [form, setForm] = useState<ReservationFormState>(initialFormState);

  const mailtoLink = useMemo(() => {
    if (!form.date || !form.time || !form.partySize) {
      return `mailto:${siteContent.email}`;
    }

    const subject = `[Reservation] ${siteContent.name} - ${form.date}`;
    const bodyLines = [
      `Hello ${siteContent.name} team,`,
      "",
      "I would like to reserve a table:",
      `Date: ${form.date}`,
      `Time: ${form.time}`,
      `Party size: ${form.partySize}`,
      form.message ? `Message: ${form.message}` : "",
      "",
      "Please confirm within a day if possible.",
      "",
      "Thank you."
    ].filter(Boolean);

    return `mailto:${siteContent.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join("\n")
    )}`;
  }, [form.date, form.message, form.partySize, form.time]);

  const updateField =
    (key: keyof ReservationFormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({
        ...prev,
        [key]: event.target.value
      }));
    };

  const handleGenerateEmail = () => {
    window.location.href = mailtoLink;
  };

  return (
    <section id="reserve" className="mx-auto mt-16 w-full max-w-6xl scroll-mt-28 px-4 md:mt-20 md:px-8">
      <div className="panel p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <div>
            <h2 className="font-serif text-4xl text-warm-cream">{t("reservation.title")}</h2>
            <p className="mt-2 text-text-muted">{t("reservation.subtitle")}</p>

            <h3 className="mt-6 text-sm uppercase tracking-[0.2em] text-text-muted">
              {t("reservation.rulesTitle")}
            </h3>
            <ul className="mt-3 space-y-3 text-sm text-text">
              {siteContent.reservationRules.map((rule) => (
                <li key={rule.en} className="rounded-xl border border-white/10 bg-background px-3 py-2">
                  {localize(lang, rule)}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href={`mailto:${siteContent.email}`} className="btn btn-primary">
                {t("reservation.emailCta")}
              </a>
              <a href={`mailto:${siteContent.email}`} className="btn">
                {siteContent.email}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-background p-5">
            <h3 className="font-serif text-3xl text-warm-cream">{t("reservation.formTitle")}</h3>
            <p className="mt-2 text-sm text-text-muted">{t("reservation.mailHint")}</p>

            <form
              className="mt-5 grid gap-4 sm:grid-cols-2"
              onSubmit={(event) => {
                event.preventDefault();
                handleGenerateEmail();
              }}
            >
              <label className="flex flex-col gap-2 text-sm text-text">
                <span>{t("reservation.field.date")}</span>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={updateField("date")}
                  className="rounded-xl border border-white/15 bg-surface px-3 py-2 text-text outline-none transition focus:border-[var(--accent2)]"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-text">
                <span>{t("reservation.field.time")}</span>
                <input
                  type="time"
                  required
                  value={form.time}
                  onChange={updateField("time")}
                  className="rounded-xl border border-white/15 bg-surface px-3 py-2 text-text outline-none transition focus:border-[var(--accent2)]"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-text sm:col-span-2">
                <span>{t("reservation.field.partySize")}</span>
                <input
                  type="number"
                  required
                  min={1}
                  max={14}
                  value={form.partySize}
                  onChange={updateField("partySize")}
                  className="rounded-xl border border-white/15 bg-surface px-3 py-2 text-text outline-none transition focus:border-[var(--accent2)]"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-text sm:col-span-2">
                <span>{t("reservation.field.message")}</span>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={updateField("message")}
                  className="rounded-xl border border-white/15 bg-surface px-3 py-2 text-text outline-none transition focus:border-[var(--accent2)]"
                />
              </label>
              <div className="sm:col-span-2">
                <button type="submit" className="btn btn-primary">
                  {t("reservation.generateEmail")}
                </button>
              </div>
            </form>

            <p className="mt-4 text-xs text-text-muted">
              {t("reservation.directEmail")}:{" "}
              <a href={mailtoLink} className="underline decoration-[var(--accent2)] underline-offset-4">
                {siteContent.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
