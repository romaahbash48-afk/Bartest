"use client";

import Image from "next/image";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteContent } from "@/content/site";
import { localize } from "@/lib/i18n";

function placeholderSvg(
  title: string,
  caption: string,
  gradientFrom: string,
  gradientTo: string
): string {
  return `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'>
  <defs>
    <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0%' stop-color='${gradientFrom}' />
      <stop offset='100%' stop-color='${gradientTo}' />
    </linearGradient>
  </defs>
  <rect width='800' height='600' fill='url(#g)' />
  <rect x='28' y='28' width='744' height='544' fill='none' stroke='rgba(245,240,230,0.35)' stroke-width='2' />
  <text x='52' y='488' font-family='Inter, Arial, sans-serif' font-size='20' fill='rgba(245,240,230,0.85)' letter-spacing='2'>BAR HENRIETTA</text>
  <text x='52' y='524' font-family='Cormorant Garamond, Georgia, serif' font-size='46' fill='rgba(245,240,230,0.98)'>${title}</text>
  <text x='52' y='558' font-family='Inter, Arial, sans-serif' font-size='18' fill='rgba(245,240,230,0.82)'>${caption}</text>
</svg>`;
}

export function GalleryGrid() {
  const { lang, t } = useLanguage();

  return (
    <section className="mx-auto mt-16 w-full max-w-6xl px-4 md:mt-20 md:px-8" aria-labelledby="gallery">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id="gallery" className="font-serif text-4xl text-warm-cream">
            {t("gallery.title")}
          </h2>
          <p className="mt-2 text-text-muted">{t("gallery.subtitle")}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {siteContent.galleryPlaceholders.map((item) => {
          const title = localize(lang, item.title);
          const caption = localize(lang, item.caption);
          const src = `data:image/svg+xml;utf8,${encodeURIComponent(
            placeholderSvg(title, caption, item.gradientFrom, item.gradientTo)
          )}`;

          return (
            <figure
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface"
            >
              <Image
                src={src}
                alt={`${title} - ${caption}`}
                width={800}
                height={600}
                className="h-auto w-full transition duration-500 group-hover:scale-[1.02]"
                unoptimized
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                <p className="font-serif text-xl text-warm-cream">{title}</p>
                <p className="text-sm text-text-muted">{caption}</p>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-text-muted">{t("gallery.note")}</p>
    </section>
  );
}
