"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type GooglePlayBadgeProps = {
  className?: string;
  height?: number;
  /** GA4 event name — defaults to download_cta_click */
  trackEvent?: string;
  /** Where the badge sits: hero | cta_strip | guide_header | download_page | … */
  placement?: string;
};

export function GooglePlayBadge({
  className = "",
  height = 48,
  trackEvent = "download_cta_click",
  placement = "unknown",
}: GooglePlayBadgeProps) {
  return (
    <Link
      href={siteConfig.playStoreUrl}
      className={`inline-block opacity-90 transition hover:opacity-100 ${className}`}
      onClick={() => {
        window.gtag?.("event", trackEvent, {
          event_category: "download",
          link_url: siteConfig.playStoreUrl,
          destination: siteConfig.playStoreUrl,
          placement,
          page_path: window.location.pathname,
        });
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
