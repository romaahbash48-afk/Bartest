'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import { fullMenu, MenuCategory } from '@/content/menu'

export default function MenuPage() {
  const { t, language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'all'>('all')

  const categories: (MenuCategory | 'all')[] = ['all', 'wine', 'cocktail', 'beer', 'nonalcoholic', 'snacks']

  const filteredMenu = selectedCategory === 'all' 
    ? fullMenu 
    : fullMenu.filter(item => item.category === selectedCategory)

  return (
    <div className="pt-32 pb-16 min-h-screen">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-warm-cream mb-4">
            {t('menu.page.title')}
          </h1>
          <p className="text-lg text-text-muted">
            {t('menu.page.subtitle')}
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-sm text-sm uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-accent text-background'
                  : 'bg-surface text-text-muted hover:text-accent border border-surface hover:border-text-muted'
              }`}
            >
              {category === 'all' ? t('menu.page.filter.all') : t(`menu.category.${category}`)}
            </button>
          ))}
        </motion.div>

        {/* Menu items */}
        <motion.div
          layout
          className="max-w-4xl mx-auto space-y-8"
        >
          {filteredMenu.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-surface border border-background rounded-sm p-6 hover:border-accent transition-colors group"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-warm-cream group-hover:text-accent transition-colors mb-2">
                    {item.name[language]}
                  </h3>
                  <p className="text-text-muted">
                    {item.description[language]}
                  </p>
                </div>
                <div className="text-right ml-6">
                  <span className="text-2xl font-semibold text-accent">
                    €{item.price}
                  </span>
                </div>
              </div>
              <div>
                <span className="inline-block text-xs uppercase tracking-wider text-text-muted px-3 py-1 bg-background rounded-full">
                  {t(`menu.category.${item.category}` as any)}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
