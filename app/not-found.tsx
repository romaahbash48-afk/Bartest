'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-7xl md:text-9xl font-serif text-warm-cream mb-6">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6">
            {t('404.title')}
          </h2>
          <p className="text-xl text-text-muted mb-12">
            {t('404.text')}
          </p>
          <Link href="/" className="btn btn-primary">
            {t('404.cta')}
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
