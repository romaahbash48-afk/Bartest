'use client';

import { motion } from 'framer-motion';

const placeholders = [
  { key: '1', label: 'Interior', gradient: 'from-velvet-green/30 to-terracotta/20' },
  { key: '2', label: 'Bar', gradient: 'from-copper/20 to-muted-gold/10' },
  { key: '3', label: 'Wine', gradient: 'from-terracotta/30 to-velvet-green/20' },
  { key: '4', label: 'Evening', gradient: 'from-velvet-green/40 to-background' },
  { key: '5', label: 'Atmosphere', gradient: 'from-muted-gold/20 to-copper/30' },
  { key: '6', label: 'Wedding', gradient: 'from-surface to-velvet-green/20' },
];

export function Gallery() {
  return (
    <section className="py-20 px-6 bg-surface/30" aria-label="Gallery">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl text-text mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((p, i) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`aspect-[4/3] rounded-lg bg-gradient-to-br ${p.gradient} border border-surface flex items-end p-4`}
            >
              <span className="text-text-muted text-sm">{p.label}</span>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-text-muted text-sm mt-4">
          Replace with real photos in /content or via CMS
        </p>
      </div>
    </section>
  );
}
