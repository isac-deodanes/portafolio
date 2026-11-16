import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";

const LINES = [
  { prompt: "~$", text: "whoami" },
  { prompt: ">", text: profile.name, isResult: true },
  {
    prompt: ">",
    text: `${profile.role} — ${profile.roleLine}`,
    isResult: true,
  },
  { prompt: "~$", text: "cat disponibilidad.txt" },
  {
    prompt: ">",
    text: `Disponibilidad ${profile.availability.toLowerCase()} · ${profile.modality}`,
    isResult: true,
  },
];

function useTypedLines(lines) {
  const [rendered, setRendered] = useState([]);
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      setRendered(lines.map((l) => l.text));
      setDone(true);
      return;
    }

    let lineIndex = 0;
    let charIndex = 0;
    let cancelled = false;
    const next = [...lines.map(() => "")];

    const tick = () => {
      if (cancelled || lineIndex >= lines.length) {
        setDone(true);
        return;
      }
      const currentText = lines[lineIndex].text;
      charIndex += 1;
      next[lineIndex] = currentText.slice(0, charIndex);
      setRendered([...next]);

      if (charIndex >= currentText.length) {
        lineIndex += 1;
        charIndex = 0;
        setTimeout(tick, 220);
      } else {
        setTimeout(tick, 18);
      }
    };

    const startTimer = setTimeout(tick, 350);
    return () => {
      cancelled = true;
      clearTimeout(startTimer);
    };
  }, [lines]);

  return { rendered, done };
}

export default function Hero() {
  const { rendered, done } = useTypedLines(LINES);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" />

      <div className="section-shell relative grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="kicker text-[#60A5FA]">
            Desarrollador Web full stack jr
          </p>
          <h1 className="mt-4 text-4xl leading-[1.08] text-ink dark:text-paper sm:text-5xl lg:text-[3.4rem] title-primary font-light">
            Transformando Ideas en Código Funcional
          </h1>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-ink/70 dark:text-paper/70 sm:text-lg">
            Técnico en Ingeniería en Desarrollo de Software especializado en
            crear aplicaciones web. Desde interfaces intuitivas en Figma hasta
            la creación de APIs robustas en Laravel, PHP, MySQL, Vue.js.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#proyectos"
              className="rounded-md px-5 py-2.5 text-sm font-medium btn-blue-bg"
            >
              Ver proyectos
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md border border-ink-line px-5 py-2.5 text-sm font-medium text-ink dark:text-paper transition-colors hover:border-ink/40 dark:hover:border-paper/40"
            >
              Escríbeme
            </a>
          </div>
        </div>

        {/* Terminal card — siempre oscura por diseño */}
        <div className="rounded-lg border border-ink-line bg-ink-soft shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-1.5 border-b border-ink-line px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E8746B]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E8A33D]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#3FB8AF]" />
            <span className="ml-3 font-mono text-xs text-paper/40">
              isac-deodanes:
            </span>
          </div>
          <div className="min-h-[220px] px-5 py-5 font-mono text-[13px] leading-7 text-paper/85 sm:text-sm">
            {LINES.map((line, i) => (
              <div
                key={i}
                className={
                  line.isResult ? "text-signal-bright" : "text-paper/90"
                }
              >
                {rendered[i] ? (
                  <>
                    <span className="text-paper/40">{line.prompt} </span>
                    {rendered[i]}
                  </>
                ) : (
                  "\u00A0"
                )}
              </div>
            ))}
            {done && (
              <span className="terminal-cursor inline-block h-4 w-2 translate-y-0.5 bg-signal-bright" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
