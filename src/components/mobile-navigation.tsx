"use client";

import { Dialog } from "@base-ui/react/dialog";
import Link from "next/link";
import { useState } from "react";
import { contact, documents, navigation, profile } from "@/content/site";
import { asset } from "@/lib/paths";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        className="eyebrow -mr-2 flex h-11 items-center gap-3 px-2 md:hidden"
        aria-label="Abrir menú"
      >
        Menú
        <span aria-hidden className="flex w-5 flex-col gap-[5px]">
          <span className="h-px w-full bg-ink" />
          <span className="h-px w-3/5 self-end bg-ink" />
        </span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Popup className="drawer-popup fixed inset-0 z-[60] flex flex-col bg-paper md:hidden">
          <div className="shell flex h-header items-center justify-between border-b border-line">
            <Dialog.Title className="font-display text-[0.95rem] font-semibold uppercase tracking-[0.18em]">
              {profile.shortName}
            </Dialog.Title>
            <Dialog.Close className="eyebrow -mr-2 h-11 px-2" aria-label="Cerrar menú">
              Cerrar
            </Dialog.Close>
          </div>
          <nav aria-label="Menú móvil" className="shell flex flex-1 flex-col justify-between pb-10 pt-8">
            <ol className="flex flex-col">
              {navigation.map((item, i) => (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-5 py-4 font-display text-[2.25rem] font-medium tracking-tight"
                  >
                    <span className="eyebrow text-muted">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex flex-col gap-3 text-sm">
              <a href={`mailto:${contact.email}`} className="link-underline self-start">
                {contact.email}
              </a>
              <a href={asset(documents.cv)} download className="link-underline self-start">
                Descargar CV (PDF)
              </a>
            </div>
          </nav>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
