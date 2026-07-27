import Image from "next/image";
import Link from "next/link";
import { GooglePlayBadge } from "@/components/google-play-badge";
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
    <figure className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#141414] p-4">
      <div className={shot.phone ? "mx-auto max-w-[220px]" : undefined}>
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.phone ? 390 : 1280}
          height={shot.phone ? 844 : 720}
          className={`w-full rounded-xl object-cover ${shot.phone ? "aspect-[9/16]" : "aspect-video"}`}
          loading="lazy"
          sizes={shot.phone ? "(max-width: 768px) 45vw, 220px" : "(max-width: 768px) 100vw, 50vw"}
        />
      </div>
      <figcaption className="mt-3 text-center text-sm text-[#9a9a9a]">{shot.label}</figcaption>
    </figure>
  );
}

export function DownloadShowcase() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 md:px-8 md:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a9a9a]">
            Phone · Tablet · Android TV
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">Download MyBinge</h1>
          <p className="mt-5 text-lg leading-relaxed text-[#c4c4c4]">
            Install once and keep your offline media arranged across every Android screen — browse folders and USB
            on phone, watch on TV, sync progress when you sign in.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-[#c4c4c4]">
            <li>• Add folders & USB drives from Settings</li>
            <li>• Profiles for Kids and Everyone</li>
            <li>• Movies on TV; manage & search on phone</li>
            <li>• Optional YouTube favorites (internet for those only)</li>
          </ul>
          <div className="mt-8">
            <GooglePlayBadge height={56} placement="download_page" />
          </div>
          <p className="mt-5 text-sm text-[#9a9a9a]">
            New to organizing files?{" "}
            <Link href="/guides/how-to-organize-downloaded-movies" className="text-white underline-offset-2 hover:underline">
              Read the setup guide
            </Link>
            .
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-[#E50914]/[0.08] blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#141414] p-4">
            <Image
              src={siteConfig.assets.screenshots.tvLogin}
              alt="MyBinge on TV — your movies, your way"
              width={1280}
              height={720}
              className="aspect-video w-full rounded-xl object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold tracking-tight text-white">On your phone</h2>
        <p className="mt-3 max-w-2xl text-[#c4c4c4]">
          Add media folders, manage profiles, and save YouTube favorites — the control center for your library.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mobileShots.map((shot) => (
            <ShotCard key={shot.src} shot={shot} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold tracking-tight text-white">On Android TV</h2>
        <p className="mt-3 max-w-2xl text-[#c4c4c4]">
          Couch-friendly playback. Add videos from USB on the TV; profiles and deep search stay on phone or web.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {tvShots.map((shot) => (
            <ShotCard key={shot.src} shot={shot} />
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-3xl border border-white/[0.08] bg-[#141414] p-8 text-center md:p-12">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Ready when you are</h2>
        <p className="mx-auto mt-4 max-w-xl text-[#c4c4c4]">
          Free on Google Play. Works offline for your local files — no subscription required.
        </p>
        <div className="mt-8 flex justify-center">
          <GooglePlayBadge height={52} placement="download_page_bottom" />
        </div>
      </section>
    </div>
  );
}
