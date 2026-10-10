import { MediaCoverCard } from "@/components/media-cover-card";
import { cn } from "@/lib/utils";

export function MediaCoverGrid({
  items,
  getSubtitle,
  className,
  priorityFirst = false,
}: {
  items: { title: string; cover: string; author?: string }[];
  getSubtitle?: (item: { title: string; cover: string; author?: string }) => string | undefined;
  className?: string;
  priorityFirst?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6",
        className,
      )}
    >
      {items.map((item, index) => (
        <MediaCoverCard
          key={item.title}
          title={item.title}
          subtitle={getSubtitle?.(item) ?? item.author}
          cover={item.cover}
          priority={priorityFirst && index === 0}
        />
      ))}
    </div>
  );
}
