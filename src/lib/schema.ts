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

import { brand, locations, type Location } from "./site-data";
import type { JournalArticle } from "./journal";

export const siteUrl = "https://1dm.coffee";

// Full street-level detail, only for outlets whose own Google Business
// Profile listing has actually shown it (screenshots reviewed 2026-09-15).
// Add an entry here the moment a fuller address is confirmed for any other
// outlet — cafeSchema() below will pick it up automatically.
const KNOWN_ADDRESSES: Record<
  string,
  { streetAddress: string; postalCode?: string; telephone?: string }
> = {
  dumartarai: {
    // From 1DM Dumartarai's own GBP listing (partially visible: "…Corporate
    // Towers, NH-30, New Raipur, Chhattisgarh 492015"). The building name is
    // still cut off in the source screenshot — confirm and replace this
    // once you have the plot/building number.
    streetAddress: "Corporate Towers, NH-30, New Raipur",
    postalCode: "492015",
    telephone: "+91-8817224176",
  },
  bilaspur: {
    // From 1DM Bilaspur's own GBP listing ("…Narmada Nagar, Chhattisgarh
    // 495001"). The plot/building number before "Narmada Nagar" is cut off
    // in the source screenshot — confirm and replace this once you have it.
    streetAddress: "Narmada Nagar",
    postalCode: "495001",
  },
};

// Real neighborhood name for every other live outlet — used as a stand-in
// for `streetAddress` until an exact building number is confirmed. This is
// genuine location info (it's the outlet's own name), just not house-number
// precise yet.
const NEIGHBORHOODS: Record<string, string> = {
  samta: "Samta Colony",
  avanti: "Avanti Vihar",
  tagore: "Tagore Nagar",
  "slice-shankar-nagar": "Shankar Nagar",
  bhilai: "Bhilai",
};

// Parsed from the same hours strings confirmed against each outlet's GBP
// listing during the 2026-09-15 hours round — one dayOfWeek/opens/closes
// spec per open day, using schema.org's recommended full IRI form.
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
  samta: [{ dayOfWeek: ALL_DAYS, opens: "11:00", closes: "22:30" }],
  dumartarai: [
    {
      dayOfWeek: [DAY.Mon, DAY.Tue, DAY.Wed, DAY.Thu, DAY.Fri, DAY.Sat],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  avanti: [
    {
      dayOfWeek: [DAY.Mon, DAY.Tue, DAY.Wed, DAY.Fri, DAY.Sat, DAY.Sun],
      opens: "09:00",
      closes: "22:30",
    },
  ],
  tagore: [{ dayOfWeek: ALL_DAYS, opens: "09:00", closes: "22:00" }],
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
  bilaspur: [{ dayOfWeek: ALL_DAYS, opens: "12:00", closes: "22:00" }],
};

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: brand.fullName,
    alternateName: brand.name,
    url: siteUrl,
    logo: `${siteUrl}/images/branding/1dm-logo.png`,
    sameAs: ["https://www.instagram.com/1dollarmoffee/"],
    description:
      "1DM is a specialty coffee cafe chain based in Raipur, Chhattisgarh, India, with outlets across Chhattisgarh and its own roastery, Kruptos Coffee Roasters.",
  };
}

// Returns null for a "coming soon" outlet — publishing LocalBusiness schema
// for a cafe that isn't open yet would misrepresent it to search engines.
export function cafeSchema(loc: Location) {
  if (loc.menuStatus !== "live") return null;

  const known = KNOWN_ADDRESSES[loc.slug];
  const streetAddress = known?.streetAddress ?? NEIGHBORHOODS[loc.slug] ?? loc.name;
  const hours = OPENING_HOURS[loc.slug];

  return {
    "@type": "CafeOrCoffeeShop",
    "@id": `${siteUrl}/locations#${loc.slug}`,
    name: loc.name,
    branchOf: { "@id": `${siteUrl}/#organization` },
    url: `${siteUrl}/locations`,
    ...(known?.telephone ? { telephone: known.telephone } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality: loc.city,
      addressRegion: "Chhattisgarh",
      ...(known?.postalCode ? { postalCode: known.postalCode } : {}),
      addressCountry: "IN",
    },
    ...(loc.mapsUrl ? { hasMap: loc.mapsUrl } : {}),
    ...(hours ? { openingHoursSpecification: hours.map((h) => ({ "@type": "OpeningHoursSpecification", ...h })) } : {}),
    servesCuisine: "Coffee",
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
