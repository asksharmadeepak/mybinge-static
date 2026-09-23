import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { OutcomeRow } from "@/components/outcome-row";
import { ProductStage } from "@/components/product-stage";
import { ContentHubCards } from "@/components/content-hub-cards";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { FaqAccordion } from "@/components/faq-accordion";
import { buildMetadata, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import { faqItems, featureList, homeFaqItems, homeSeoSections } from "@/lib/marketing";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Build Your Own Offline Media Library",
  description:
    "Learn how to organize downloaded movies, TV shows, and personal videos into a scalable offline media library with MyBinge — guides, tools, and FAQs for Android movie collectors.",
  path: "/",
});

const homeBreadcrumbs = breadcrumbJsonLd([{ name: "Home", path: "/" }]);

const steps = [
  { title: "Import", body: "Add local folders and external drives from Settings." },
  { title: "Match", body: "Normalize filenames and pull posters from metadata." },
  { title: "Watch", body: "Browse by posters, categories, and Continue Watching." },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(homeFaqItems)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeBreadcrumbs) }} />
      <HeroSection />
      <OutcomeRow />
      <ProductStage />
      <ContentHubCards />

      <Section
        eyebrow="How it works"
        title="Three steps that scale."
        subtitle="A practical process from a few downloads to thousands of files."
      >
        <ol className="grid gap-8 md:grid-cols-3 md:gap-10">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t border-white/[0.06] pt-6">
              <p className="text-xs tracking-[0.16em] text-[#8a8a8a]">0{index + 1}</p>
              <h3 className="mt-3 font-heading text-2xl text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#c4c4c4]">{step.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-sm text-[#8a8a8a]">
          Need the full system? Read{" "}
          <Link href="/guides/how-to-organize-downloaded-movies" className="text-white underline-offset-4 hover:underline">
            how to organize downloaded movies
          </Link>
          , then{" "}
          <a
            href={siteConfig.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline-offset-4 hover:underline"
          >
            get MyBinge on Google Play
          </a>
          .
        </p>
      </Section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a8a8a]">In the library</p>
        <h2 className="mt-3 font-heading text-3xl text-white md:text-5xl">What you get</h2>
        <div className="mt-10 flex flex-wrap gap-2">
          {featureList.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-white/[0.06] bg-[#101010] px-4 py-2 text-sm text-[#e8e8e8]"
            >
              {feature}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a8a8a]">Field notes</p>
          <div className="mt-8 space-y-16">
            {homeSeoSections.map((block) => (
              <article key={block.title}>
                <h2 className="font-heading text-3xl leading-tight text-white md:text-4xl">{block.title}</h2>
                <div className="mt-6 space-y-5 text-[#c4c4c4]">
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="FAQ" title="Questions, answered.">
        <FaqAccordion items={homeFaqItems} />
        <p className="mt-8 text-sm text-[#8a8a8a]">
          {faqItems.length - homeFaqItems.length} more on the{" "}
          <Link href="/faq" className="text-white underline-offset-4 hover:underline">
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
