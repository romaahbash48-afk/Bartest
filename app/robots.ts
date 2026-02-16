import type { MetadataRoute } from "next";

import { siteContent } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteContent.websiteUrl}/sitemap.xml`
  };
}
