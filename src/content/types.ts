/** Modelos tipados del contenido del portafolio. */

export type ImageKind = "render" | "plano" | "diagrama" | "fotografia";

export interface ImageAsset {
  /** Ruta base sin sufijo de tamaño, p. ej. /images/horizonte/render-fachada */
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  /** Tipo de documento: evita presentar un render como obra construida. */
  kind?: ImageKind;
}

export type ProjectCategory = "academico" | "profesional" | "concurso" | "personal";

export type ProjectStatus =
  | "conceptual"
  | "academico"
  | "diseno"
  | "licencia"
  | "en-desarrollo"
  | "construido";

export interface GallerySection {
  title: string;
  description?: string;
  images: ImageAsset[];
  /** "planos" usa fondo blanco y ampliación prioritaria. */
  variant?: "imagenes" | "planos";
}

export interface Project {
  slug: string;
  number: string;
  name: string;
  year: number;
  location: string;
  typology: string;
  category: ProjectCategory;
  status: ProjectStatus;
  /** Rol desempeñado, en una línea. */
  role: string;
  /** Responsabilidades concretas. */
  responsibilities: string[];
  area?: string;
  collaborators?: string[];
  summary: string;
  cover: ImageAsset;
  /** Orientación de la portada en la galería editorial. */
  coverLayout: "wide" | "tall" | "square";
  featured: boolean;
  caseStudy: {
    problem: string;
    concept: string;
    process: GallerySection[];
    solution: string[];
    result: GallerySection[];
    learnings: string[];
  };
  tools?: string[];
}

export type SkillLevel = "Avanzado" | "Intermedio" | "Básico";

export interface Tool {
  name: string;
  level: SkillLevel;
  /** Evidencia: dónde se ve aplicada la herramienta. */
  evidence?: string;
  /** Solo se muestran las herramientas con enabled = true. */
  enabled: boolean;
}

export interface ExperienceItem {
  role: string;
  organization?: string;
  project?: string;
  start: string;
  end?: string;
  current?: boolean;
  location?: string;
  highlights: string[];
}

export interface EducationItem {
  title: string;
  institution?: string;
  year?: string;
  detail?: string;
}
