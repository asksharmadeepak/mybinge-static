"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { Smartphone, Tablet, Tv } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type DeviceId = "phone" | "tablet" | "tv";

type Shot = {
  src: string;
  alt: string;
  label: string;
};

const phoneShots: Shot[] = [
  {
    src: siteConfig.assets.screenshots.mobileHome,
    alt: "MyBinge library home on Android phone",
    label: "Home",
  },
  {
    src: siteConfig.assets.screenshots.mobileSettings,
    alt: "MyBinge settings — folders, USB, and profiles on phone",
    label: "Settings",
  },
  {
    src: siteConfig.assets.screenshots.mobileVideos,
    alt: "MyBinge YouTube favorites on phone",
    label: "Videos",
  },
  {
    src: siteConfig.assets.screenshots.mobileLogin,
    alt: "MyBinge sign-in on Android phone",
    label: "Sign in",
  },
];

const tvShots: Shot[] = [
  {
    src: siteConfig.assets.screenshots.tvHome,
    alt: "MyBinge home on Android TV",
    label: "Home",
  },
  {
    src: siteConfig.assets.screenshots.tvMovies,
    alt: "My Movies on Android TV",
    label: "Movies",
  },
  {
    src: siteConfig.assets.screenshots.tvSettings,
    alt: "MyBinge TV settings — USB and local storage",
    label: "Settings",
  },
  {
    src: siteConfig.assets.screenshots.tvLogin,
    alt: "MyBinge sign-in on Android TV",
    label: "Sign in",
  },
];

/** Tablet uses TV landscapes in a tablet bezel until dedicated tablet captures exist. */
const tabletShots: Shot[] = tvShots.map((shot) => ({
  ...shot,
  alt: shot.alt.replace("Android TV", "tablet").replace(" on TV", " on tablet"),
}));

const devices: {
  id: DeviceId;
  label: string;
  Icon: typeof Smartphone;
  shots: Shot[];
  width: number;
  height: number;
}[] = [
  { id: "phone", label: "Phone", Icon: Smartphone, shots: phoneShots, width: 484, height: 1024 },
  { id: "tablet", label: "Tablet", Icon: Tablet, shots: tabletShots, width: 1024, height: 616 },
  { id: "tv", label: "TV", Icon: Tv, shots: tvShots, width: 1024, height: 616 },
];

type DevicePreviewProps = {
  id?: string;
  className?: string;
};

export function DevicePreview({ id = "product", className }: DevicePreviewProps) {
  const baseId = useId();
  const [deviceId, setDeviceId] = useState<DeviceId>("phone");
  const [shotIndex, setShotIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  const device = devices.find((d) => d.id === deviceId) ?? devices[0];
  const shot = device.shots[Math.min(shotIndex, device.shots.length - 1)];

  useEffect(() => {
    setShotIndex(0);
    setFadeKey((k) => k + 1);
  }, [deviceId]);

  const selectShot = (index: number) => {
    setShotIndex(index);
    setFadeKey((k) => k + 1);
  };

  const isPhone = deviceId === "phone";
  const isTablet = deviceId === "tablet";
  const isTv = deviceId === "tv";

  return (
    <div id={id} className={cn("scroll-mt-24", className)}>
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-12">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm leading-relaxed text-[#c4c4c4]">
            Switch device to preview the same local library — phone for on the go, tablet for longer sessions, TV for
            the couch.
          </p>
          <div
            role="tablist"
            aria-label="Preview device"
            className="mt-5 flex w-full max-w-full flex-wrap items-center gap-1 rounded-full border border-white/[0.08] bg-[#101010] p-1 lg:flex-col lg:rounded-2xl lg:p-1.5"
          >
            {devices.map(({ id: tabId, label, Icon }) => {
              const selected = tabId === deviceId;
              return (
                <button
                  key={tabId}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${tabId}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setDeviceId(tabId)}
                  className={cn(
                    "inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition duration-200 lg:w-full lg:justify-start lg:rounded-xl",
                    selected
                      ? "bg-white text-[#070707]"
                      : "text-[#c4c4c4] hover:bg-white/[0.06] hover:text-white"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden />
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          id={`${baseId}-panel`}
          aria-labelledby={`${baseId}-tab-${deviceId}`}
        >
          <div
            className={cn(
              "mx-auto overflow-hidden border border-white/[0.08] bg-[#101010]",
              isPhone && "max-w-sm rounded-[1.75rem] p-4 md:p-5",
              isTablet && "max-w-xl rounded-[1.5rem] p-3 md:p-4",
              isTv && "max-w-4xl rounded-2xl p-3 md:p-4"
            )}
          >
            {isTv ? (
              <div className="rounded-xl bg-[#070707] px-3 pb-3 pt-2 md:px-4 md:pb-4 md:pt-3">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
                  <Image
                    key={fadeKey}
                    src={shot.src}
                    alt={shot.alt}
                    width={device.width}
                    height={device.height}
                    className="absolute inset-0 h-full w-full object-cover object-top motion-safe:animate-[fadeIn_0.28s_ease-out]"
                    sizes="(max-width: 768px) 100vw, 896px"
                    priority={shotIndex === 0}
                  />
                </div>
                <div className="mx-auto mt-2.5 h-1.5 w-16 rounded-full bg-white/15" aria-hidden />
              </div>
            ) : (
              <div
                className={cn(
                  "relative mx-auto w-full overflow-hidden bg-[#070707]",
                  isPhone && "aspect-[9/16] max-w-[280px] rounded-[1.25rem] md:max-w-[300px]",
                  isTablet && "aspect-[4/3] max-w-full rounded-xl"
                )}
              >
                <Image
                  key={fadeKey}
                  src={shot.src}
                  alt={shot.alt}
                  width={device.width}
                  height={device.height}
                  className="absolute inset-0 h-full w-full object-cover object-top motion-safe:animate-[fadeIn_0.28s_ease-out]"
                  sizes={
                    isPhone
                      ? "(max-width: 768px) 70vw, 320px"
                      : "(max-width: 768px) 100vw, 560px"
                  }
                  priority={deviceId === "phone" && shotIndex === 0}
                />
              </div>
            )}
          </div>

          <p className="mt-4 text-center text-sm text-[#9a9a9a]">
            {device.label} · {shot.label}
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {device.shots.map((thumb, index) => {
              const active = index === shotIndex;
              return (
                <button
                  key={`${deviceId}-${thumb.label}`}
                  type="button"
                  onClick={() => selectShot(index)}
                  aria-label={`Show ${device.label} ${thumb.label}`}
                  aria-pressed={active}
                  className={cn(
                    "overflow-hidden rounded-xl border p-1 transition duration-200",
                    active
                      ? "border-white/40 bg-white/[0.06]"
                      : "border-white/[0.08] bg-[#101010] hover:border-white/25"
                  )}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-lg bg-[#070707]",
                      isPhone ? "h-16 w-10" : "h-12 w-20"
                    )}
                  >
                    <Image
                      src={thumb.src}
                      alt=""
                      width={device.width}
                      height={device.height}
                      className="h-full w-full object-cover object-top"
                      sizes="80px"
                    />
                  </div>
                  <span className="mt-1 block px-1 text-center text-[10px] text-[#9a9a9a]">
                    {thumb.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
