'use client';

import { useLocale } from '@/context/LocaleContext';
import { site } from '@/content/site';

export function MapBlock() {
  const { t } = useLocale();

  return (
    <section
      id="map"
      className="py-20 px-6"
      aria-labelledby="map-title"
    >
      <div className="max-w-4xl mx-auto">
        <h2 id="map-title" className="font-serif text-3xl text-text mb-6">
          {t('map_title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-text-muted">
              {site.address.full}
              <br />
              {site.area}
            </p>
            <a
              href={site.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-lg hover:opacity-90 transition-opacity focus-visible:outline-accent outline-offset-2"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              {t('map_open_maps')}
            </a>
          </div>

          <div className="aspect-video rounded-lg overflow-hidden border border-surface">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.682891483!2d13.3788!3d52.5488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851f6c39c5f9f%3A0x0!2zTWFscGxhcXVldHN0cmHDnyAyOCwgMTMzNDcgQmVybGlu!5e0!3m2!1sde!2sde!4v1708000000000"
              title="Bar Henrietta location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
