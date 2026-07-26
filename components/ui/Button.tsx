import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";
import { cn } from "@/utils/cn";

type Variant = "primary" | "ghost" | "onDark";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** Show the nested trailing arrow. Defaults to true on primary/onDark. */
  icon?: boolean;
  className?: string;
}

const base =
  "group inline-flex items-center gap-3 rounded-full text-base font-semibold tracking-[-0.01em] " +
  "pl-6 pr-4 py-[0.85rem] border border-transparent will-change-transform " +
  "transition-[transform,box-shadow,background-color] duration-700 ease-smooth active:scale-[0.975] " +
  "focus-visible:outline-offset-2";

const styles: Record<Variant, string> = {
  primary: "bg-ink text-white shadow-soft hover:shadow-float",
  ghost: "bg-ink/[0.04] text-ink hover:bg-ink/[0.07] px-6",
  onDark: "bg-white text-ink shadow-soft hover:shadow-float",
};

const iconStyles: Record<Variant, string> = {
  primary: "bg-white/15 text-white",
  ghost: "bg-ink/5 text-ink",
  onDark: "bg-ink/[0.08] text-ink",
};

/** Reusable pill button with the nested "button-in-button" trailing icon. */
export function Button({ href, children, variant = "primary", icon, className }: ButtonProps) {
  const showIcon = icon ?? variant !== "ghost";
  const isExternal = /^(https?:|mailto:|tel:|#)/.test(href);

  const content = (
    <>
      {children}
      {showIcon && (
        <span
          className={cn(
            "grid h-8 w-8 flex-none place-items-center rounded-full transition-transform duration-500 ease-spring",
            "group-hover:translate-x-[3px] group-hover:-translate-y-[2px] group-hover:scale-105",
            iconStyles[variant]
          )}
          aria-hidden="true"
        >
          <Icon name="arrow" className="h-4 w-4" />
        </span>
      )}
    </>
  );

  const classes = cn(base, styles[variant], className);

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
