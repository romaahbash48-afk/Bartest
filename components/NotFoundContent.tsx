'use client';

import Link from 'next/link';
import { useLocale } from '@/context/LocaleContext';

export function NotFoundContent() {
  const { t } = useLocale();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6">
      <h1 className="font-serif text-4xl md:text-6xl text-text mb-4">
        {t('not_found_title')}
      </h1>
      <p className="text-text-muted text-center max-w-md mb-8">
        {t('not_found_text')}
      </p>
      <Link
        href="/"
        className="btn-press px-6 py-3 bg-accent text-background rounded-lg hover:opacity-90 transition-opacity focus-visible:outline-accent outline-offset-2"
        style={{ backgroundColor: 'var(--accent)' }}
      >
        {t('not_found_back')}
      </Link>
    </div>
  );
}
