import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { locations } from "@/lib/site-data";

export const metadata: Metadata = { title: "Menu" };

export default function MenuIndexPage() {
  return (
    <section className="grain bg-cream pb-24 pt-20 md:pb-32 md:pt-28">
      <Container>
        <SectionHeading
          eyebrow="Menu"
          title="Pick your outlet."
          copy="Menus vary slightly by location while the roastery program is being rolled out cafe by cafe."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={loc.menuStatus === "live" ? `/menu/${loc.slug}` : "/menu"}
              className="flex items-center justify-between rounded-xl border border-ink/10 bg-paper px-5 py-4 transition-colors hover:border-rust/40"
            >
              <span className="font-medium">{loc.name}</span>
              <span className="text-xs text-ink-soft/50">
                {loc.menuStatus === "live" ? "View menu" : "Coming soon"}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
