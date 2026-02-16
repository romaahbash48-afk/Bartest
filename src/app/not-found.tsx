import Link from "next/link";
import { siteConfig } from "@content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `404 — ${siteConfig.name}`,
};

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(182,90,60,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10">
        <p className="font-sans text-8xl font-light text-text-muted/20">404</p>
        <h1 className="mt-4 font-serif text-3xl font-semibold text-warm-cream sm:text-4xl">
          Verirrt? / Lost?
        </h1>
        <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-text-muted">
          Dieser Drink existiert nicht. Aber viele andere schon.
          <br />
          <span className="text-text-muted/70">
            This drink doesn&apos;t exist. But many others do.
          </span>
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Zurück zur Bar / Back to the bar
        </Link>
      </div>
    </div>
  );
}
