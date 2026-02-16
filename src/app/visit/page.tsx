import type { Metadata } from "next";
import { siteConfig } from "@content/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VisitContent from "@/components/VisitContent";

export const metadata: Metadata = {
  title: `Visit — ${siteConfig.name}`,
  description: `How to find ${siteConfig.name}. Address, opening hours, reservation rules, and contact. ${siteConfig.address}.`,
};

export default function VisitPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32">
        <VisitContent />
      </main>
      <Footer />
    </>
  );
}
