import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/animations/Reveal";
import { StarSolid } from "@/components/ui/Icon";
import { testimonials } from "@/data/content";

function Stars() {
  return (
    <div className="mb-4 flex gap-[0.15rem]" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarSolid key={i} className="h-4 w-4 fill-warning" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section aria-labelledby="tst-title" className="section-y">
      <div className="container-x">
        <SectionHeader
          id="tst-title"
          eyebrow="Confían en nosotros"
          title="Negocios que ya funcionan mejor."
        />
        <div className="mt-12 grid grid-cols-1 gap-[1.1rem] sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              as="figure"
              key={t.name}
              delay={i * 0.08}
              className="flex flex-col rounded-card border border-line bg-white p-[1.8rem] shadow-ambient"
            >
              <Stars />
              <blockquote className="mb-6 text-[1.02rem] leading-[1.5] tracking-[-0.01em] text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-[0.8rem]">
                <span className="grid h-[2.6rem] w-[2.6rem] flex-none place-items-center rounded-full bg-gradient-to-br from-accent to-accent-deep text-[0.95rem] font-bold text-white">
                  {t.initials}
                </span>
                <div>
                  <b className="block text-[0.92rem]">{t.name}</b>
                  <span className="text-[0.82rem] text-ink-3">{t.role}</span>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
