import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { FeatureHighlights } from "@/components/feature-highlights";
import { ContentHubCards } from "@/components/content-hub-cards";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { buildMetadata, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import { faqItems, featureList, homeFaqItems, homeSeoSections } from "@/lib/marketing";

export const metadata = buildMetadata({
  title: "Build Your Own Offline Media Library",
  description:
    "Learn how to organize downloaded movies, TV shows, and personal videos into a scalable offline media library with MyBinge — guides, tools, and FAQs for Android movie collectors.",
  path: "/",
});

const homeBreadcrumbs = breadcrumbJsonLd([{ name: "Home", path: "/" }]);

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(homeFaqItems)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeBreadcrumbs) }} />
      <HeroSection />
      <FeatureHighlights />
      <ContentHubCards />

      {homeSeoSections.map((block) => (
        <Section key={block.title} title={block.title}>
          <div className="space-y-5 text-[#c4c4c4]">
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </Section>
      ))}

      <Section
        title="Why organize your offline media library?"
        subtitle="When folders become messy, discovering the right title takes longer than watching it."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {["Faster discovery", "Cleaner watch history", "Better metadata"].map((item) => (
            <div key={item} className="rounded-2xl border border-white/[0.08] bg-[#141414] p-6">
              <h3 className="font-semibold text-white">{item}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#c4c4c4]">
                Build a system where filenames, folders, artwork, and playback state are easy to understand for every family member.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="MyBinge features" subtitle="Everything you need to build a personal Netflix-like offline experience.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {featureList.map((feature) => (
            <div key={feature} className="rounded-xl border border-white/[0.08] bg-[#141414] px-4 py-3.5 text-sm text-[#e8e8e8]">
              {feature}
            </div>
          ))}
        </div>
      </Section>

      <Section title="How it works" subtitle="A practical process that scales from a few downloads to thousands of files.">
        <ol className="grid gap-5 md:grid-cols-3">
          {[
            "Import local folders and external drives.",
            "Normalize filenames and match metadata.",
            "Browse by posters, categories, and watch progress.",
          ].map((step, index) => (
            <li key={step} className="rounded-2xl border border-white/[0.08] bg-[#141414] p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-[#9a9a9a]">Step {index + 1}</p>
              <p className="mt-3 text-white">{step}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-[#9a9a9a]">
          Need the full system? Read{" "}
          <Link
            href="/guides/how-to-organize-downloaded-movies"
            className="text-white underline-offset-2 hover:underline"
          >
            how to organize downloaded movies
          </Link>
          , then{" "}
          <Link href="/download" className="text-white underline-offset-2 hover:underline">
            download MyBinge
          </Link>
          .
        </p>
      </Section>

      <Section title="Frequently asked questions">
        <div className="space-y-4">
          {homeFaqItems.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-white/[0.08] bg-[#141414] p-6">
              <h3 className="font-medium text-white">{faq.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#c4c4c4]">{faq.a}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-[#9a9a9a]">
          {faqItems.length - homeFaqItems.length} more answers on our{" "}
          <Link href="/faq" className="text-white underline-offset-2 hover:underline">
            full FAQ page
          </Link>
          .
        </p>
      </Section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 md:px-8">
        <CtaStrip />
      </section>
    </>
  );
}
