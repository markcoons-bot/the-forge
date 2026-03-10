import { makers } from "@/data/makers";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const makerPages = makers.map((maker) => ({
    url: `https://formandelement.com/makers/${maker.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://formandelement.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://formandelement.com/makers",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://formandelement.com/shop",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://formandelement.com/gallery",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://formandelement.com/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://formandelement.com/apply",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    ...makerPages,
  ];
}
