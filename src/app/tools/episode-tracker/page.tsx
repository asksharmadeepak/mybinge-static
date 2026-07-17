"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "mybinge-episode-tracker";

type TrackerState = {
  showName: string;
  seasons: number;
  episodesPerSeason: number;
  checked: Record<string, boolean>;
};

function cellKey(season: number, episode: number) {
  return `S${season}E${episode}`;
}

export default function EpisodeTrackerPage() {
  const [showName, setShowName] = useState("Breaking Bad");
  const [seasons, setSeasons] = useState(5);
  const [episodesPerSeason, setEpisodesPerSeason] = useState(13);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as TrackerState;
        setShowName(saved.showName);
        setSeasons(saved.seasons);
        setEpisodesPerSeason(saved.episodesPerSeason);
        setChecked(saved.checked ?? {});
      }
    } catch {
      /* ignore */
    }
  }, []);

  const persist = useCallback(
    (next: TrackerState) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    },
    [],
  );

  const toggle = (key: string) => {
    setChecked((prev) => {
      const nextChecked = { ...prev, [key]: !prev[key] };
      persist({ showName, seasons, episodesPerSeason, checked: nextChecked });
      return nextChecked;
    });
  };

  const saveConfig = () => {
    persist({ showName, seasons, episodesPerSeason, checked });
  };

  const grid = useMemo(() => {
    const rows: Array<{ season: number; episodes: number[] }> = [];
    for (let s = 1; s <= Math.min(seasons, 20); s++) {
      rows.push({
        season: s,
        episodes: Array.from({ length: Math.min(episodesPerSeason, 30) }, (_, i) => i + 1),
      });
    }
    return rows;
  }, [seasons, episodesPerSeason]);

  const totalCells = grid.reduce((sum, row) => sum + row.episodes.length, 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 md:px-8 md:py-16">
      <h1 className="text-4xl font-semibold text-white">Episode Tracker</h1>
      <p className="mt-3 text-[#c4c4c4]">
        Checklist grid for TV seasons — track which episodes you have downloaded. Saved in browser local storage.
      </p>
      <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#141414] p-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm text-[#c4c4c4]" htmlFor="show-name">
              Show name
            </label>
            <input
              id="show-name"
              value={showName}
              onChange={(e) => setShowName(e.target.value)}
              onBlur={saveConfig}
              className="w-full rounded-xl border border-white/20 bg-[#090909] px-4 py-3 text-white"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-[#c4c4c4]" htmlFor="seasons">
              Seasons
            </label>
            <input
              id="seasons"
              type="number"
              min={1}
              max={20}
              value={seasons}
              onChange={(e) => setSeasons(Number(e.target.value))}
              onBlur={saveConfig}
              className="w-full rounded-xl border border-white/20 bg-[#090909] px-4 py-3 text-white"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-[#c4c4c4]" htmlFor="episodes">
              Episodes per season
            </label>
            <input
              id="episodes"
              type="number"
              min={1}
              max={30}
              value={episodesPerSeason}
              onChange={(e) => setEpisodesPerSeason(Number(e.target.value))}
              onBlur={saveConfig}
              className="w-full rounded-xl border border-white/20 bg-[#090909] px-4 py-3 text-white"
            />
          </div>
        </div>
        <p className="mt-4 text-sm text-[#c4c4c4]">
          {showName}: {checkedCount} / {totalCells} episodes marked downloaded
        </p>
        <div className="mt-6 space-y-6">
          {grid.map((row) => (
            <div key={row.season}>
              <h2 className="mb-2 text-sm font-medium text-[#9a9a9a]">Season {row.season}</h2>
              <div className="flex flex-wrap gap-2">
                {row.episodes.map((ep) => {
                  const key = cellKey(row.season, ep);
                  const isChecked = checked[key];
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => toggle(key)}
                      className={`rounded-lg px-3 py-2 text-xs font-medium transition ${
                        isChecked
                          ? "bg-[#E50914] text-white"
                          : "border border-white/20 bg-[#090909] text-[#c4c4c4] hover:border-white/40"
                      }`}
                    >
                      E{String(ep).padStart(2, "0")}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
