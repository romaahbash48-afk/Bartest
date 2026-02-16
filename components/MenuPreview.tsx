'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'
import { useMood } from '@/lib/MoodContext'
import { siteConfig } from '@/content/site'

export default function MenuPreview() {
  const { t, language } = useLanguage()
  const { selectedMood } = useMood()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const highlightCategory = selectedMood?.highlightCategory

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-warm-cream mb-4"
          >
            {t('menu.preview.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-text-muted"
          >
            {t('menu.preview.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {siteConfig.menuPreview.map((item, index) => {
            const isHighlighted = highlightCategory === item.category
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-surface p-6 rounded-sm border transition-all duration-300 hover:border-accent group ${
                  isHighlighted ? 'border-accent' : 'border-surface'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-serif text-warm-cream group-hover:text-accent transition-colors">
                    {item.name[language]}
                  </h3>
                  <span className="text-accent font-semibold">€{item.price}</span>
                </div>
                <p className="text-text-muted text-sm mb-2">
                  {item.description[language]}
                </p>
                <span className="text-xs uppercase tracking-wider text-text-muted">
                  {t(`menu.category.${item.category}` as any)}
                </span>
                {isHighlighted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-3 text-xs text-accent italic"
                  >
                    {t('mood.recommendation')}
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/menu" className="btn btn-secondary">
            {t('menu.preview.cta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
