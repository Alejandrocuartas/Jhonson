import { contact, hiring, profile, tools } from "@/content/site";
import { DownloadCVButton } from "./download-cv-button";
import { SectionHeading } from "./section-heading";

/** Ficha para reclutadores: todo lo necesario para evaluar en un vistazo. */
export function HiringSection() {
  const rows: [string, React.ReactNode][] = [
    ["Cargo buscado", hiring.roles.join(" · ")],
    ["Especialización", hiring.specialization],
    ["Ciudad", `${profile.location.city}, ${profile.location.region}, ${profile.location.country}`],
    ["Disponibilidad geográfica", hiring.mobility],
    ["Modalidad", hiring.modality],
    ["Disponibilidad", profile.availability.label],
    ["Herramientas", tools.filter((t) => t.enabled).map((t) => t.name).join(", ")],
    [
      "Correo",
      <a key="mail" href={`mailto:${contact.email}`} className="link-underline">{contact.email}</a>,
    ],
  ];

  return (
    <section id="contratacion" aria-labelledby="contratacion-title" className="bg-night py-section text-paper">
      <div className="shell">
        <SectionHeading
          tone="dark"
          id="contratacion-title"
          index="04"
          label="Para reclutadores"
          title={<>Ficha de <span className="font-serif font-normal italic tracking-normal">contratación</span></>}
        />
        <div className="grid-12 mt-16 gap-y-14 md:mt-24">
          <div className="col-span-full lg:col-span-4">
            <p className="font-display text-[clamp(1.35rem,1.1rem+1vw,2rem)] leading-[1.25] tracking-[-0.015em] text-balance">
              {hiring.summary}
            </p>
            <div className="mt-10 flex flex-col gap-3">
              <DownloadCVButton variant="solid" tone="dark" label="Descargar CV" />
              <DownloadCVButton variant="outline" tone="dark" file="portfolio" label="Descargar portafolio" />
            </div>
          </div>
          <dl className="col-span-full border-t border-paper/15 md:col-span-8 lg:col-span-7 lg:col-start-6">
            {rows.map(([k, v]) => (
              <div key={k} className="grid grid-cols-1 gap-1 border-b border-paper/15 py-4 md:grid-cols-[14rem_1fr] md:gap-6">
                <dt className="eyebrow pt-1 text-paper/60">{k}</dt>
                <dd className="text-[1.02rem]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
