import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/components/LocaleProvider";
import { MoodProvider } from "@/components/MoodProvider";
import { siteConfig } from "@content/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — Natural Wine, Beer & Cocktails in ${siteConfig.area}`,
  description: `${siteConfig.name}: Your living room in ${siteConfig.area}. Natural wine, craft beer, cocktails. ${siteConfig.address}.`,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.area}`,
    description: `Natural wine, beer & cocktails in a living-room atmosphere. ${siteConfig.address}.`,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "de_DE",
    alternateLocale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.area}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.area}`,
    description: `Natural wine, beer & cocktails. ${siteConfig.address}.`,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: "",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Malplaquetstraße 28",
      addressLocality: "Berlin",
      postalCode: "13347",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.552,
      longitude: 13.3595,
    },
    openingHoursSpecification: siteConfig.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: getDayOfWeek(h.day),
      opens: h.open,
      closes: h.close,
    })),
    servesCuisine: ["Natural Wine", "Cocktails", "Craft Beer"],
    priceRange: "€€",
    image: `${siteConfig.url}/og-image.png`,
    sameAs: [siteConfig.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function getDayOfWeek(abbr: string): string {
  const map: Record<string, string> = {
    Mon: "Monday",
    Tue: "Tuesday",
    Wed: "Wednesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday",
    Sun: "Sunday",
  };
  return map[abbr] ?? abbr;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="grain min-h-screen">
        <LocaleProvider>
          <MoodProvider>{children}</MoodProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
