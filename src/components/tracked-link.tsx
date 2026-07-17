"use client";

import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type TrackedLinkProps = LinkProps & {
  className?: string;
  children: ReactNode;
  eventName: string;
};

export function TrackedLink({ eventName, children, className, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      className={className}
      onClick={() => {
        window.gtag?.("event", eventName, {
          destination: typeof props.href === "string" ? props.href : props.href.pathname,
        });
      }}
    >
      {children}
    </Link>
  );
}
