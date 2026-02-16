"use client";

import Link from "next/link";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function NotFoundPanel() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-24 text-center md:px-8 md:py-32">
      <p className="text-xs uppercase tracking-[0.24em] text-text-muted">404</p>
      <h1 className="mt-4 font-serif text-5xl leading-tight text-warm-cream md:text-6xl">
        {t("notFound.title")}
      </h1>
      <p className="mt-5 max-w-xl text-text-muted">{t("notFound.text")}</p>
      <Link href="/" className="btn btn-primary mt-8">
        {t("notFound.backHome")}
      </Link>
    </section>
  );
}
