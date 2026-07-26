import { Hero } from "@/components/sections/hero/Hero";
import { SectorsStrip } from "@/components/sections/SectorsStrip";
import { Benefits } from "@/components/sections/Benefits";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Results } from "@/components/sections/Results";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <SectorsStrip />
      <Benefits />
      <Services />
      <Process />
      <Results />
      <Testimonials />
      <Faq />
      <CtaFinal />
    </main>
  );
}
