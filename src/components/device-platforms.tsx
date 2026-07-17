import Image from "next/image";
import Link from "next/link";
import { Smartphone, Tablet, Tv, Check } from "lucide-react";
import { siteConfig } from "@/lib/site";

const devices = [
  {
    id: "mobile",
    Icon: Smartphone,
    label: "Mobile",
    title: "Phone-ready offline library",
    description:
      "Carry your movies and TV shows on Android. Browse posters, continue watching, and play from phone storage, SD card, or USB OTG — fully offline.",
    points: [
      "Poster grid and smart search on the go",
      "Continue Watching synced when you sign in",
      "Works with local folders and removable storage",
    ],
    image: siteConfig.assets.screenshots.mobileSettings,
    imageAlt: "MyBinge settings on phone — add folders, USB drives, and profiles",
    imageWidth: 390,
    imageHeight: 844,
    aspect: "phone" as const,
  },
  {
    id: "tablet",
    Icon: Tablet,
    label: "Tablet",
    title: "Bigger screen, same organized library",
    description:
      "On tablet, MyBinge gives you more room for collections, categories, and episode lists — still offline-first, still the same folders you already organized.",
    points: [
      "Comfortable browsing for long sessions",
      "Great for family sharing on the couch",
      "Same metadata, favorites, and watch progress",
    ],
    // Wide sign-in / marketing layout until a dedicated tablet screenshot is available
    image: siteConfig.assets.screenshots.tvLogin,
    imageAlt: "MyBinge on a large screen — offline playback and USB drives",
    imageWidth: 1280,
    imageHeight: 720,
    aspect: "wide" as const,
  },
  {
    id: "tv",
    Icon: Tv,
    label: "Android TV",
    title: "Couch-first big-screen playback",
    description:
      "Add videos from this device or USB on TV. Manage profiles and paths on phone — then settle in for Continue Watching and My Movies on the big screen.",
    points: [
      "Remote-friendly navigation and poster rows",
      "Browse videos from device storage or USB",
      "Save movies on phone; watch them on TV",
    ],
    image: siteConfig.assets.screenshots.tvSettings,
    imageAlt: "MyBinge settings on Android TV — browse videos from USB",
    imageWidth: 1280,
    imageHeight: 720,
    aspect: "wide" as const,
  },
];

export function DevicePlatforms() {
  return (
    <div className="space-y-16">
      {/* USP strip — restrained red */}
      <div className="rounded-3xl border border-white/[0.08] bg-[#141414] p-8 md:p-10 lg:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a9a9a]">
          One library · Every screen
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Works on Mobile, Tablet & <span className="text-[#E50914]">TV</span>
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#c4c4c4] md:text-lg">
          Keep your offline media arranged once — then browse and play the same organized library on phone,
          tablet, and Android TV. No subscriptions. No internet required for playback.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {devices.map(({ Icon, label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#090909] px-4 py-3.5 transition hover:border-white/20"
            >
              <Icon className="h-5 w-5 text-white/70" aria-hidden />
              <span className="font-medium text-white">{label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Per-device sections */}
      {devices.map((device, index) => {
        const reversed = index % 2 === 1;
        return (
          <section
            key={device.id}
            id={device.id}
            className="scroll-mt-24 grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
          >
            <div className={reversed ? "lg:order-2" : undefined}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1 text-sm font-medium text-white/80">
                <device.Icon className="h-4 w-4" aria-hidden />
                {device.label}
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white md:text-3xl">{device.title}</h3>
              <p className="mt-4 leading-relaxed text-[#c4c4c4]">{device.description}</p>
              <ul className="mt-6 space-y-3">
                {device.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-[#c4c4c4]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-white/40" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
              {device.id === "tablet" ? (
                <p className="mt-4 text-xs text-[#9a9a9a]">
                  Dedicated tablet screenshot coming soon — layout uses the same library as phone and TV.
                </p>
              ) : null}
            </div>
            <div className={reversed ? "lg:order-1" : undefined}>
              <div
                className={`relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#141414] p-4 ${
                  device.aspect === "phone" ? "mx-auto max-w-xs" : ""
                }`}
              >
                <Image
                  src={device.image}
                  alt={device.imageAlt}
                  width={device.imageWidth}
                  height={device.imageHeight}
                  className={`w-full rounded-xl object-cover ${
                    device.aspect === "wide" ? "aspect-video" : "aspect-[9/16]"
                  }`}
                  loading="lazy"
                  sizes={device.aspect === "phone" ? "320px" : "(max-width: 1024px) 100vw, 50vw"}
                />
              </div>
            </div>
          </section>
        );
      })}

      <div className="rounded-2xl border border-white/[0.08] bg-[#141414] p-8 text-center">
        <p className="text-[#c4c4c4]">
          Organize once. Watch anywhere you have Android — phone, tablet, or TV.
        </p>
        <Link
          href="/download"
          className="mt-5 inline-flex rounded-full bg-[#E50914] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#c40812]"
        >
          Download MyBinge
        </Link>
      </div>
    </div>
  );
}
