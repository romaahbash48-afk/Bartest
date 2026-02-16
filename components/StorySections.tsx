'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

interface StorySectionProps {
  title: string
  text: string
  align?: 'left' | 'right'
  index: number
}

function StorySection({ title, text, align = 'left', index }: StorySectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
      className={`max-w-3xl ${align === 'right' ? 'ml-auto text-right' : 'mr-auto text-left'}`}
    >
      <h2 className="text-3xl md:text-5xl font-serif text-warm-cream mb-6">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-text-muted leading-relaxed">
        {text}
      </p>
    </motion.div>
  )
}

export default function StorySections() {
  const { t } = useLanguage()

  const stories = [
    {
      title: t('story.drinks.title'),
      text: t('story.drinks.text'),
      align: 'left' as const,
    },
    {
      title: t('story.mood.title'),
      text: t('story.mood.text'),
      align: 'right' as const,
    },
    {
      title: t('story.location.title'),
      text: t('story.location.text'),
      align: 'left' as const,
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-background via-surface to-background">
      <div className="container-custom space-y-24 md:space-y-32">
        {stories.map((story, index) => (
          <StorySection
            key={index}
            title={story.title}
            text={story.text}
            align={story.align}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
