"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { formatINR } from "@/lib/utils";
import {
  menuCategoryPhotos,
  menuRoasterPartners,
  perfectPairPhotos,
  type MenuCategory,
  type MenuPhoto,
} from "@/lib/site-data";

// Paginates a location's menu into print-menu-style "leaves" instead of one
// long scroll, using the same photography and the roaster-partner logo wall
// from the printed A3 Daily Pour menu this replaces — not just its page
// count. Three kinds of leaf:
//   1. Perfect Pairs — pulled out of the category list as its own photo-card
//      page, first, exactly where it sits in the print menu.
//   2. Regular category pages — ~4 categories per leaf (2 per column),
//      matching the density of the old single-scroll grid, each topped with
//      a photo band when one of its categories has one (see
//      menuCategoryPhotos in site-data.ts).
//   3. Roasters & Partners — the 20-logo wall from the print menu's own
//      "Roasters we have partnered with" / "From abroad" page, last.
// Turning a page plays a 3D rotateY flip around the book's spine (left edge
// going forward, right edge going back). Swipe works on touch, arrow keys
// work on desktop, and prefers-reduced-motion drops straight to a plain
// crossfade.
const CATEGORIES_PER_LEAF = 4;
const SWIPE_DISTANCE_THRESHOLD = 60;
const SWIPE_VELOCITY_THRESHOLD = 400;
const PERFECT_PAIRS_NAME = "Perfect Pairs";
const SWEET_THINGS_NAME = "Sweet Things";

function chunk<T>(items: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

type Leaf =
  | { kind: "pairs"; category: MenuCategory }
  | { kind: "categories"; categories: MenuCategory[]; photo?: MenuPhoto }
  | { kind: "roasters" };

function buildLeaves(categories: MenuCategory[]): Leaf[] {
  const pairs = categories.find((c) => c.name === PERFECT_PAIRS_NAME);
  const regular = categories.filter((c) => c.name !== PERFECT_PAIRS_NAME);

  const leaves: Leaf[] = [];
  if (pairs) leaves.push({ kind: "pairs", category: pairs });

  for (const group of chunk(regular, CATEGORIES_PER_LEAF)) {
    const photo = group.map((c) => menuCategoryPhotos[c.name]).find(Boolean);
    leaves.push({ kind: "categories", categories: group, photo });
  }

  leaves.push({ kind: "roasters" });
  return leaves;
}

export function MenuPager({ categories }: { categories: MenuCategory[] }) {
  const leaves = useMemo(() => buildLeaves(categories), [categories]);
  const totalPages = leaves.length;
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  function goTo(target: number) {
    if (target < 0 || target >= totalPages) return;
    setDirection(target > page ? 1 : -1);
    setPage(target);
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") goTo(page + 1);
      if (e.key === "ArrowLeft") goTo(page - 1);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, totalPages]);

  function onDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -SWIPE_DISTANCE_THRESHOLD || info.velocity.x < -SWIPE_VELOCITY_THRESHOLD) {
      goTo(page + 1);
    } else if (info.offset.x > SWIPE_DISTANCE_THRESHOLD || info.velocity.x > SWIPE_VELOCITY_THRESHOLD) {
      goTo(page - 1);
    }
  }

  const current = leaves[page];

  const variants = {
    enter: (dir: number) =>
      shouldReduceMotion ? { opacity: 0 } : { rotateY: dir > 0 ? 82 : -82, opacity: 0 },
    center: { rotateY: 0, opacity: 1 },
    exit: (dir: number) =>
      shouldReduceMotion ? { opacity: 0 } : { rotateY: dir > 0 ? -82 : 82, opacity: 0 },
  };

  if (!current) return null;

  return (
    <div className="mt-14">
      <div className="menu-pager-stage" style={{ perspective: 2000 }}>
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.38, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: direction > 0 ? "left center" : "right center" }}
            drag={shouldReduceMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={onDragEnd}
            className="cursor-grab active:cursor-grabbing"
          >
            <LeafContent leaf={current} />
          </motion.div>
        </AnimatePresence>
      </div>

      <nav
        className="mt-10 flex items-center justify-between gap-3 border-t border-ink/10 pt-6 sm:gap-6"
        aria-label="Menu pages"
      >
        <button
          type="button"
          onClick={() => goTo(page - 1)}
          disabled={page === 0}
          className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-rust/50 hover:text-rust disabled:pointer-events-none disabled:opacity-30"
        >
          <span aria-hidden>←</span> Previous
        </button>

        <p
          className="font-display text-sm text-ink-soft/60"
          style={{ fontVariantNumeric: "tabular-nums" }}
          aria-live="polite"
        >
          Page {page + 1} of {totalPages}
        </p>

        <button
          type="button"
          onClick={() => goTo(page + 1)}
          disabled={page === totalPages - 1}
          className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-rust/50 hover:text-rust disabled:pointer-events-none disabled:opacity-30"
        >
          Next <span aria-hidden>→</span>
        </button>
      </nav>
    </div>
  );
}

function LeafContent({ leaf }: { leaf: Leaf }) {
  if (leaf.kind === "pairs") return <PairsLeaf category={leaf.category} />;
  if (leaf.kind === "roasters") return <RoastersLeaf />;
  return <CategoriesLeaf categories={leaf.categories} photo={leaf.photo} />;
}

function PairsLeaf({ category }: { category: MenuCategory }) {
  return (
    <div>
      <p className="font-display text-sm italic text-ink-soft/50">Coffee tastes better with company.</p>
      <h3 className="mt-1 font-display text-3xl text-rust">{category.name}</h3>
      {category.note && <p className="mt-2 max-w-xl text-sm text-ink-soft/60">{category.note}</p>}

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {category.items.map((item, i) => {
          const [, ...rest] = item.name.split(" · ");
          const title = rest.join(" · ") || item.name;
          const photo = perfectPairPhotos[i];

          return (
            <Reveal key={item.name} delay={i * 0.05}>
              <div className="group overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-soft">
                {photo && (
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 640px) 45vw, 90vw"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h4 className="font-display text-xl text-ink">{title}</h4>
                  {item.note && <p className="mt-1 text-xs text-ink-soft/50">{item.note}</p>}
                  <p className="mt-3 font-display text-lg text-rust">{formatINR(item.price)}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

function CategoriesLeaf({ categories, photo }: { categories: MenuCategory[]; photo?: MenuPhoto }) {
  const hasPairingNote = categories.some((c) => c.name === SWEET_THINGS_NAME);

  return (
    <div>
      {photo && (
        <div className="relative mb-10 aspect-[16/7] w-full overflow-hidden rounded-3xl">
          <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="100vw" />
          {photo.caption && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent p-6">
              <p className="font-display text-sm italic text-cream/90">{photo.caption}</p>
            </div>
          )}
        </div>
      )}

      <div className="grid gap-14 lg:grid-cols-2">
        {categories.map((cat, i) => (
          <Reveal key={cat.name} delay={i * 0.05}>
            <MenuCategoryCard category={cat} />
          </Reveal>
        ))}
      </div>

      {hasPairingNote && (
        <div className="mt-10 flex items-center gap-4 rounded-2xl border border-ink/10 bg-paper p-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
            <Image src="/images/menu/paws-welcome-dog.jpg" alt="A dog at 1DM" fill className="object-cover" sizes="64px" />
          </div>
          <div>
            <p className="font-display text-sm text-ink">Paws welcome.</p>
            <p className="text-xs text-ink-soft/50">We are pet-friendly.</p>
          </div>
        </div>
      )}
    </div>
  );
}

function RoasterLogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="relative flex h-24 items-center justify-center rounded-2xl border border-ink/10 bg-cream p-4 shadow-soft transition-transform hover:-translate-y-0.5 sm:h-28">
      <div className="relative h-full w-full">
        <Image src={logo} alt={name} fill className="object-contain p-2" sizes="200px" />
      </div>
    </div>
  );
}

function RoastersLeaf() {
  return (
    <div>
      <div className="relative mb-10 aspect-[16/7] w-full overflow-hidden rounded-3xl">
        <Image src="/images/menu/cafe-bar.jpg" alt="The bar at 1DM" fill className="object-cover" sizes="100vw" />
      </div>

      <h3 className="font-display text-2xl text-rust">Roasters we have partnered with</h3>
      <p className="mt-1 text-xs italic text-ink-soft/50">Indian specialty roasters we have poured over the years.</p>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {menuRoasterPartners.indian.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.03}>
            <RoasterLogoCard name={r.name} logo={r.logo} />
          </Reveal>
        ))}
      </div>

      <h3 className="mt-12 font-display text-2xl text-rust">From abroad</h3>
      <p className="mt-1 text-xs italic text-ink-soft/50">International roasters on our guest list.</p>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {menuRoasterPartners.abroad.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.03}>
            <RoasterLogoCard name={r.name} logo={r.logo} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function MenuCategoryCard({ category }: { category: MenuCategory }) {
  return (
    <>
      <h3 className="font-display text-2xl text-rust">{category.name}</h3>
      {category.note && <p className="mt-1 text-xs italic text-ink-soft/50">{category.note}</p>}
      <ul className="mt-5 divide-y divide-ink/10">
        {category.items.map((item) => (
          <li key={item.name} className="flex items-start justify-between gap-4 py-3">
            <div>
              <p className="font-medium">{item.name}</p>
              {item.note && <p className="mt-0.5 text-xs text-ink-soft/50">{item.note}</p>}
            </div>
            <p className="shrink-0 font-display text-lg text-ink">{formatINR(item.price)}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
