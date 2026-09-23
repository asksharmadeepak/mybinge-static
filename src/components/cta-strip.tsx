import Link from "next/link";
import { GooglePlayBadge } from "@/components/google-play-badge";

export function CtaStrip() {
  return (
    <div className="rounded-3xl border border-white/[0.08] bg-[#141414] px-8 py-10 md:px-10 md:py-12">
      <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
        Ready to build your offline media library?
      </h3>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#c4c4c4]">
        Download MyBinge and transform folders of local videos into a structured library with metadata, watch
        history, and cross-device continuity.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <GooglePlayBadge variant="button" placement="cta_strip" />
        <GooglePlayBadge height={48} placement="cta_strip_badge" />
        <Link
          href="/download"
          className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/[0.04]"
        >
          See screenshots
        </Link>
      </div>
    </div>
  );
}
