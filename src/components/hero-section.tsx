import Image from "next/image";
import Link from "next/link";
import { StoreBadgeRow } from "@/components/store-badge-row";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  const { mobileHome, tvHome, tvMovies } = siteConfig.assets.screenshots;

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
            Your local media.
            <br />
            Offline. Beautiful.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#c4c4c4]">
            Manage movies, TV shows, animation, and personal videos in one private library — posters, seasons,
            Continue Watching, phone to TV. Your files stay on your devices.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <StoreBadgeRow height={52} placement="hero" />
            <Link
              href="/#product"
              className="inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/85 transition duration-200 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
            >
              See it on Phone, Tablet & TV
            </Link>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-lg md:max-w-none">
          <div
            className="relative mx-auto aspect-[5/4] w-full max-w-[520px] md:max-w-none"
            role="img"
            aria-label="MyBinge offline media library on phone, tablet, and TV"
          >
            {/* TV — back, wide letterbox */}
            <div className="absolute left-[4%] right-[2%] top-[6%] z-0 overflow-hidden rounded-xl border border-white/[0.1] bg-[#101010] shadow-2xl shadow-black/50">
              <div className="bg-[#070707] px-2 pb-2 pt-1.5 md:px-3 md:pb-3 md:pt-2">
                <div className="relative aspect-video w-full overflow-hidden rounded-md bg-black">
                  <Image
                    src={tvMovies}
                    alt=""
                    width={1024}
                    height={616}
                    className="h-full w-full object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 90vw, 45vw"
                  />
                </div>
                <div className="mx-auto mt-1.5 h-1 w-10 rounded-full bg-white/15 md:mt-2 md:h-1.5 md:w-14" aria-hidden />
              </div>
            </div>

            {/* Tablet — mid, landscape chrome with TV shot */}
            <div className="absolute bottom-[8%] right-[0%] z-10 w-[58%] overflow-hidden rounded-2xl border border-white/[0.12] bg-[#141414] p-2 shadow-2xl shadow-black/60 md:bottom-[6%] md:w-[55%] md:p-2.5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-black">
                <Image
                  src={tvHome}
                  alt=""
                  width={1024}
                  height={616}
                  className="h-full w-full object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 50vw, 28vw"
                />
              </div>
            </div>

            {/* Phone — front */}
            <div className="absolute bottom-0 left-[2%] z-20 w-[34%] max-w-[160px] overflow-hidden rounded-[1.35rem] border border-white/[0.14] bg-[#101010] p-1.5 shadow-2xl shadow-black/70 md:left-[4%] md:w-[32%] md:max-w-[180px] md:rounded-[1.5rem] md:p-2">
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.1rem] bg-black">
                <Image
                  src={mobileHome}
                  alt=""
                  width={484}
                  height={1024}
                  className="h-full w-full object-cover object-top"
                  priority
                  sizes="180px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
