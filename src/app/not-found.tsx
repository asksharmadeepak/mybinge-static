import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a9a9a]">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">Page not found</h1>
      <p className="mt-4 text-[#c4c4c4]">The page moved or does not exist. Explore guides and tools from the homepage.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-[#E50914] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#c40812]"
      >
        Back to home
      </Link>
    </div>
  );
}
