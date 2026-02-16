'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import { useMood } from '@/lib/MoodContext'
import { moods } from '@/content/moods'
import { siteConfig } from '@/content/site'

export default function MoodMap() {
  const { t, language } = useLanguage()
  const { selectedMood, setSelectedMood } = useMood()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-background to-surface">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-warm-cream mb-4"
          >
            {t('mood.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-text-muted"
          >
            {t('mood.subtitle')}
          </motion.p>
        </div>

        {/* Today's note from owner */}
        {siteConfig.todayVibeNote && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-12 p-6 bg-surface border border-velvet-green rounded-sm"
          >
            <p className="text-sm uppercase tracking-wider text-accent mb-2">
              {t('mood.todayNote')}
            </p>
            <p className="text-lg text-text italic">
              {siteConfig.todayVibeNote[language]}
            </p>
          </motion.div>
        )}

        {/* Mood cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {moods.map((mood, index) => {
            const isSelected = selectedMood?.id === mood.id
            
            return (
              <motion.button
                key={mood.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                onClick={() => setSelectedMood(isSelected ? null : mood.id)}
                className={`p-6 rounded-sm border-2 transition-all duration-300 text-left ${
                  isSelected
                    ? 'border-accent bg-accent/10'
                    : 'border-surface bg-surface hover:border-text-muted'
                }`}
                style={{
                  boxShadow: isSelected ? `0 0 30px ${mood.glowColor}` : 'none',
                }}
              >
                <h3 className="text-xl font-serif text-warm-cream mb-2">
                  {mood.title[language]}
                </h3>
                <p className="text-sm text-text-muted">
                  {mood.vibe[language]}
                </p>
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-3 text-xs uppercase tracking-wider text-accent"
                  >
                    {t('mood.selected')}
                  </motion.div>
                )}
              </motion.button>
            )
          })}
        </div>

        {/* Mood recommendation */}
        <AnimatePresence mode="wait">
          {selectedMood && (
            <motion.div
              key={selectedMood.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto bg-background border border-accent rounded-sm p-8 md:p-12"
              style={{
                boxShadow: `0 0 40px ${selectedMood.glowColor}`,
              }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-accent mb-3">
                    {t('mood.whatToOrder')}
                  </h4>
                  <p className="text-lg text-text mb-6">
                    {selectedMood.whatToOrder[language]}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-accent mb-3">
                    {t('mood.bestTime')}
                  </h4>
                  <p className="text-lg text-text mb-6">
                    {selectedMood.bestTime[language]}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
