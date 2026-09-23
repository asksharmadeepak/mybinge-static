import type { Metadata } from "next";
import Link from "next/link";
import { SimplePage } from "@/components/simple-page";
import { FaqAccordion } from "@/components/faq-accordion";
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
        <FaqAccordion items={faqItems} />
      </SimplePage>
    </>
  );
}
