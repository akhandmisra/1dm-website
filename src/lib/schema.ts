// JSON-LD structured data for 1DM — feeds Google's Local Business rich
// results and gives AI crawlers/answer engines a machine-readable link
// between this domain and 1DM's real-world cafes.
//
// Every fact in here traces back to something the business itself has
// stated: the Google Business Profile hours confirmed with Akhand on
// 2026-09-15, the two outlets (Dumartarai, Bilaspur) whose own GBP listing
// screenshot showed a street/locality fragment, and the neighborhood name
// baked into each outlet's own name elsewhere in this file (an outlet
// literally called "1DM Avanti Vihar" is, in fact, in Avanti Vihar).
// Nothing here is invented. Where an exact building/plot number isn't
// confirmed yet, `streetAddress` falls back to that real neighborhood name
// instead of a fabricated street number — see `KNOWN_ADDRESSES` below.

import { brand, locations, hasLiveMenu, type Location } from "./site-data";
import type { JournalArticle } from "./journal";

export const siteUrl = "https://1dm.coffee";

// Street address and PIN are parsed from each outlet's `address` in
// site-data.ts, which is copied word-for-word from its Google Business
// Profile (updated 2026-11-24). Addresses end ", <City>, Chhattisgarh <PIN>".
function splitAddress(address?: string) {
  const m = address?.match(/^(.*), [^,]+, Chhattisgarh (\d{6})$/);
  return m ? { streetAddress: m[1], postalCode: m[2] } : null;
}

// Mirrors each outlet's Google Business Profile hours (updated 2026-11-24)
// — one dayOfWeek/opens/closes spec per open day, using schema.org's
// recommended full IRI form.
const DAY = {
  Mon: "https://schema.org/Monday",
  Tue: "https://schema.org/Tuesday",
  Wed: "https://schema.org/Wednesday",
  Thu: "https://schema.org/Thursday",
  Fri: "https://schema.org/Friday",
  Sat: "https://schema.org/Saturday",
  Sun: "https://schema.org/Sunday",
};
const ALL_DAYS = Object.values(DAY);

type HoursSpec = { dayOfWeek: string[]; opens: string; closes: string };

const OPENING_HOURS: Record<string, HoursSpec[]> = {
  samta: [{ dayOfWeek: ALL_DAYS, opens: "11:00", closes: "22:00" }],
  dumartarai: [
    {
      dayOfWeek: [DAY.Mon, DAY.Tue, DAY.Wed, DAY.Thu, DAY.Fri, DAY.Sat],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  avanti: [{ dayOfWeek: ALL_DAYS, opens: "08:30", closes: "22:00" }],
  tagore: [{ dayOfWeek: ALL_DAYS, opens: "08:30", closes: "22:00" }],
  "slice-shankar-nagar": [
    {
      dayOfWeek: [DAY.Mon, DAY.Wed, DAY.Thu, DAY.Fri, DAY.Sat, DAY.Sun],
      opens: "12:00",
      closes: "22:00",
    },
  ],
  bhilai: [
    {
      dayOfWeek: [DAY.Tue, DAY.Wed, DAY.Thu, DAY.Fri, DAY.Sat, DAY.Sun],
      opens: "11:00",
      closes: "22:00",
    },
  ],
  bilaspur: [
    {
      dayOfWeek: [DAY.Mon, DAY.Wed, DAY.Thu, DAY.Fri, DAY.Sat, DAY.Sun],
      opens: "12:00",
      closes: "23:00",
    },
  ],
};

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: brand.fullName,
    alternateName: brand.name,
    url: siteUrl,
    logo: `${siteUrl}/images/branding/1dm-logo.png`,
    sameAs: [
      "https://www.instagram.com/1dollarmoffee/",
      "https://magicpin.in/Raipur/Shankar-Nagar/Restaurant/1dollar-Moffee/store/1670110",
    ],
    description:
      "1DM is a specialty coffee cafe chain based in Raipur, Chhattisgarh, India, with outlets across Chhattisgarh and its own roastery, Kruptos Coffee Roasters.",
  };
}

// Returns null for a "coming soon" outlet — publishing LocalBusiness schema
// for a cafe that isn't open yet would misrepresent it to search engines.
export function cafeSchema(loc: Location) {
  if (loc.menuStatus !== "live") return null;

  const parsed = splitAddress(loc.address);
  const hours = OPENING_HOURS[loc.slug];
  const pageUrl = hasLiveMenu(loc.slug) ? `${siteUrl}/menu/${loc.slug}` : `${siteUrl}/locations`;

  return {
    "@type": "CafeOrCoffeeShop",
    "@id": `${siteUrl}/locations#${loc.slug}`,
    name: loc.name,
    branchOf: { "@id": `${siteUrl}/#organization` },
    url: pageUrl,
    ...(loc.phone ? { telephone: loc.phone.replace(/\s+/g, "") } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: parsed?.streetAddress ?? loc.name,
      addressLocality: loc.city,
      addressRegion: "Chhattisgarh",
      ...(parsed ? { postalCode: parsed.postalCode } : {}),
      addressCountry: "IN",
    },
    ...(loc.mapsUrl ? { hasMap: loc.mapsUrl } : {}),
    ...(hours ? { openingHoursSpecification: hours.map((h) => ({ "@type": "OpeningHoursSpecification", ...h })) } : {}),
    priceRange: "₹₹",
    servesCuisine: ["Coffee", "Specialty Coffee", "Cafe Food"],
    parentOrganization: { "@id": `${siteUrl}/#organization` },
  };
}

export function allCafeSchemas() {
  return locations.map(cafeSchema).filter((s): s is NonNullable<typeof s> => s !== null);
}

export function citySchemas(city: string) {
  return locations
    .filter((l) => l.city === city)
    .map(cafeSchema)
    .filter((s): s is NonNullable<typeof s> => s !== null);
}

// Wraps a single node with its own top-level @context, for a page that
// renders just one schema object (e.g. Organization in the root layout).
export function withContext(node: object) {
  return { "@context": "https://schema.org", ...node };
}

// Combines several nodes under one shared @context via @graph — keeps a
// page that describes multiple entities (e.g. a city's several cafes) to a
// single <script> tag instead of one per entity. Returns null when there's
// nothing to render (e.g. a city with no live outlets yet).
export function jsonLdGraph(nodes: object[]) {
  if (nodes.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

// Article schema for a Journal post — helps it show up as a rich result
// and ties it back to the Organization as publisher.
export function articleSchema(article: JournalArticle) {
  return {
    "@type": "Article",
    "@id": `${siteUrl}/journal/${article.slug}`,
    headline: article.title,
    description: article.dek,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: `${siteUrl}/journal/${article.slug}`,
    articleSection: article.category,
  };
}
