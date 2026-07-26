"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/animations/Reveal";
import { Icon } from "@/components/ui/Icon";
import { faqs } from "@/data/content";
import { cn } from "@/utils/cn";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="border-b border-line">
      <button
        className="flex w-full items-center justify-between gap-4 py-[1.4rem] pr-[0.2rem] text-left text-[1.1rem] font-semibold tracking-[-0.02em] text-ink"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {q}
        <span className={cn("flex-none transition-transform duration-500 ease-smooth", open && "rotate-180")}>
          <Icon name="chevron" className="h-[1.4rem] w-[1.4rem] text-accent-text [stroke-width:1.8]" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="overflow-hidden"
            initial={reduce ? undefined : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          >
            <p className="max-w-[44rem] pb-[1.4rem] pr-[0.2rem] text-base text-ink-2">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section-y">
      <div className="container-x">
        <SectionHeader id="faq-title" eyebrow="Preguntas frecuentes" title="Lo que suelen preguntarnos." center />
        <Reveal className="mx-auto mt-12 max-w-[52rem]">
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
