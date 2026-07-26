import { Reveal } from "@/components/animations/Reveal";
import { Eyebrow } from "./Eyebrow";
import { cn } from "@/utils/cn";

interface SectionHeaderProps {
  id?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  center?: boolean;
}

/** Reusable section heading (eyebrow + h2 + optional lead). */
export function SectionHeader({ id, eyebrow, title, lead, center = false }: SectionHeaderProps) {
  return (
    <Reveal className={cn("max-w-[44rem]", center && "mx-auto text-center")}>
      <Eyebrow className="mb-[1.1rem] inline-block">{eyebrow}</Eyebrow>
      <h2 id={id} className="text-[clamp(2rem,4vw,3.1rem)]">
        {title}
      </h2>
      {lead && (
        <p className="mt-[1.1rem] text-[clamp(1.06rem,1.6vw,1.24rem)] font-normal leading-[1.55] text-ink-2">
          {lead}
        </p>
      )}
    </Reveal>
  );
}
