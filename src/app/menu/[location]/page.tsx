import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { MenuPager } from "@/components/menu-pager";
import { MapPin, Phone, Star } from "lucide-react";
import { locations, menuByLocation } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { cafeSchema, withContext } from "@/lib/schema";

type Params = Promise<{ location: string }>;

// Only build a page for locations that actually have menu content in
// menuByLocation — filtering on menuStatus === "live" alone (the site's
// open/closed flag) previously generated pages for outlets with no menu
// data at all, which immediately called notFound() and returned a real
// HTTP 404. Those pages were still linked to from /locations, /menu, and
// the city pages whenever a location was "live", which is exactly what
// Sitechecker flagged as "internal links to 4xx pages". See the matching
// link-guard fix in site-data.ts (hasLiveMenu) and its call sites.
export function generateStaticParams() {
  return Object.keys(menuByLocation).map((location) => ({ location }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { location } = await params;
  const loc = locations.find((l) => l.slug === location);
  const categories = menuByLocation[location];
  if (!loc || !categories) return { title: "Menu" };

  // Not a joined list of every category name — with ~27-30 categories per
  // edition, that list would blow well past a usable meta description
  // length. A short, fixed summary of what's on it reads better and stays
  // under ~160 chars. Tagore Nagar is the one outlet on the Veg & Non-Veg
  // Edition (see site-data.ts) — its description calls that out instead of
  // claiming a vegetarian menu it doesn't serve.
  const isNonVeg = categories.some((c) => c.name === "Signature Chicken Mains");

  return pageMetadata({
    path: `/menu/${location}`,
    // This page doubles as the outlet's landing page (its Google Business
    // Profile links here), so the title leads with what people search for.
    title: `${loc.name}, ${loc.city} · Specialty Coffee, Menu & Hours`,
    description: isNonVeg
      ? `The full Daily Pour menu at ${loc.name} in ${loc.city} — espresso, cold brew, teas, breakfast platters, chicken and egg dishes, sandwiches, bowls and more. Open ${loc.hours}.`
      : `The full vegetarian Daily Pour menu at ${loc.name} in ${loc.city} — espresso, cold brew, teas, breakfast platters, sandwiches, bowls and more. Open ${loc.hours}.`,
  });
}

export default async function LocationMenuPage({ params }: { params: Params }) {
  const { location } = await params;
  const loc = locations.find((l) => l.slug === location);
  const categories = menuByLocation[location];
  if (!loc || !categories) return notFound();
  const schema = cafeSchema(loc);

  return (
    <section className="grain bg-cream pb-24 pt-20 md:pb-32 md:pt-28">
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(withContext(schema)) }}
        />
      )}
      <Container>
        <SectionHeading eyebrow={loc.city} title={loc.name} copy={`Specialty coffee · Open ${loc.hours}`} as="h1" />

        <div className="mt-6 flex flex-col gap-3 text-sm text-ink-soft/70 md:flex-row md:flex-wrap md:items-center md:gap-6">
          {loc.address && (
            <a href={loc.mapsUrl ?? "#"} target="_blank" rel="noreferrer" className="flex items-start gap-1.5 underline-hover">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" /> <span>{loc.address}</span>
            </a>
          )}
          {loc.phone && (
            <a href={`tel:${loc.phone.replace(/\s+/g, "")}`} className="flex items-center gap-1.5 underline-hover">
              <Phone className="h-3.5 w-3.5 shrink-0" /> {loc.phone}
            </a>
          )}
          {loc.reviewUrl && (
            <a
              href={loc.reviewUrl}
              target="_blank"
              rel="noreferrer"
              className="flex w-fit items-center gap-1 rounded-full border border-ink/15 px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-rust/50"
            >
              <Star className="h-3 w-3" /> Review us on Google
            </a>
          )}
        </div>

        {loc.heroImage && (
          <div className="relative mt-10 aspect-[16/7] w-full overflow-hidden rounded-3xl">
            <Image src={loc.heroImage} alt={`A dish from the ${loc.name} menu`} fill className="object-cover object-[50%_78%]" sizes="100vw" priority />
          </div>
        )}

        <MenuPager categories={categories} />
      </Container>
    </section>
  );
}
