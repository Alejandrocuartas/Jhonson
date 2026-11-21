import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/content/types";
import { getAdjacentProjects, statusLabels } from "@/content/projects";
import { DownloadCVButton } from "./download-cv-button";
import { ProjectGallery } from "./project-gallery";
import { ProjectMetadata } from "./project-metadata";
import { Reveal } from "./reveal";

function Chapter({ letter, title, children }: { letter: string; title: string; children: React.ReactNode }) {
  return (
    <section className="grid-12 gap-y-6 border-t border-line pt-6" aria-labelledby={`cap-${letter}`}>
      <p className="eyebrow col-span-1 text-muted lg:col-span-1">{letter}</p>
      <h2 id={`cap-${letter}`} className="col-span-3 font-display text-xl font-medium tracking-[-0.01em] md:col-span-3 lg:col-span-2">
        {title}
      </h2>
      <div className="col-span-full md:col-span-6 md:col-start-3 lg:col-span-7 lg:col-start-5">{children}</div>
    </section>
  );
}

export function ProjectCaseStudy({ project }: { project: Project }) {
  const { prev, next } = getAdjacentProjects(project.slug);
  const { caseStudy: cs } = project;
  const isPlan = project.cover.kind === "plano";

  return (
    <article>
      {/* A. Hero visual */}
      <header className="shell pt-header">
        <nav aria-label="Ruta de navegación" className="eyebrow flex items-center gap-2 border-b border-line py-4 text-muted">
          <Link href="/#proyectos" className="inline-flex items-center gap-2 hover:text-ink">
            <ArrowLeft aria-hidden className="size-3.5" strokeWidth={1.5} /> Proyectos
          </Link>
          <span aria-hidden>/</span>
          <span aria-current="page" className="text-ink">{project.name}</span>
        </nav>

        <div className="grid-12 gap-y-6 pb-10 pt-10 md:pt-16">
          <p className="hero-in eyebrow col-span-full text-muted" style={{ ["--d" as string]: "0ms" }}>
            {project.number} — {project.typology}
          </p>
          <h1
            className="hero-in col-span-full font-display text-h1 font-medium leading-[0.92] tracking-[-0.045em] text-balance lg:col-span-9"
            style={{ ["--d" as string]: "60ms" }}
          >
            {project.name}
          </h1>
          <p className="hero-in col-span-full max-w-xl text-lead leading-snug text-muted lg:col-span-5" style={{ ["--d" as string]: "140ms" }}>
            {project.summary}
          </p>
        </div>
      </header>

      <figure className="shell">
        <div className={isPlan ? "bg-white outline outline-1 -outline-offset-1 outline-line" : "bg-stone"}>
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            width={project.cover.width}
            height={project.cover.height}
            priority
            fetchPriority="high"
            sizes="(min-width: 100rem) 1520px, 100vw"
            className={`h-auto w-full ${isPlan ? "max-h-[85vh] object-contain p-[4%]" : "max-h-[88vh] object-cover"}`}
          />
        </div>
        <figcaption className="eyebrow mt-3 flex justify-between text-muted">
          <span>{project.cover.alt}</span>
          <span className="shrink-0 pl-4">{isPlan ? "Plano" : "Render"} · {project.year}</span>
        </figcaption>
      </figure>

      <div className="shell mt-section flex flex-col gap-[clamp(4rem,3rem+5vw,8rem)]">
        {/* B. Información técnica */}
        <section className="grid-12 gap-y-10" aria-labelledby="ficha">
          <div className="col-span-full lg:col-span-4">
            <p className="eyebrow text-muted">B</p>
            <h2 id="ficha" className="mt-4 font-display text-h3 font-medium tracking-[-0.02em]">Ficha técnica</h2>
            <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-muted">
              Estado: {statusLabels[project.status].toLowerCase()}. Las imágenes son renders y planos de proyecto.
            </p>
          </div>
          <div className="col-span-full md:col-span-6 md:col-start-3 lg:col-span-7 lg:col-start-6">
            <ProjectMetadata project={project} />
          </div>
        </section>

        <Chapter letter="C" title="Problema">
          <Reveal><p className="font-display text-[clamp(1.25rem,1.05rem+0.9vw,1.85rem)] leading-[1.3] tracking-[-0.015em] text-balance">{cs.problem}</p></Reveal>
        </Chapter>

        <Chapter letter="D" title="Concepto">
          <Reveal><p className="font-serif text-[clamp(1.5rem,1.2rem+1.3vw,2.5rem)] leading-[1.15]">{cs.concept}</p></Reveal>
        </Chapter>

        {cs.process.length ? (
          <section aria-labelledby="proceso" className="flex flex-col gap-14">
            <div className="grid-12">
              <p className="eyebrow col-span-1 text-muted">E</p>
              <h2 id="proceso" className="col-span-3 font-display text-xl font-medium tracking-[-0.01em]">Proceso</h2>
            </div>
            <ProjectGallery sections={cs.process} />
          </section>
        ) : null}

        <Chapter letter="F" title="Solución">
          <ol className="border-t border-line">
            {cs.solution.map((s, i) => (
              <li key={s} className="grid grid-cols-[3rem_1fr] border-b border-line py-4 leading-relaxed">
                <span className="eyebrow pt-1 text-muted">{String(i + 1).padStart(2, "0")}</span>
                {s}
              </li>
            ))}
          </ol>
        </Chapter>

        {cs.result.length ? (
          <section aria-labelledby="resultado" className="flex flex-col gap-14">
            <div className="grid-12">
              <p className="eyebrow col-span-1 text-muted">G</p>
              <h2 id="resultado" className="col-span-3 font-display text-xl font-medium tracking-[-0.01em]">Resultado</h2>
            </div>
            <ProjectGallery sections={cs.result} />
          </section>
        ) : null}

        <Chapter letter={cs.result.length ? "H" : "G"} title="Aprendizajes">
          <ul className="flex flex-col gap-3">
            {cs.learnings.map((l) => (
              <li key={l} className="grid grid-cols-[1.5rem_1fr] text-lg leading-snug">
                <span aria-hidden className="text-wood">+</span>{l}
              </li>
            ))}
          </ul>
        </Chapter>
      </div>

      {/* Navegador entre proyectos */}
      <nav aria-label="Otros proyectos" className="shell mt-section">
        <div className="grid grid-cols-1 border-y border-line md:grid-cols-2">
          {[
            { p: prev, dir: "Anterior", Icon: ArrowLeft },
            { p: next, dir: "Siguiente", Icon: ArrowRight },
          ].map(({ p, dir, Icon }, i) => (
            <Link
              key={dir}
              href={`/proyectos/${p.slug}/`}
              className={`group flex flex-col gap-6 py-8 md:py-12 ${i === 1 ? "border-t border-line md:items-end md:border-l md:border-t-0 md:pl-8 md:text-right" : "md:pr-8"}`}
            >
              <span className="eyebrow inline-flex items-center gap-2 text-muted">
                {i === 0 ? <Icon aria-hidden className="size-3.5 transition-transform duration-500 group-hover:-translate-x-1" strokeWidth={1.5} /> : null}
                {dir} — {p.number}
                {i === 1 ? <Icon aria-hidden className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.5} /> : null}
              </span>
              <span className="font-display text-h3 font-medium tracking-[-0.02em]">{p.name}</span>
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-start justify-between gap-6 py-12 sm:flex-row sm:items-center">
          <p className="max-w-md text-muted">¿Buscas un arquitecto para tu equipo? Revisa la experiencia completa en el CV.</p>
          <DownloadCVButton variant="solid" />
        </div>
      </nav>
    </article>
  );
}
