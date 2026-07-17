"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function useTrackEvent() {
  return (eventName: string, payload: Record<string, unknown> = {}) => {
    if (typeof window === "undefined") return;
    window.gtag?.("event", eventName, payload);
  };
}
