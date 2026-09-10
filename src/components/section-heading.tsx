import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
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
      <h2
        className={cn(
          "font-display text-balance text-4xl leading-[1.05] md:text-5xl",
          tone === "light" ? "text-ink" : "text-kruptos-cream"
        )}
      >
        {title}
      </h2>
      {copy && (
        <p className={cn("mt-4 text-base leading-relaxed", tone === "light" ? "text-ink-soft/80" : "text-kruptos-cream/70")}>
          {copy}
        </p>
      )}
    </div>
  );
}
