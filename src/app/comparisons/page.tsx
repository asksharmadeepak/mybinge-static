import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getContentByKind } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "MyBinge Comparisons",
  description:
    "Detailed comparisons: MyBinge vs Plex, Jellyfin, Kodi, VLC, and other offline media management options.",
  path: "/comparisons",
});

export default function ComparisonPage() {
  const pages = getContentByKind("comparisons");
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-8 md:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a8a8a]">Choose</p>
      <h1 className="mt-3 font-heading text-4xl text-white md:text-6xl">Comparisons</h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#c4c4c4]">
        MyBinge vs Plex, Jellyfin, Kodi, VLC, Emby, and MX Player — choose the right tool for your offline library.
      </p>
      <div className="mt-12 divide-y divide-white/[0.06] border-y border-white/[0.06]">
        {pages.map((item, index) => (
          <Link
            key={item.slug}
            href={`/comparisons/${item.slug}`}
            className="grid gap-2 py-7 md:grid-cols-[72px_1fr] md:items-baseline"
          >
            <span className="text-xs text-[#8a8a8a]">{String(index + 1).padStart(2, "0")}</span>
            <span>
              <span className="font-heading text-2xl text-white md:text-3xl">{item.title}</span>
              <span className="mt-2 block text-sm leading-relaxed text-[#c4c4c4]">{item.description}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
