"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type MotionTag = "div" | "article" | "figure" | "section" | "p" | "h1" | "ul" | "li" | "span";

const TAGS: Record<MotionTag, React.ElementType> = {
  div: motion.div,
  article: motion.article,
  figure: motion.figure,
  section: motion.section,
  p: motion.p,
  h1: motion.h1,
  ul: motion.ul,
  li: motion.li,
  span: motion.span,
};

interface RevealProps {
  children: ReactNode;
  as?: MotionTag;
  /** Delay in seconds (used to stagger items in a group). */
  delay?: number;
  className?: string;
  id?: string;
}

/**
 * Scroll-reveal wrapper (Framer Motion). Fades up with a soft blur once, when
 * the element enters the viewport. Fully skips animation under
 * prefers-reduced-motion, rendering the plain element instead.
 */
export function Reveal({ children, as = "div", delay = 0, className, id }: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = TAGS[as];

  if (reduce) {
    return (
      <Tag className={className} id={id}>
        {children}
      </Tag>
    );
  }

  const variants: Variants = {
    hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1], delay },
    },
  };

  return (
    <Tag
      id={id}
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </Tag>
  );
}
