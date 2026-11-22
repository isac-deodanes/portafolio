import { experienciaPractica } from "../data/experiencia";

export default function Experiencia() {
  const exp = experienciaPractica[0] || {};

  return (
    <section id="experiencia" className="py-20 sm:py-28">
      <div className="section-shell">
        <p className="kicker text-style">Experiencia Práctica</p>
        <h2 className="mt-3 text-3xl text-ink dark:text-paper sm:text-4xl text-primary">
          {exp.puesto}
        </h2>

        <p className="space-y-5 text-base leading-relaxed text-ink/75 dark:text-paper/75 sm:text-lg">
          {exp.descripcion}
        </p>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* Lado izquierdo: Descripción, Modalidad, Fecha y Responsabilidades */}
          <div className="space-y-5 text-base leading-relaxed text-ink/75 dark:text-paper/75 sm:text-lg">
            {exp.responsabilidades && exp.responsabilidades.length > 0 && (
              <div className="pt-2">
                <h4 className="font-mono text-xs uppercase tracking-wide text-ink/40 dark:text-paper/40 mb-3">
                  Responsabilidades y actividades
                </h4>
                <ul className="space-y-2 text-sm sm:text-base">
                  {exp.responsabilidades.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-signal mt-1.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Lado derecho: Tarjetas (Empresa y Tecnologías) igual que en Sobre Mí */}
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 dark:border-ink-line bg-gray-50 dark:bg-ink-soft p-6">
              <h3 className="font-mono text-xs uppercase tracking-wide text-ink/40 dark:text-paper/40">
                Empresa
              </h3>
              <p className="mt-3 font-medium text-ink dark:text-paper">
                {exp.empresa}
              </p>
              <p className="mt-1 text-sm text-ink/60 dark:text-paper/60">
                {exp.modalidad}
              </p>
              <span className="mt-3 inline-block rounded-full border border-[#60A5FA]/40 px-2.5 py-0.5 text-xs text-[#60A5FA]/50">
                {exp.fecha}
              </span>
            </div>

            <div className="rounded-lg border border-gray-200 dark:border-ink-line bg-gray-50 dark:bg-ink-soft p-6">
              <h3 className="font-mono text-xs uppercase tracking-wide text-ink/40 dark:text-paper/40">
                Tecnologías y herramientas
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tecnologias?.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-gray-200 dark:border-ink-line bg-white dark:bg-ink px-2.5 py-1 font-mono text-xs text-ink/75 dark:text-paper/75"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
