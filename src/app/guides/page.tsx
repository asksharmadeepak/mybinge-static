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
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a8a8a]">Learn</p>
      <h1 className="mt-3 font-heading text-4xl text-white md:text-6xl">Guides</h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#c4c4c4]">
        Deep, practical tutorials designed to help you build a durable offline media library.
      </p>
      <div className="mt-12 divide-y divide-white/[0.06] border-y border-white/[0.06]">
        {guides.map((guide, index) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="group grid gap-2 py-7 md:grid-cols-[72px_1fr_auto] md:items-baseline"
          >
            <span className="text-xs text-[#8a8a8a]">{String(index + 1).padStart(2, "0")}</span>
            <span>
              <span className="font-heading text-2xl text-white md:text-3xl">{guide.title}</span>
              <span className="mt-2 block text-sm leading-relaxed text-[#c4c4c4]">{guide.description}</span>
            </span>
            <span className="text-xs text-[#8a8a8a]">{guide.readingTime}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
