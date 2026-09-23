import Image from "next/image";
import Link from "next/link";
import { StoreBadgeRow } from "@/components/store-badge-row";
import { siteConfig } from "@/lib/site";

type Shot = {
  src: string;
  alt: string;
  label: string;
  phone?: boolean;
};

const mobileShots: Shot[] = [
  {
    src: siteConfig.assets.screenshots.mobileHome,
    alt: "MyBinge library home on Android phone",
    label: "Library home",
    phone: true,
  },
  {
    src: siteConfig.assets.screenshots.mobileSettings,
    alt: "MyBinge settings — add folders, USB, and profiles on phone",
    label: "Folders, USB & profiles",
    phone: true,
  },
  {
    src: siteConfig.assets.screenshots.mobileVideos,
    alt: "MyBinge favorite videos and YouTube URLs on phone",
    label: "YouTube favorites",
    phone: true,
  },
  {
    src: siteConfig.assets.screenshots.mobileLogin,
    alt: "MyBinge sign-in on Android phone",
    label: "Sign in",
    phone: true,
  },
];

const tvShots: Shot[] = [
  {
    src: siteConfig.assets.screenshots.tvHome,
    alt: "MyBinge home on Android TV",
    label: "TV home",
  },
  {
    src: siteConfig.assets.screenshots.tvMovies,
    alt: "My Movies on Android TV — watch what you save from phone",
    label: "My Movies",
  },
  {
    src: siteConfig.assets.screenshots.tvSettings,
    alt: "MyBinge TV settings — browse videos from USB",
    label: "USB on TV",
  },
  {
    src: siteConfig.assets.screenshots.tvLogin,
    alt: "MyBinge sign-in on TV — offline playback and USB drives",
    label: "TV sign-in",
  },
];

function ShotCard({ shot }: { shot: Shot }) {
  return (
    <figure className="min-w-[200px] shrink-0 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#101010] p-3 md:min-w-0">
      <div className={shot.phone ? "mx-auto max-w-[200px]" : undefined}>
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.phone ? 390 : 1280}
          height={shot.phone ? 844 : 720}
          className={`w-full rounded-xl object-cover ${shot.phone ? "aspect-[9/16]" : "aspect-video"}`}
          loading="lazy"
          sizes={shot.phone ? "(max-width: 768px) 45vw, 200px" : "(max-width: 768px) 80vw, 50vw"}
        />
      </div>
      <figcaption className="mt-3 text-center text-sm text-[#8a8a8a]">{shot.label}</figcaption>
    </figure>
  );
}

export function DownloadShowcase() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-8 md:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a8a8a]">
            iPhone · Android · Tablet · TV
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-tight text-white md:text-6xl">Get MyBinge</h1>
          <p className="mt-5 text-lg leading-relaxed text-[#c4c4c4]">
            Install once. Browse folders and USB on phone. Watch on TV. Sync progress when you sign in.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-[#c4c4c4]">
            <li>• Add folders & USB drives from Settings</li>
            <li>• Profiles for Kids and Everyone</li>
            <li>• Movies on TV; manage & search on phone</li>
            <li>• Optional YouTube favorites (internet for those only)</li>
          </ul>
          <div className="mt-8">
            <StoreBadgeRow height={52} placement="download_page" />
          </div>
          <p className="mt-5 text-sm text-[#8a8a8a]">
            New to organizing files?{" "}
            <Link href="/guides/how-to-organize-downloaded-movies" className="text-white underline-offset-4 hover:underline">
              Read the setup guide
            </Link>
            .
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/[0.06] bg-[#101010] p-4">
          <Image
            src={siteConfig.assets.screenshots.tvHome}
            alt="MyBinge on TV — your movies, your way"
            width={1280}
            height={720}
            className="aspect-video w-full rounded-2xl object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      <section className="mt-20">
        <h2 className="font-heading text-3xl text-white">On your phone</h2>
        <p className="mt-3 max-w-2xl text-[#c4c4c4]">
          Add media folders, manage profiles, and save YouTube favorites.
        </p>
        <div className="-mx-4 mt-8 flex gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
          {mobileShots.map((shot) => (
            <ShotCard key={shot.src} shot={shot} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-heading text-3xl text-white">On Android TV</h2>
        <p className="mt-3 max-w-2xl text-[#c4c4c4]">
          Couch-friendly playback. USB on TV; profiles and search on phone.
        </p>
        <div className="-mx-4 mt-8 flex gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0">
          {tvShots.map((shot) => (
            <ShotCard key={shot.src} shot={shot} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <CtaBand />
      </section>
    </div>
  );
}

function CtaBand() {
  return (
    <div className="rounded-[2rem] border border-white/[0.06] bg-[#101010] px-8 py-12 text-center">
      <h2 className="font-heading text-3xl text-white">Ready when you are</h2>
      <p className="mx-auto mt-4 max-w-xl text-[#c4c4c4]">
        Free on Google Play and the App Store. Offline for local files — no subscription.
      </p>
      <div className="mt-8 flex justify-center">
        <StoreBadgeRow height={52} placement="download_page_bottom" />
      </div>
    </div>
  );
}
