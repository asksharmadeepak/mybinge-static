import type { Metadata } from "next";
import Link from "next/link";
import { SimplePage } from "@/components/simple-page";
import { buildMetadata, faqPageJsonLd } from "@/lib/seo";
import { faqItems } from "@/lib/marketing";

export const metadata: Metadata = buildMetadata({
  title: "Offline Media Library FAQ",
  description:
    "Answers about organizing downloaded movies, offline movie libraries, movie collection apps, metadata, USB storage, Android TV, and MyBinge vs Plex, VLC, and Kodi.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(faqItems)) }} />
      <SimplePage
        title="Frequently asked questions"
        description="Practical answers about offline media organization, movie library apps, and MyBinge."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      >
        <p className="text-[#c4c4c4]">
          Common questions about building an offline media library, choosing a movie organizer, and using MyBinge on
          Android phone and TV. Browse our{" "}
          <Link href="/guides" className="text-white underline-offset-2 hover:underline">
            guides
          </Link>{" "}
          and{" "}
          <Link href="/tools" className="text-white underline-offset-2 hover:underline">
            tools
          </Link>{" "}
          for deeper walkthroughs.
        </p>
        {faqItems.map((faq) => (
          <div key={faq.q} className="rounded-2xl border border-white/[0.08] bg-[#141414] p-6">
            <h2 className="text-xl font-medium text-white">{faq.q}</h2>
            <p className="mt-3 leading-relaxed text-[#c4c4c4]">{faq.a}</p>
          </div>
        ))}
      </SimplePage>
    </>
  );
}
