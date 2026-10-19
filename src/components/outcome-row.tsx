const outcomes = [
  {
    title: "Faster discovery",
    body: "Poster grids and search that understand titles — movies, shows, and anime — not torrent filenames. Find anything in seconds instead of scrolling Downloads.",
  },
  {
    title: "Cleaner watch history",
    body: "Continue Watching and per-episode progress keep series and films organized. Resume on phone or TV without guessing the file.",
  },
  {
    title: "Better metadata",
    body: "Match posters and overviews from names like Movie Title (Year) or Show Name S01E01. Fix outliers once; new files follow the same rule.",
  },
];

export function OutcomeRow() {
  return (
    <section className="border-y border-white/[0.05] bg-[#0b0b0b]">
      <div className="mx-auto grid max-w-7xl gap-px bg-white/[0.05] md:grid-cols-3">
        {outcomes.map((item) => (
          <div key={item.title} className="bg-[#0b0b0b] px-6 py-10 md:px-10 md:py-14">
            <h3 className="font-heading text-2xl text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#c4c4c4]">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
