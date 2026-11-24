import Link from "next/link";
import { MapPin, Clock, Phone, Star } from "lucide-react";
import { hasLiveMenu, type Location } from "@/lib/site-data";

// One outlet card — used on /locations and on every city page so the
// name, address, hours and phone shown on the site always match each
// other (and the outlet's Google Business Profile).
export function LocationCard({ loc }: { loc: Location }) {
  const hasMenu = hasLiveMenu(loc.slug);

  return (
    <div
      id={loc.slug}
      className="flex h-full scroll-mt-28 flex-col justify-between rounded-2xl border border-ink/10 bg-paper p-6"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <p className="font-display text-xl leading-snug">{loc.name}</p>
          {hasMenu && (
            <span className="shrink-0 rounded-full bg-moss/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-moss">
              Menu live
            </span>
          )}
        </div>
        {loc.address && (
          <p className="mt-3 flex items-start gap-1.5 text-sm text-ink-soft/70">
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" /> <span>{loc.address}</span>
          </p>
        )}
        <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-soft/60">
          <Clock className="h-3.5 w-3.5 shrink-0" /> {loc.hours}
        </p>
        {loc.phone && (
          <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-soft/60">
            <Phone className="h-3.5 w-3.5 shrink-0" />
            <a href={`tel:${loc.phone.replace(/\s+/g, "")}`} className="underline-hover">
              {loc.phone}
            </a>
          </p>
        )}
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <Link
          href={hasMenu ? `/menu/${loc.slug}` : "/menu"}
          className="underline-hover text-sm font-medium text-ink"
        >
          {hasMenu ? "View menu" : "Menu coming soon"}
        </Link>
        <div className="flex items-center gap-2">
          {loc.reviewUrl && (
            <a
              href={loc.reviewUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 rounded-full border border-ink/15 px-3 py-1.5 text-xs font-medium transition-colors hover:border-rust/50"
            >
              <Star className="h-3 w-3" /> Review us
            </a>
          )}
          <a
            href={loc.mapsUrl ?? "#"}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${loc.name} in Google Maps`}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-rust/50"
          >
            <MapPin className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
