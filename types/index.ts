export type IconName =
  | "auto" | "chart" | "shield" | "users" | "file" | "clock"
  | "star" | "arrow" | "chevron";

export interface NavLink { label: string; href: string; }
export interface Benefit { icon: IconName; title: string; text: string; }
export interface Service {
  variant?: "feature";
  eyebrow: string;
  title: string;
  text: string;
  tag?: string;
  flow?: string[];
}
export interface ProcessStep { num: string; title: string; text: string; }
export interface Result { num: string; label: string; }
export interface Testimonial { initials: string; quote: string; name: string; role: string; }
export interface Faq { q: string; a: string; }
export interface HeroFlowStep { icon: IconName; title: string; sub: string; }
export interface TrustStat { num: string; label: string; }
