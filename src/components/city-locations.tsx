import Link from "next/link";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { locations } from "@/lib/site-data";
import { LocationCard } from "./location-card";
import { citySchemas, jsonLdGraph } from "@/lib/schema";

export function CityLocations({
  city,
  eyebrow,
  title,
  copy,
}: {
  city: string;
  eyebrow: string;
  title: string;
  copy: string;
}) {
  const cityLocations = locations.filter((l) => l.city === city);
  const schema = jsonLdGraph(citySchemas(city));

  return (
    <section className="grain bg-cream pb-24 pt-20 md:pb-32 md:pt-28">
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} copy={copy} as="h1" />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cityLocations.map((loc, i) => (
            <Reveal key={loc.slug} delay={i * 0.04}>
              <LocationCard loc={loc} />
            </Reveal>
          ))}
        </div>

        <p className="mt-14 text-sm text-ink-soft/60">
          Looking for a different city?{" "}
          <Link href="/locations" className="underline-hover font-medium text-ink">
            See every 1DM outlet
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
