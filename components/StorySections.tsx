'use client';

import { useLocale } from '@/context/LocaleContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const sections = [
  { key: 'story_1', delay: 0 },
  { key: 'story_2', delay: 0.1 },
  { key: 'story_3', delay: 0.2 },
];

function StoryBlock({ keyName, delay }: { keyName: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useLocale();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className="py-24 md:py-32 px-6"
    >
      <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-center text-text-muted max-w-2xl mx-auto leading-relaxed">
        {t(keyName)}
      </p>
    </motion.div>
  );
}

export function StorySections() {
  return (
    <section aria-label="Atmosphere">
      {sections.map((s) => (
        <StoryBlock key={s.key} keyName={s.key} delay={s.delay} />
      ))}
    </section>
  );
}
