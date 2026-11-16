import { useState } from "react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "./Icons";

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();

    if (!FORM_ENDPOINT) {
      const form = new FormData(e.target);
      const subject = encodeURIComponent(
        `Contacto de portafolio — ${form.get("name")}`,
      );
      const body = encodeURIComponent(
        `${form.get("message")}\n\nDe: ${form.get("name")} (${form.get("email")})`,
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus("sent");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contacto"
      className="border-gray-200 dark:border-ink-line py-20 sm:py-28"
    >
      <div className="section-shell grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="kicker text-style">Contacto</p>
          <h2 className="mt-3 font-display text-3xl text-ink dark:text-paper sm:text-4xl text-primary">
            Hablemos de tu próximo proyecto
          </h2>
          <p className="mt-4 max-w-prose text-ink/65 dark:text-paper/65">
            Disponible de forma {profile.availability.toLowerCase()}, en
            modalidad {profile.modality.toLowerCase()}.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-ink/80 dark:text-paper/80 hover:text-ink dark:hover:text-paper"
            >
              <MailIcon className="h-5 w-5 text-style" />
              {profile.email}
            </a>
            <a
              href={`tel:+503${profile.phone.replace("-", "")}`}
              className="flex items-center gap-3 text-ink/80 dark:text-paper/80 hover:text-ink dark:hover:text-paper"
            >
              <PhoneIcon className="h-5 w-5 text-style" />
              +503 {profile.phone}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-ink/80 dark:text-paper/80 hover:text-ink dark:hover:text-paper"
            >
              <GithubIcon className="h-5 w-5 text-style" />
              {profile.githubLabel}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-ink/80 dark:text-paper/80 hover:text-ink dark:hover:text-paper"
            >
              <LinkedinIcon className="h-5 w-5 text-style" />
              {profile.linkedinLabel}
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-gray-200 dark:border-ink-line bg-gray-50 dark:bg-ink-soft p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="text-ink/70 dark:text-paper/70">Nombre</span>
              <input
                required
                name="name"
                type="text"
                className="mt-1.5 w-full rounded-md border border-gray-300 dark:border-ink-line bg-white dark:bg-ink px-3 py-2 text-ink dark:text-paper outline-none focus:border-signal"
              />
            </label>
            <label className="block text-sm">
              <span className="text-ink/70 dark:text-paper/70">Correo</span>
              <input
                required
                name="email"
                type="email"
                className="mt-1.5 w-full rounded-md border border-gray-300 dark:border-ink-line bg-white dark:bg-ink px-3 py-2 text-ink dark:text-paper outline-none focus:border-signal"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm">
            <span className="text-ink/70 dark:text-paper/70">Mensaje</span>
            <textarea
              required
              name="message"
              rows={5}
              className="mt-1.5 w-full resize-none rounded-md border border-gray-300 dark:border-ink-line bg-white dark:bg-ink px-3 py-2 text-ink dark:text-paper outline-none focus:border-signal"
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 w-full rounded-md px-5 py-2.5 text-sm font-medium disabled:opacity-60 sm:w-auto btn-blue-bg"
          >
            {status === "sending" ? "Enviando…" : "Enviar mensaje"}
          </button>

          {status === "sent" && (
            <p className="mt-3 text-sm text-signal-bright">
              Mensaje enviado. ¡Gracias por escribir!
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-amber">
              No se pudo enviar. Escríbeme directo a {profile.email}.
            </p>
          )}
          {/* {!FORM_ENDPOINT && (
            <p className="mt-3 text-xs text-ink/40 dark:text-paper/40">
              Este formulario abrirá tu cliente de correo hasta que configures
              VITE_FORM_ENDPOINT (ver README).
            </p>
          )} */}
        </form>
      </div>
    </section>
  );
}
