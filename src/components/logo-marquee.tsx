import Image from "next/image";

export type LogoItem = { name: string; logo: string };

function LogoRow({ items, reverse = false }: { items: LogoItem[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`flex w-max gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {doubled.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="relative h-24 w-44 shrink-0 rounded-2xl border border-ink/10 bg-cream shadow-soft transition-transform hover:-translate-y-0.5 sm:h-28 sm:w-52"
          >
            <Image
              src={item.logo}
              alt={item.name}
              fill
              className="object-contain p-5 sm:p-6"
              sizes="200px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee({ rowOne, rowTwo }: { rowOne: LogoItem[]; rowTwo: LogoItem[] }) {
  return (
    <div className="mt-12 space-y-4">
      <LogoRow items={rowOne} />
      <LogoRow items={rowTwo} reverse />
    </div>
  );
}
