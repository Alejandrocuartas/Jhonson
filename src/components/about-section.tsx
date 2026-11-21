import Image from "next/image";
import { profile } from "@/content/site";
import { img } from "@/lib/images";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  const portrait = img(profile.portrait.key, profile.portrait.alt, { kind: "fotografia" });
  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-title" className="bg-stone py-section">
      <div className="shell">
        <SectionHeading
          id="sobre-mi-title"
          index="02"
          label="Sobre mí"
          title={<>De la obra al plano, <span className="font-serif font-normal italic tracking-normal">y de vuelta.</span></>}
        />

        <div className="grid-12 mt-16 gap-y-12 md:mt-24">
          <Reveal as="figure" className="col-span-3 md:col-span-3 lg:col-span-3">
            <Image
              src={portrait.src}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              sizes="(min-width: 64rem) 22vw, (min-width: 48rem) 35vw, 70vw"
              className="aspect-[4/5] h-auto w-full object-cover object-top grayscale-[35%]"
            />
            <figcaption className="eyebrow mt-3 text-muted">{profile.name}</figcaption>
          </Reveal>

          <div className="col-span-full md:col-span-5 md:col-start-4 lg:col-span-5 lg:col-start-5">
            <Reveal>
              <p className="font-display text-[clamp(1.35rem,1.1rem+1vw,2rem)] font-normal leading-[1.25] tracking-[-0.015em] text-balance">
                {profile.bio[0]}
              </p>
            </Reveal>
            <Reveal delay={0.05} className="prose-editorial mt-8 max-w-xl leading-relaxed text-muted">
              {profile.bio.slice(1).map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </Reveal>

            <Reveal delay={0.05} className="mt-14 border-l border-wood pl-6">
              <p className="eyebrow text-wood">Filosofía de diseño</p>
              <p className="mt-3 font-serif text-[clamp(1.4rem,1.15rem+1vw,2rem)] leading-[1.15]">{profile.philosophy}</p>
            </Reveal>
          </div>

          <aside className="col-span-full md:col-span-4 md:col-start-5 lg:col-span-3 lg:col-start-10" aria-label="Áreas de interés">
            <Reveal>
              <p className="eyebrow text-muted">Áreas de interés</p>
              <ul className="mt-4 border-t border-line">
                {profile.interests.map((it) => (
                  <li key={it} className="border-b border-line py-3 text-[0.95rem]">{it}</li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </div>

        {/* Enfoque */}
        <ol className="grid-12 mt-20 gap-y-10 md:mt-32">
          {profile.approach.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 0.08} className="col-span-full border-t border-ink/20 pt-5 md:col-span-4 lg:col-span-4">
              <p className="eyebrow text-muted">Enfoque {String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-6 font-display text-xl font-medium tracking-[-0.01em]">{a.title}</h3>
              <p className="mt-3 max-w-sm leading-relaxed text-muted">{a.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
