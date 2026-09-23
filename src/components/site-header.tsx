"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { StoreCta } from "@/components/store-cta";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#070707]/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-3.5 md:px-8">
        <BrandLogo variant="header" markClassName="h-8 w-8 md:h-9 md:w-9" />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-white/80 transition duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <StoreCta placement="header" className="hidden px-5 py-2.5 md:inline-flex">
            Get MyBinge
          </StoreCta>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        className={`border-t border-white/[0.06] px-4 py-4 md:hidden ${open ? "" : "hidden"}`}
        aria-label="Mobile"
      >
        <div className="flex flex-col gap-1">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-base text-white/90 transition hover:bg-white/[0.04]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/download"
            className="rounded-xl px-3 py-3 text-base text-white/90 transition hover:bg-white/[0.04]"
            onClick={() => setOpen(false)}
          >
            Screenshots
          </Link>
          <StoreCta placement="header_mobile" className="mt-3 w-full" />
        </div>
      </nav>
    </header>
  );
}
