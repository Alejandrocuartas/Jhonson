"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Respaldo para navegadores sin Clipboard API
      const ta = document.createElement("textarea");
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-12 items-center gap-3 border border-ink/25 px-5 text-sm font-medium transition-colors duration-300 hover:border-ink"
    >
      {copied ? <Check aria-hidden className="size-4" strokeWidth={1.5} /> : <Copy aria-hidden className="size-4" strokeWidth={1.5} />}
      <span>{copied ? "Correo copiado" : "Copiar correo"}</span>
      <span className="sr-only" aria-live="polite">{copied ? "El correo se copió al portapapeles" : ""}</span>
    </button>
  );
}
