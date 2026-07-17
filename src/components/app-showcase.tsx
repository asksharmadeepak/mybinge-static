import Image from "next/image";
import { siteConfig } from "@/lib/site";

type ShowcaseVariant = "hero" | "grid";
type HeroDevice = "tv" | "phone";

type AppShowcaseProps = {
  variant?: ShowcaseVariant;
  device?: HeroDevice;
};

export function AppShowcase({ variant = "hero", device = "tv" }: AppShowcaseProps) {
  if (variant === "hero") {
    const isTv = device === "tv";
    const src = isTv ? siteConfig.assets.screenshots.tvLogin : siteConfig.assets.screenshots.mobileSettings;
    const alt = isTv
      ? "MyBinge on Android TV — your movies, your way"
      : "MyBinge settings on Android phone — add folders and USB";

    return (
      <div className={`relative mx-auto w-full ${isTv ? "max-w-3xl" : "max-w-sm md:max-w-md"}`}>
        <div className="absolute -inset-3 rounded-[2rem] bg-[#E50914]/[0.08] blur-3xl" aria-hidden />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#141414] p-4">
          <Image
            src={src}
            alt={alt}
            width={isTv ? 1280 : 390}
            height={isTv ? 720 : 844}
            className={`w-full rounded-[1.5rem] object-cover ${isTv ? "aspect-video" : ""}`}
            priority
            sizes={isTv ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 80vw, 400px"}
          />
        </div>
      </div>
    );
  }

  const shots = [
    {
      src: siteConfig.assets.screenshots.mobileSettings,
      alt: "MyBinge settings on phone",
      label: "Phone settings",
      phone: true,
    },
    {
      src: siteConfig.assets.screenshots.mobileVideos,
      alt: "MyBinge YouTube favorites on phone",
      label: "Phone videos",
      phone: true,
    },
    {
      src: siteConfig.assets.screenshots.tvSettings,
      alt: "MyBinge settings on Android TV",
      label: "Android TV",
      phone: false,
    },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {shots.map((shot) => (
        <figure
          key={shot.src}
          className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#141414] p-4"
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.phone ? 390 : 1280}
            height={shot.phone ? 844 : 720}
            className={`w-full rounded-xl object-cover ${shot.phone ? "mx-auto max-w-xs aspect-[9/16]" : "aspect-video"}`}
            loading="lazy"
            sizes={shot.phone ? "320px" : "(max-width: 1024px) 100vw, 33vw"}
          />
          <figcaption className="mt-3 text-center text-sm text-[#9a9a9a]">{shot.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}
