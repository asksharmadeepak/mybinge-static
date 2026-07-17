import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getContentByKind } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Updates, explainers, and strategy articles about offline media organization and Android playback workflows.",
  path: "/blog",
});

type BlogProps = {
  searchParams: Promise<{ q?: string; page?: string; category?: string }>;
};

export default async function BlogPage({ searchParams }: BlogProps) {
  const params = await searchParams;
  const posts = getContentByKind("blog");
  const q = (params.q ?? "").toLowerCase().trim();
  const category = params.category ?? "";
  const filtered = posts.filter((post) => {
    const queryMatch =
      q.length === 0 ||
      post.title.toLowerCase().includes(q) ||
      post.description.toLowerCase().includes(q);
    const categoryMatch = category.length === 0 || post.category === category;
    return queryMatch && categoryMatch;
  });
  const page = Math.max(1, Number(params.page ?? "1") || 1);
  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = filtered.slice((page - 1) * pageSize, page * pageSize);
  const categories = [...new Set(posts.map((post) => post.category).filter(Boolean))] as string[];
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-8 md:py-20">
      <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Blog</h1>
      <form className="mt-8 grid gap-3 md:grid-cols-[2fr_1fr_auto]">
        <input
          type="search"
          name="q"
          defaultValue={params.q ?? ""}
          placeholder="Search articles"
          className="rounded-xl border border-white/[0.12] bg-[#141414] px-4 py-2.5 text-white placeholder:text-[#9a9a9a]"
        />
        <select
          name="category"
          defaultValue={category}
          className="rounded-xl border border-white/[0.12] bg-[#141414] px-4 py-2.5 text-white"
        >
          <option value="">All categories</option>
          {categories.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button className="rounded-xl bg-[#E50914] px-4 py-2.5 font-medium text-white transition hover:bg-[#c40812]">
          Search
        </button>
      </form>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {current.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-2xl border border-white/[0.08] bg-[#141414] p-6 transition hover:border-white/20"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-[#9a9a9a]">
              {post.category ?? "Insights"}
            </p>
            <h2 className="mt-2 text-xl font-medium text-white">{post.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#c4c4c4]">{post.description}</p>
            <p className="mt-4 text-xs text-[#9a9a9a]">{post.readingTime}</p>
          </Link>
        ))}
      </div>
      <div className="mt-10 flex items-center gap-3 text-sm">
        <span className="text-[#9a9a9a]">
          Page {Math.min(page, totalPages)} of {totalPages}
        </span>
        {page > 1 ? (
          <Link
            href={`/blog?page=${page - 1}${q ? `&q=${encodeURIComponent(q)}` : ""}${category ? `&category=${encodeURIComponent(category)}` : ""}`}
            className="rounded-lg border border-white/20 px-3 py-1.5 text-white transition hover:border-white/40"
          >
            Previous
          </Link>
        ) : null}
        {page < totalPages ? (
          <Link
            href={`/blog?page=${page + 1}${q ? `&q=${encodeURIComponent(q)}` : ""}${category ? `&category=${encodeURIComponent(category)}` : ""}`}
            className="rounded-lg border border-white/20 px-3 py-1.5 text-white transition hover:border-white/40"
          >
            Next
          </Link>
        ) : null}
      </div>
    </div>
  );
}
