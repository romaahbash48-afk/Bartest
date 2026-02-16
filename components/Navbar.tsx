'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'
import { siteConfig } from '@/content/site'

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [logoClickCount, setLogoClickCount] = useState(0)
  const [showToast, setShowToast] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (logoClickCount === 5) {
      setShowToast(true)
      const timer = setTimeout(() => {
        setShowToast(false)
        setLogoClickCount(0)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [logoClickCount])

  const handleLogoClick = () => {
    setLogoClickCount(prev => prev + 1)
  }

  const easterEggMessage = language === 'de' 
    ? '✨ Willkommen bei den Aufmerksamen. Prost! 🥂'
    : '✨ Welcome to the attentive ones. Cheers! 🥂'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-surface' : 'bg-transparent'
        }`}
      >
        <div className="container-custom py-4 md:py-6 flex items-center justify-between">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="text-2xl md:text-3xl font-serif text-warm-cream hover:text-accent transition-colors focus-visible:outline-accent"
          >
            {siteConfig.name}
          </Link>

          <div className="flex items-center gap-6 md:gap-8">
            <Link
              href="/menu"
              className="text-sm md:text-base uppercase tracking-wider text-text-muted hover:text-accent transition-colors"
            >
              {t('nav.menu')}
            </Link>
            <Link
              href="/info"
              className="text-sm md:text-base uppercase tracking-wider text-text-muted hover:text-accent transition-colors"
            >
              {t('nav.info')}
            </Link>

            <button
              onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
              className="text-sm uppercase tracking-wider px-3 py-1 border border-text-muted text-text-muted hover:border-accent hover:text-accent transition-colors rounded-sm"
              aria-label={`Switch language to ${language === 'de' ? 'English' : 'Deutsch'}`}
            >
              {language === 'de' ? 'EN' : 'DE'}
            </button>
          </div>
        </div>
      </nav>

      {showToast && (
        <div className="toast">
          {easterEggMessage}
        </div>
      )}
    </>
  )
}
