import { education, experience } from "@/content/site";
import { Reveal } from "./reveal";

export function ExperienceTimeline() {
  return (
    <div>
      <h3 className="eyebrow text-muted">Experiencia laboral</h3>
      <ol className="mt-6 border-t border-line">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.role + job.start} delay={i * 0.06} className="grid grid-cols-4 gap-x-[var(--gutter)] gap-y-3 border-b border-line py-8 md:grid-cols-8 md:py-10">
            <div className="col-span-full md:col-span-2">
              <p className="font-mono text-sm tabular-nums">
                <time>{job.start}</time>
                {job.current || job.end ? <span className="text-muted"> — {job.current ? "Actual" : job.end}</span> : null}
              </p>
              {job.current ? (
                <p className="eyebrow mt-2 inline-flex items-center gap-2 text-signal">
                  <span aria-hidden className="size-1.5 rounded-full bg-signal" /> Cargo actual
                </p>
              ) : null}
            </div>
            <div className="col-span-full md:col-span-6">
              <h4 className="font-display text-h3 font-medium leading-tight tracking-[-0.02em]">{job.role}</h4>
              {job.project ? <p className="mt-1 text-muted">{job.project}</p> : null}
              <ul className="mt-5 space-y-2 text-[0.95rem] leading-relaxed">
                {job.highlights.map((h) => (
                  <li key={h} className="grid grid-cols-[1.25rem_1fr]">
                    <span aria-hidden className="text-muted">—</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>

      <h3 className="eyebrow mt-16 text-muted">Formación</h3>
      <ol className="mt-6 border-t border-line">
        {education.map((ed) => (
          <li key={ed.title} className="grid grid-cols-4 gap-x-[var(--gutter)] gap-y-3 border-b border-line py-8 md:grid-cols-8">
            <p className="col-span-full font-mono text-sm tabular-nums md:col-span-2">{ed.year}</p>
            <div className="col-span-full md:col-span-6">
              <h4 className="font-display text-h3 font-medium leading-tight tracking-[-0.02em]">{ed.title}</h4>
              {ed.institution ? <p className="mt-1 text-muted">{ed.institution}</p> : null}
              {ed.detail ? <p className="mt-3 text-[0.95rem] leading-relaxed">{ed.detail}</p> : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
