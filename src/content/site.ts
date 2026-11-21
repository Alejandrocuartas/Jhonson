/**
 * Configuración central del portafolio.
 *
 * Todo el contenido proviene del documento "Portafolio Jhonson.pdf" (2026).
 * Los campos marcados con `POR CONFIRMAR` no estaban en el PDF: se dejaron
 * con un valor prudente para que el diseño funcione y deben validarse con
 * Jhonson antes de compartir el enlace con reclutadores.
 */
import type { EducationItem, ExperienceItem, Tool } from "./types";

export const site = {
  /** URL pública (sin barra final). Se usa para SEO, sitemap y Open Graph. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://alejandrocuartas.github.io/johnson",
  locale: "es_CO",
  brand: "Jhonson Architecture",
};

export const profile = {
  name: "Jhonson Vargas Castro",
  shortName: "Jhonson Vargas",
  title: "Arquitecto",
  tagline: "Arquitectura, espacio y diseño con intención.",
  intro:
    "Arquitecto enfocado en crear espacios funcionales, sensibles al contexto y visualmente significativos.",
  specialty: "Vivienda, residencia de obra y licencias de construcción",
  location: {
    city: "Guadalajara de Buga",
    region: "Valle del Cauca",
    country: "Colombia",
  },
  /** Disponibilidad laboral: editable. `open: false` oculta el indicador verde. */
  availability: {
    open: true,
    label: "Abierto a nuevas oportunidades",
  },
  portrait: {
    key: "perfil/retrato",
    alt: "Retrato de Jhonson Vargas Castro",
  },
  bio: [
    "Soy arquitecto y actualmente me desempeño como residente de obra encargado en un proyecto de vivienda por etapas: coordino contratistas, controlo y entrego materiales, recibo y verifico las actividades ejecutadas en campo y acompaño la entrega de las viviendas a sus propietarios.",
    "En paralelo desarrollo proyectos de diseño arquitectónico —vivienda unifamiliar y multifamiliar— y su planimetría técnica para la radicación de licencias de construcción ante curaduría urbana en Guadalajara de Buga.",
    "Me reconocen por la responsabilidad, la puntualidad y la precisión al interpretar y ejecutar instrucciones. Sigo aprendiendo y busco nuevos retos profesionales.",
  ],
  philosophy:
    "Diseñar pensando primero en quienes habitan el espacio: conservar lo que ya funciona, ordenar el programa con claridad y dar a cada vivienda áreas comunes, luz y lugares para estar.",
  approach: [
    {
      title: "Del plano a la obra",
      text: "La experiencia como residente me obliga a dibujar lo que se puede construir: cantidades, presupuesto y especificaciones forman parte del diseño.",
    },
    {
      title: "Norma y documentación",
      text: "Planimetría técnica completa —plantas, cubiertas, fachadas y cortes— preparada para cumplir los requisitos de curaduría.",
    },
    {
      title: "Espacio común",
      text: "Zonas sociales, recorridos y vegetación como parte central del programa, desde la vivienda unifamiliar hasta el espacio público.",
    },
  ],
  interests: [
    "Vivienda unifamiliar y multifamiliar",
    "Dirección y residencia de obra",
    "Espacio público y reasentamiento",
    "Licencias y normativa urbana",
    "Visualización arquitectónica",
  ],
  skills: [
    "Residencia y control de obra",
    "Coordinación de contratistas",
    "Memorias de cantidades de obra",
    "Presupuesto y licitación",
    "Bitácoras e informes técnicos",
    "Diseño arquitectónico",
    "Planimetría para curaduría",
    "Renders y presentación",
  ],
};

export const contact = {
  email: "arqjhonson@gmail.com",
  phone: "+57 315 292 6890",
  phoneHref: "tel:+573152926890",
  whatsapp: "https://wa.me/573152926890",
  /** Dejar vacío para ocultar. Ej.: https://www.linkedin.com/in/usuario */
  linkedin: "",
};

export const documents = {
  cv: "/docs/jhonson-vargas-cv.pdf",
  portfolio: "/docs/jhonson-vargas-portafolio.pdf",
};

/** Sección de contratación. */
export const hiring = {
  roles: ["Residente de obra", "Arquitecto diseñador", "Auxiliar de dirección de obra"],
  // POR CONFIRMAR: modalidad y movilidad no figuran en el PDF.
  modality: "Presencial o híbrida",
  mobility: "Guadalajara de Buga y municipios del Valle del Cauca",
  specialization: "Vivienda y ejecución de obra",
  summary:
    "Experiencia en obra (residencia, cantidades, presupuesto e informes) combinada con diseño arquitectónico y trámite de licencias de construcción.",
};

/** Experiencia laboral tal como aparece en el PDF (mes-año de inicio). */
export const experience: ExperienceItem[] = [
  {
    role: "Residente de obra encargado",
    project: "Proyecto de vivienda — Etapas 1 y 2",
    start: "08/2025",
    current: true,
    highlights: [
      "Apoyo en la elaboración y el control del presupuesto de la Etapa 2.",
      "Gestión y coordinación de contratistas; control y entrega de materiales.",
      "Recepción y verificación de las actividades ejecutadas en campo.",
      "Responsable de la ejecución de la Etapa 2 y de la entrega de las viviendas de la Etapa 1, cumpliendo cronogramas, especificaciones técnicas y estándares de calidad.",
    ],
  },
  {
    role: "Apoyo a residente de obra",
    project: "Vivienda multifamiliar",
    start: "09/2024",
    highlights: [
      "Memorias de cantidades, informes y gestión de obra.",
      "Elaboración de presupuesto para licitación de la Universidad Nacional, sede Palmira.",
    ],
  },
  {
    role: "Auxiliar de residente de obra",
    project: "Palacio de Justicia de Buga",
    start: "07/2024",
    highlights: [
      "Memorias de cantidades de obra y gestión documental.",
      "Actualización de bitácoras y elaboración de informes técnicos.",
      "Desarrollo de diseños faltantes en unidades sanitarias.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    title: "Arquitectura",
    // POR CONFIRMAR: el PDF no indica la institución.
    institution: undefined,
    year: "2025",
    detail: "Trabajo de grado: Zanjón de Lechugas — reasentamiento y espacio público.",
  },
];

/**
 * Herramientas. Solo se muestran las que tienen `enabled: true`.
 * Las seis primeras aparecen en el PDF; el nivel se interpretó de sus barras
 * de habilidad y se expresa con palabras, sin porcentajes.
 */
export const tools: Tool[] = [
  { name: "AutoCAD", level: "Avanzado", enabled: true },
  { name: "SketchUp", level: "Avanzado", enabled: true },
  { name: "Lumion", level: "Avanzado", enabled: true },
  { name: "Photoshop", level: "Avanzado", enabled: true },
  { name: "Illustrator", level: "Avanzado", enabled: true },
  { name: "Revit", level: "Intermedio", enabled: true },
  { name: "Rhino", level: "Básico", enabled: false },
  { name: "Archicad", level: "Básico", enabled: false },
  { name: "Enscape", level: "Básico", enabled: false },
  { name: "V-Ray", level: "Básico", enabled: false },
  { name: "BIM", level: "Básico", enabled: false },
];

export const navigation = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Contacto", href: "/#contacto" },
];
