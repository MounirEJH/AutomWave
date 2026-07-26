import { BrandMark } from "@/components/ui/BrandMark";
import { siteConfig } from "@/config/site";

const columns = [
  {
    title: "Servicios",
    links: [
      { label: "Diseño web", href: "#servicios" },
      { label: "Automatización", href: "#servicios" },
      { label: "Inteligencia artificial", href: "#servicios" },
      { label: "SEO local", href: "#servicios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Cómo trabajamos", href: "#proceso" },
      { label: "Resultados", href: "#resultados" },
      { label: "Preguntas", href: "#faq" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
      { label: "WhatsApp", href: siteConfig.whatsapp },
      { label: "Barcelona, España", href: "#top" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface-soft pb-8 pt-[clamp(3rem,6vw,4.5rem)]">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="mb-4 flex items-center gap-[0.6rem] text-[1.08rem] font-bold tracking-[-0.03em]">
              <BrandMark />
              AutomWave
            </a>
            <p className="max-w-[26ch] text-[0.9rem] text-ink-3">
              Diseño web y automatización para negocios de Barcelona que quieren crecer sin complicarse.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 font-mono text-[0.74rem] font-bold uppercase tracking-[0.14em] text-ink-3">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-[0.6rem]">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[0.92rem] text-ink-2 transition-colors duration-300 ease-smooth hover:text-accent-text">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <span className="text-[0.9rem] text-ink-3">© {new Date().getFullYear()} AutomWave · Barcelona</span>
          <span className="text-[0.9rem] text-ink-3">Aviso legal · Privacidad · Cookies</span>
        </div>
      </div>
    </footer>
  );
}
