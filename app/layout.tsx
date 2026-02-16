import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { LocaleProvider } from '@/context/LocaleContext';
import { MoodProvider } from '@/context/MoodContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { site } from '@/content/site';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bar-henrietta.berlin'),
  title: `${site.name} | ${site.area}`,
  description: `Bar Henrietta — Natural wine, beer & cocktails in Berlin-Wedding. Living-room mood, dim lights, good conversations.`,
  keywords: ['Bar Henrietta', 'Berlin', 'Wedding', 'Natural wine', 'Cocktails', 'Bar'],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} | ${site.area}`,
    description: 'Natural wine, beer & cocktails in Berlin-Wedding. Living-room mood, dim lights, good conversations.',
    type: 'website',
    locale: 'de_DE',
    alternateLocale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ${site.area}`,
    description: 'Natural wine, beer & cocktails in Berlin-Wedding.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${cormorant.variable} ${inter.variable}`}>
      <body data-mood="quiet_talk">
        <LocaleProvider>
          <MoodProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </MoodProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
