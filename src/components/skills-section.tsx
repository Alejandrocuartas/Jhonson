import { profile, tools } from "@/content/site";

/** Herramientas con nivel descriptivo (sin porcentajes) y competencias. */
export function SkillsSection() {
  const enabled = tools.filter((t) => t.enabled);
  return (
    <div className="flex flex-col gap-16">
      <div>
        <h3 className="eyebrow text-muted">Herramientas</h3>
        <table className="mt-6 w-full border-t border-line text-left">
          <caption className="sr-only">Herramientas de software y nivel de dominio</caption>
          <thead className="sr-only">
            <tr><th scope="col">Herramienta</th><th scope="col">Nivel</th></tr>
          </thead>
          <tbody>
            {enabled.map((t) => (
              <tr key={t.name} className="border-b border-line">
                <th scope="row" className="py-3.5 font-display text-lg font-medium">{t.name}</th>
                <td className="py-3.5 text-right">
                  <span className="eyebrow inline-flex items-center gap-2 text-muted">
                    <span aria-hidden className="flex gap-0.5">
                      {[0, 1, 2].map((n) => (
                        <span
                          key={n}
                          className={`h-2.5 w-px ${n < ({ Básico: 1, Intermedio: 2, Avanzado: 3 } as const)[t.level] ? "bg-ink" : "bg-line"}`}
                        />
                      ))}
                    </span>
                    {t.level}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="eyebrow text-muted">Competencias profesionales</h3>
        <ul className="mt-6 flex flex-wrap gap-2">
          {profile.skills.map((s) => (
            <li key={s} className="border border-line px-3 py-2 text-sm">{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
