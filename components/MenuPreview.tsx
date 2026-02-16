'use client';

import Link from 'next/link';
import { useLocale } from '@/context/LocaleContext';
import { useMood } from '@/context/MoodContext';
import { menuItems, menuPreviewIds } from '@/content/site';
import { motion } from 'framer-motion';

const categoryLabels: Record<string, string> = {
  natural_wine: 'menu_natural_wine',
  cocktails: 'menu_cocktails',
  beer: 'menu_beer',
  non_alcoholic: 'menu_non_alcoholic',
  snacks: 'menu_snacks',
};

export function MenuPreview() {
  const { t, locale } = useLocale();
  const { mood } = useMood();
  const highlightCat = mood.highlightCategory;

  const previewItems = menuItems.filter((item) => menuPreviewIds.includes(item.id));

  return (
    <section className="py-20 px-6" aria-labelledby="menu-preview-title">
      <div className="max-w-4xl mx-auto">
        <h2 id="menu-preview-title" className="font-serif text-3xl text-text mb-8">
          {t('menu_title')}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {previewItems.map((item, i) => {
            const isHighlighted = highlightCat === item.category;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`p-4 rounded-lg border transition-all hover:border-accent/50 ${
                  isHighlighted
                    ? 'border-accent/50 bg-accent/5'
                    : 'border-surface bg-surface/30'
                }`}
                style={
                  isHighlighted
                    ? {
                        boxShadow: `0 0 20px ${mood.glow}`,
                      }
                    : {}
                }
              >
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <span className="text-xs text-text-muted uppercase tracking-wider">
                      {t(categoryLabels[item.category] ?? item.category)}
                    </span>
                    <p className="font-serif text-lg text-text mt-1">{item.name}</p>
                    <p className="text-sm text-text-muted mt-0.5">
                      {item.desc[locale]}
                    </p>
                  </div>
                  <span className="text-accent font-medium whitespace-nowrap">
                    €{item.price}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/menu"
            className="btn-press inline-block px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors focus-visible:outline-accent outline-offset-2"
            style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
          >
            {t('menu_see_full')}
          </Link>
        </div>
      </div>
    </section>
  );
}
