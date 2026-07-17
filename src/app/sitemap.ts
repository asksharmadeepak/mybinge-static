import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getContentByKind } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/features",
    "/download",
    "/guides",
    "/comparisons",
    "/tools",
    "/blog",
    "/faq",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-conditions",
    "/cookie-policy",
  ];

  const toolRoutes = [
    "/tools/movie-filename-formatter",
    "/tools/folder-structure-generator",
    "/tools/subtitle-checker",
    "/tools/metadata-finder",
    "/tools/episode-tracker",
    "/tools/collection-planner",
  ];

  const contentRoutes = (["guides", "blog", "comparisons"] as const).flatMap((kind) =>
    getContentByKind(kind).map((item) => `/${kind}/${item.slug}`),
  );

  return [...staticRoutes, ...toolRoutes, ...contentRoutes].map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
