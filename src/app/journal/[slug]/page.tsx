import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { journalArticles, getJournalArticle, type JournalBlock } from "@/lib/journal";
import { articleSchema, withContext } from "@/lib/schema";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return journalArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = getJournalArticle(slug);
  if (!article) return { title: "Journal" };
  return { title: article.title, description: article.dek };
}

function Block({ block }: { block: JournalBlock }) {
  switch (block.type) {
    case "heading":
      return <h2 className="mt-10 font-display text-2xl text-rust">{block.text}</h2>;
    case "paragraph":
      return <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft/85">{block.text}</p>;
    case "list":
      return (
        <ul className="mt-5 max-w-2xl space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-base leading-relaxed text-ink-soft/85">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="mt-8 max-w-2xl border-l-2 border-rust pl-6 font-display text-xl leading-snug text-ink">
          &ldquo;{block.text}&rdquo;
          {block.attribution && <footer className="mt-2 text-sm font-sans text-ink-soft/60">{block.attribution}</footer>}
        </blockquote>
      );
  }
}

export default async function JournalArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getJournalArticle(slug);
  if (!article) return notFound();

  const schema = withContext(articleSchema(article));

  return (
    <article className="grain bg-cream pb-24 pt-20 md:pb-32 md:pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Container>
        <Link href="/journal" className="underline-hover text-sm font-medium text-ink-soft/70">
          ← Journal
        </Link>

        <Reveal className="mt-6 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rust">{article.category}</p>
          <h1 className="mt-3 text-balance font-display text-4xl leading-[1.05] text-ink md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-soft/70">{article.dek}</p>
          <p className="mt-4 text-xs uppercase tracking-wide text-ink-soft/50">{article.readTime}</p>
        </Reveal>

        <div className="mt-4">
          {article.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </Container>
    </article>
  );
}
