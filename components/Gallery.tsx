'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import { siteConfig } from '@/content/site'

export default function Gallery() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-warm-cream mb-4"
          >
            {t('gallery.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-text-muted"
          >
            {t('gallery.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {siteConfig.gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="aspect-square rounded-sm overflow-hidden group cursor-pointer"
            >
              <div className={`w-full h-full bg-gradient-to-br ${item.gradient} group-hover:scale-110 transition-transform duration-500 flex items-center justify-center`}>
                <span className="text-warm-cream/20 text-sm font-serif text-center px-4">
                  {item.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-text-muted text-sm mt-8 italic">
          {t('gallery.subtitle')}
        </p>
      </div>
    </section>
  )
}
