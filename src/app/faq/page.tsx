import type { Metadata } from "next";
import Link from "next/link";
import { SimplePage } from "@/components/simple-page";
import { FaqAccordion } from "@/components/faq-accordion";
import { buildMetadata, faqPageJsonLd } from "@/lib/seo";
import { faqItems } from "@/lib/marketing";

export const metadata: Metadata = buildMetadata({
  title: "Offline Media Library FAQ",
  description:
    "Answers about managing local movies, TV shows, and animation in an offline media library — metadata, USB storage, Android TV, and MyBinge vs Plex, VLC, and Kodi.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(faqItems)) }} />
      <SimplePage
        title="Frequently asked questions"
        description="Practical answers about local media libraries, offline organization, and MyBinge."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      >
        <p className="text-[#c4c4c4]">
          Common questions about managing movies, TV shows, and animation offline, and using MyBinge on Android phone
          and TV. Browse our{" "}
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
