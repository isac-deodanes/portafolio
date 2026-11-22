import { profile, education, references } from "../data/profile";
import { PinIcon } from "./Icons";

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 sm:py-28">
      <div className="section-shell">
        <p className="kicker text-style">Sobre mí</p>
        <h2 className="mt-3 text-3xl text-ink dark:text-paper sm:text-4xl text-primary">
          De la maqueta en Figma al endpoint
        </h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5 text-base leading-relaxed text-ink/75 dark:text-paper/75 sm:text-lg">
            <p>{profile.summary}</p>
            <p>
              Busco una posición como Desarrollador Full Stack Jr donde pueda
              seguir fortaleciendo mis habilidades técnicas y aportar valor
              desde el primer día.
            </p>

            <div className="flex items-center gap-2 pt-2 text-sm text-ink/60 dark:text-paper/60">
              <PinIcon className="h-4 w-4 text-signal" />
              {profile.location}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 dark:border-ink-line bg-gray-50 dark:bg-ink-soft p-6">
              <h3 className="font-mono text-xs uppercase tracking-wide text-ink/40 dark:text-paper/40">
                Datos Personales
              </h3>
              <ul className="mt-3 space-y-3">
                {references.map((ref) => (
                  <li key={ref.name} className="text-sm">
                    <p className="font-medium text-ink dark:text-paper">
                      {ref.name}
                    </p>
                    <p className="text-ink/55 dark:text-paper/55">
                      Edad : {ref.edad}
                    </p>
                    <p className="text-ink/55 dark:text-paper/55">
                      Telefono : {ref.telefono}
                    </p>
                    <p className="text-ink/55 dark:text-paper/55">
                      Domicilio : {ref.domicilio}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 dark:border-ink-line bg-gray-50 dark:bg-ink-soft p-6">
              <h3 className="font-mono text-xs uppercase tracking-wide text-ink/40 dark:text-paper/40">
                Formación académica
              </h3>
              <p className="mt-3 font-medium text-ink dark:text-paper">
                {education.degree}
              </p>
              <p className="mt-1 text-sm text-ink/60 dark:text-paper/60">
                {education.school}
              </p>
              <span className="mt-3 inline-block rounded-full border border-amber/40 px-2.5 py-0.5 text-xs text-amber">
                {education.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
