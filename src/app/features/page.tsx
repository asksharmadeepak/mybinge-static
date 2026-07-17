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
        <h2 className="text-2xl font-semibold tracking-tight text-white">Everything in the library</h2>
        <p className="mt-3 text-[#c4c4c4]">
          Core capabilities that keep your personal Netflix-like offline experience tidy on every device.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featureList.map((feature) => (
            <div key={feature} className="rounded-xl border border-white/[0.08] bg-[#141414] px-4 py-3.5 text-sm text-[#e8e8e8]">
              {feature}
            </div>
          ))}
        </div>
      </section>
    </SimplePage>
  );
}
