import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatINR, cn } from "@/lib/utils";

export function ProductCard({
  title,
  subtitle,
  price,
  badge,
  href,
  gradient = "from-rust/25 via-gold/15 to-transparent",
}: {
  handle: string;
  title: string;
  subtitle: string;
  price: number;
  badge?: string;
  href: string;
  gradient?: string;
}) {
  const isExternal = /^https?:\/\//.test(href);
  const linkProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper transition-shadow hover:shadow-soft">
      <Link href={href} {...linkProps} className="block">
        <div className={cn("relative aspect-[4/5] w-full bg-gradient-to-br", gradient)}>
          {badge && (
            <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-cream">
              {badge}
            </span>
          )}
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <Link href={href} {...linkProps}>
          <p className="font-display text-lg leading-tight">{title}</p>
        </Link>
        <p className="text-xs text-ink-soft/60">{subtitle}</p>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm font-medium">{formatINR(price)}</p>
          <Link
            href={href}
            {...linkProps}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-cream transition-transform hover:scale-105 active:scale-95"
            aria-label={`Shop ${title} at Kruptos Coffee`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
