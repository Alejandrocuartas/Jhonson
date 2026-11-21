import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/types";
import { categoryLabels, statusLabels } from "@/content/projects";
import { ParallaxImage } from "./parallax-image";

const aspect = { wide: "aspect-[3/2]", tall: "aspect-[4/5]", square: "aspect-square" } as const;

type Props = { project: Project; sizes: string; className?: string };

export function ProjectCard({ project, sizes, className = "" }: Props) {
  const isPlan = project.cover.kind === "plano";
  return (
    <article className={className}>
      <Link href={`/proyectos/${project.slug}/`} className="group block" aria-label={`${project.name}, ${project.year}. Ver caso de estudio`}>
        <div className={`media-zoom relative ${isPlan ? "bg-white outline outline-1 -outline-offset-1 outline-line" : "bg-stone"}`}>
          <ParallaxImage
            image={project.cover}
            sizes={sizes}
            className={aspect[project.coverLayout]}
            contain={isPlan}
            strength={5}
          />
          <span className="eyebrow absolute left-3 top-3 bg-paper/90 px-2 py-1 text-ink">
            {isPlan ? "Plano" : "Render"}
          </span>
          <span
            aria-hidden
            className="absolute bottom-3 right-3 flex size-10 items-center justify-center bg-paper text-ink opacity-0 transition-all duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            <ArrowUpRight className="size-4" strokeWidth={1.5} />
          </span>
        </div>

        <div className="mt-4 grid grid-cols-[auto_1fr] gap-x-4">
          <span className="eyebrow pt-2 text-muted">{project.number}</span>
          <div>
            <h3 className="font-display text-h3 font-medium leading-tight tracking-[-0.02em]">
              <span className="link-underline [background-size:0%_1px] group-hover:[background-size:100%_1px]">{project.name}</span>
            </h3>
            <p className="mt-1 text-[0.95rem] text-muted">{project.typology}</p>
            <dl className="eyebrow mt-4 flex flex-wrap gap-x-5 gap-y-1 text-muted">
              <div className="flex gap-1.5"><dt className="sr-only">Año</dt><dd>{project.year}</dd></div>
              <div className="flex gap-1.5"><dt className="sr-only">Ubicación</dt><dd>{project.location}</dd></div>
              <div className="flex gap-1.5"><dt className="sr-only">Tipo</dt><dd>{categoryLabels[project.category]}</dd></div>
              {statusLabels[project.status] !== categoryLabels[project.category] ? (
                <div className="flex gap-1.5"><dt className="sr-only">Estado</dt><dd>{statusLabels[project.status]}</dd></div>
              ) : null}
            </dl>
            <p className="mt-3 text-sm"><span className="text-muted">Rol — </span>{project.role}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}
