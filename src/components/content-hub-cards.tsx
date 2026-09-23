import Link from "next/link";

const hubCards = [
  {
    title: "Guides",
    description: "Folder structure, naming, metadata, TV seasons.",
    href: "/guides",
    index: "01",
  },
  {
    title: "Comparisons",
    description: "MyBinge vs Plex, Jellyfin, Kodi, VLC.",
    href: "/comparisons",
    index: "02",
  },
  {
    title: "Tools",
    description: "Filename formatter, folders, episode tracker.",
    href: "/tools",
    index: "03",
  },
  {
    title: "Blog",
    description: "Workflows, formats, and library hygiene.",
    href: "/blog",
    index: "04",
  },
];

export function ContentHubCards() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a8a8a]">Learn first</p>
      <h2 className="mt-3 font-heading text-3xl text-white md:text-5xl">Then install.</h2>
      <div className="mt-12 divide-y divide-white/[0.06] border-y border-white/[0.06]">
        {hubCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group grid gap-2 py-7 transition duration-200 md:grid-cols-[80px_1fr_auto] md:items-baseline md:gap-8"
          >
            <span className="text-xs tracking-wider text-[#8a8a8a]">{card.index}</span>
            <span>
              <span className="font-heading text-2xl text-white md:text-3xl">{card.title}</span>
              <span className="mt-2 block text-sm text-[#c4c4c4]">{card.description}</span>
            </span>
            <span className="text-sm text-white/40 transition group-hover:text-white">Open →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
