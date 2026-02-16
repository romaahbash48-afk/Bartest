"use client";

import { motion, useReducedMotion } from "framer-motion";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function StorySections() {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();

  const stories = [
    { id: "1", title: t("story.1.title"), text: t("story.1.text") },
    { id: "2", title: t("story.2.title"), text: t("story.2.text") },
    { id: "3", title: t("story.3.title"), text: t("story.3.text") },
    { id: "4", title: t("story.4.title"), text: t("story.4.text") }
  ];

  return (
    <section className="mx-auto mt-16 w-full max-w-6xl px-4 md:mt-20 md:px-8">
      <div className="grid gap-4 md:grid-cols-2">
        {stories.map((story, index) => (
          <motion.article
            key={story.id}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.55,
              ease: "easeOut",
              delay: shouldReduceMotion ? 0 : index * 0.05
            }}
            className="panel p-6 md:p-8"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-text-muted">0{index + 1}</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-warm-cream">{story.title}</h2>
            <p className="mt-3 text-base text-text-muted">{story.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
