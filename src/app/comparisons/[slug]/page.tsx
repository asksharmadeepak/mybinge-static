import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleLayout } from "@/components/article-layout";
import { buildMetadata } from "@/lib/seo";
import { getContentByKind, getContentItem } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getContentByKind("comparisons").map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getContentItem("comparisons", slug);
  if (!item) return {};
  return buildMetadata({
    title: item.title,
    description: item.description,
    path: `/comparisons/${item.slug}`,
    type: "article",
    publishedTime: item.date,
  });
}

export default async function ComparisonDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getContentItem("comparisons", slug);
  if (!item) notFound();
  const related = getContentByKind("comparisons")
    .filter((entry) => entry.slug !== item.slug)
    .slice(0, 3)
    .map((entry) => ({ title: entry.title, href: `/comparisons/${entry.slug}` }));
  return (
    <ArticleLayout
      item={item}
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Comparisons", href: "/comparisons" },
        { name: item.title, href: `/comparisons/${item.slug}` },
      ]}
      related={related}
    />
  );
}
