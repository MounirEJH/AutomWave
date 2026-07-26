"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BrandMark } from "@/components/ui/BrandMark";
import { navLinks } from "@/constants/navigation";
import { useScrolled } from "@/hooks/useScrolled";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { cn } from "@/utils/cn";

export function Nav() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  useLockBodyScroll(open);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[100] flex justify-center pt-[clamp(0.8rem,2vw,1.4rem)]">
      <nav
        aria-label="Principal"
        className={cn(
          "pointer-events-auto flex items-center gap-8 rounded-full border border-white/60 py-[0.55rem] pl-6 pr-[0.65rem]",
          "bg-white/70 backdrop-blur-[18px] backdrop-saturate-150 transition-[box-shadow,background-color] duration-700 ease-smooth",
          scrolled ? "bg-white/85 shadow-float" : "shadow-soft"
        )}
      >
        <a href="#top" className="flex items-center gap-[0.6rem] text-[1.08rem] font-bold tracking-[-0.03em]" aria-label="AutomWave inicio">
          <BrandMark />
          AutomWave
        </a>

        <div className="hidden items-center gap-[0.35rem] md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-[0.8rem] py-2 text-[0.92rem] font-medium text-ink-2 transition-colors duration-300 ease-smooth hover:bg-ink/5 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="#contacto" className="py-[0.6rem] pl-[1.1rem] pr-3 text-[0.92rem]">
            Hablemos
          </Button>
        </div>

        <button
          className="relative h-[2.6rem] w-[2.6rem] md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn("absolute left-[0.7rem] right-[0.7rem] h-[2px] rounded bg-ink transition-all duration-500 ease-smooth", open ? "top-[1.35rem] rotate-45" : "top-4")} />
          <span className={cn("absolute left-[0.7rem] right-[0.7rem] top-[1.35rem] h-[2px] rounded bg-ink transition-opacity duration-300", open && "opacity-0")} />
          <span className={cn("absolute left-[0.7rem] right-[0.7rem] h-[2px] rounded bg-ink transition-all duration-500 ease-smooth", open ? "top-[1.35rem] -rotate-45" : "top-[1.7rem]")} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="pointer-events-auto fixed inset-0 z-[99] flex flex-col justify-center gap-1 bg-white/90 px-[clamp(1.25rem,5vw,2rem)] py-8 backdrop-blur-[30px] md:hidden"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          >
            {navLinks.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-[0.6rem] text-[2rem] font-semibold tracking-[-0.03em]"
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.06 * (i + 1), ease: [0.32, 0.72, 0, 1] }}
              >
                {l.label}
              </motion.a>
            ))}
            <div className="mt-6">
              <Button href="#contacto" className="!inline-flex" >
                Hablemos
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
