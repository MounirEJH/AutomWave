import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/animations/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { services } from "@/data/content";
import { cn } from "@/utils/cn";

/** Bento position classes by index (kept out of the content layer). */
const layout = [
  "md:col-span-4 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-3",
  "md:col-span-3",
];

export function Services() {
  return (
    <section id="servicios" aria-labelledby="serv-title" className="section-y">
      <div className="container-x">
        <SectionHeader
          id="serv-title"
          eyebrow="Qué hacemos"
          title="Todo lo que tu negocio necesita para vender online."
          lead="Diseño, automatización e inteligencia artificial trabajando juntos, sin que tú tengas que entender nada por dentro."
        />

        <div className="mt-12 grid auto-rows-[minmax(11rem,auto)] grid-cols-1 gap-[1.1rem] md:grid-cols-6">
          {services.map((s, i) => {
            const feature = s.variant === "feature";
            return (
              <Reveal
                as="article"
                key={s.title}
                delay={(i % 3) * 0.08 + 0.05}
                className={cn(
                  "relative flex flex-col overflow-hidden rounded-card border p-[1.8rem] shadow-ambient transition-[transform,box-shadow,border-color] duration-700 ease-smooth hover:-translate-y-1 hover:shadow-soft",
                  feature
                    ? "border-transparent bg-gradient-to-br from-ink to-[#0f2620] text-white"
                    : "border-line bg-white hover:border-line-strong",
                  layout[i]
                )}
              >
                <Eyebrow className={cn("mb-[0.9rem]", feature && "!text-accent-soft")}>
                  {s.eyebrow}
                </Eyebrow>
                <h3 className={cn("mb-2 text-[1.28rem] font-semibold tracking-[-0.02em]", feature && "text-white")}>
                  {s.title}
                </h3>
                <p className={cn("text-[0.95rem]", feature ? "text-white/70" : "text-ink-2")}>
                  {s.text}
                </p>

                {s.flow && (
                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-[1.4rem]">
                    {s.flow.map((step, j) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="flex items-center gap-[0.4rem] rounded-full border border-white/15 bg-white/[0.08] px-[0.7rem] py-[0.4rem] text-[0.78rem] text-white">
                          <span className="h-[0.4rem] w-[0.4rem] rounded-full bg-accent-soft" />
                          {step}
                        </span>
                        {j < s.flow!.length - 1 && <span className="text-[0.9rem] text-white/40">→</span>}
                      </div>
                    ))}
                  </div>
                )}

                {s.tag && (
                  <div className="mt-4 font-mono text-[0.74rem] tracking-[0.02em] text-ink-3">{s.tag}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
