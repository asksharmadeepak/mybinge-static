import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getContentByKind } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Offline Media Library Guides",
  description:
    "Long-form guides for organizing downloaded movies, TV shows, metadata, folders, and offline playback workflows.",
  path: "/guides",
});

export default function GuidesPage() {
  const guides = getContentByKind("guides");
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-8 md:py-20">
      <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Guides</h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#c4c4c4]">
        Deep, practical tutorials designed to help you build a durable offline media library.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="rounded-2xl border border-white/[0.08] bg-[#141414] p-6 transition hover:border-white/20"
          >
            <h2 className="text-xl font-medium text-white">{guide.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#c4c4c4]">{guide.description}</p>
            <p className="mt-4 text-xs text-[#9a9a9a]">{guide.readingTime}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
