'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import { getOpenStatus } from '@/lib/utils'

export default function TodayOpenStatus() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<{
    isOpen: boolean
    todayHours: { name: string; open: string; close: string } | null
    nextOpening: { day: string; time: string } | null
  } | null>(null)

  useEffect(() => {
    const updateStatus = () => {
      setStatus(getOpenStatus())
    }
    
    updateStatus()
    const interval = setInterval(updateStatus, 60000) // Update every minute
    
    return () => clearInterval(interval)
  }, [])

  if (!status) return null

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-warm-cream mb-8">
            {t('today.title')}
          </h2>

          <div className="bg-background border border-velvet-green rounded-sm p-8 md:p-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className={`inline-block px-6 py-3 rounded-full ${
                status.isOpen 
                  ? 'bg-velvet-green text-warm-cream' 
                  : 'bg-surface text-text-muted border border-text-muted'
              }`}>
                <span className="text-lg font-sans uppercase tracking-wider">
                  {status.isOpen ? t('today.open') : t('today.closed')}
                </span>
              </div>
            </motion.div>

            {status.todayHours && (
              <div className="space-y-3 text-text-muted">
                {status.isOpen ? (
                  <p className="text-lg">
                    {t('today.closesAt')}: <span className="text-accent font-semibold">{status.todayHours.close}</span>
                  </p>
                ) : status.nextOpening && (
                  <p className="text-lg">
                    {t('today.nextOpen')}: <span className="text-accent font-semibold">{status.nextOpening.day}, {status.nextOpening.time}</span>
                  </p>
                )}
                
                <p className="text-sm">
                  {status.todayHours.name}: {status.todayHours.open} – {status.todayHours.close}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
