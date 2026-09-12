import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import { timeline, team, founder, storyGallery } from "@/lib/site-data";

export const metadata: Metadata = { title: "Our Story" };

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function StoryPage() {
  return (
    <>
      <section className="grain bg-cream pb-16 pt-20 md:pb-24 md:pt-28">
        <Container>
          <SectionHeading
            eyebrow="Our story"
            title="We started the multi-roaster coffee truck. Everyone else followed."
            copy="In 2019, 1DM put multiple roasters on one coffee cart in Pune — a concept nobody else in India was running. Every expansion since has followed the same rule: don't open the next outlet until the last one runs itself. Seven years later, that truck is ten cafes, a roastery, and a bakery."
          />
        </Container>
      </section>

      <section className="bg-cream pb-24 md:pb-32">
        <Container>
          <div className="relative border-l border-ink/15 pl-8 md:pl-12">
            {timeline.map((entry, i) => (
              <Reveal key={entry.year} delay={i * 0.05} className="relative pb-14 last:pb-0">
                <span className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-rust md:-left-[calc(3rem+5px)]" />
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-display text-2xl text-rust">{entry.year}</p>
                  {entry.badge && (
                    <span className="rounded-full bg-yellow px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-ink">
                      {entry.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-display text-3xl text-ink md:text-4xl">{entry.title}</h3>
                <p className="mt-3 max-w-xl text-ink-soft/80">{entry.copy}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Craft gallery */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="In the field"
            title="What ten cafes, a roastery, and a bakery actually look like."
            copy="Training sessions, competition trophies, and the everyday work behind the counter — the parts of the trend-setting that don't fit in a highlight reel."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:grid-rows-2">
            {storyGallery.map((photo, i) => (
              <Reveal
                key={photo.image}
                delay={i * 0.05}
                className={cn(
                  "group relative overflow-hidden rounded-3xl",
                  photo.span === "wide" && "col-span-2 aspect-[16/9] sm:aspect-auto",
                  photo.span === "tall" && "row-span-2 aspect-[3/4] sm:aspect-auto",
                  !photo.span && "aspect-square"
                )}
              >
                <Image
                  src={photo.image}
                  alt={photo.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={photo.span === "wide" ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 640px) 25vw, 50vw"}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-4 pt-10">
                  <p className="text-xs leading-snug text-cream/90 sm:text-sm">{photo.caption}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder spotlight */}
      <section className="grain bg-ink py-24 text-cream md:py-32">
        <Container className="grid items-center gap-14 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-cream/15">
              <Image
                src="/images/team/cupping-portrait.jpg"
                alt={founder.name}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 80vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rust">{founder.role}</p>
            <h2 className="mt-3 font-display text-balance text-4xl leading-[1.05] md:text-5xl">
              {founder.name}
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-cream/70">{founder.bio}</p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Our team" title="The people behind every cup, plate, and roast." />
          <div className="relative mt-10 aspect-[21/9] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/team/luffy-banner.jpg"
              alt="Luffy, 1DM's Chief Bark-ista, ready for his close-up"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl border border-ink/10 bg-cream p-8">
                {member.photo ? (
                  <div className="mb-5 h-14 w-14 overflow-hidden rounded-full border border-ink/10">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rust/30 to-gold/30">
                    <span className="font-display text-lg text-ink">{initials(member.name)}</span>
                  </div>
                )}
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
