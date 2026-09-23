import Image from "next/image";
import { siteConfig } from "@/lib/site";

const shots = [
  {
    src: siteConfig.assets.screenshots.tvHome,
    alt: "MyBinge home on Android TV",
    label: "TV library",
    wide: true,
  },
  {
    src: siteConfig.assets.screenshots.mobileHome,
    alt: "MyBinge library on phone",
    label: "Phone posters",
    wide: false,
  },
  {
    src: siteConfig.assets.screenshots.mobileSettings,
    alt: "Add folders and USB on phone",
    label: "Folders & USB",
    wide: false,
  },
];

export function ProductStage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a8a8a]">The product</p>
      <h2 className="mt-3 max-w-2xl font-heading text-3xl leading-tight text-white md:text-5xl">
        A catalog layer on top of your files.
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#c4c4c4] md:text-lg">
        Phone for folders and search. TV for the couch. Same library, no server.
      </p>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {shots.map((shot) => (
          <figure
            key={shot.src}
            className={`overflow-hidden rounded-3xl border border-white/[0.06] bg-[#101010] p-3 ${
              shot.wide ? "md:col-span-2" : ""
            }`}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.wide ? 1280 : 390}
              height={shot.wide ? 720 : 844}
              className={`w-full rounded-2xl object-cover ${shot.wide ? "aspect-video" : "mx-auto max-w-[240px] aspect-[9/16]"}`}
              sizes={shot.wide ? "(max-width: 768px) 100vw, 66vw" : "240px"}
            />
            <figcaption className="mt-3 px-1 text-sm text-[#8a8a8a]">{shot.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
