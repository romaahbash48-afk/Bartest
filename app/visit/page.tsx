import type { Metadata } from "next";

import { VisitInfo } from "@/components/VisitInfo";
import { siteContent } from "@/content/site";

export const metadata: Metadata = {
  title: "Visit",
  description: `How to visit ${siteContent.name}: address, opening hours, reservation rules and contacts.`
};

export default function VisitPage() {
  return (
    <div className="pt-12 md:pt-16">
      <VisitInfo />
    </div>
  );
}
