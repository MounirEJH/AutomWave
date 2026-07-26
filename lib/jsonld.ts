import { siteConfig } from "@/config/site";
import { faqs } from "@/data/content";

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description:
    "Agencia de diseño web y automatización de procesos para empresas y autónomos de Barcelona.",
  url: siteConfig.url,
  email: siteConfig.email,
  areaServed: { "@type": "City", name: siteConfig.city },
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.region,
    addressCountry: siteConfig.country,
  },
  priceRange: "€€",
  knowsAbout: [
    "Diseño web",
    "Automatización empresarial",
    "Inteligencia artificial",
    "SEO local Barcelona",
  ],
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
