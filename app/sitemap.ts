import type { MetadataRoute } from "next";

import { siteContent } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteContent.websiteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteContent.websiteUrl}/menu`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${siteContent.websiteUrl}/visit`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    }
  ];
}
