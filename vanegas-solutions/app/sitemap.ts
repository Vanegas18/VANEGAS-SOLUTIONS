import type { MetadataRoute } from "next";
import { legalDocs } from "@/lib/legal-content";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const { url } = siteConfig;
  const lastModified = new Date();

  return [
    { url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${url}/nosotros`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${url}/acompanamiento`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${url}/legal`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    ...legalDocs.map((doc) => ({
      url: `${url}/legal/${doc.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),
  ];
}