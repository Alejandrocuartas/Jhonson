"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";
import { projects } from "@/content/projects";
import type { Project } from "@/content/types";
import { ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";

type FilterKey = "todos" | "diseno" | "licencia" | "academico";

const filters: { key: FilterKey; label: string; match: (p: Project) => boolean }[] = [
  { key: "todos", label: "Todos", match: () => true },
  { key: "diseno", label: "Diseño", match: (p) => p.status === "diseno" },
  { key: "licencia", label: "Licencias", match: (p) => p.status === "licencia" },
  { key: "academico", label: "Académico", match: (p) => p.category === "academico" },
];

/*
 * Composición asimétrica sobre la retícula de 12 columnas. Cada posición
 * define columnas y desplazamiento vertical; el patrón se repite si hay más
 * proyectos, así que añadir uno no requiere tocar el layout.
 */
const placements = [
  { cls: "md:col-span-8 lg:col-span-7", sizes: "(min-width: 64rem) 58vw, 100vw" },
  { cls: "md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-9 lg:mt-[18rem]", sizes: "(min-width: 64rem) 33vw, 60vw" },
  { cls: "md:col-span-5 lg:col-span-5 lg:col-start-2", sizes: "(min-width: 64rem) 42vw, 60vw" },
  { cls: "md:col-span-6 md:col-start-3 lg:col-span-5 lg:col-start-8 lg:mt-[12rem]", sizes: "(min-width: 64rem) 42vw, 75vw" },
  { cls: "md:col-span-8 lg:col-span-6", sizes: "(min-width: 64rem) 50vw, 100vw" },
  { cls: "md:col-span-4 md:col-start-5 lg:col-span-3 lg:col-start-9 lg:mt-[10rem]", sizes: "(min-width: 64rem) 25vw, 50vw" },
  { cls: "md:col-span-5 md:col-start-2 lg:col-span-4 lg:col-start-3", sizes: "(min-width: 64rem) 33vw, 60vw" },
];

export function FeaturedProjects() {
  const [active, setActive] = useState<FilterKey>("todos");
  const reduce = useReducedMotion();
  const ordered = useMemo(() => [...projects].sort((a, b) => Number(b.featured) - Number(a.featured)), []);
  const visible = ordered.filter(filters.find((f) => f.key === active)!.match);

  return (
    <section id="proyectos" aria-labelledby="proyectos-title" className="pb-section">
      <div className="shell">
        <SectionHeading
          id="proyectos-title"
          index="01"
          label={`Proyectos — ${String(projects.length).padStart(2, "0")}`}
          title={<>Proyectos <span className="font-serif font-normal italic tracking-normal">seleccionados</span></>}
          aside="Diseño arquitectónico, planimetría para licencias y un trabajo de grado urbano. Cada proyecto indica el rol desempeñado y si las imágenes son renders o planos."
        />

        <div role="group" aria-label="Filtrar proyectos" className="mt-14 flex flex-wrap gap-2 md:mt-20">
          {filters.map((f) => {
            const count = ordered.filter(f.match).length;
            if (!count) return null;
            const on = active === f.key;
            return (
              <button
                key={f.key}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(f.key)}
                className={`eyebrow flex h-10 items-center gap-2 border px-4 transition-colors duration-300 ${
                  on ? "border-ink bg-ink text-paper" : "border-line text-muted hover:border-ink hover:text-ink"
                }`}
              >
                {f.label}
                <span className={on ? "opacity-70" : ""}>{String(count).padStart(2, "0")}</span>
              </button>
            );
          })}
        </div>
        <p className="sr-only" aria-live="polite">{visible.length} proyectos visibles</p>

        <ul className="grid-12 mt-12 gap-y-20 md:mt-16 md:gap-y-28 lg:gap-y-36">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project, i) => {
              const place = placements[i % placements.length];
              return (
                <motion.li
                  key={project.slug}
                  layout={!reduce}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`col-span-full self-start ${place.cls}`}
                >
                  <ProjectCard project={project} sizes={place.sizes} />
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}
