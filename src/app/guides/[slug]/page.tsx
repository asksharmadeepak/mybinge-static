import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleLayout } from "@/components/article-layout";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { getContentByKind, getContentItem } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getContentByKind("guides").map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getContentItem("guides", slug);
  if (!item) return {};
  return buildMetadata({
    title: item.title,
    description: item.description,
    path: `/guides/${item.slug}`,
    type: "article",
    publishedTime: item.date,
  });
}

export default async function GuideDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getContentItem("guides", slug);
  if (!item) notFound();
  const allGuides = getContentByKind("guides");
  const relatedFromFrontmatter = (item.related ?? [])
    .map((slug) => allGuides.find((entry) => entry.slug === slug))
    .filter(Boolean)
    .map((entry) => ({ title: entry!.title, href: `/guides/${entry!.slug}` }));
  const related =
    relatedFromFrontmatter.length > 0
      ? relatedFromFrontmatter
      : allGuides
          .filter((entry) => entry.slug !== item.slug)
          .slice(0, 3)
          .map((entry) => ({ title: entry.title, href: `/guides/${entry.slug}` }));
  const breadcrumb = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: item.title, path: `/guides/${item.slug}` },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumb)) }} />
      <ArticleLayout
        item={item}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: item.title, href: `/guides/${item.slug}` },
        ]}
        related={related}
      />
    </>
  );
}
