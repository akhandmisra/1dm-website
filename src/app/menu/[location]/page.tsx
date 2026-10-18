import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { locations, menuByLocation } from "@/lib/site-data";
import { formatINR } from "@/lib/utils";
import { pageMetadata } from "@/lib/metadata";

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
    title: `Menu · ${loc.name}`,
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

  return (
    <section className="grain bg-cream pb-24 pt-20 md:pb-32 md:pt-28">
      <Container>
        <SectionHeading eyebrow={loc.city} title={loc.name} copy={loc.hours} as="h1" />

        {loc.heroImage && (
          <div className="relative mt-10 aspect-[16/7] w-full overflow-hidden rounded-3xl">
            <Image src={loc.heroImage} alt={`A dish from the ${loc.name} menu`} fill className="object-cover object-[50%_78%]" sizes="100vw" priority />
          </div>
        )}

        <div className="mt-14 grid gap-14 lg:grid-cols-2">
          {categories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 0.05}>
              <h3 className="font-display text-2xl text-rust">{cat.name}</h3>
              {cat.note && <p className="mt-1 text-xs italic text-ink-soft/50">{cat.note}</p>}
              <ul className="mt-5 divide-y divide-ink/10">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-4 py-3">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      {item.note && <p className="mt-0.5 text-xs text-ink-soft/50">{item.note}</p>}
                    </div>
                    <p className="shrink-0 font-display text-lg text-ink">{formatINR(item.price)}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
