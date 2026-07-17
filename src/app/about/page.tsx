import type { Metadata } from "next";
import { SimplePage } from "@/components/simple-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About OfflineMediaLibrary.com",
  description:
    "Learn why OfflineMediaLibrary.com exists and how it helps users build maintainable offline media libraries with MyBinge.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SimplePage
      title="About OfflineMediaLibrary.com"
      description="A content-first resource for people who store and stream local videos."
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
      ]}
    >
      <p>
        OfflineMediaLibrary.com is built for people who keep downloaded movies, TV episodes, and personal videos
        outside streaming platforms. Our mission is to make offline media organization simple, searchable, and
        future-proof.
      </p>
      <p>
        We publish practical guides, comparison breakdowns, and lightweight tools that help you maintain a high-quality
        personal media library while naturally discovering MyBinge as the easiest Android app for daily playback.
      </p>
    </SimplePage>
  );
}
