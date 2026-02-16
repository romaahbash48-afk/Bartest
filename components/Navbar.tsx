"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/providers/LanguageProvider";

const navLinks = [
  { href: "/", labelKey: "nav.home" as const },
  { href: "/menu", labelKey: "nav.menu" as const },
  { href: "/visit", labelKey: "nav.visit" as const }
];

export function Navbar() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();

  const [showToast, setShowToast] = useState(false);
  const clickCountRef = useRef(0);
  const resetTimerRef = useRef<number | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const handleLogoClick = () => {
    clickCountRef.current += 1;

    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current);
    }

    resetTimerRef.current = window.setTimeout(() => {
      clickCountRef.current = 0;
    }, 1500);

    if (clickCountRef.current < 5) {
      return;
    }

    clickCountRef.current = 0;
    setShowToast(true);

    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = window.setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-background backdrop-blur-lg">
        <nav
          className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-8"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            aria-label={t("nav.logoAria")}
            onClick={handleLogoClick}
            className="font-serif text-2xl tracking-wide text-warm-cream transition-colors hover:text-[var(--accent2)]"
          >
            Bar Henrietta
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm tracking-wide transition ${
                      isActive
                        ? "text-[var(--accent2)]"
                        : "text-text-muted hover:text-text hover:underline"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {t(link.labelKey)}
                  </Link>
                );
              })}
            </div>

            <LanguageToggle />
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {showToast ? (
          <motion.div
            role="status"
            aria-live="polite"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
            className="fixed bottom-6 right-6 z-50 rounded-2xl border border-white/10 bg-surface px-4 py-3 text-sm text-text shadow-glow"
          >
            {t("easterEgg.toast")}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
