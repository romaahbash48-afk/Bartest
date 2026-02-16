"use client";

import { siteContent } from "@/content/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <div className="space-y-1">
          <p className="font-serif text-lg text-text">{siteContent.name}</p>
          <p>{t("footer.brandLine")}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={siteContent.instagram}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[var(--accent2)]"
          >
            {t("footer.followInstagram")}
          </a>
          <a
            href={`mailto:${siteContent.email}`}
            className="transition hover:text-[var(--accent2)]"
            aria-label={siteContent.email}
          >
            {siteContent.email}
          </a>
        </div>

        <p>
          {year} {siteContent.name}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
