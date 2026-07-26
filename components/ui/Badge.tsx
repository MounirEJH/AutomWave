import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  /** Dot colour utility, e.g. "bg-success". Defaults to accent. */
  dotClassName?: string;
}

export function Badge({ children, className, dotClassName }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-surface-soft px-[0.85rem] py-[0.4rem] text-[0.82rem] text-ink-2",
        className
      )}
    >
      <span
        className={cn(
          "h-2 w-2 flex-none rounded-full shadow-[0_0_0_4px_rgba(14,164,127,0.22)]",
          dotClassName ?? "bg-accent"
        )}
      />
      {children}
    </span>
  );
}
