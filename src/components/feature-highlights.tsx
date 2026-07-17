import {
  Folder,
  Clapperboard,
  CirclePlay,
  ChartColumn,
  Search,
  Heart,
  Settings,
} from "lucide-react";

const features = [
  { Icon: Folder, title: "Organize", subtitle: "Your Media", solid: true },
  { Icon: Clapperboard, title: "Beautiful", subtitle: "Library", solid: false },
  { Icon: CirclePlay, title: "Play", subtitle: "Offline", solid: false },
  { Icon: ChartColumn, title: "Track", subtitle: "Progress", solid: false },
  { Icon: Search, title: "Smart", subtitle: "Search", solid: false },
  { Icon: Heart, title: "Favorites", subtitle: "", solid: true },
  { Icon: Settings, title: "Customize", subtitle: "Your Way", solid: false },
];

export function FeatureHighlights() {
  return (
    <section className="border-y border-white/[0.06] bg-[#0c0c0c]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`flex flex-col items-center px-4 py-10 text-center ${
              index < features.length - 1 ? "sm:border-r sm:border-white/[0.06]" : ""
            }`}
          >
            <feature.Icon
              className="h-8 w-8 text-white/55"
              strokeWidth={feature.solid ? 0 : 1.75}
              fill={feature.solid ? "currentColor" : "none"}
              aria-hidden
            />
            <p className="mt-4 text-sm font-semibold text-white">{feature.title}</p>
            {feature.subtitle ? (
              <p className="mt-0.5 text-sm text-[#9a9a9a]">{feature.subtitle}</p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
