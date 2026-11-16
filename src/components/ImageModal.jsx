import { useState, useEffect } from "react";

export default function ImageModal({ isOpen, onClose, project }) {
  const images = Array.isArray(project?.image)
    ? project.image
    : project?.image
      ? [project.image]
      : [];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cerrar con tecla Escape y bloquear scroll
  useEffect(() => {
    if (!isOpen) return;

    setCurrentIndex(0); // Reiniciar al primer elemento al abrir

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      }
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, images.length, onClose]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-sm animate-fade-in"
    >
      {/* Contenedor principal del modal idéntico al diseño */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col w-full max-w-5xl rounded-2xl bg-[#11141B] border border-gray-800 text-white shadow-2xl overflow-hidden max-h-[95vh]"
      >
        {/* Cabecera del modal */}
        <div className="flex items-start justify-between p-5 pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {project.name}
            </h2>
            <div className="mt-1.5 flex items-center gap-2">
              <span className="text-xs text-gray-400 font-normal">
                {project.type}
              </span>
            </div>
          </div>

          {/* Botón Cerrar (X) */}
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Visualizador central de la imagen principal */}
        <div className="relative flex-1 flex items-center justify-center p-3 sm:p-5 bg-black/40 min-h-[300px] sm:min-h-[420px] max-h-[60vh] overflow-hidden">
          <img
            src={currentImage}
            alt={`${project.name} - Imagen ${currentIndex + 1}`}
            className="max-h-[55vh] w-auto max-w-full rounded-xl object-contain shadow-md"
          />

          {/* Flecha Izquierda */}
          {images.length > 1 && (
            <button
              onClick={handlePrev}
              aria-label="Anterior imagen"
              className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-110 border border-white/10"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Flecha Derecha */}
          {images.length > 1 && (
            <button
              onClick={handleNext}
              aria-label="Siguiente imagen"
              className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-110 border border-white/10"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Barra de estado con contador: 1 / 4 · Nombre */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-[#0D1017] border-t border-gray-800/80 text-xs text-gray-400">
          <button
            onClick={handlePrev}
            disabled={images.length <= 1}
            className="hover:text-white disabled:opacity-30 disabled:hover:text-gray-400"
          >
            &lt;
          </button>

          <span className="font-mono text-gray-300">
            {currentIndex + 1} / {images.length} · Captura {currentIndex + 1}
          </span>

          <button
            onClick={handleNext}
            disabled={images.length <= 1}
            className="hover:text-white disabled:opacity-30 disabled:hover:text-gray-400"
          >
            &gt;
          </button>
        </div>

        {/* Carrusel de miniaturas en la parte inferior */}
        {images.length > 1 && (
          <div className="flex items-center gap-3 overflow-x-auto p-4 bg-[#11141B] border-t border-gray-800/60 custom-scrollbar">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative h-18 w-28 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                  currentIndex === idx
                    ? "border-blue-500 scale-105 shadow-md shadow-blue-500/20"
                    : "border-gray-700/70 opacity-60 hover:opacity-100 hover:border-gray-500"
                }`}
              >
                <img
                  src={img}
                  alt={`Miniatura ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
