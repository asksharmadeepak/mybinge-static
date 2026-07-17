import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleLayout } from "@/components/article-layout";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { getContentByKind, getContentItem } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getContentByKind("blog").map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getContentItem("blog", slug);
  if (!item) return {};
  return buildMetadata({
    title: item.title,
    description: item.description,
    path: `/blog/${item.slug}`,
    type: "article",
    publishedTime: item.date,
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getContentItem("blog", slug);
  if (!item) notFound();
  const allBlog = getContentByKind("blog");
  const allGuides = getContentByKind("guides");
  const relatedFromFrontmatter = (item.related ?? [])
    .map((slug) => {
      const guide = allGuides.find((entry) => entry.slug === slug);
      if (guide) return { title: guide.title, href: `/guides/${guide.slug}` };
      const blog = allBlog.find((entry) => entry.slug === slug);
      if (blog) return { title: blog.title, href: `/blog/${blog.slug}` };
      return null;
    })
    .filter(Boolean) as Array<{ title: string; href: string }>;
  const related =
    relatedFromFrontmatter.length > 0
      ? relatedFromFrontmatter
      : allBlog
          .filter((entry) => entry.slug !== item.slug)
          .slice(0, 3)
          .map((entry) => ({ title: entry.title, href: `/blog/${entry.slug}` }));
  const breadcrumb = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: item.title, path: `/blog/${item.slug}` },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumb)) }} />
      <ArticleLayout
        item={item}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: item.title, href: `/blog/${item.slug}` },
        ]}
        related={related}
      />
    </>
  );
}
