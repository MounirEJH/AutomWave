"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { heroFlow } from "@/data/content";
import { siteConfig } from "@/config/site";
import { cn } from "@/utils/cn";

/** The hero "mockup": an automation flow whose steps light up in sequence. */
export function FlowCard() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(heroFlow.length - 1);
      return;
    }
    const id = setInterval(() => setActive((i) => (i + 1) % heroFlow.length), 1400);
    return () => clearInterval(id);
  }, []);

  const host = new URL(siteConfig.url).host.split(".")[0];

  return (
    <div className="relative mx-auto max-w-[26rem] lg:mx-0 lg:max-w-none">
      {/* Outer glass shell */}
      <div className="rounded-shell border border-white/70 bg-white/55 p-[0.6rem] shadow-glow backdrop-blur-[14px]">
        {/* Inner core */}
        <div className="rounded-[calc(2.25rem_-_0.6rem)] border border-line bg-gradient-to-b from-white to-[#fbfefc] p-[1.5rem_1.4rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
          <div className="mb-[1.4rem] flex items-center justify-between">
            <span className="font-mono text-[0.82rem] tracking-[0.04em] text-ink-3">
              tu-negocio.{host}
            </span>
            <Badge className="border-transparent bg-surface-tint">En marcha</Badge>
          </div>

          <div className="relative flex flex-col gap-[0.55rem] pl-[1.6rem]">
            {/* Connecting line + pulse */}
            <span className="absolute bottom-4 left-[0.62rem] top-4 w-[2px] overflow-hidden rounded bg-line-strong">
              <span className="absolute inset-x-0 h-[30%] animate-flowpulse bg-gradient-to-b from-transparent via-accent to-transparent" />
            </span>

            {heroFlow.map((s, i) => {
              const lit = i <= active;
              return (
                <div
                  key={s.title}
                  className={cn(
                    "relative flex items-center gap-[0.8rem] rounded-soft border p-[0.7rem_0.9rem] transition-colors duration-500 ease-smooth",
                    lit ? "border-line bg-white" : "border-transparent bg-surface-soft"
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-[-1.6rem] top-1/2 h-[0.85rem] w-[0.85rem] -translate-y-1/2 rounded-full border-2 transition-colors duration-500 ease-smooth",
                      lit
                        ? "border-accent bg-accent shadow-[0_0_0_4px_rgba(14,164,127,0.22)]"
                        : "border-line-strong bg-white"
                    )}
                  />
                  <span
                    className={cn(
                      "grid h-[1.9rem] w-[1.9rem] flex-none place-items-center rounded-[0.6rem] border transition-colors duration-500 ease-smooth",
                      lit ? "border-transparent bg-surface-tint" : "border-line bg-white"
                    )}
                  >
                    <Icon name={s.icon} className="h-[1.05rem] w-[1.05rem] text-accent-deep" />
                  </span>
                  <div>
                    <b className="block text-[0.95rem] font-semibold">{s.title}</b>
                    <span className="text-[0.8rem] text-ink-3">{s.sub}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-[1.3rem] flex items-center gap-[0.6rem] text-[0.82rem] text-ink-2">
            <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_0_4px_rgba(14,164,127,0.22)]" />
            Todo esto ocurre solo, día y noche.
          </div>
        </div>
      </div>

      {/* Floating micro-stats */}
      <div className="absolute -right-2 -top-4 animate-floaty rounded-soft border border-white/70 bg-white/80 px-4 py-[0.7rem] shadow-soft backdrop-blur-[10px]" aria-hidden="true">
        <div className="text-[1.05rem] font-bold text-accent-text">+38%</div>
        <div className="font-mono text-[0.72rem] text-ink-3">más reservas</div>
      </div>
      <div className="absolute bottom-6 -left-6 animate-floaty-slow rounded-soft border border-white/70 bg-white/80 px-4 py-[0.7rem] shadow-soft backdrop-blur-[10px] max-sm:left-2" aria-hidden="true">
        <div className="text-[1.05rem] font-bold">0</div>
        <div className="font-mono text-[0.72rem] text-ink-3">clientes perdidos</div>
      </div>
    </div>
  );
}
