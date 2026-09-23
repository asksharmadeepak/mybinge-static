import { AppStoreBadge } from "@/components/app-store-badge";
import { GooglePlayBadge } from "@/components/google-play-badge";

export function StoreBadgeRow({
  height = 48,
  placement,
  className = "",
}: {
  height?: number;
  placement: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <GooglePlayBadge height={height} placement={`${placement}_play`} />
      <AppStoreBadge height={height} placement={`${placement}_app_store`} />
    </div>
  );
}
