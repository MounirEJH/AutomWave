import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/animations/Reveal";
import { results } from "@/data/content";

export function Results() {
  return (
    <section id="resultados" aria-labelledby="res-title" className="section-y">
      <div className="container-x">
        <SectionHeader
          id="res-title"
          eyebrow="Resultados"
          title="Lo que cambia cuando tu negocio se digitaliza bien."
        />
        <div className="mt-12 grid grid-cols-1 gap-[1.1rem] sm:grid-cols-2 lg:grid-cols-4">
          {results.map((r, i) => (
            <Reveal
              key={r.label}
              delay={i * 0.08}
              className="rounded-card border border-line bg-white p-[1.8rem_1.6rem] shadow-ambient"
            >
              <div className="text-gradient text-[clamp(2.4rem,5vw,3.2rem)] font-bold leading-none tracking-[-0.04em]">
                {r.num}
              </div>
              <p className="mt-[0.7rem] text-[0.95rem] text-ink-2">{r.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
