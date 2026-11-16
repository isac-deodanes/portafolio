import {
  Html5Icon,
  Css3Icon,
  JavascriptIcon,
  VueIcon,
  TypescriptIcon,
  TailwindIcon,
  SassIcon,
  PhpIcon,
  LaravelIcon,
  MiddlewareIcon,
  SanctumIcon,
  MysqlIcon,
  IonicIcon,
  CapacitorIcon,
  MobileIcon,
  FigmaIcon,
  DrawioIcon,
  GitIcon,
  GithubTechIcon,
  JiraIcon,
  XamppIcon,
  DockerIcon,
  LaragonIcon,
} from "../components/Icons";

export const skillGroups = [
  {
    label: "Frontend",
    items: [
      { icono: Html5Icon, nombre: "HTML5 semántico" },
      { icono: Css3Icon, nombre: "CSS3 · Flexbox · Media Queries" },
      { icono: JavascriptIcon, nombre: "Javascript (ES6)" },
      { icono: VueIcon, nombre: "Vue.js" },
      { icono: TailwindIcon, nombre: "Tailwind CSS" },
      { icono: SassIcon, nombre: "SCSS" },
    ],
  },
  {
    label: "Backend",
    items: [
      { icono: PhpIcon, nombre: "PHP" },
      { icono: LaravelIcon, nombre: "Laravel (MVC, CRUD, API REST)" },
      { icono: MiddlewareIcon, nombre: "Middleware" },
      { icono: SanctumIcon, nombre: "Laravel Sanctum" },
      { icono: MysqlIcon, nombre: "MySQL" },
    ],
  },
  {
    label: "Desarrollo móvil",
    items: [
      { icono: IonicIcon, nombre: "Ionic" },
      { icono: CapacitorIcon, nombre: "Capacitor" },
      { icono: MobileIcon, nombre: "Apps híbridas iOS / Android / Web" },
    ],
  },
  {
    label: "Diseño y documentación",
    items: [
      { icono: FigmaIcon, nombre: "Figma (prototipado UI/UX)" },
      { icono: DrawioIcon, nombre: "draw.io (DER y diagramas de clases)" },
    ],
  },
  {
    label: "Colaboración",
    items: [
      { icono: GitIcon, nombre: "Git" },
      { icono: GithubTechIcon, nombre: "GitHub" },
      { icono: JiraIcon, nombre: "Jira" },
    ],
  },
  {
    label: "Entornos y DevOps",
    items: [
      { icono: XamppIcon, nombre: "XAMPP" },
      { icono: LaragonIcon, nombre: "Laragon" },
      { icono: DockerIcon, nombre: "Docker" },
      { icono: DockerIcon, nombre: "Docker Compose" },
    ],
  },
];

export const softSkills = [
  {
    title: "Trabajo en equipo",
    detail:
      "Colaboración directa en el desarrollo de la app móvil de agendas, coordinando tareas con historias de usuario en Jira.",
  },
  {
    title: "Comunicación",
    detail:
      "Documentación clara de APIs y coordinación de funcionalidades entre frontend y backend.",
  },
  {
    title: "Adaptabilidad",
    detail:
      "Desarrollo simultáneo en distintos stacks (Laravel/PHP, Vue.js/Ionic, JavaScript) según las necesidades de cada proyecto.",
  },
  {
    title: "Aprendizaje rápido",
    detail:
      "Incorporación de TypeScript e Ionic aplicados directamente en un proyecto real, sin experiencia previa en ellos.",
  },
];
