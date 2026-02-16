'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import { useMood } from '@/lib/MoodContext'
import { siteConfig } from '@/content/site'

export default function Hero() {
  const { t, language } = useLanguage()
  const { selectedMood } = useMood()

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const moodText = selectedMood
    ? `${t('hero.tonight')}: ${selectedMood.vibe[language]}`
    : t('hero.subtitle')

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background opacity-60" />
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-warm-cream mb-6">
            {siteConfig.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-accent mb-3 tracking-wide">
            {t('hero.tagline')}
          </p>
          
          <motion.p
            key={selectedMood?.id || 'default'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl text-text-muted mb-12 italic"
          >
            {moodText}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollTo('map')}
              className="btn btn-primary"
            >
              {t('hero.cta.find')}
            </button>
            <button
              onClick={() => scrollTo('reservation')}
              className="btn btn-secondary"
            >
              {t('hero.cta.reserve')}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-text-muted rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
