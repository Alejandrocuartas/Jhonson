import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type Props = {
  index: string;
  label: string;
  title: ReactNode;
  aside?: ReactNode;
  id?: string;
  tone?: "light" | "dark";
};

/** Encabezado editorial: índice + etiqueta en mono, título grande y nota lateral. */
export function SectionHeading({ index, label, title, aside, id, tone = "light" }: Props) {
  const muted = tone === "dark" ? "text-paper/60" : "text-muted";
  const line = tone === "dark" ? "border-paper/15" : "border-line";
  return (
    <header className={`grid-12 border-t pt-5 ${line}`}>
      <p className={`eyebrow col-span-2 lg:col-span-3 ${muted}`}>
        <span aria-hidden>{index}</span>
        <span className="sr-only">Sección {index}: </span>
      </p>
      <p className={`eyebrow col-span-2 text-right lg:col-span-3 lg:col-start-10 ${muted}`}>{label}</p>
      <Reveal className="col-span-full mt-10 md:mt-16 lg:col-span-8">
        <h2 id={id} className="font-display text-h2 font-medium leading-[0.98] tracking-[-0.035em] text-balance">
          {title}
        </h2>
      </Reveal>
      {aside ? (
        <Reveal delay={0.1} className={`col-span-full mt-6 max-w-md self-end text-[0.95rem] leading-relaxed md:col-span-4 md:col-start-5 lg:col-span-3 lg:col-start-10 lg:mt-0 ${muted}`}>
          {aside}
        </Reveal>
      ) : null}
    </header>
  );
}
