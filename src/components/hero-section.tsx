import Image from "next/image";
import Link from "next/link";
import { StoreBadgeRow } from "@/components/store-badge-row";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#070707]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_80%_40%,rgba(229,9,20,0.12),transparent_68%)]"
        aria-hidden
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:gap-10 md:px-8 md:py-24 lg:gap-16 lg:py-28">
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">
            {siteConfig.brandName} · {siteConfig.tagline}
          </p>
          <h1 className="mt-5 font-heading text-4xl leading-[1.15] text-white md:text-5xl lg:text-6xl">
            Your movies.
            <br />
            Offline. Beautiful.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#c4c4c4]">
            Organize downloaded movies, TV shows, and personal videos into a private library — posters, Continue
            Watching, phone to TV.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <StoreBadgeRow height={52} placement="hero" />
            <Link
              href="/download"
              className="text-sm font-medium text-white/70 underline-offset-4 transition duration-200 hover:text-white hover:underline"
            >
              See it on screen
            </Link>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-xl md:-mr-4 md:max-w-none lg:-mr-8">
          <div className="relative">
            <Image
              src={siteConfig.assets.heroDevices}
              alt="MyBinge offline media library on laptop and phone with movie posters and Continue Watching"
              width={1024}
              height={682}
              className="w-full object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: "radial-gradient(ellipse 72% 68% at 55% 48%, transparent 52%, #070707 94%)",
              }}
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#070707] to-transparent" aria-hidden />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#070707] to-transparent" aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#070707] to-transparent md:w-14" aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#070707] to-transparent md:w-12" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
