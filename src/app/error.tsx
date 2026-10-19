"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a9a9a]">500</p>
      <h1 className="mt-4 font-heading text-4xl tracking-tight text-white md:text-6xl">
        Something went wrong
      </h1>
      <p className="mt-4 text-[#c4c4c4]">
        The page hit an unexpected error. Try again or return to the homepage.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-[#E50914] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#c40812]"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/40"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
