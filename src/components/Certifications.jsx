import { certifications } from "../data/profile";
import { ArrowUpRight } from "./Icons";

export default function Certifications() {
  return (
    <section
      id="certificaciones"
      className="border-gray-200 dark:border-ink-line py-20 sm:py-28"
    >
      <div className="section-shell">
        <p className="kicker text-style">Certificaciones</p>
        <h2 className="mt-3 text-3xl text-ink dark:text-paper sm:text-4xl text-primary">
          Aprendizaje continuo, documentado
        </h2>

        <div className="mt-10 divide-y divide-gray-200 dark:divide-ink-line rounded-lg border border-gray-200 dark:border-ink-line">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col gap-1.5 px-6 py-5 bg-white dark:bg-transparent sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-medium text-ink dark:text-paper">
                  {cert.name}
                </p>
                <p className="text-sm text-ink/55 dark:text-paper/55">
                  {cert.issuer}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`rounded-full border px-2.5 py-1 text-xs ${
                    cert.status === "Certificado"
                      ? "btn-outline-blue"
                      : "border-amber/40 text-amber"
                  }`}
                >
                  {cert.status}
                </span>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-ink/70 dark:text-paper/70 hover:text-ink dark:hover:text-paper"
                  >
                    Ver
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
