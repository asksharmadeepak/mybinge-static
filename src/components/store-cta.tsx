"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type StoreCtaProps = {
  placement: string;
  className?: string;
  children?: React.ReactNode;
};

export function StoreCta({ placement, className = "", children = "Get MyBinge" }: StoreCtaProps) {
  return (
    <Link
      href={siteConfig.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-[#E50914] px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#c40812]",
        className,
      )}
      onClick={() => {
        window.gtag?.("event", "download_cta_click", {
          event_category: "download",
          link_url: siteConfig.playStoreUrl,
          destination: siteConfig.playStoreUrl,
          placement,
          page_path: window.location.pathname,
        });
      }}
    >
      {children}
    </Link>
  );
}
