import { site } from '@/content/site';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Info & Visit | Bar Henrietta',
  description: 'Address, opening hours, how to get there, and reservation info for Bar Henrietta in Berlin-Wedding.',
};

function InfoContent() {
  return (
    <div className="pt-24 pb-20 px-6 max-w-2xl mx-auto space-y-16">
      <section>
        <h2 className="font-serif text-2xl text-text mb-4">Address</h2>
        <p className="text-text-muted">
          {site.address.full}
          <br />
          {site.area}
        </p>
        <a
          href={site.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-press inline-block mt-4 px-6 py-3 bg-accent text-background rounded-lg hover:opacity-90 transition-opacity focus-visible:outline-accent outline-offset-2"
          style={{ backgroundColor: 'var(--accent)' }}
        >
          Open in Google Maps
        </a>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-text mb-4">Opening Hours</h2>
        <div className="space-y-2 text-text-muted">
          {site.openingHours.map((h) => (
            <div key={h.day} className="flex justify-between">
              <span>{h.label.de}</span>
              <span>
                {h.open}–{h.close}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-text mb-4">Reservations</h2>
        <ul className="text-text-muted space-y-2 list-disc list-inside">
          <li>No reservations on Fridays & Saturdays</li>
          <li>Tables held until 21:00 (Sun–Thu)</li>
          <li>Confirmation within a day</li>
        </ul>
        <a
          href={`mailto:${site.email}`}
          className="btn-press inline-block mt-4 text-accent hover:underline focus-visible:outline-accent outline-offset-2"
          style={{ color: 'var(--accent)' }}
        >
          {site.email}
        </a>
      </section>

      <section>
        <h2 className="font-serif text-2xl text-text mb-4">Contact</h2>
        <p className="text-text-muted">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors focus-visible:outline-accent outline-offset-2"
          >
            Instagram
          </a>
          <br />
          <a
            href={`mailto:${site.email}`}
            className="hover:text-accent transition-colors focus-visible:outline-accent outline-offset-2"
          >
            {site.email}
          </a>
        </p>
      </section>

      <Link
        href="/#reservation"
        className="btn-press inline-block px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors focus-visible:outline-accent outline-offset-2"
        style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
      >
        Request reservation
      </Link>
    </div>
  );
}

export default function InfoPage() {
  return <InfoContent />;
}
