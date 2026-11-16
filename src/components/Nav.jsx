import { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#certificaciones", label: "Certificaciones" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sincroniza la clase .dark en <html> y guarda la preferencia
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "bg-white/90 dark:bg-ink/90 backdrop-blur border-b border-gray-200 dark:border-ink-line"
          : "bg-transparent border-b border-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <nav className="section-shell flex mt-3 mb-3 h-16 items-center justify-between">
        <a
          href="#inicio"
          className="font-mono text-sm text-ink dark:text-paper"
        >
          isaac<span className="text-signal">.</span>dev
        </a>

        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink/70 dark:text-paper/70 transition-colors hover:text-ink dark:hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden rounded-full border border-[#60A5FA] px-4 py-1.5 text-sm text-[#60A5FA] transition-colors hover:border-[#60A5FA]/70 hover:bg-[#60A5FA]/10 md:inline-block"
          >
            Contáctame
          </a>

          {/* Botón toggle claro/oscuro — solo aparece una vez */}
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Cambiar modo claro/oscuro"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 dark:border-ink-line bg-white dark:bg-ink-soft text-sm transition-colors hover:border-signal"
          >
            {dark ? (
              <IoSunny className="text-3xl text-white" />
            ) : (
              <IoMoon className="text-3xl dark:text-white" />
            )}
          </button>

          {/* Hamburguesa — solo móvil */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 dark:border-ink-line text-ink dark:text-paper md:hidden"
            aria-expanded={open}
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 right-0 top-0 h-px bg-ink dark:bg-paper transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 right-0 top-1.5 h-px bg-ink dark:bg-paper transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 right-0 top-3 h-px bg-ink dark:bg-paper transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-gray-200 dark:border-ink-line bg-white dark:bg-ink md:hidden">
          <ul className="section-shell flex flex-col py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-base text-ink/80 dark:text-paper/80"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
