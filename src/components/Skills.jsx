import { skillGroups, softSkills } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="border-gray-200 dark:border-ink-line py-20 sm:py-28"
    >
      <div className="section-shell">
        <p className="kicker text-style">Habilidades técnicas</p>
        <h2 className="mt-3 text-3xl text-ink dark:text-paper sm:text-4xl text-primary">
          Un stack que cubre interfaz, API y despliegue
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-gray-200 dark:border-ink-line bg-gray-200 dark:bg-ink-line sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label} className="bg-white dark:bg-ink px-6 py-6">
              <h3 className="font-mono text-style text-xs uppercase tracking-wide">
                {group.label}
              </h3>

              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const Icono = item.icono;
                  return (
                    <li
                      key={item.nombre}
                      className="flex items-center gap-2 rounded-md border border-gray-200 dark:border-ink-line px-2.5 py-1 text-xs text-ink/75 dark:text-paper/75 sm:text-sm"
                    >
                      <Icono className="shrink-0 text-base text-blue-300" />

                      <span>{item.nombre}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="kicker text-style">Competencias blandas</p>
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            {softSkills.map((skill) => (
              <div
                key={skill.title}
                className="border-l-2 border-[#60A5FA]/40 pl-5"
              >
                <h4 className="font-medium text-ink dark:text-paper">
                  {skill.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/65 dark:text-paper/65">
                  {skill.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
