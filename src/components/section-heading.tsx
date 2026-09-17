import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  tone = "light",
  className,
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  /**
   * Heading level to render. Defaults to h2, since SectionHeading is mostly
   * used for subsections below a page's real h1. Pass "h1" only for the
   * single primary heading of a page that has no other h1 element —
   * passing it more than once per page (or alongside another real h1)
   * creates a broken heading hierarchy instead of fixing one.
   */
  as?: "h1" | "h2";
}) {
  const Heading = as;
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            tone === "light" ? "text-rust" : "text-kruptos-gold"
          )}
        >
          {eyebrow}
        </p>
      )}
      <Heading
        className={cn(
          "font-display text-balance text-4xl leading-[1.05] md:text-5xl",
          tone === "light" ? "text-ink" : "text-kruptos-cream"
        )}
      >
        {title}
      </Heading>
      {copy && (
        <p className={cn("mt-4 text-base leading-relaxed", tone === "light" ? "text-ink-soft/80" : "text-kruptos-cream/70")}>
          {copy}
        </p>
      )}
    </div>
  );
}
