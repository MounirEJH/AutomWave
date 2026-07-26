import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/animations/Reveal";
import { processSteps } from "@/data/content";
import { cn } from "@/utils/cn";

export function Process() {
  return (
    <section id="proceso" aria-labelledby="proc-title" className="section-y border-y border-line bg-surface-soft">
      <div className="container-x">
        <SectionHeader
          id="proc-title"
          eyebrow="Cómo trabajamos"
          title="Sencillo para ti de principio a fin."
          lead="Nos ocupamos de todo. Tú solo apruebas y ves cómo tu negocio empieza a funcionar mejor."
        />
        <div className="mt-12 grid grid-cols-1 gap-[1.1rem] sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08} className="relative pt-[2.4rem]">
              <span
                className={cn(
                  "absolute left-0 top-0 font-mono text-[0.8rem] font-bold tracking-[0.1em] text-accent-text",
                  i < processSteps.length - 1 &&
                    "after:absolute after:left-[2.6rem] after:top-[0.55rem] after:hidden after:h-px after:w-[calc(100%_+_0.8rem)] after:bg-line-strong lg:after:block"
                )}
              >
                {s.num}
              </span>
              <h3 className="mb-2 text-[1.12rem] font-semibold">{s.title}</h3>
              <p className="text-[0.94rem] text-ink-2">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
