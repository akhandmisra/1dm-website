"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { formatINR } from "@/lib/utils";
import type { MenuCategory } from "@/lib/site-data";

// Paginates a location's menu into print-menu-style "leaves" instead of one
// long scroll — ~4 categories per leaf (2 per column), matching the density
// of the old single-scroll grid exactly, just chunked. Turning a page plays
// a 3D rotateY flip around the book's spine (left edge going forward, right
// edge going back) so it reads like turning a physical menu page, which is
// what this replaces: the printed A3 Daily Pour menu these categories were
// transcribed from. Swipe works on touch, arrow keys work on desktop, and
// prefers-reduced-motion drops straight to a plain crossfade.
const CATEGORIES_PER_LEAF = 4;
const SWIPE_DISTANCE_THRESHOLD = 60;
const SWIPE_VELOCITY_THRESHOLD = 400;

function chunk<T>(items: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

export function MenuPager({ categories }: { categories: MenuCategory[] }) {
  const leaves = chunk(categories, CATEGORIES_PER_LEAF);
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

  const current = leaves[page] ?? [];

  const variants = {
    enter: (dir: number) =>
      shouldReduceMotion
        ? { opacity: 0 }
        : { rotateY: dir > 0 ? 82 : -82, opacity: 0 },
    center: { rotateY: 0, opacity: 1 },
    exit: (dir: number) =>
      shouldReduceMotion
        ? { opacity: 0 }
        : { rotateY: dir > 0 ? -82 : 82, opacity: 0 },
  };

  if (totalPages <= 1) {
    return (
      <div className="mt-14 grid gap-14 lg:grid-cols-2">
        {categories.map((cat, i) => (
          <Reveal key={cat.name} delay={i * 0.05}>
            <MenuCategoryCard category={cat} />
          </Reveal>
        ))}
      </div>
    );
  }

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
            className="grid cursor-grab gap-14 active:cursor-grabbing lg:grid-cols-2"
          >
            {current.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 0.05}>
                <MenuCategoryCard category={cat} />
              </Reveal>
            ))}
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
