import { cn } from "@/utils/cn";

/** AutomWave logotype mark — an ink square with a mint automation wave. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg className={cn("h-[1.65rem] w-[1.65rem]", className)} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="#0a1613" />
      <path d="M6 20c3-8 6 4 10 0s7-8 10 0" stroke="#0ea47f" strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}
