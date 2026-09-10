export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-ink py-3">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-10 text-sm font-medium uppercase tracking-[0.2em] text-cream/70">
            {item}
            <span className="text-rust">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
