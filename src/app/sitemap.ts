import type { MetadataRoute } from "next";
import { menuByLocation } from "@/lib/site-data";

const siteUrl = "https://1dm.coffee";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/story",
    "/menu",
    "/locations",
    "/kruptos",
    "/club",
    "/club/chakara-privilege",
    "/community",
    "/contact",
    "/raipur",
    "/bhilai",
    "/bilaspur",
    "/jagdalpur",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  // Only list /menu/<slug> routes that actually have menu content —
  // menuStatus "live" alone isn't enough (see the menu-content gap noted
  // in the project status doc); a route with no entry in menuByLocation
  // renders a blank not-found page, which shouldn't go in a sitemap.
  const menuRoutes = Object.keys(menuByLocation).map((slug) => ({
    url: `${siteUrl}/menu/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...menuRoutes];
}
