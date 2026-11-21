import { ArrowUpRight } from "lucide-react";
import { contact, profile } from "@/content/site";
import { CopyEmailButton } from "./copy-email-button";
import { Reveal } from "./reveal";

export function ContactSection() {
  const channels = [
    { label: "Correo", value: contact.email, href: `mailto:${contact.email}` },
    { label: "Teléfono / WhatsApp", value: contact.phone, href: contact.whatsapp, external: true },
    ...(contact.linkedin ? [{ label: "LinkedIn", value: "Perfil profesional", href: contact.linkedin, external: true }] : []),
    { label: "Ubicación", value: `${profile.location.city}, ${profile.location.country}` },
  ];

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="overflow-hidden pb-16 pt-section">
      <div className="shell">
        <div className="grid-12 border-t border-line pt-5">
          <p className="eyebrow col-span-2 text-muted lg:col-span-3">05</p>
          <p className="eyebrow col-span-2 text-right text-muted lg:col-span-3 lg:col-start-10">Contacto</p>
        </div>

        <Reveal>
          <h2
            id="contacto-title"
            className="mt-12 font-display text-h1 font-medium leading-[0.92] tracking-[-0.045em] text-balance md:mt-20 lg:max-w-[14ch]"
          >
            Construyamos algo <span className="font-serif font-normal italic tracking-[-0.01em]">significativo.</span>
          </h2>
        </Reveal>

        <div className="grid-12 mt-14 gap-y-12 md:mt-20">
          <div className="col-span-full flex flex-col gap-3 sm:flex-row md:col-span-8 lg:col-span-6">
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent("Oportunidad laboral — Portafolio")}`}
              className="group inline-flex h-12 items-center justify-between gap-6 bg-ink px-5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-night/85"
            >
              Enviar un correo
              <ArrowUpRight aria-hidden className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
            </a>
            <CopyEmailButton email={contact.email} />
          </div>

          <dl className="col-span-full grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:col-span-6 lg:col-start-7 lg:grid-cols-2">
            {channels.map((c) => (
              <div key={c.label} className="border-b border-line py-5 sm:odd:pr-6">
                <dt className="eyebrow text-muted">{c.label}</dt>
                <dd className="mt-2 text-lg">
                  {c.href ? (
                    <a
                      href={c.href}
                      className="link-underline"
                      {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {c.value}
                      {c.external ? <span className="sr-only"> (abre en una pestaña nueva)</span> : null}
                    </a>
                  ) : (
                    c.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
