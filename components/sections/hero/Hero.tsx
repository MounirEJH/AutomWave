import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";
import { WaveCanvas } from "./WaveCanvas";
import { FlowCard } from "./FlowCard";
import { hero, trustStats } from "@/data/content";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-[clamp(3rem,6vw,5rem)] pt-[clamp(8rem,16vh,11rem)]"
    >
      <WaveCanvas className="absolute inset-0 z-0 h-full w-full opacity-90" />

      <div className="container-x">
        <div className="grid items-center gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div className="max-w-[36rem]">
            <Reveal delay={0}>
              <Badge className="mb-[1.6rem]">{hero.badge}</Badge>
            </Reveal>

            <Reveal
              as="h1"
              id="hero-title"
              delay={0.08}
              className="mb-[1.4rem] text-[clamp(2.7rem,6.4vw,5rem)] font-bold tracking-[-0.045em]"
            >
              {hero.titleLead}
              <span className="text-gradient">{hero.titleAccent}</span>
              {hero.titleTail}
            </Reveal>

            <Reveal as="p" delay={0.16} className="text-[clamp(1.06rem,1.6vw,1.24rem)] font-normal leading-[1.55] text-ink-2">
              {hero.lead}
            </Reveal>

            <Reveal delay={0.24} className="mt-[2.2rem] flex flex-wrap gap-[0.8rem]">
              <Button href="#contacto">{hero.ctaPrimary}</Button>
              <Button href="#servicios" variant="ghost">{hero.ctaSecondary}</Button>
            </Reveal>

            <Reveal delay={0.32} className="mt-[2.6rem] flex flex-wrap items-center gap-6 border-t border-line pt-[1.6rem]">
              {trustStats.map((t) => (
                <div key={t.label} className="flex flex-col gap-[0.1rem]">
                  <span className="text-2xl font-bold tracking-[-0.03em]">{t.num}</span>
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-3">{t.label}</span>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Mockup */}
          <Reveal delay={0.16}>
            <FlowCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
