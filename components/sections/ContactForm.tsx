"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/utils/cn";

type Status = "idle" | "sending" | "success" | "error";

const inputBase =
  "w-full rounded-soft border border-white/15 bg-white/[0.06] px-4 py-3 text-[0.95rem] text-white " +
  "placeholder:text-white/40 outline-none transition-colors duration-300 ease-smooth " +
  "focus:border-accent-soft focus:bg-white/[0.09]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.error ?? "No se pudo enviar el mensaje.");
      }
    } catch {
      setStatus("error");
      setError("No se pudo conectar. Revisa tu conexión e inténtalo de nuevo.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-start gap-3 rounded-card border border-white/15 bg-white/[0.06] p-6 text-white"
        role="status"
        aria-live="polite"
      >
        <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-ink">
          <Icon name="shield" className="h-5 w-5" />
        </span>
        <p className="text-[1.05rem] font-semibold">¡Mensaje enviado!</p>
        <p className="text-[0.95rem] text-white/70">
          Gracias por escribirnos. Te responderemos muy pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-[0.35rem] block text-[0.82rem] text-white/70">Nombre</span>
          <input name="name" type="text" required autoComplete="name" placeholder="Tu nombre" className={inputBase} />
        </label>
        <label className="block">
          <span className="mb-[0.35rem] block text-[0.82rem] text-white/70">Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="tu@correo.com" className={inputBase} />
        </label>
      </div>
      <label className="block">
        <span className="mb-[0.35rem] block text-[0.82rem] text-white/70">¿Qué necesitas?</span>
        <textarea name="message" required rows={4} placeholder="Cuéntanos brevemente tu negocio y qué te gustaría conseguir." className={cn(inputBase, "resize-y")} />
      </label>

      {status === "error" && (
        <p className="text-[0.88rem] text-[#ffb4b4]" role="alert" aria-live="assertive">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className={cn(
          "group mt-1 inline-flex items-center justify-center gap-3 self-start rounded-full bg-white px-6 py-[0.85rem] text-base font-semibold text-ink",
          "shadow-soft transition-[transform,box-shadow,opacity] duration-700 ease-smooth hover:shadow-float active:scale-[0.975]",
          "disabled:cursor-not-allowed disabled:opacity-70"
        )}
      >
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
        <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-ink/[0.08] transition-transform duration-500 ease-spring group-hover:translate-x-[3px] group-hover:-translate-y-[2px] group-hover:scale-105">
          <Icon name="arrow" className="h-4 w-4 text-ink" />
        </span>
      </button>
    </form>
  );
}
