import type { Metadata } from "next";
import Image from "next/image";
import { DevicePlatforms } from "@/components/device-platforms";
import { SimplePage } from "@/components/simple-page";
import { buildMetadata } from "@/lib/seo";
import { featureGridItems } from "@/lib/marketing";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "MyBinge Features — Mobile, Tablet & TV Offline Media Library",
  description:
    "MyBinge keeps your local media arranged on phone, tablet, and TV — movies, TV shows, animation, metadata, Continue Watching, and offline playback.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <SimplePage
      title="MyBinge features"
      description="Organize movies, TV shows, animation, and personal videos once — then enjoy the same local library on mobile, tablet, and Android TV."
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Features", href: "/features" },
      ]}
    >
      <DevicePlatforms />

      <section className="mt-20">
        <h2 className="font-heading text-3xl text-white">Everything in the library</h2>
        <p className="mt-3 text-[#c4c4c4]">
          Core capabilities that keep your whole local library tidy on every device.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureGridItems.map((feature) => (
            <li
              key={feature.title}
              className="rounded-2xl border border-white/[0.06] bg-[#101010] px-4 py-4"
            >
              <div className="flex items-start gap-3">
                <Image
                  src={siteConfig.assets.icons.features[feature.icon]}
                  alt=""
                  width={28}
                  height={28}
                  className="mt-0.5 h-7 w-7 shrink-0 opacity-80"
                />
                <div>
                  <h3 className="text-sm font-semibold text-white">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#9a9a9a]">{feature.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </SimplePage>
  );
}
