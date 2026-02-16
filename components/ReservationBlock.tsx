'use client';

import { useLocale } from '@/context/LocaleContext';
import { site } from '@/content/site';
import { useState, useCallback } from 'react';

export function ReservationBlock() {
  const { t, locale } = useLocale();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [party, setParty] = useState('');
  const [message, setMessage] = useState('');

  const generateMailto = useCallback(() => {
    const subject = encodeURIComponent(
      `Reservation request${locale === 'de' ? ' - Reservierungsanfrage' : ''}`
    );
    const body: string[] = [];
    if (date) body.push(`Date / Datum: ${date}`);
    if (time) body.push(`Time / Uhrzeit: ${time}`);
    if (party) body.push(`Party size / Personen: ${party}`);
    if (message) body.push(`\n${message}`);
    const bodyEnc = encodeURIComponent(body.join('\n'));
    return `mailto:${site.email}?subject=${subject}&body=${bodyEnc}`;
  }, [date, time, party, message, locale]);

  return (
    <section
      id="reservation"
      className="py-20 px-6 bg-surface/50"
      aria-labelledby="reservation-title"
    >
      <div className="max-w-xl mx-auto">
        <h2 id="reservation-title" className="font-serif text-3xl text-text mb-6">
          {t('reservation_title')}
        </h2>

        <div className="space-y-4 mb-8 text-text-muted text-sm">
          <p>
            {t('reservation_no_fri_sat')} — {t('reservation_hold')}
          </p>
          <p>{site.reservationRules.confirmation[locale]}</p>
        </div>

        <a
          href={`mailto:${site.email}`}
          className="btn-press inline-block px-6 py-3 bg-accent text-background rounded-lg hover:opacity-90 transition-opacity focus-visible:outline-accent outline-offset-2 mb-8"
          style={{ backgroundColor: 'var(--accent)' }}
        >
          {t('reservation_email')}
        </a>

        <div className="space-y-4">
          <p className="text-sm text-text-muted">{t('reservation_form_date')}</p>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 bg-background border border-surface rounded-lg text-text focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            aria-label={t('reservation_form_date')}
          />

          <p className="text-sm text-text-muted">{t('reservation_form_time')}</p>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-3 bg-background border border-surface rounded-lg text-text focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            aria-label={t('reservation_form_time')}
          />

          <p className="text-sm text-text-muted">{t('reservation_form_party')}</p>
          <input
            type="text"
            value={party}
            onChange={(e) => setParty(e.target.value)}
            placeholder="e.g. 2"
            className="w-full px-4 py-3 bg-background border border-surface rounded-lg text-text focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent placeholder:text-text-muted"
            aria-label={t('reservation_form_party')}
          />

          <p className="text-sm text-text-muted">{t('reservation_form_message')}</p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            placeholder="Optional"
            className="w-full px-4 py-3 bg-background border border-surface rounded-lg text-text focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent placeholder:text-text-muted resize-none"
            aria-label={t('reservation_form_message')}
          />

          <a
            href={generateMailto()}
            className="btn-press inline-block px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors focus-visible:outline-accent outline-offset-2"
            style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
          >
            {t('reservation_generate')}
          </a>
        </div>
      </div>
    </section>
  );
}
