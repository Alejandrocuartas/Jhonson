import type { Project } from "@/content/types";
import { categoryLabels, statusLabels } from "@/content/projects";

export function ProjectMetadata({ project }: { project: Project }) {
  const rows: [string, React.ReactNode][] = [
    ["Proyecto", project.name],
    ["Ubicación", project.location],
    ["Año", project.year],
    ...(project.area ? ([["Área", project.area]] as [string, string][]) : []),
    ["Tipología", project.typology],
    ["Tipo", categoryLabels[project.category]],
    ...(statusLabels[project.status] !== categoryLabels[project.category] ? ([["Estado", statusLabels[project.status]]] as [string, string][]) : []),
    ["Rol", project.role],
    ...(project.collaborators?.length ? ([["Colaboradores", project.collaborators.join(", ")]] as [string, string][]) : []),
  ];

  return (
    <div>
      <dl className="border-t border-ink">
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-line py-3 text-[0.95rem]">
            <dt className="eyebrow pt-1 text-muted">{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-8">
        <p className="eyebrow text-muted">Participación y responsabilidades</p>
        <ul className="mt-3 space-y-1.5 text-[0.95rem] leading-relaxed">
          {project.responsibilities.map((r) => (
            <li key={r} className="grid grid-cols-[1.25rem_1fr]"><span aria-hidden className="text-muted">—</span>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
