import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { locations, menuByLocation } from "@/lib/site-data";
import { formatINR } from "@/lib/utils";

type Params = Promise<{ location: string }>;

export function generateStaticParams() {
  return locations.filter((l) => l.menuStatus === "live").map((l) => ({ location: l.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { location } = await params;
  const loc = locations.find((l) => l.slug === location);
  return { title: loc ? `Menu · ${loc.name}` : "Menu" };
}

export default async function LocationMenuPage({ params }: { params: Params }) {
  const { location } = await params;
  const loc = locations.find((l) => l.slug === location);
  const categories = menuByLocation[location];
  if (!loc || !categories) return notFound();

  return (
    <section className="grain bg-cream pb-24 pt-20 md:pb-32 md:pt-28">
      <Container>
        <SectionHeading eyebrow={loc.city} title={loc.name} copy={loc.hours} />

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
