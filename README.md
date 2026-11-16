# Portafolio — Isaac Deodanes

Portafolio profesional de una sola página, construido con **React + Vite + Tailwind CSS**. Está pensado para
reclutadores: resume tu perfil, habilidades, proyectos y certificaciones tomados directamente de tu CV, y es
100% responsive (se ve y funciona bien en navegadores de escritorio, iOS y Android — es una web responsive,
no una app nativa de App Store/Play Store).

## Estructura del proyecto

```
src/
  data/
    profile.js         ← tus datos de contacto, resumen, educación, certificaciones
    projects.js         ← tus proyectos (título, descripción, stack, logros, repo)
    skills.js            ← habilidades técnicas y blandas
  components/            ← cada sección de la página (Hero, About, Skills, Projects, etc.)
  App.jsx                 ← arma la página uniendo todas las secciones
public/
  projects/               ← aquí van las capturas reales de tus proyectos (opcional)
```

Para actualizar el contenido normalmente **no necesitas tocar los componentes**: edita los archivos dentro de
`src/data/`.

## Cómo correrlo en tu máquina

Requisitos: Node.js 18 o superior.

```bash
npm install
npm run dev
```

Abre la URL que te muestre la terminal (normalmente `http://localhost:5173`).

## Personalización rápida

- **Foto o capturas de proyectos**: coloca las imágenes en `public/projects/` (por ejemplo
  `public/projects/sistema-escolar.png`) y agrega `image: '/projects/sistema-escolar.png'` al proyecto
  correspondiente en `src/data/projects.js`. Si no agregas imagen, se muestra una vista genérica generada
  automáticamente, así que la página nunca se ve rota mientras consigues tus capturas.
- **Enlaces de repositorio**: cambia el campo `repo` en `src/data/projects.js` por la URL real de cada
  repositorio de GitHub.
- **Certificado verificable**: en `src/data/profile.js`, dentro de `certifications`, agrega la URL real en
  `url` para que aparezca el botón "Ver".
- **CV descargable**: si quieres un botón para descargar tu CV en PDF, coloca el archivo en
  `public/cv-isaac-deodanes.pdf` y agrega un enlace `<a href="/cv-isaac-deodanes.pdf" download>` donde
  quieras (por ejemplo en `Hero.jsx` o `Nav.jsx`).

## Formulario de contacto y variables de entorno (DevOps)

El formulario de la sección "Contacto" puede enviar mensajes de dos formas:

1. **Sin configurar nada**: al enviar, se abre el cliente de correo del visitante con el mensaje
   pre-rellenado dirigido a tu correo. Funciona de inmediato, sin backend.
2. **Con un servicio de formularios** (recomendado para producción): configura la variable de entorno
   `VITE_FORM_ENDPOINT` con la URL de un servicio como [Formspree](https://formspree.io) (tiene plan
   gratuito) y el formulario enviará los mensajes directamente, sin abrir el correo del visitante.

### Variables de entorno disponibles

| Variable              | Requerida | Descripción                                                        |
|-----------------------|:---------:|---------------------------------------------------------------------|
| `VITE_FORM_ENDPOINT`  | No        | URL del endpoint que recibe el formulario de contacto (Formspree u otro). |
| `VITE_ANALYTICS_ID`   | No        | Reservada por si luego agregas Google Analytics/Plausible/etc.       |

Copia `.env.example` a `.env` para desarrollo local:

```bash
cp .env.example .env
```

> Nota importante: cualquier variable que empiece con `VITE_` queda visible en el código del navegador (no
> es secreta). No la uses para contraseñas ni llaves privadas — para este proyecto está pensada solo para
> configuración pública como la URL de un formulario.

## Despliegue en Vercel

### Opción A — Desde la web de Vercel (sin usar la terminal)

1. Sube esta carpeta a un repositorio de GitHub (puede ser privado).
2. Entra a [vercel.com](https://vercel.com) → **Add New… → Project** → importa el repositorio.
3. Vercel detecta automáticamente que es un proyecto **Vite** (gracias a `vercel.json`): build command
   `npm run build`, output `dist`. No necesitas cambiar nada.
4. Antes de darle a "Deploy", abre **Environment Variables** y agrega (si vas a usar el formulario):
   - `VITE_FORM_ENDPOINT` = la URL de tu formulario de Formspree (opcional).
5. Haz clic en **Deploy**. En 1–2 minutos tendrás tu URL pública (`tuportafolio.vercel.app`).

### Opción B — Con la CLI de Vercel

```bash
npm install -g vercel
vercel login
vercel            # despliegue de prueba
vercel env add VITE_FORM_ENDPOINT   # te pedirá el valor
vercel --prod     # despliegue final a producción
```

### Dominio propio

En el panel del proyecto en Vercel: **Settings → Domains** → agrega tu dominio (por ejemplo
`isaacdeodanes.dev`) y sigue las instrucciones de DNS que te muestra Vercel.

## Stack técnico

- React 18
- Vite 5
- Tailwind CSS 3
- JavaScript (sin backend propio — el formulario de contacto usa un servicio externo opcional)
