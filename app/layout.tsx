import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AppProviders } from "@/components/providers/AppProviders";
import { SkipLink } from "@/components/SkipLink";
import { siteContent } from "@/content/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"]
});

const siteTitle = `${siteContent.name} | ${siteContent.area}`;
const siteDescription =
  "Bar Henrietta in Berlin-Wedding: natural wine, beer, cocktails, dim lights, and a living-room mood.";

const dayToSchema: Record<keyof typeof siteContent.openingHours, string> = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday"
};

const openingHoursSpecification = Object.entries(siteContent.openingHours).map(([day, range]) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: `https://schema.org/${dayToSchema[day as keyof typeof siteContent.openingHours]}`,
  opens: range.open,
  closes: range.close
}));

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  name: siteContent.name,
  image: `${siteContent.websiteUrl}/og-image.png`,
  url: siteContent.websiteUrl,
  email: siteContent.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Malplaquetstraße 28",
    postalCode: "13347",
    addressLocality: "Berlin",
    addressCountry: "DE"
  },
  openingHoursSpecification
};

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.websiteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteContent.name}`
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteContent.websiteUrl,
    siteName: siteContent.name,
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bar Henrietta night atmosphere"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0D"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} bg-background font-sans text-text`}>
        <AppProviders>
          <SkipLink />
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </AppProviders>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd)
          }}
        />
      </body>
    </html>
  );
}
