export const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.35-3.88-1.35-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.6.24 2.77.12 3.06.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.27 5.67.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .3.2.67.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

export const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

export const MailIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    aria-hidden="true"
    {...props}
  >
    <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
    <path d="m3 6 9 6.5L21 6" />
  </svg>
);

export const PhoneIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    aria-hidden="true"
    {...props}
  >
    <path d="M5.2 3.5h3.1l1.4 4.2-2.1 1.7a13.8 13.8 0 0 0 6.9 6.9l1.7-2.1 4.2 1.4v3.1c0 1-.85 1.8-1.84 1.7-6.9-.6-12.4-6.1-13-13-.1-1 .74-1.85 1.74-1.9Z" />
  </svg>
);

export const PinIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    aria-hidden="true"
    {...props}
  >
    <path d="M12 21.5s7-6.3 7-11.7a7 7 0 0 0-14 0c0 5.4 7 11.7 7 11.7Z" />
    <circle cx="12" cy="9.8" r="2.6" />
  </svg>
);

export const ArrowUpRight = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    aria-hidden="true"
    {...props}
  >
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiVuedotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiIonic,
  SiCapacitor,
  SiFigma,
  SiDiagramsdotnet,
  SiGit,
  SiGithub,
  SiJira,
  SiXampp,
  SiDocker,
} from "react-icons/si";

import {
  LuShieldCheck,
  LuSmartphone,
  LuServer,
  LuFileText,
} from "react-icons/lu";

// Componente reutilizable para los iconos tecnológicos
const TechIcon = ({ icon: Icon, color, className = "", ...props }) => (
  <Icon
    aria-hidden="true"
    focusable="false"
    className={`shrink-0 ${className}`}
    style={{ color, ...props.style }}
    {...props}
  />
);

// FRONTEND
export const Html5Icon = (props) => (
  <TechIcon icon={SiHtml5} color="#E34F26" {...props} />
);
export const Css3Icon = (props) => (
  <TechIcon icon={SiCss} color="#1572B6" {...props} />
);
export const JavascriptIcon = (props) => (
  <TechIcon icon={SiJavascript} color="#F7DF1E" {...props} />
);
export const VueIcon = (props) => (
  <TechIcon icon={SiVuedotjs} color="#4FC08D" {...props} />
);
export const TypescriptIcon = (props) => (
  <TechIcon icon={SiTypescript} color="#3178C6" {...props} />
);
export const TailwindIcon = (props) => (
  <TechIcon icon={SiTailwindcss} color="#06B6D4" {...props} />
);
export const SassIcon = (props) => (
  <TechIcon icon={SiSass} color="#CC6699" {...props} />
);
export const BootstrapIcon = (props) => (
  <TechIcon icon={SiBootstrap} color="#CC6699" {...props} />
);
// BACKEND
export const PhpIcon = (props) => (
  <TechIcon icon={SiPhp} color="#777BB4" {...props} />
);
export const LaravelIcon = (props) => (
  <TechIcon icon={SiLaravel} color="#FF2D20" {...props} />
);
export const MiddlewareIcon = (props) => (
  <TechIcon icon={LuShieldCheck} color="#93C5FD" {...props} />
);
export const SanctumIcon = (props) => (
  <TechIcon icon={LuShieldCheck} color="#93C5FD" {...props} />
);
export const MysqlIcon = (props) => (
  <TechIcon icon={SiMysql} color="#4479A1" {...props} />
);

// DESARROLLO MOVIL
export const IonicIcon = (props) => (
  <TechIcon icon={SiIonic} color="#3880FF" {...props} />
);
export const CapacitorIcon = (props) => (
  <TechIcon icon={SiCapacitor} color="#119EFF" {...props} />
);
export const MobileIcon = (props) => (
  <TechIcon icon={LuSmartphone} color="#93C5FD" {...props} />
);

// DISEÑO Y DOCUMENTACION
export const FigmaIcon = (props) => (
  <TechIcon icon={SiFigma} color="#F24E1E" {...props} />
);
export const DrawioIcon = (props) => (
  <TechIcon icon={SiDiagramsdotnet} color="#F08705" {...props} />
);

// COLABORACION
export const GitIcon = (props) => (
  <TechIcon icon={SiGit} color="#F05032" {...props} />
);
export const GithubTechIcon = (props) => (
  <TechIcon icon={SiGithub} color="#FFFFFF" {...props} />
);
export const JiraIcon = (props) => (
  <TechIcon icon={SiJira} color="#2684FF" {...props} />
);

// ENTORNOS Y DEVOPS
export const XamppIcon = (props) => (
  <TechIcon icon={SiXampp} color="#FB7A24" {...props} />
);
export const LaragonIcon = (props) => (
  <TechIcon icon={LuServer} color="#93C5FD" {...props} />
);
export const DockerIcon = (props) => (
  <TechIcon icon={SiDocker} color="#2496ED" {...props} />
);
export const DockerComposeIcon = (props) => (
  <TechIcon icon={SiDocker} color="#2496ED" {...props} />
);
export const DomPdfIcon = (props) => (
  <TechIcon icon={LuFileText} color="#EF4444" {...props} />
);
