import { Reveal } from "@/components/animations/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "./ContactForm";
import { ctaFinal } from "@/data/content";
import { siteConfig } from "@/config/site";

export function CtaFinal() {
  return (
    <section id="contacto" aria-labelledby="cta-title" className="section-y">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-shell bg-gradient-to-br from-ink via-[#0f2a22] to-[#123a2e] p-[clamp(2.5rem,6vw,4.5rem)_clamp(1.5rem,5vw,4rem)] text-white shadow-float">
          {/* glow */}
          <div className="pointer-events-none absolute -right-[10%] -top-[30%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(14,164,127,0.35),transparent_60%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            {/* Copy */}
            <div>
              <Eyebrow className="!text-accent-soft">{ctaFinal.eyebrow}</Eyebrow>
              <h2 id="cta-title" className="my-[1.1rem] max-w-[20ch] text-[clamp(2rem,4vw,3.1rem)] text-white">
                {ctaFinal.title}
              </h2>
              <p className="max-w-[44ch] text-[1.1rem] text-white/75">{ctaFinal.text}</p>
              <p className="mt-6 text-[0.95rem] text-white/60">
                ¿Prefieres escribir directamente?{" "}
                <a href={siteConfig.whatsapp} className="font-semibold text-accent-soft underline-offset-4 hover:underline">
                  WhatsApp
                </a>{" "}
                ·{" "}
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-accent-soft underline-offset-4 hover:underline">
                  {siteConfig.email}
                </a>
              </p>
            </div>

            {/* Form */}
            <div className="rounded-card border border-white/10 bg-white/[0.04] p-[clamp(1.25rem,3vw,2rem)]">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
