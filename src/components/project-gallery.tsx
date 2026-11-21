"use client";

import { Dialog } from "@base-ui/react/dialog";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Maximize2, Minus, Plus, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type React from "react";
import type { GallerySection, ImageAsset } from "@/content/types";
import { Reveal } from "./reveal";

const kindLabel: Record<NonNullable<ImageAsset["kind"]>, string> = {
  render: "Render",
  plano: "Plano",
  diagrama: "Diagrama",
  fotografia: "Fotografía",
};

type Props = { sections: GallerySection[]; startIndex?: number };

/**
 * Galería del caso de estudio con visor ampliable. Los planos pueden verse a
 * resolución completa y recorrerse con scroll o arrastre táctil.
 */
export function ProjectGallery({ sections }: Props) {
  const all = sections.flatMap((s) => s.images);
  const [index, setIndex] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const open = index !== null;
  const current = open ? all[index] : null;

  const go = useCallback(
    (dir: 1 | -1) => {
      setZoomed(false);
      setIndex((i) => (i === null ? i : (i + dir + all.length) % all.length));
    },
    [all.length],
  );

  // Flechas: cambian de lámina; con la imagen ampliada se usan para desplazarse.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (zoomed) return;
    if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
  };

  const starts = sections.map((_, si) => sections.slice(0, si).reduce((n, s) => n + s.images.length, 0));
  return (
    <>
      {sections.map((section, si) => (
        <GalleryBlock key={section.title} section={section} onOpen={(i) => setIndex(starts[si] + i)} />
      ))}

      <Dialog.Root
        open={open}
        onOpenChange={(o) => {
          if (!o) {
            setIndex(null);
            setZoomed(false);
          }
        }}
      >
        <Dialog.Portal>
          <Dialog.Backdrop className="lightbox-backdrop fixed inset-0 z-[70] bg-night" />
          <Dialog.Popup onKeyDown={onKeyDown} className="lightbox-popup bg-night fixed inset-0 z-[71] flex flex-col text-paper outline-none">
            {current ? (
              <>
                <div className="flex h-14 shrink-0 items-center justify-between gap-4 px-[var(--gutter)]">
                  <Dialog.Title className="eyebrow truncate text-paper/80">
                    <span className="tabular-nums">{String(index! + 1).padStart(2, "0")} / {String(all.length).padStart(2, "0")}</span>
                    <span className="mx-3 text-paper/30">—</span>
                    {current.caption ?? current.alt}
                  </Dialog.Title>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setZoomed((z) => !z)}
                      className="flex size-11 items-center justify-center hover:bg-paper/10"
                      aria-label={zoomed ? "Ajustar a pantalla" : "Ver a tamaño completo"}
                      aria-pressed={zoomed}
                    >
                      {zoomed ? <Minus className="size-5" strokeWidth={1.5} /> : <Plus className="size-5" strokeWidth={1.5} />}
                    </button>
                    <Dialog.Close className="flex size-11 items-center justify-center hover:bg-paper/10" aria-label="Cerrar visor">
                      <X className="size-5" strokeWidth={1.5} />
                    </Dialog.Close>
                  </div>
                </div>

                <Viewer image={current} zoomed={zoomed} onToggleZoom={() => setZoomed((z) => !z)} />

                <div className="flex h-16 shrink-0 items-center justify-between px-[var(--gutter)]">
                  <button type="button" onClick={() => go(-1)} className="eyebrow flex h-11 items-center gap-3 px-2 hover:text-paper/70" aria-label="Imagen anterior">
                    <ArrowLeft className="size-4" strokeWidth={1.5} /> <span className="hidden sm:inline">Anterior</span>
                  </button>
                  <p className="eyebrow text-paper/60">{current.kind ? kindLabel[current.kind] : ""}</p>
                  <button type="button" onClick={() => go(1)} className="eyebrow flex h-11 items-center gap-3 px-2 hover:text-paper/70" aria-label="Imagen siguiente">
                    <span className="hidden sm:inline">Siguiente</span> <ArrowRight className="size-4" strokeWidth={1.5} />
                  </button>
                </div>
                <Dialog.Description className="sr-only">
                  Usa las flechas izquierda y derecha para navegar. El botón de ampliar muestra la imagen a tamaño completo.
                </Dialog.Description>
              </>
            ) : null}
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

function Viewer({ image, zoomed, onToggleZoom }: { image: ImageAsset; zoomed: boolean; onToggleZoom: () => void }) {
  const scroller = useRef<HTMLDivElement>(null);
  const isPlan = image.kind === "plano" || image.kind === "diagrama";

  // Al ampliar, centrar la vista sobre la imagen.
  useEffect(() => {
    const el = scroller.current;
    if (el && zoomed) {
      el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
      el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;
    }
  }, [zoomed, image]);

  return (
    <div
      ref={scroller}
      className={`relative min-h-0 flex-1 ${zoomed ? "overflow-auto overscroll-contain" : "overflow-hidden"}`}
    >
      <button
        type="button"
        onClick={onToggleZoom}
        className={`block ${zoomed ? "m-auto cursor-zoom-out" : "h-full w-full cursor-zoom-in px-[var(--gutter)]"}`}
        style={zoomed ? { width: Math.max(image.width, 1400) } : undefined}
        aria-label={zoomed ? "Reducir imagen" : "Ampliar imagen"}
      >
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={zoomed ? "2560px" : "100vw"}
          className={`${zoomed ? "h-auto w-full" : "h-full w-full object-contain"} ${isPlan ? "bg-white" : ""}`}
        />
      </button>
    </div>
  );
}

function GalleryBlock({ section, onOpen }: { section: GallerySection; onOpen: (i: number) => void }) {
  const plans = section.variant === "planos";
  const n = section.images.length;

  return (
    <div className="grid-12 gap-y-8 border-t border-line pt-6">
      <div className="col-span-full lg:col-span-3">
        <h3 className="font-display text-xl font-medium tracking-[-0.01em]">{section.title}</h3>
        {section.description ? <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-muted">{section.description}</p> : null}
        <p className="eyebrow mt-4 text-muted">{String(n).padStart(2, "0")} {n === 1 ? "lámina" : "láminas"}</p>
      </div>
      <ul className={`col-span-full grid grid-cols-1 gap-[var(--gutter)] md:grid-cols-2 lg:col-span-9`}>
        {section.images.map((image, i) => {
          // Primer elemento a todo el ancho cuando la cantidad es impar o es un plano de lámina completa
          const wide = (n % 2 === 1 && i === 0) || (plans && image.width / image.height > 1.25 && n <= 2);
          return (
            <Reveal as="li" key={image.src} delay={(i % 2) * 0.06} className={wide ? "md:col-span-2" : ""}>
              <figure>
                <button
                  type="button"
                  onClick={() => onOpen(i)}
                  className={`group relative block w-full overflow-hidden ${plans || image.kind === "diagrama" ? "bg-white outline outline-1 -outline-offset-1 outline-line" : "bg-stone"}`}
                  aria-label={`Ampliar: ${image.caption ?? image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes={wide ? "(min-width: 64rem) 70vw, 100vw" : "(min-width: 64rem) 35vw, (min-width: 48rem) 50vw, 100vw"}
                    className="h-auto w-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                  />
                  <span aria-hidden className="absolute right-3 top-3 flex size-9 items-center justify-center bg-paper/90 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Maximize2 className="size-3.5" strokeWidth={1.5} />
                  </span>
                </button>
                <figcaption className="eyebrow mt-3 flex justify-between gap-4 text-muted">
                  <span>{image.caption ?? image.alt}</span>
                  <span className="shrink-0">{image.kind ? kindLabel[image.kind] : ""}</span>
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </ul>
    </div>
  );
}
