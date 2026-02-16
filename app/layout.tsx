import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/content/site'
import { LanguageProvider } from '@/lib/LanguageContext'
import { MoodProvider } from '@/lib/MoodContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://barhenrietta.com'),
  title: {
    default: 'Bar Henrietta | Natural Wine Bar in Berlin-Wedding',
    template: '%s | Bar Henrietta',
  },
  description: 'A living room in Wedding. Natural wine, craft beer, artisanal cocktails, and good conversations in Berlin.',
  keywords: ['bar', 'natural wine', 'cocktails', 'Berlin', 'Wedding', 'craft beer', 'wine bar'],
  authors: [{ name: 'Bar Henrietta' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'de_DE',
    url: 'https://barhenrietta.com',
    siteName: 'Bar Henrietta',
    title: 'Bar Henrietta | Natural Wine Bar in Berlin-Wedding',
    description: 'A living room in Wedding. Natural wine, craft beer, artisanal cocktails, and good conversations.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bar Henrietta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bar Henrietta | Natural Wine Bar in Berlin-Wedding',
    description: 'A living room in Wedding. Natural wine, craft beer, artisanal cocktails.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BarOrPub',
    name: siteConfig.name,
    description: 'Natural wine bar with cocktails and craft beer in Berlin-Wedding',
    image: 'https://barhenrietta.com/og-image.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '52.556',
      longitude: '13.353',
    },
    url: 'https://barhenrietta.com',
    telephone: '',
    email: siteConfig.email,
    priceRange: '€€',
    servesCuisine: 'Drinks & Snacks',
    openingHoursSpecification: siteConfig.openingHours.map(hour => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hour.name,
      opens: hour.open,
      closes: hour.close,
    })),
    sameAs: [siteConfig.instagram],
  }

  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grain-overlay">
        <LanguageProvider>
          <MoodProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </MoodProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
