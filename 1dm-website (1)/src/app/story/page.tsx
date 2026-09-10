import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { timeline, team } from "@/lib/site-data";

export const metadata: Metadata = { title: "Our Story" };

export default function StoryPage() {
  return (
    <>
      <section className="grain bg-cream pb-16 pt-20 md:pb-24 md:pt-28">
        <Container>
          <SectionHeading
            eyebrow="Our story"
            title="From a coffee truck in Pune to a roastery of our own."
            copy="Every expansion has followed the same rule: don't open the next outlet until the last one runs itself."
          />
        </Container>
      </section>

      <section className="bg-cream pb-24 md:pb-32">
        <Container>
          <div className="relative border-l border-ink/15 pl-8 md:pl-12">
            {timeline.map((entry, i) => (
              <Reveal key={entry.year} delay={i * 0.05} className="relative pb-14 last:pb-0">
                <span className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-rust md:-left-[calc(3rem+5px)]" />
                <p className="font-display text-2xl text-rust">{entry.year}</p>
                <h3 className="mt-2 font-display text-3xl text-ink md:text-4xl">{entry.title}</h3>
                <p className="mt-3 max-w-xl text-ink-soft/80">{entry.copy}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Behind the bar" title="The people pulling the shots." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl border border-ink/10 bg-cream p-8">
                <div className="mb-5 h-14 w-14 rounded-full bg-gradient-to-br from-rust/30 to-gold/30" />
                <p className="font-display text-xl">{member.name}</p>
                <p className="mt-1 text-sm text-rust">{member.role}</p>
                <p className="mt-3 text-sm text-ink-soft/70">{member.credentials}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
