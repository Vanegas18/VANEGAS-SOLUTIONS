import { MetadataRoute } from "next";
import { legalDocs } from "@/lib/legal-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vanegassolutions.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://vanegassolutions.com/#servicios",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://vanegassolutions.com/#proyectos",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://vanegassolutions.com/legal",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...legalDocs.map((doc) => ({
      url: `https://vanegassolutions.com/legal/${doc.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),
    {
      url: "https://vanegassolutions.com/nosotros",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}