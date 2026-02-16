import type { Metadata } from "next";
import { siteConfig } from "@content/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuPageCatalog from "@/components/MenuPageCatalog";

export const metadata: Metadata = {
  title: `Menu — ${siteConfig.name}`,
  description: `Natural wines, cocktails, craft beer, and snacks at ${siteConfig.name}, ${siteConfig.area}.`,
};

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 pb-24 pt-32">
        <h1 className="text-center font-serif text-4xl font-semibold text-warm-cream sm:text-5xl">
          Menu
        </h1>
        <div className="mt-12">
          <MenuPageCatalog />
        </div>
      </main>
      <Footer />
    </>
  );
}
