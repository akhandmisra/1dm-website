import Link from "next/link";
import { cn } from "@/lib/utils";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost" | "kruptos";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const variants: Record<string, string> = {
  primary: "bg-rust text-cream hover:bg-rust-dark",
  secondary: "bg-ink text-cream hover:bg-ink-soft",
  ghost: "bg-transparent text-ink border border-ink/20 hover:border-ink/60",
  kruptos: "bg-kruptos-gold text-kruptos-black hover:brightness-95",
};

const sizes: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 ease-out active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: BaseProps & { href?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
