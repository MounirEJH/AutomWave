import type { Config } from "tailwindcss";

/**
 * Design tokens live here — single source of truth for colour, type, shadow,
 * radius and motion. Every component consumes these utilities.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0a1613", 2: "#38534b", 3: "#5c726b" },
        accent: {
          DEFAULT: "#0ea47f",
          text: "#0b7a5f",
          deep: "#06503f",
          soft: "#7fd9c1",
        },
        surface: { DEFAULT: "#ffffff", soft: "#f4f8f6", tint: "#eaf4ef" },
        line: { DEFAULT: "rgba(10,22,19,0.08)", strong: "rgba(10,22,19,0.12)" },
        success: "#0ea47f",
        error: "#e5484d",
        warning: "#e0a82e",
      },
      fontFamily: {
        sans: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        shell: "2.25rem",
        card: "1.75rem",
        soft: "1.15rem",
      },
      boxShadow: {
        ambient: "0 1px 2px rgba(10,22,19,.04), 0 2px 8px rgba(10,22,19,.04)",
        soft: "0 4px 24px -8px rgba(10,22,19,.10), 0 12px 48px -18px rgba(6,80,63,.14)",
        float: "0 30px 80px -28px rgba(6,80,63,.22), 0 8px 24px -12px rgba(10,22,19,.10)",
        glow: "0 0 0 1px rgba(14,164,127,.14), 0 24px 70px -24px rgba(14,164,127,.22)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(.32,.72,0,1)",
        spring: "cubic-bezier(.34,1.3,.5,1)",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        flowpulse: {
          "0%": { top: "-30%" },
          "100%": { top: "100%" },
        },
      },
      animation: {
        floaty: "floaty 6s cubic-bezier(.32,.72,0,1) infinite",
        "floaty-slow": "floaty 7s cubic-bezier(.32,.72,0,1) infinite reverse",
        flowpulse: "flowpulse 3.2s cubic-bezier(.32,.72,0,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
