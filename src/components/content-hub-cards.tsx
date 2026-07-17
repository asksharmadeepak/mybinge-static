import Link from "next/link";
import { BookOpen, Scale, Wrench, PenLine } from "lucide-react";

const hubCards = [
  {
    Icon: BookOpen,
    title: "Expert Guides",
    description: "Step-by-step guides to organize your media like a pro.",
    href: "/guides",
    cta: "Explore Guides",
  },
  {
    Icon: Scale,
    title: "Honest Comparisons",
    description: "Compare MyBinge with Plex, Jellyfin, Kodi and more.",
    href: "/comparisons",
    cta: "View Comparisons",
  },
  {
    Icon: Wrench,
    title: "Free Tools",
    description: "Powerful online tools to manage your media effortlessly.",
    href: "/tools",
    cta: "Use Tools",
  },
  {
    Icon: PenLine,
    title: "Latest Blog",
    description: "Tips, tutorials and insights on media management.",
    href: "/blog",
    cta: "Read Articles",
  },
];

export function ContentHubCards() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {hubCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group rounded-2xl border border-white/[0.08] bg-[#141414] p-7 transition hover:border-white/20 hover:bg-[#1a1a1a]"
          >
            <card.Icon className="h-7 w-7 text-white/55" strokeWidth={1.75} aria-hidden />
            <h3 className="mt-5 text-lg font-semibold text-white">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#c4c4c4]">{card.description}</p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-white/50 transition group-hover:text-white">
              {card.cta} →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
