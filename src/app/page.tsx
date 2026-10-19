import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { OutcomeRow } from "@/components/outcome-row";
import { ProductStage } from "@/components/product-stage";
import { ContentHubCards } from "@/components/content-hub-cards";
import { CtaStrip } from "@/components/cta-strip";
import { Section } from "@/components/section";
import { FaqAccordion } from "@/components/faq-accordion";
import { buildMetadata, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";
import { faqItems, featureGridItems, homeFaqItems, homeSeoSections } from "@/lib/marketing";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Build Your Own Offline Media Library",
  description:
    "Learn how to manage local movies, TV shows, animation, and personal videos in one offline media library with MyBinge — guides, tools, and FAQs for people who keep their own files.",
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
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featureGridItems.map((feature) => {
            const iconSrc = feature.icon
              ? siteConfig.assets.icons.features[feature.icon]
              : undefined;
            return (
              <li
                key={feature.title}
                className="rounded-2xl border border-white/[0.06] bg-[#101010] px-4 py-4"
              >
                <div className="flex items-start gap-3">
                  {iconSrc ? (
                    <Image
                      src={iconSrc}
                      alt=""
                      width={28}
                      height={28}
                      className="mt-0.5 h-7 w-7 shrink-0 opacity-80"
                    />
                  ) : null}
                  <div>
                    <h3 className="text-sm font-semibold text-white">{feature.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#9a9a9a]">{feature.body}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a8a8a]">Field notes</p>
        <h2 className="mt-3 max-w-3xl font-heading text-3xl text-white md:text-5xl">
          Practical guides for local media.
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
          {homeSeoSections.map((block) => (
            <article
              key={block.title}
              className="rounded-2xl border border-white/[0.06] bg-[#0c0c0c] px-5 py-6 md:px-6 md:py-7"
            >
              <h3 className="font-heading text-2xl leading-tight text-white md:text-[1.65rem]">
                {block.title}
              </h3>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-[#c4c4c4] md:text-[0.95rem]">
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
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
