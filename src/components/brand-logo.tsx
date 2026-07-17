import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type BrandLogoProps = {
  variant?: "lockup" | "mark" | "tagline" | "header";
  href?: string;
  className?: string;
  lockupClassName?: string;
  markClassName?: string;
};

export function BrandLogo({
  variant = "header",
  href = "/",
  className = "",
  lockupClassName = "h-8 w-auto md:h-9",
  markClassName = "h-9 w-9 md:h-10 md:w-10",
}: BrandLogoProps) {
  const accessibleName = `${siteConfig.brandName} — ${siteConfig.tagline}`;

  const wordmarkWithTagline = (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src={siteConfig.assets.brandMark}
        alt=""
        width={40}
        height={40}
        className={markClassName}
        priority
        aria-hidden
      />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-white md:text-xl">
          {siteConfig.brandName}
        </span>
        <span className="mt-0.5 text-[10px] font-medium tracking-wide text-[#9a9a9a] md:text-[11px]">
          {siteConfig.tagline}
        </span>
      </span>
    </span>
  );

  const content =
    variant === "header" || variant === "tagline" ? (
      wordmarkWithTagline
    ) : variant === "lockup" ? (
      <Image
        src={siteConfig.assets.logoLockup}
        alt={accessibleName}
        width={180}
        height={48}
        className={lockupClassName}
        priority
      />
    ) : (
      <Image
        src={siteConfig.assets.brandMark}
        alt={accessibleName}
        width={64}
        height={64}
        className={markClassName}
        priority
      />
    );

  if (!href) return <span className={className}>{content}</span>;

  return (
    <Link href={href} className={`inline-flex items-center ${className}`} aria-label={accessibleName}>
      {content}
    </Link>
  );
}
