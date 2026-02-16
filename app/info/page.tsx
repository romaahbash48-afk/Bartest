'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'
import { siteConfig } from '@/content/site'

export default function InfoPage() {
  const { t, language } = useLanguage()

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
            {t('info.title')}
          </h1>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Opening Hours */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl font-serif text-warm-cream mb-6">
              {t('info.hours.title')}
            </h2>
            <div className="bg-surface border border-background rounded-sm p-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-background">
                    <th className="text-left py-3 text-sm uppercase tracking-wider text-text-muted">
                      {t('info.hours.day')}
                    </th>
                    <th className="text-right py-3 text-sm uppercase tracking-wider text-text-muted">
                      {t('info.hours.time')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {siteConfig.openingHours.map((hour) => {
                    const dayKey = `day.${hour.name.toLowerCase()}` as any
                    return (
                      <tr key={hour.day} className="border-b border-background last:border-0">
                        <td className="py-4 text-text">
                          {t(dayKey)}
                        </td>
                        <td className="py-4 text-right text-accent">
                          {hour.open} – {hour.close}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Location */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-serif text-warm-cream mb-6">
              {t('info.location.title')}
            </h2>
            <div className="bg-surface border border-background rounded-sm p-8">
              <address className="not-italic text-lg text-text mb-4">
                {siteConfig.fullAddress}
              </address>
              <p className="text-text-muted mb-6">
                {t('info.location.text')}
              </p>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                {t('map.cta')}
              </a>
            </div>
          </motion.section>

          {/* Reservations */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-serif text-warm-cream mb-6">
              {t('info.reservation.title')}
            </h2>
            <div className="bg-surface border border-background rounded-sm p-8">
              <div className="space-y-4 text-text-muted mb-6">
                <p className="text-lg text-accent">
                  {t('reservation.noReservation')}
                </p>
                <p>{t('reservation.rules')}</p>
                <p className="text-sm">{t('reservation.confirmation')}</p>
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn btn-primary"
              >
                {t('reservation.cta')}
              </a>
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-serif text-warm-cream mb-6">
              {t('info.contact.title')}
            </h2>
            <div className="bg-surface border border-background rounded-sm p-8">
              <div className="space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-wider text-text-muted mb-2">
                    {t('footer.email')}
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-lg text-accent hover:text-copper transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-text-muted mb-2">
                    Instagram
                  </p>
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-accent hover:text-copper transition-colors"
                  >
                    @bar.henrietta.berlin
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
