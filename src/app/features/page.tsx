import type { Metadata } from "next";
import { DevicePlatforms } from "@/components/device-platforms";
import { SimplePage } from "@/components/simple-page";
import { buildMetadata } from "@/lib/seo";
import { featureList } from "@/lib/marketing";

export const metadata: Metadata = buildMetadata({
  title: "MyBinge Features — Mobile, Tablet & TV Offline Media Library",
  description:
    "MyBinge keeps your offline media arranged and works on Android phone, tablet, and TV — movies, TV shows, metadata, Continue Watching, and local playback.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <SimplePage
      title="MyBinge features"
      description="Organize offline movies and videos once — then enjoy the same library on mobile, tablet, and Android TV."
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Features", href: "/features" },
      ]}
    >
      <DevicePlatforms />

      <section className="mt-20">
        <h2 className="font-heading text-3xl text-white">Everything in the library</h2>
        <p className="mt-3 text-[#c4c4c4]">
          Core capabilities that keep your personal Netflix-like offline experience tidy on every device.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
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
    </SimplePage>
  );
}
