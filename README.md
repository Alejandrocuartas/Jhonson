# Johnson — Portafolio de Jhonson Vargas Castro

Portafolio web de **Jhonson Vargas Castro, arquitecto** (Guadalajara de Buga, Colombia).
Concepto: *Architecture as a visual narrative* — una revista de arquitectura interactiva
orientada a conseguir entrevistas.

**Sitio:** https://alejandrocuartas.github.io/johnson/

## Stack

- Next.js 16 (App Router, exportación estática `output: "export"`) + React 19 + TypeScript
- Tailwind CSS v4 (design tokens en `src/app/globals.css`)
- Base UI (`@base-ui/react`) para diálogos accesibles: menú móvil y visor de planos
- Motion for React para apariciones al hacer scroll y movimiento sutil de imágenes
- Lucide Icons
- Tipografías: Manrope (títulos), Inter (texto), Instrument Serif (acentos), IBM Plex Mono (datos técnicos)

## Estructura

```
src/
  app/                     Rutas: inicio, /proyectos/[slug], sitemap, robots, 404
  components/              SiteHeader, MobileNavigation, HeroSection, SectionHeading,
                           FeaturedProjects, ProjectCard, ProjectGallery, ProjectMetadata,
                           ProjectCaseStudy, AboutSection, ExperienceTimeline, SkillsSection,
                           HiringSection, DownloadCVButton, ContactSection, SiteFooter…
  content/
    site.ts                ← Configuración central: perfil, contacto, disponibilidad,
                             experiencia, formación, herramientas, contratación, PDFs
    projects.ts            ← Proyectos y casos de estudio (tipados)
    types.ts               Modelos de datos
    image-manifest.json    Dimensiones de cada imagen (generado)
  lib/image-loader.ts      Loader de next/image para la exportación estática
public/
  images/<proyecto>/       Variantes WebP: <nombre>-{320,640,960,1280,1920,2560}.webp
  docs/                    CV y portafolio en PDF
  og/                      Imágenes Open Graph 1200×630
scripts/                   Extracción de imágenes y PDFs desde el portafolio original
```

## Desarrollo

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint
npm run build        # genera ./out (sitio estático)
```

Para probar la build tal como queda en GitHub Pages (bajo `/johnson`):

```bash
NEXT_PUBLIC_BASE_PATH=/johnson npm run build
mkdir -p /tmp/site && ln -sfn "$PWD/out" /tmp/site/johnson
python3 -m http.server 8765 -d /tmp/site   # http://localhost:8765/johnson/
```

## Despliegue

Cada push a `main` ejecuta `.github/workflows/deploy.yml`: instala, hace lint, compila con el
`basePath` que entrega GitHub Pages y publica `out/`. En el repositorio, *Settings → Pages →
Source* debe estar en **GitHub Actions**.

Con un dominio propio, el workflow ya pasa `NEXT_PUBLIC_BASE_PATH` vacío y la URL correcta.

## Editar contenido

- **Disponibilidad laboral:** `profile.availability` en `src/content/site.ts`.
- **Herramientas:** `tools` en `site.ts`. Solo se muestran las que tienen `enabled: true`; el
  nivel es descriptivo (Básico / Intermedio / Avanzado), sin porcentajes.
- **LinkedIn:** `contact.linkedin` (vacío = oculto).
- **CV / portafolio PDF:** reemplaza los archivos en `public/docs/` (mismo nombre).
- **Nuevo proyecto:**
  1. Coloca las imágenes originales en una carpeta y genera las variantes WebP
     (o agrégalas a mano con los seis sufijos de ancho) en `public/images/<slug>/`.
  2. Añade la entrada al `image-manifest.json` (`src`, `width`, `height`).
  3. Añade el objeto en `src/content/projects.ts`. La galería y la página de detalle se generan solas.

Cada imagen declara `kind` (`render`, `plano`, `diagrama`, `fotografia`) y el sitio lo rotula,
para no presentar renders como obras construidas.

### Regenerar assets desde el PDF

Requiere Python con `pymupdf` y `Pillow`:

```bash
python scripts/extract_pdf_images.py "Portafolio Jhonson.pdf" /tmp/x
python scripts/build_image_variants.py /tmp/x public/images src/content/image-manifest.json
python scripts/build_documents.py "Portafolio Jhonson.pdf" . /tmp/x
```

## Contenido por confirmar

Todo el texto proviene de `Portafolio Jhonson.pdf`. Estos datos **no estaban en el PDF** y
tienen un valor provisional en `src/content/site.ts` (marcados `POR CONFIRMAR`):

- Institución donde estudió Arquitectura.
- Modalidad de trabajo (presencial / híbrida) y disponibilidad geográfica.
- Cargos buscados (derivados de su experiencia).
- Niveles de herramientas (interpretados de las barras del PDF).
- Perfil de LinkedIn (oculto hasta que se agregue).

El estado de los proyectos profesionales figura como "Proyecto de diseño" o "Radicación de
licencia"; si alguno está construido, cámbialo a `construido` y agrega fotografías reales.

## Calidad

- Accesibilidad: auditoría axe (WCAG 2.2 AA + best practices) sin violaciones en escritorio y móvil;
  skip link, foco visible, navegación por teclado en menú y visor (flechas, Esc), `prefers-reduced-motion`.
- SEO: metadatos por página, Open Graph/Twitter con JPG 1200×630, canonical, `sitemap.xml`,
  `robots.txt`, JSON-LD `Person`.
- Rendimiento: imagen principal con `priority`/`fetchPriority="high"` y sin animación de entrada,
  variantes WebP responsivas con `sizes`, lazy loading fuera del primer viewport, dimensiones
  explícitas para evitar CLS, animaciones solo con `transform`/`opacity`.
