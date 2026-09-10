"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "./container";
import { cn } from "@/lib/utils";

const links = [
  { href: "/story", label: "Our Story" },
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations" },
  { href: "/kruptos", label: "Kruptos Roasters" },
  { href: "https://kruptoscoffee.com", label: "Shop", external: true },
  { href: "/club", label: "1DM Club" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="font-display text-2xl tracking-tight text-ink">
          1DM<span className="text-rust">.</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="underline-hover flex items-center gap-1 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
              {link.external && <ArrowUpRight className="h-3 w-3" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-ink/5 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-ink/10 bg-cream lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-lg px-3 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
                  )}
                >
                  {link.label}
                  {link.external && <ArrowUpRight className="h-3.5 w-3.5" />}
                </Link>
              ))}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
