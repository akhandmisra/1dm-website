import type { Metadata } from "next";

// Shared metadata builder used by every page's `metadata` export (or
// `generateMetadata` function) so each page gets its own canonical URL,
// Open Graph block, and Twitter Card — instead of silently inheriting the
// root layout's homepage values for all three, which is what every page
// except the homepage was doing before this fix (Sitechecker flagged this
// as "Canonical is missing", "Open Graph tags incomplete", and "Twitter
// card incomplete" across all 21 indexable pages).
export const siteUrl = "https://1dm.coffee";
export const siteName = "1DM";
const defaultImage = "/images/branding/storefront-sign.jpg";

export function pageMetadata({
  path,
  title,
  description,
  image = defaultImage,
}: {
  /** Path relative to siteUrl, e.g. "/story" or "/menu/samta". Use "/" for the homepage. */
  path: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const canonicalPath = path === "" ? "/" : path;
  const url = `${siteUrl}${canonicalPath === "/" ? "" : canonicalPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
