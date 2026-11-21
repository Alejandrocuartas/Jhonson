import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profile } from "@/content/site";
import { projects } from "@/content/projects";
import { img } from "@/lib/images";
import { DownloadCVButton } from "./download-cv-button";
import { ParallaxImage } from "./parallax-image";

export function HeroSection() {
  const lead = projects.find((p) => p.slug === "horizonte-ciudadela")!;
  const inset = projects.find((p) => p.slug === "casa-mirador-de-turpiales")!;
  const [first, ...rest] = profile.name.split(" ");
  const heroImage = img("horizonte/render-frontal", "Render de la fachada frontal de Horizonte Ciudadela, edificio de cuatro niveles con balcones");

  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative pt-header">
      <div className="shell">
        {/* Línea de metadatos superior */}
        <div className="hero-in grid-12 border-b border-line py-4" style={{ ["--d" as string]: "0ms" }}>
          <p className="eyebrow col-span-2 text-muted lg:col-span-3">Portafolio — 2026</p>
          <p className="eyebrow col-span-2 hidden text-muted md:block lg:col-span-3">{profile.title}</p>
          <p className="eyebrow col-span-2 hidden text-muted lg:col-span-3 lg:block">
            {profile.location.city}, {profile.location.country}
          </p>
          {profile.availability.open ? (
            <p className="eyebrow col-span-2 flex items-center justify-end gap-2 text-ink md:col-span-4 lg:col-span-3">
              <span className="relative flex size-1.5" aria-hidden>
                <span className="absolute inset-0 animate-ping rounded-full bg-signal opacity-50 [animation-duration:2.4s]" />
                <span className="relative size-1.5 rounded-full bg-signal" />
              </span>
              {profile.availability.label}
            </p>
          ) : null}
        </div>

        <div className="grid-12 gap-y-10 pb-section pt-10 md:pt-16 lg:pt-20">
          {/* Nombre */}
          <h1
            id="hero-title"
            className="col-span-full font-display text-display font-semibold uppercase leading-[0.84] tracking-[-0.055em] lg:row-start-1"
          >
            <span className="hero-in block" style={{ ["--d" as string]: "80ms" }}>{first}</span>
            <span className="hero-in block text-muted/80 [font-weight:300]" style={{ ["--d" as string]: "160ms" }}>
              {rest.join(" ")}
            </span>
          </h1>

          {/* Imagen principal: vertical a la derecha en escritorio */}
          <figure className="col-span-full md:col-span-5 md:col-start-4 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-2 lg:mt-4">
            <Link href={`/proyectos/${lead.slug}/`} className="media-zoom block bg-stone" aria-label={`Ver proyecto ${lead.name}`}>
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={heroImage.width}
                height={heroImage.height}
                priority
                fetchPriority="high"
                sizes="(min-width: 64rem) 40vw, (min-width: 48rem) 60vw, 100vw"
                className="aspect-[4/5] h-auto w-full object-cover"
              />
            </Link>
            <figcaption className="eyebrow mt-3 flex justify-between text-muted">
              <span>{lead.number} — {lead.name}</span>
              <span>Render · {lead.year}</span>
            </figcaption>
          </figure>

          {/* Texto */}
          <div className="col-span-full md:col-span-6 lg:col-span-5 lg:row-start-2 lg:mt-10">
            <p className="hero-in font-serif text-[clamp(1.9rem,1.3rem+2.4vw,3.4rem)] leading-[1.02] tracking-[-0.01em]" style={{ ["--d" as string]: "260ms" }}>
              Arquitectura, espacio y diseño con <em>intención.</em>
            </p>
            <p className="hero-in mt-6 max-w-md text-lead leading-snug text-muted" style={{ ["--d" as string]: "340ms" }}>
              {profile.intro}
            </p>

            <div className="hero-in mt-10 flex flex-col gap-3 sm:flex-row" style={{ ["--d" as string]: "420ms" }}>
              <Link
                href="/#proyectos"
                className="group inline-flex h-12 items-center justify-between gap-6 bg-ink px-5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-night/85"
              >
                Explorar proyectos
                <ArrowRight aria-hidden strokeWidth={1.5} className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
              <DownloadCVButton />
            </div>

            <dl className="hero-in mt-14 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6 text-sm" style={{ ["--d" as string]: "500ms" }}>
              <div>
                <dt className="eyebrow text-muted">Ubicación</dt>
                <dd className="mt-1.5">{profile.location.city}, {profile.location.region}</dd>
              </div>
              <div>
                <dt className="eyebrow text-muted">Especialidad</dt>
                <dd className="mt-1.5">{profile.specialty}</dd>
              </div>
            </dl>
          </div>

          {/* Imagen secundaria: pequeña, desplazada */}
          <figure className="col-span-2 col-start-3 hidden md:col-span-3 md:col-start-6 md:block lg:col-span-2 lg:col-start-6 lg:row-start-3 lg:self-end">
            <Link href={`/proyectos/${inset.slug}/`} className="block bg-stone" aria-label={`Ver proyecto ${inset.name}`}>
              <ParallaxImage image={inset.cover} sizes="(min-width: 64rem) 16vw, 30vw" className="aspect-[3/4]" strength={8} />
            </Link>
            <figcaption className="eyebrow mt-3 text-muted">{inset.number} — Render</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
