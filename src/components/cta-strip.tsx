import { StoreBadgeRow } from "@/components/store-badge-row";

export function CtaStrip() {
  return (
    <div className="rounded-[2rem] border border-white/[0.06] bg-[#101010] px-8 py-12 md:px-12 md:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a8a8a]">Ready when you are</p>
      <h3 className="mt-4 font-heading text-3xl leading-tight text-white md:text-5xl">
        Your files. A library you want to open.
      </h3>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#c4c4c4]">
        Download MyBinge and turn folders of local videos into posters, Continue Watching, and playback that works
        offline.
      </p>
      <div className="mt-8">
        <StoreBadgeRow height={48} placement="cta_strip" />
      </div>
    </div>
  );
}
