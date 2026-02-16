'use client'

import { useLanguage } from '@/lib/LanguageContext'
import { siteConfig } from '@/content/site'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-surface border-t border-background py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif text-warm-cream mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-text-muted text-sm">
              {siteConfig.area}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif text-warm-cream mb-4">
              {t('info.contact.title')}
            </h4>
            <div className="space-y-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-text-muted hover:text-accent transition-colors text-sm"
              >
                {t('footer.email')}: {siteConfig.email}
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-text-muted hover:text-accent transition-colors text-sm"
              >
                {t('footer.instagram')}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif text-warm-cream mb-4">
              {t('map.address')}
            </h4>
            <address className="text-text-muted text-sm not-italic">
              {siteConfig.address.street}<br />
              {siteConfig.address.postalCode} {siteConfig.address.city}
            </address>
          </div>
        </div>

        <div className="border-t border-background pt-8 text-center text-text-muted text-sm">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
