import { sectors } from "@/constants/navigation";

export function SectorsStrip() {
  return (
    <section aria-label="Sectores con los que trabajamos" className="border-y border-line bg-surface-soft">
      <div className="container-x flex flex-wrap items-center justify-between gap-6 py-[2.2rem]">
        <span className="whitespace-nowrap text-[0.9rem] text-ink-3">
          Trabajamos con negocios como el tuyo
        </span>
        <div className="flex flex-wrap gap-[0.6rem]">
          {sectors.map((s) => (
            <span key={s} className="rounded-full border border-line bg-white px-[0.9rem] py-[0.4rem] text-[0.86rem] font-medium text-ink-2">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
