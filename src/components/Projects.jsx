import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="border-gray-200 dark:border-ink-line py-20 sm:py-28"
    >
      <div className="section-shell">
        <p className="kicker text-style">Proyectos</p>
        <h2 className="mt-3 text-3xl text-ink dark:text-paper sm:text-4xl text-primary">
          Trabajo real, de lo individual a lo colaborativo
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
