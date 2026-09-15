import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach 1DM by email or Instagram, or find an outlet in Raipur, Bhilai, Bilaspur, or Jagdalpur.",
};

export default function ContactPage() {
  return (
    <section className="grain bg-cream pb-24 pt-20 md:pb-32 md:pt-28">
      <Container className="max-w-xl">
        <SectionHeading eyebrow="Get in touch" title="Say hello." />
        <div className="mt-10 space-y-4">
          <a href="mailto:hello@1dm.coffee" className="flex items-center gap-3 rounded-xl border border-ink/10 bg-paper p-5 hover:border-rust/40">
            <Mail className="h-5 w-5 text-rust" /> hello@1dm.coffee
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-ink/10 bg-paper p-5 hover:border-rust/40">
            <InstagramIcon className="h-5 w-5 text-rust" /> @1dm.coffee
          </a>
          <div className="flex items-center gap-3 rounded-xl border border-ink/10 bg-paper p-5">
            <MapPin className="h-5 w-5 text-rust" /> Raipur · Bhilai · Bilaspur · Jagdalpur
          </div>
        </div>
      </Container>
    </section>
  );
}
