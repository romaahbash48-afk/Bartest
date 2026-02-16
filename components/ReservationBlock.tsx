'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import { siteConfig } from '@/content/site'

export default function ReservationBlock() {
  const { t, language } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    message: '',
  })

  const generateMailto = () => {
    const subject = language === 'de' 
      ? `Reservierungsanfrage für ${formData.date}`
      : `Reservation request for ${formData.date}`
    
    const body = language === 'de'
      ? `Guten Tag,

ich möchte gerne einen Tisch reservieren:

Datum: ${formData.date}
Uhrzeit: ${formData.time}
Anzahl Gäste: ${formData.guests}

${formData.message ? `Nachricht: ${formData.message}` : ''}

Mit freundlichen Grüßen`
      : `Hello,

I would like to reserve a table:

Date: ${formData.date}
Time: ${formData.time}
Number of guests: ${formData.guests}

${formData.message ? `Message: ${formData.message}` : ''}

Best regards`

    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }

  const isFormValid = formData.date && formData.time && formData.guests

  return (
    <section id="reservation" ref={ref} className="section-padding bg-velvet-green/20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-warm-cream mb-6">
              {t('reservation.title')}
            </h2>
            
            <div className="space-y-3 text-text-muted mb-8">
              <p className="text-lg text-accent">
                {t('reservation.noReservation')}
              </p>
              <p>{t('reservation.rules')}</p>
              <p className="text-sm">{t('reservation.confirmation')}</p>
            </div>

            <a
              href={`mailto:${siteConfig.email}`}
              className="btn btn-primary inline-block mb-12"
            >
              {t('reservation.cta')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface border border-background rounded-sm p-8 md:p-12"
          >
            <h3 className="text-2xl font-serif text-warm-cream mb-6">
              {t('reservation.form.title')}
            </h3>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm uppercase tracking-wider text-text-muted mb-2">
                    {t('reservation.form.date')}
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-text-muted rounded-sm text-text focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm uppercase tracking-wider text-text-muted mb-2">
                    {t('reservation.form.time')}
                  </label>
                  <input
                    type="time"
                    id="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-text-muted rounded-sm text-text focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm uppercase tracking-wider text-text-muted mb-2">
                  {t('reservation.form.guests')}
                </label>
                <input
                  type="number"
                  id="guests"
                  min="1"
                  max="20"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-text-muted rounded-sm text-text focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-wider text-text-muted mb-2">
                  {t('reservation.form.message')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-text-muted rounded-sm text-text focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                onClick={generateMailto}
                disabled={!isFormValid}
                className={`btn w-full ${isFormValid ? 'btn-primary' : 'bg-surface text-text-muted cursor-not-allowed'}`}
              >
                {t('reservation.form.generate')}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
