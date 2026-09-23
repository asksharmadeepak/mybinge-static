import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { GooglePlayBadge } from "@/components/google-play-badge";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#090909]">
      {/* Single soft glow — atmosphere only, not chrome */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_78%_45%,rgba(229,9,20,0.14),transparent_70%)]"
        aria-hidden
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:gap-10 md:px-8 md:py-24 lg:gap-14 lg:py-28">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
            Build Your Own{" "}
            <span className="text-[#E50914]">Offline Media</span> Library
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#c4c4c4]">
            Organize downloaded movies, TV shows and personal videos into a beautiful offline streaming
            library.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <GooglePlayBadge variant="button" placement="hero" />
            <GooglePlayBadge height={52} placement="hero_badge" />
          </div>
          <p className="mt-5 text-sm text-[#9a9a9a]">
            New to organizing?{" "}
            <Link
              href="/guides/how-to-organize-downloaded-movies"
              className="text-white underline-offset-2 hover:underline"
            >
              How to organize movies
            </Link>
          </p>
          <p className="mt-6 flex items-center gap-2 text-sm text-[#9a9a9a]">
            <ShieldCheck className="h-4 w-4 shrink-0 text-white/50" aria-hidden />
            100% Offline · Private · Secure
          </p>
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
                background:
                  "radial-gradient(ellipse 72% 68% at 55% 48%, transparent 52%, #090909 94%)",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#090909] to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#090909] to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#090909] to-transparent md:w-14"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#090909] to-transparent md:w-12"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
