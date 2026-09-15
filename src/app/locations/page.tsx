import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { locations } from "@/lib/site-data";
import { allCafeSchemas, jsonLdGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Ten 1DM cafes across Raipur, Bhilai, Bilaspur, and Jagdalpur — hours, maps, and menus for every outlet, all run to the same bar we set at $1 a cup.",
};

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
                      <div className="flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-paper p-6">
                        <div>
                          <div className="flex items-start justify-between gap-3">
                            <p className="font-display text-xl leading-snug">{loc.name}</p>
                            {loc.menuStatus === "live" && (
                              <span className="shrink-0 rounded-full bg-moss/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-moss">
                                Menu live
                              </span>
                            )}
                          </div>
                          <p className="mt-3 flex items-center gap-1.5 text-sm text-ink-soft/60">
                            <Clock className="h-3.5 w-3.5" /> {loc.hours}
                          </p>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                          <Link
                            href={loc.menuStatus === "live" ? `/menu/${loc.slug}` : "/menu"}
                            className="underline-hover text-sm font-medium text-ink"
                          >
                            {loc.menuStatus === "live" ? "View menu" : "Menu coming soon"}
                          </Link>
                          <a
                            href={loc.mapsUrl ?? "#"}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Open in Google Maps"
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-rust/50"
                          >
                            <MapPin className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>
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
