"use client";

import { useMemo, useState } from "react";

const VIDEO_EXT = /\.(mkv|mp4|avi|mov|wmv|m4v)$/i;
const SUB_EXT = /\.(srt|ass|ssa|vtt)$/i;

type CheckResult = {
  video: string;
  subtitles: string[];
  status: "ok" | "missing";
};

function parseLines(text: string) {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function baseName(filename: string) {
  return filename.replace(/\.[^.]+$/, "").replace(/\.(en|eng)$/i, "");
}

export default function SubtitleCheckerPage() {
  const [input, setInput] = useState("");

  const results = useMemo(() => {
    const lines = parseLines(input);
    if (!lines.length) return [];

    const videos = lines.filter((line) => VIDEO_EXT.test(line));
    const subs = lines.filter((line) => SUB_EXT.test(line));

    return videos.map((video) => {
      const name = video.split("/").pop() ?? video;
      const videoBase = baseName(name);
      const matched = subs.filter((sub) => {
        const subBase = baseName(sub.split("/").pop() ?? sub);
        return subBase === videoBase || subBase.startsWith(videoBase);
      });
      return {
        video: name,
        subtitles: matched.map((s) => s.split("/").pop() ?? s),
        status: matched.length ? ("ok" as const) : ("missing" as const),
      } satisfies CheckResult;
    });
  }, [input]);

  const missingCount = results.filter((r) => r.status === "missing").length;

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 md:px-8 md:py-16">
      <h1 className="font-heading text-4xl text-white md:text-5xl">Subtitle Checker</h1>
      <p className="mt-3 text-[#c4c4c4]">
        Paste video and subtitle filenames (one per line) to find missing caption pairs in your library.
      </p>
      <div className="mt-8 rounded-2xl border border-white/[0.06] bg-[#101010] p-6">
        <label htmlFor="subtitle-input" className="mb-2 block text-sm text-[#c4c4c4]">
          Filenames (from folder listing or file manager export)
        </label>
        <textarea
          id="subtitle-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={10}
          placeholder={"Inception (2010).mkv\nInception (2010).en.srt\nInterstellar (2014).mkv"}
          className="w-full rounded-xl border border-white/20 bg-[#070707] px-4 py-3 font-mono text-sm text-white"
        />
        {results.length > 0 && (
          <p className="mt-4 text-sm text-[#c4c4c4]">
            {results.length} videos checked · {missingCount} missing subtitles
          </p>
        )}
        <div className="mt-6 space-y-2">
          {results.map((row) => (
            <div
              key={row.video}
              className={`rounded-xl border px-4 py-3 text-sm ${
                row.status === "ok"
                  ? "border-green-500/30 bg-green-500/5 text-green-200"
                  : "border-red-500/30 bg-red-500/5 text-red-200"
              }`}
            >
              <p className="font-medium text-white">{row.video}</p>
              <p className="mt-1 text-[#c4c4c4]">
                {row.status === "ok"
                  ? `Subtitles: ${row.subtitles.join(", ")}`
                  : "No matching .srt / .ass / .vtt found"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
