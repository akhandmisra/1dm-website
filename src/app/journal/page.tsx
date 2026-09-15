import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { journalArticles } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Brew guides, roasting notes, and coffee-origin stories from 1DM and Kruptos Coffee Roasters — how to dial in a V60, why beans need to rest, and where India's coffee actually comes from.",
};

export default function JournalPage() {
  return (
    <section className="grain bg-cream pb-24 pt-20 md:pb-32 md:pt-28">
      <Container>
        <SectionHeading
          eyebrow="Journal"
          title="Brew guides and coffee notes."
          copy="Everything we tell our own baristas, written down — grind sizes, rest times, and where the beans actually come from."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {journalArticles.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.05}>
              <Link
                href={`/journal/${article.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-paper p-6 transition-colors hover:border-rust/40"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rust">{article.category}</p>
                  <p className="mt-3 font-display text-xl leading-snug text-ink group-hover:underline">
                    {article.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft/70">{article.dek}</p>
                </div>
                <p className="mt-6 text-xs uppercase tracking-wide text-ink-soft/50">{article.readTime}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
