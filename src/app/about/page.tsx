import type { Metadata } from "next";
import { SimplePage } from "@/components/simple-page";
import { buildMetadata } from "@/lib/seo";
import { playStoreUrlWithUtm, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About OfflineMediaLibrary.com",
  description:
    "Learn why OfflineMediaLibrary.com exists and how it helps users build maintainable offline media libraries with MyBinge.",
  path: "/about",
});

export default function AboutPage() {
  const nextBingePlay = playStoreUrlWithUtm(siteConfig.dlabs.nextBingePlayUrl, "about_more_apps");

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
        OfflineMediaLibrary.com is built for people who manage their own local media — movies, TV shows, animation,
        and personal videos — outside streaming platforms. Our mission is to make offline media organization simple,
        searchable, and future-proof.
      </p>
      <p>
        We publish practical guides, comparison breakdowns, and lightweight tools that help you maintain a high-quality
        personal media library while naturally discovering MyBinge as the easiest Android app for daily playback.
      </p>
      <p>
        MyBinge is made by{" "}
        <a
          href={siteConfig.dlabs.developerPlayUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline-offset-4 hover:underline"
        >
          D labs
        </a>
        , the same studio behind{" "}
        <a
          href={nextBingePlay}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline-offset-4 hover:underline"
        >
          NextBinge
        </a>{" "}
        (quick picks for what to watch) and{" "}
        <a
          href={siteConfig.dlabs.homeworkBuddySiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline-offset-4 hover:underline"
        >
          Homework Buddy
        </a>{" "}
        (printable worksheets for young learners).
      </p>
    </SimplePage>
  );
}
