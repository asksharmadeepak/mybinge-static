"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type AppStoreBadgeProps = {
  className?: string;
  height?: number;
  trackEvent?: string;
  placement?: string;
};

export function AppStoreBadge({
  className = "",
  height = 48,
  trackEvent = "download_cta_click",
  placement = "unknown",
}: AppStoreBadgeProps) {
  return (
    <Link
      href={siteConfig.appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block opacity-90 transition duration-200 hover:opacity-100 ${className}`}
      onClick={() => {
        window.gtag?.("event", trackEvent, {
          event_category: "download",
          store: "app_store",
          link_url: siteConfig.appStoreUrl,
          destination: siteConfig.appStoreUrl,
          placement,
          page_path: window.location.pathname,
        });
      }}
    >
      <Image
        src={siteConfig.assets.appStoreBadge}
        alt="Download on the App Store"
        width={Math.round(height * (119.66407 / 40))}
        height={height}
        className="h-auto w-auto"
        style={{ height }}
        unoptimized
      />
    </Link>
  );
}
