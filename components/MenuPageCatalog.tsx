'use client';

import { useLocale } from '@/context/LocaleContext';
import { menuItems } from '@/content/site';
import type { MenuCategory } from '@/content/site';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categoryKeys: Record<MenuCategory, string> = {
  natural_wine: 'menu_natural_wine',
  cocktails: 'menu_cocktails',
  beer: 'menu_beer',
  non_alcoholic: 'menu_non_alcoholic',
  snacks: 'menu_snacks',
};

export function MenuPageCatalog() {
  const { t, locale } = useLocale();
  const [filter, setFilter] = useState<MenuCategory | 'all'>('all');

  const filtered =
    filter === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === filter);

  const categories: (MenuCategory | 'all')[] = [
    'all',
    'natural_wine',
    'cocktails',
    'beer',
    'non_alcoholic',
    'snacks',
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all focus-visible:outline-accent outline-offset-2 ${
              filter === cat
                ? 'bg-accent/20 text-accent border border-accent/50'
                : 'bg-surface/50 text-text-muted hover:text-text border border-surface'
            }`}
            style={filter === cat ? { borderColor: 'var(--accent)', color: 'var(--accent)' } : {}}
          >
            {cat === 'all' ? t('menu_all') : t(categoryKeys[cat])}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {(['natural_wine', 'cocktails', 'beer', 'non_alcoholic', 'snacks'] as const).map(
          (cat) => {
            const items = filtered.filter((i) => i.category === cat);
            if (items.length === 0) return null;
            return (
              <motion.section
                key={cat}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-b border-surface pb-8 last:border-0"
              >
                <h2 className="font-serif text-xl text-accent mb-4">
                  {t(categoryKeys[cat])}
                </h2>
                <div className="space-y-4">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex justify-between items-start gap-4 py-2 border-b border-surface/50 last:border-0"
                      >
                        <div>
                          <p className="font-serif text-lg text-text">{item.name}</p>
                          <p className="text-sm text-text-muted">{item.desc[locale]}</p>
                        </div>
                        <span className="text-accent font-medium whitespace-nowrap">
                          €{item.price}
                        </span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.section>
            );
          }
        )}
      </div>

      <p className="mt-12 text-center text-text-muted text-sm">
        {t('menu_disclaimer')}
      </p>
    </div>
  );
}
