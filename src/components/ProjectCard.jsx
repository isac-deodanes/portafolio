import { useState } from "react";
import { ArrowUpRight } from "./Icons";
import ImageModal from "./ImageModal";

const accentMap = {
  signal: {
    border: "border-[#60A5FA]/40",
    text: "text-style",
    dot: "bg-[#60A5FA]",
  },
  amber: {
    border: "border-[#60A5FA]/40",
    text: "text-style",
    dot: "bg-[#60A5FA]",
  },
};

function ProjectGlyph({ project, accent, onOpenGallery }) {
  const images = Array.isArray(project.image)
    ? project.image
    : project.image
      ? [project.image]
      : [];

  const hasImages = images.length > 0;

  if (hasImages) {
    return (
      <div
        onClick={onOpenGallery}
        className="group relative h-full w-full cursor-pointer overflow-hidden bg-gray-900"
      >
        {/* Imagen principal con efecto de zoom suave al pasar el cursor */}
        <img
          src={images[0]}
          alt={`${project.name}`}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Overlay oscuro con el botón "Ver imágenes" en hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/55 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
          <span className="flex items-center px-4 py-2 text-sm font-medium tracking-wide text-white">
            Ver imágen
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col justify-between bg-gray-100 dark:bg-ink p-5">
      <div className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-ink/15 dark:bg-paper/15" />
        <span className="h-2 w-2 rounded-full bg-ink/15 dark:bg-paper/15" />
        <span className="h-2 w-2 rounded-full bg-ink/15 dark:bg-paper/15" />
      </div>
      <div className="space-y-2">
        {project.stack.slice(0, 4).map((item, i) => (
          <div
            key={item.nombre || item}
            className={`h-2 rounded-full ${
              i === 0
                ? accentMap[accent].dot + "/70"
                : "bg-ink/10 dark:bg-paper/10"
            }`}
            style={{ width: `${85 - i * 14}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProjectCard({ project }) {
  const accent = accentMap[project.accent] ?? accentMap.signal;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article
        className={`flex flex-col overflow-hidden rounded-lg border ${accent.border} bg-gray-50 dark:bg-ink-soft`}
      >
        <div className="h-44 border-b border-gray-200 dark:border-ink-line sm:h-48 overflow-hidden">
          <ProjectGlyph
            project={project}
            accent={project.accent}
            onOpenGallery={() => setIsModalOpen(true)}
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-primary text-xl text-ink dark:text-paper font-semibold">
                {project.name}
              </h3>
              <p className="mt-1 text-xs text-ink/50 dark:text-paper/50">
                {project.type}
              </p>
            </div>
            <span
              className={`shrink-0 rounded-full border ${accent.border} px-2.5 py-1 text-xs ${accent.text}`}
            >
              {project.status}
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-ink/70 dark:text-paper/70">
            {project.summary}
          </p>

          <ul className="mt-4 space-y-2">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex gap-2.5 text-sm leading-relaxed text-ink/65 dark:text-paper/65"
              >
                <span
                  className={`mt-2 h-1 w-1 shrink-0 rounded-full ${accent.dot}`}
                />
                {h}
              </li>
            ))}
          </ul>

          {/* Stack tecnológico con iconos */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => {
              const hasIcon = typeof item === "object" && item.icono;
              const Icono = hasIcon ? item.icono : null;
              const nombre = hasIcon ? item.nombre : item;

              return (
                <span
                  key={nombre}
                  className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 dark:border-ink-line bg-white/70 dark:bg-ink/60 px-2 py-1 text-xs font-medium text-ink/80 dark:text-paper/80 shadow-xs transition-colors hover:border-signal/50"
                >
                  {Icono && <Icono className="text-sm shrink-0" />}
                  <span>{nombre}</span>
                </span>
              );
            })}
          </div>

          <div className="flex justify-left align-bottom gap-6 mt-auto pt-6">
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 text-sm font-medium ${accent.text} hover:opacity-80`}
            >
              Ver repositorio
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            {project.verProyecto && project.verProyecto !== "#" && (
              <a
                href={project.verProyecto}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 text-sm font-medium ${accent.text} hover:opacity-80`}
              >
                Ver Demo
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </article>

      {/* Modal de la Galería */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={project}
      />
    </>
  );
}
