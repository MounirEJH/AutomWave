"use client";

import { useEffect, useRef } from "react";

interface Wave { amp: number; len: number; speed: number; y: number; col: string; lw: number; }

/** Signature "wave of automation": drifting sine waves + travelling pulses. */
export function WaveCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0, t = 0, raf = 0;
    const waves: Wave[] = [
      { amp: 26, len: 0.010, speed: 0.020, y: 0.42, col: "rgba(14,164,127,0.30)", lw: 2 },
      { amp: 34, len: 0.008, speed: 0.014, y: 0.55, col: "rgba(127,217,193,0.28)", lw: 2 },
      { amp: 20, len: 0.013, speed: 0.026, y: 0.66, col: "rgba(6,80,63,0.14)", lw: 1.5 },
    ];
    let particles: { x: number; wave: number; r: number; sp: number }[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const initParticles = () => {
      particles = [];
      const n = Math.max(6, Math.floor(w / 160));
      for (let i = 0; i < n; i++) {
        particles.push({
          x: Math.random() * w,
          wave: Math.floor(Math.random() * waves.length),
          r: Math.random() * 1.6 + 1,
          sp: Math.random() * 0.4 + 0.3,
        });
      }
    };
    const yAt = (wv: Wave, x: number) =>
      h * wv.y +
      Math.sin(x * wv.len + t * wv.speed * 10) * wv.amp +
      Math.sin(x * wv.len * 0.5 + t * wv.speed * 6) * (wv.amp * 0.35);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const wv of waves) {
        ctx.beginPath();
        ctx.lineWidth = wv.lw;
        ctx.strokeStyle = wv.col;
        for (let x = 0; x <= w; x += 6) {
          const y = yAt(wv, x);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      for (const pt of particles) {
        const wv = waves[pt.wave];
        pt.x += pt.sp;
        if (pt.x > w + 10) pt.x = -10;
        const py = yAt(wv, pt.x);
        ctx.beginPath();
        ctx.fillStyle = "rgba(14,164,127,0.55)";
        ctx.arc(pt.x, py, pt.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "rgba(14,164,127,0.12)";
        ctx.arc(pt.x, py, pt.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      t += 0.016;
      raf = requestAnimationFrame(draw);
    };

    const start = () => {
      resize();
      initParticles();
      if (!raf) raf = requestAnimationFrame(draw);
    };
    const stop = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };
    const onResize = () => {
      resize();
      initParticles();
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    start();

    return () => {
      stop();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
