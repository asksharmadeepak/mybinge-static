import Image from "next/image";
import Link from "next/link";
import { DevicePreview } from "@/components/device-preview";
import { StoreBadgeRow } from "@/components/store-badge-row";
import { siteConfig } from "@/lib/site";

export function DownloadShowcase() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-8 md:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a8a8a]">
            iPhone · Android · Tablet · TV
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-tight text-white md:text-6xl">Get MyBinge</h1>
          <p className="mt-5 text-lg leading-relaxed text-[#c4c4c4]">
            Install once for your whole local collection — movies, TV shows, animation, and personal videos.
            Browse folders and USB on phone. Watch on TV.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-[#c4c4c4]">
            <li>• Add folders & USB drives from Settings</li>
            <li>• Profiles for Kids and Everyone</li>
            <li>• Films, series & anime on TV; manage on phone</li>
            <li>• Optional YouTube favorites (internet for those only)</li>
          </ul>
          <div className="mt-8">
            <StoreBadgeRow height={52} placement="download_page" />
          </div>
          <p className="mt-5 text-sm text-[#8a8a8a]">
            New to organizing files?{" "}
            <Link href="/guides/how-to-organize-downloaded-movies" className="text-white underline-offset-4 hover:underline">
              Read the setup guide
            </Link>
            .
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/[0.06] bg-[#101010] p-4">
          <Image
            src={siteConfig.assets.screenshots.tvHome}
            alt="MyBinge on TV — your local media library"
            width={1280}
            height={720}
            className="aspect-video w-full rounded-2xl object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      <section className="mt-20">
        <h2 className="font-heading text-3xl text-white">See it on every screen</h2>
        <p className="mt-3 max-w-2xl text-[#c4c4c4]">
          Tap Phone, Tablet, or TV — then pick a screen. One consistent preview, no mixed placeholder sizes.
        </p>
        <div className="mt-10">
          <DevicePreview id="download-preview" />
        </div>
      </section>

      <section className="mt-20">
        <CtaBand />
      </section>
    </div>
  );
}

function CtaBand() {
  return (
    <div className="rounded-[2rem] border border-white/[0.06] bg-[#101010] px-8 py-12 text-center">
      <h2 className="font-heading text-3xl text-white">Ready when you are</h2>
      <p className="mx-auto mt-4 max-w-xl text-[#c4c4c4]">
        Free on Google Play and the App Store. Offline for local files — no subscription.
      </p>
      <div className="mt-8 flex justify-center">
        <StoreBadgeRow height={52} placement="download_page_bottom" />
      </div>
    </div>
  );
}
