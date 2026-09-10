import Link from "next/link";
import { Container } from "./container";
import { InstagramIcon } from "./icons";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/story", label: "Our Story", external: false },
      { href: "/menu", label: "Menu", external: false },
      { href: "/locations", label: "Locations", external: false },
      { href: "/kruptos", label: "Kruptos Roasters", external: false },
    ],
  },
  {
    title: "Shop",
    links: [
      { href: "https://kruptoscoffee.com", label: "Roasted Coffee", external: true },
      { href: "https://kruptoscoffee.com", label: "Equipment & Tools", external: true },
    ],
  },
  {
    title: "Community",
    links: [
      { href: "/club", label: "1DM Club", external: false },
      { href: "/club/chakara-privilege", label: "Chakara Privilege", external: false },
      { href: "/community", label: "Coffee Community", external: false },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-cream">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.3fr_repeat(3,1fr)] md:py-20">
        <div>
          <p className="font-display text-3xl">
            1DM<span className="text-rust">.</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            Specialty coffee, for everyone — ten outlets across Chhattisgarh and Pune, and a roastery of our own.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-cream/60"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/40">{col.title}</p>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="flex flex-col gap-2 border-t border-cream/10 py-6 text-xs text-cream/40 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} 1DollarMoffe Pvt. Ltd. All rights reserved.</p>
        <p>Raipur · Bhilai · Bilaspur · Pune</p>
      </Container>
    </footer>
  );
}
