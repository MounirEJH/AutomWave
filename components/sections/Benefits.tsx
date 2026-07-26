import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/animations/Reveal";
import { Icon } from "@/components/ui/Icon";
import { benefits } from "@/data/content";

export function Benefits() {
  return (
    <section aria-labelledby="ben-title" className="section-y">
      <div className="container-x">
        <SectionHeader
          id="ben-title"
          eyebrow="Por qué AutomWave"
          title="Menos tareas. Más clientes. Mejor imagen."
          lead="No vendemos tecnología. Vendemos tiempo libre, tranquilidad y crecimiento para tu negocio."
        />
        <div className="mt-12 grid grid-cols-1 gap-[1.1rem] md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal
              as="article"
              key={b.title}
              delay={i * 0.08}
              className="rounded-card border border-line bg-white p-[1.8rem] shadow-ambient transition-[transform,box-shadow,border-color] duration-700 ease-smooth hover:-translate-y-1 hover:border-line-strong hover:shadow-soft"
            >
              <div className="mb-[1.2rem] grid h-12 w-12 place-items-center rounded-[0.9rem] bg-surface-tint">
                <Icon name={b.icon} className="h-[1.4rem] w-[1.4rem] text-accent-deep [stroke-width:1.5]" />
              </div>
              <h3 className="mb-2 text-[1.28rem] font-semibold tracking-[-0.02em]">{b.title}</h3>
              <p className="text-[0.96rem] text-ink-2">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
