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
      <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Comparisons</h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#c4c4c4]">
        MyBinge vs Plex, Jellyfin, Kodi, VLC, Emby, and MX Player — choose the right tool for your offline library.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {pages.map((item) => (
          <Link
            key={item.slug}
            href={`/comparisons/${item.slug}`}
            className="rounded-2xl border border-white/[0.08] bg-[#141414] p-6 transition hover:border-white/20"
          >
            <h2 className="text-xl font-medium text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#c4c4c4]">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
