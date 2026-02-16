'use client';

import { useLocale } from '@/context/LocaleContext';
import { site } from '@/content/site';
import { useMemo } from 'react';

const DAY_MAP: Record<number, string> = {
  0: 'sun',
  1: 'mon',
  2: 'tue',
  3: 'wed',
  4: 'thu',
  5: 'fri',
  6: 'sat',
};

function parseTime(time: string): number {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

function getBerlinTime() {
  return new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Europe/Berlin' })
  );
}

export function TodayOpenStatus() {
  const { t, locale } = useLocale();

  const { isOpen, nextOpen, nextClose, todaySchedule } = useMemo(() => {
    const now = getBerlinTime();
    const day = DAY_MAP[now.getDay()];
    const minutes = now.getHours() * 60 + now.getMinutes();

    const today = site.openingHours.find((h) => h.day === day);
    if (!today) {
      return { isOpen: false, nextOpen: null, nextClose: null, todaySchedule: null };
    }

    const openMin = parseTime(today.open);
    const closeMin = parseTime(today.close);
    const isOpenNow = minutes >= openMin && minutes < closeMin;

    let nextOpen: { day: string; time: string } | null = null;
    let nextClose: { time: string } | null = null;

    if (isOpenNow) {
      nextClose = { time: today.close };
    } else {
      if (minutes < openMin) {
        nextOpen = { day: today.label[locale], time: today.open };
      } else {
        const idx = site.openingHours.findIndex((h) => h.day === day);
        const next = site.openingHours[(idx + 1) % 7];
        nextOpen = { day: next.label[locale], time: next.open };
      }
    }

    return {
      isOpen: isOpenNow,
      nextOpen,
      nextClose,
      todaySchedule: today,
    };
  }, [locale]);

  return (
    <section
      className="py-16 px-6 bg-surface/50"
      aria-label="Opening hours"
    >
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif text-2xl text-text mb-6">{t('today_title')}</h2>

        <div className="flex flex-wrap gap-6 items-center mb-8">
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
              isOpen ? 'bg-velvet-green/30 text-warm-cream' : 'bg-terracotta/20 text-text-muted'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-400' : 'bg-text-muted'}`}
              aria-hidden
            />
            {isOpen ? t('today_open') : t('today_closed')}
          </span>
          {nextOpen && (
            <span className="text-text-muted text-sm">
              {t('today_next_open')} {nextOpen.time} ({nextOpen.day})
            </span>
          )}
          {nextClose && isOpen && (
            <span className="text-text-muted text-sm">
              {t('today_next_close')} {nextClose.time}
            </span>
          )}
        </div>

        <div className="space-y-2">
          {site.openingHours.map((h) => (
            <div
              key={h.day}
              className="flex justify-between text-text-muted text-sm"
            >
              <span>{h.label[locale]}</span>
              <span>
                {h.open}–{h.close}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
