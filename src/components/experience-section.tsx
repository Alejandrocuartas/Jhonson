import { ExperienceTimeline } from "./experience-timeline";
import { SectionHeading } from "./section-heading";
import { SkillsSection } from "./skills-section";

export function ExperienceSection() {
  return (
    <section id="experiencia" aria-labelledby="experiencia-title" className="py-section">
      <div className="shell">
        <SectionHeading
          id="experiencia-title"
          index="03"
          label="Experiencia y habilidades"
          title={<>Experiencia <span className="font-serif font-normal italic tracking-normal">en obra</span> y en diseño</>}
          aside="Residencia, cantidades, presupuesto y documentación técnica, respaldados por los proyectos de este portafolio."
        />
        <div className="grid-12 mt-16 gap-y-16 md:mt-24">
          <div className="col-span-full lg:col-span-8">
            <ExperienceTimeline />
          </div>
          <div className="col-span-full md:col-span-5 lg:col-span-3 lg:col-start-10">
            <SkillsSection />
          </div>
        </div>
      </div>
    </section>
  );
}
