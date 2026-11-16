import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  return (
    <footer
      className="border-gray-200 dark:border-ink-line py-8"
      style={{ paddingBottom: "max(2rem, env(safe-area-inset-bottom, 0px))" }}
    >
      <div className="section-shell flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-ink/40 dark:text-paper/40">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink/50 dark:text-paper/50 hover:text-ink dark:hover:text-paper"
          >
            <GithubIcon className="h-4.5 w-4.5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink/50 dark:text-paper/50 hover:text-ink dark:hover:text-paper"
          >
            <LinkedinIcon className="h-4.5 w-4.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
