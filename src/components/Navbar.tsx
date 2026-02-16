"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { useLocale } from "./LocaleProvider";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const { locale, setLocale, t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState(false);
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLogoClick = useCallback(() => {
    clickCountRef.current += 1;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    if (clickCountRef.current >= 5) {
      clickCountRef.current = 0;
      setToast(true);
      setTimeout(() => setToast(false), 3000);
    } else {
      clickTimerRef.current = setTimeout(() => {
        clickCountRef.current = 0;
      }, 2000);
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLocale(locale === "de" ? "en" : "de");
  }, [locale, setLocale]);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/menu", label: t("nav.menu") },
    { href: "/visit", label: t("nav.visit") },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={{ backgroundColor: "rgba(11,11,13,0.85)" }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl font-semibold tracking-wide text-warm-cream hover:text-copper transition-colors duration-200"
            onClick={handleLogoClick}
          >
            Bar Henrietta
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-sans tracking-wide text-text-muted hover:text-warm-cream transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              aria-label={t("lang.label")}
              className="rounded-md border border-text-muted/30 px-3 py-1.5 text-xs font-sans font-medium tracking-widest text-text-muted hover:border-copper hover:text-copper transition-colors duration-200"
            >
              {t("lang.switch")}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col gap-1 md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-5 bg-warm-cream transition-all duration-200 ${
                menuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-warm-cream transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-warm-cream transition-all duration-200 ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden md:hidden border-t border-white/5"
            >
              <div className="flex flex-col gap-4 px-5 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-sans text-text-muted hover:text-warm-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    toggleLang();
                    setMenuOpen(false);
                  }}
                  aria-label={t("lang.label")}
                  className="self-start rounded-md border border-text-muted/30 px-3 py-1.5 text-xs font-sans font-medium tracking-widest text-text-muted hover:border-copper hover:text-copper transition-colors"
                >
                  {t("lang.switch")}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Easter egg toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-1/2 z-[9998] -translate-x-1/2 rounded-xl border border-copper/30 bg-surface px-6 py-3 text-sm font-sans text-warm-cream shadow-lg"
            style={{ boxShadow: "0 0 40px var(--glow)" }}
          >
            {t("easter.message")}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
