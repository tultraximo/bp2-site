import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bp2panels.com";
  const routes = [
    "",
    "/rips",
    "/platform",
    "/technical",
    "/applications",
    "/faq",
    "/about",
    "/contact",
    "/team",
    "/media",
    "/resources",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
