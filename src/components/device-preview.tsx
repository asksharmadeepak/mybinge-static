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

const devices: {
  id: DeviceId;
  label: string;
  Icon: typeof Smartphone;
  shots: Shot[];
  /** Image dimensions for next/image */
  width: number;
  height: number;
}[] = [
  { id: "phone", label: "Phone", Icon: Smartphone, shots: phoneShots, width: 484, height: 1024 },
  { id: "tablet", label: "Tablet", Icon: Tablet, shots: phoneShots, width: 484, height: 1024 },
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

  const isPortrait = deviceId === "phone" || deviceId === "tablet";

  return (
    <div id={id} className={cn("scroll-mt-24", className)}>
      <div
        role="tablist"
        aria-label="Preview device"
        className="mx-auto flex w-fit max-w-full items-center gap-1 rounded-full border border-white/[0.08] bg-[#101010] p-1"
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
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition duration-200",
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

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${deviceId}`}
        className="mt-8"
      >
        <div
          className={cn(
            "mx-auto overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#101010] p-4 md:p-5",
            isPortrait ? "max-w-sm" : "max-w-4xl"
          )}
        >
          <div
            className={cn(
              "relative mx-auto w-full overflow-hidden rounded-[1.25rem] bg-[#070707]",
              deviceId === "phone" && "aspect-[9/16] max-w-[280px] md:max-w-[300px]",
              deviceId === "tablet" && "aspect-[3/4] max-w-[340px] md:max-w-[380px]",
              deviceId === "tv" && "aspect-video max-w-none"
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
                isPortrait
                  ? "(max-width: 768px) 70vw, 320px"
                  : "(max-width: 768px) 100vw, 896px"
              }
              priority={deviceId === "phone" && shotIndex === 0}
            />
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-[#9a9a9a]">
          {device.label} · {shot.label}
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {device.shots.map((thumb, index) => {
            const active = index === shotIndex;
            return (
              <button
                key={thumb.src}
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
                    isPortrait ? "h-16 w-10" : "h-12 w-20"
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
  );
}
