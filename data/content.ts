import type {
  Benefit, Service, ProcessStep, Result, Testimonial, Faq,
  HeroFlowStep, TrustStat,
} from "@/types";

export const hero = {
  badge: "Agencia digital · Barcelona",
  titleLead: "Tu negocio, funcionando ",
  titleAccent: "solo",
  titleTail: " mientras tú creces.",
  lead:
    "Creamos webs que consiguen clientes y automatizamos las tareas repetitivas que te roban horas cada semana. Tú te dedicas a lo tuyo. Del resto nos encargamos nosotros.",
  ctaPrimary: "Quiero mi propuesta gratis",
  ctaSecondary: "Ver lo que hacemos",
};

export const trustStats: TrustStat[] = [
  { num: "2–4", label: "semanas online" },
  { num: "+12 h", label: "ahorradas / semana" },
  { num: "100%", label: "hecho a medida" },
];

export const heroFlow: HeroFlowStep[] = [
  { icon: "users", title: "Llega un cliente nuevo", sub: "desde tu web o WhatsApp" },
  { icon: "file", title: "Se envía el presupuesto", sub: "al instante y sin escribirlo" },
  { icon: "clock", title: "Recordatorio de la cita", sub: "para que nadie falte" },
  { icon: "star", title: "Pide una reseña", sub: "y mejora tu reputación" },
];

export const benefits: Benefit[] = [
  { icon: "auto", title: "Ganas horas cada semana", text: "Las tareas que haces una y otra vez pasan a hacerse solas. Recuperas tiempo para lo que de verdad importa." },
  { icon: "chart", title: "Consigues más clientes", text: "Una web clara y rápida que aparece en Google y convierte visitas en llamadas, reservas y presupuestos." },
  { icon: "shield", title: "Das una imagen de confianza", text: "Cuando tu negocio se ve profesional online, los clientes lo notan y eligen antes a ti que a la competencia." },
];

export const services: Service[] = [
  { variant: "feature", eyebrow: "Diseño web", title: "Webs que trabajan para ti", text: "Páginas rápidas, bonitas y pensadas para convertir visitas en clientes. Adaptadas al móvil y preparadas para aparecer en Google.", flow: ["Visita", "Interés", "Contacto", "Cliente"] },
  { eyebrow: "Automatización", title: "Que tu negocio no pare", text: "Respuestas, presupuestos y recordatorios que se envían solos.", tag: "// 24 h al día, 7 días" },
  { eyebrow: "Inteligencia artificial", title: "Un asistente que atiende por ti", text: "Responde dudas y organiza mensajes al momento, incluso cuando estás cerrado." },
  { eyebrow: "Herramientas conectadas", title: "Que todo hable entre sí", text: "Tu agenda, tu correo y tus clientes, trabajando juntos sin que tú copies y pegues nada." },
  { eyebrow: "Posicionamiento local", title: "Que te encuentren en Barcelona", text: "Aparecer cuando alguien busca lo que ofreces, cerca de ti, justo cuando lo necesita." },
];

export const processSteps: ProcessStep[] = [
  { num: "01", title: "Te escuchamos", text: "Una charla para entender tu negocio, qué te quita tiempo y qué quieres conseguir." },
  { num: "02", title: "Diseñamos el plan", text: "Te presentamos una propuesta clara, con precio cerrado y sin sorpresas." },
  { num: "03", title: "Lo construimos", text: "Creamos tu web y ponemos en marcha las automatizaciones, mostrándote los avances." },
  { num: "04", title: "Crecemos contigo", text: "Lo dejamos funcionando y seguimos a tu lado para mejorar y estar siempre al día." },
];

export const results: Result[] = [
  { num: "+38%", label: "más reservas y contactos desde la web" },
  { num: "12 h", label: "de tareas repetitivas ahorradas cada semana" },
  { num: "2–4", label: "semanas para tener tu proyecto online" },
  { num: "24/7", label: "tu negocio atendiendo, también fuera de horario" },
];

export const testimonials: Testimonial[] = [
  { initials: "MR", quote: "Antes perdía reservas por no contestar a tiempo. Ahora se gestiona todo solo y he notado la diferencia desde el primer mes.", name: "Marta Ruiz", role: "Restaurante · Gràcia" },
  { initials: "JS", quote: "La web quedó preciosa y por fin aparecemos en Google. Nos llegan pacientes nuevos que antes ni sabían que existíamos.", name: "Jordi Serra", role: "Clínica dental · Eixample" },
  { initials: "LC", quote: "Nos explicaron todo con palabras que entendemos. Cero tecnicismos y muchos resultados. Da gusto trabajar así.", name: "Laura Camps", role: "Reformas · Sant Andreu" },
];

export const faqs: Faq[] = [
  { q: "¿Cuánto tarda en estar lista mi web?", a: "La mayoría de proyectos están online entre 2 y 4 semanas. Depende del tamaño, pero desde el primer día trabajamos con avances que puedes ver y comentar." },
  { q: "¿Qué es la automatización y para qué me sirve?", a: "Es hacer que las tareas repetitivas de tu negocio ocurran solas: responder mensajes, enviar presupuestos, recordar citas o pedir reseñas. Ahorras horas cada semana y no se te escapa ningún cliente." },
  { q: "¿Trabajáis solo con empresas de Barcelona?", a: "Somos de Barcelona y conocemos el mercado local, pero trabajamos con negocios de toda España. Todo se puede hacer en remoto y con la misma cercanía." },
  { q: "¿Y si no entiendo nada de tecnología?", a: "Perfecto, no hace falta. Nosotros nos encargamos de la parte técnica y te lo explicamos siempre en palabras claras. Tú solo notas los resultados." },
];

export const ctaFinal = {
  eyebrow: "Empecemos",
  title: "Cuéntanos tu negocio. Te decimos cómo mejorarlo.",
  text: "Una llamada corta, sin compromiso. Salimos con una propuesta clara de qué haríamos y qué conseguirías. Gratis.",
  primary: "Pedir mi propuesta gratis",
  secondary: "Escribir por WhatsApp",
};
