import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { locations } from "@/lib/site-data";
import { LocationCard } from "@/components/location-card";
import { allCafeSchemas, jsonLdGraph } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  path: "/locations",
  title: "Locations",
  description:
    "Ten 1DM cafes across Raipur, Bhilai, Bilaspur, and Jagdalpur — hours, maps, and menus for every outlet, all run to the same bar we set at $1 a cup.",
});

export default function LocationsPage() {
  const cities = Array.from(new Set(locations.map((l) => l.city)));
  const schema = jsonLdGraph(allCafeSchemas());

  return (
    <section className="grain bg-cream pb-24 pt-20 md:pb-32 md:pt-28">
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <Container>
        <SectionHeading
          eyebrow="Locations"
          title="Ten cafes across four cities."
          copy="Every outlet runs the same standard — the same shots, the same seven-second pour, the same bar we set back when a cup cost $1."
          as="h1"
        />

        <div className="mt-14 space-y-14">
          {cities.map((city) => (
            <div key={city}>
              <Link href={`/${city.toLowerCase()}`} className="group mb-5 inline-flex items-center gap-2">
                <h3 className="font-display text-2xl text-rust underline-hover">{city}</h3>
              </Link>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {locations
                  .filter((l) => l.city === city)
                  .map((loc, i) => (
                    <Reveal key={loc.slug} delay={i * 0.04}>
                      <LocationCard loc={loc} />
                    </Reveal>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
