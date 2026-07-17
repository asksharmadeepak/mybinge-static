"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type GooglePlayBadgeProps = {
  className?: string;
  height?: number;
  trackEvent?: string;
};

export function GooglePlayBadge({ className = "", height = 48, trackEvent }: GooglePlayBadgeProps) {
  return (
    <Link
      href={siteConfig.playStoreUrl}
      className={`inline-block opacity-90 transition hover:opacity-100 ${className}`}
      onClick={() => {
        if (trackEvent) {
          window.gtag?.("event", trackEvent, { destination: siteConfig.playStoreUrl });
        }
      }}
    >
      <Image
        src={siteConfig.assets.googlePlayBadge}
        alt="Get it on Google Play"
        width={Math.round(height * (214 / 108))}
        height={height}
        className="h-auto w-auto"
        style={{ height }}
      />
    </Link>
  );
}
