import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#090909]/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-3.5 md:px-8 md:py-4">
        <BrandLogo variant="header" markClassName="h-8 w-8 md:h-9 md:w-9" />
        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-white/90 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={siteConfig.downloadNav.href}
          className="rounded-full bg-[#E50914] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#c40812]"
        >
          {siteConfig.downloadNav.label}
        </Link>
      </div>
    </header>
  );
}
