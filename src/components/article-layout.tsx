import { CtaStrip } from "@/components/cta-strip";
import { Breadcrumbs } from "@/components/breadcrumbs";
import type { ContentItem } from "@/types/content";

function renderInline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a key={index} href={linkMatch[2]} className="text-white underline-offset-2 hover:underline">
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
}

function renderBlock(block: string, index: number) {
  const trimmed = block.trim();
  if (!trimmed) return null;

  if (trimmed.startsWith("## ")) {
    return (
      <h2 key={index} className="mb-4 mt-10 text-2xl font-semibold text-white">
        {trimmed.slice(3)}
      </h2>
    );
  }

  if (trimmed.startsWith("### ")) {
    return (
      <h3 key={index} className="mb-3 mt-8 text-xl font-medium text-white">
        {trimmed.slice(4)}
      </h3>
    );
  }

  if (trimmed.startsWith("|")) {
    const rows = trimmed.split("\n").filter((row) => row.trim().startsWith("|"));
    if (rows.length < 2) {
      return (
        <p key={index} className="mb-5 leading-8 text-[#c4c4c4]">
          {renderInline(trimmed)}
        </p>
      );
    }
    const parseRow = (row: string) =>
      row
        .split("|")
        .slice(1, -1)
        .map((cell) => cell.trim());
    const header = parseRow(rows[0]);
    const bodyRows = rows.slice(2).map(parseRow);
    return (
      <div key={index} className="mb-6 overflow-x-auto rounded-xl border border-white/[0.08]">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead className="bg-[#141414]">
            <tr>
              {header.map((cell) => (
                <th key={cell} className="border-b border-white/[0.08] px-4 py-3 font-medium text-white">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyRows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-white/[0.05]">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-3 text-[#c4c4c4]">
                    {renderInline(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (trimmed.startsWith("- ")) {
    const items = trimmed.split("\n").filter((line) => line.startsWith("- "));
    return (
      <ul key={index} className="mb-5 list-inside list-disc space-y-2 text-[#c4c4c4]">
        {items.map((item) => (
          <li key={item} className="leading-7">
            {renderInline(item.slice(2))}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p key={index} className="mb-5 leading-8 text-[#c4c4c4]">
      {renderInline(trimmed)}
    </p>
  );
}

function renderBody(body: string) {
  return body.split("\n\n").map((block, index) => renderBlock(block, index));
}

export function ArticleLayout({
  item,
  breadcrumbs,
  related,
}: {
  item: ContentItem;
  breadcrumbs: Array<{ name: string; href: string }>;
  related: Array<{ title: string; href: string }>;
}) {
  const faqSchema = item.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: item.faq.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
    : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.description,
    datePublished: item.date,
    author: { "@type": "Organization", name: "OfflineMediaLibrary.com" },
  };

  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-12 md:px-8">
      {faqSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      ) : null}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">{item.title}</h1>
      <p className="mt-5 text-lg leading-relaxed text-[#c4c4c4]">{item.description}</p>
      <div className="mt-4 text-sm text-[#9a9a9a]">
        {new Date(item.date).toLocaleDateString()} · {item.readingTime}
      </div>
      <div className="mt-10">{renderBody(item.body)}</div>
      {item.faq?.length ? (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-white">FAQ</h2>
          <div className="mt-6 space-y-4">
            {item.faq.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/[0.08] bg-[#141414] p-6">
                <h3 className="font-medium text-white">{faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#c4c4c4]">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}
      <section className="mt-14">
        <CtaStrip />
      </section>
      {related.length ? (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Related reading</h2>
          <ul className="mt-5 space-y-3">
            {related.map((entry) => (
              <li key={entry.href}>
                <a className="text-[#c4c4c4] underline-offset-2 hover:text-white hover:underline" href={entry.href}>
                  {entry.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
