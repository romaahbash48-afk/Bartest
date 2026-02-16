import type { Metadata } from "next";

import { MenuPageView } from "@/components/MenuPageView";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Menu",
  description: `Menu highlights at ${siteContent.name}: natural wine, cocktails, beer, non-alcoholic drinks and snacks.`
};

export default function MenuPage() {
  return <MenuPageView />;
}
