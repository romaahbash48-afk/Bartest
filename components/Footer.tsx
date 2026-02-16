'use client';

import Link from 'next/link';
import { useLocale } from '@/context/LocaleContext';
import { site } from '@/content/site';

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="py-12 px-6 border-t border-surface bg-background">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-accent transition-colors focus-visible:outline-accent outline-offset-2"
        >
          {t('footer_instagram')}
        </a>
        <a
          href={`mailto:${site.email}`}
          className="text-text-muted hover:text-accent transition-colors focus-visible:outline-accent outline-offset-2"
        >
          {site.email}
        </a>
        <p className="text-text-muted text-sm">{t('footer_copyright')}</p>
      </div>
    </footer>
  );
}
