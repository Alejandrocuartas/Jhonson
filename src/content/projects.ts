/**
 * Proyectos del portafolio. Textos e imágenes tomados de "Portafolio Jhonson.pdf".
 * Para añadir un proyecto: agrega sus imágenes a /public/images/<slug>/ (o usa
 * scripts/extract_assets.py), regístralas en image-manifest.json y añade un
 * objeto a este arreglo. El layout se adapta solo.
 *
 * Todas las imágenes de vivienda son renders o planos de proyecto: ninguna es
 * fotografía de obra construida, y así se rotulan en el sitio.
 */
import { img } from "@/lib/images";
import type { Project } from "./types";

const render = (key: string, alt: string, caption?: string) => img(key, alt, { kind: "render", caption });
const plano = (key: string, alt: string, caption?: string) => img(key, alt, { kind: "plano", caption });
const diagrama = (key: string, alt: string, caption?: string) => img(key, alt, { kind: "diagrama", caption });

export const projects: Project[] = [
  {
    slug: "zanjon-de-lechugas",
    number: "01",
    name: "Zanjón de Lechugas",
    year: 2025,
    location: "Guadalajara de Buga",
    typology: "Espacio público y vivienda de reasentamiento",
    category: "academico",
    status: "academico",
    role: "Autor — trabajo de grado",
    responsibilities: [
      "Diagnóstico de la zona de invasión sobre el zanjón",
      "Propuesta urbana de espacio público",
      "Diseño de la agrupación de 200 viviendas de reasentamiento",
      "Plantas, cortes, fachadas, axonometrías y renders",
    ],
    summary:
      "Recuperación de una zona de invasión sobre el zanjón de Lechugas: reubicación de las viviendas y un nuevo espacio público con canchas, plazoletas y grandes zonas verdes.",
    cover: render("zanjon/render-canal", "Render del sendero peatonal junto al canal del zanjón, con deck de madera y zonas de estancia"),
    coverLayout: "wide",
    featured: true,
    caseStudy: {
      problem:
        "Un asentamiento informal ocupaba las márgenes del zanjón de Lechugas, una franja que el municipio percibía como un problema: viviendas en riesgo, el cauce sin espacio público y un borde urbano deteriorado.",
      concept:
        "Separar dos problemas que estaban superpuestos: devolver el borde del zanjón a la ciudad como espacio público y ofrecer a las familias reubicadas un lugar estratégico, con zonas sociales y deportivas propias.",
      process: [
        {
          title: "Componente urbano",
          description: "Planta del corredor del zanjón y axonometrías de los espacios lúdicos, deportivos y sociales.",
          variant: "planos",
          images: [
            plano("zanjon/planta-urbana", "Planta urbana del corredor del zanjón con zonas verdes, plazoletas y canchas", "Planta urbana del corredor"),
            diagrama("zanjon/axo-urbano-01", "Axonometría de plazoleta y zona deportiva", "Axonometría — plazoleta"),
            diagrama("zanjon/axo-urbano-02", "Axonometría del corredor verde junto al canal", "Axonometría — corredor verde"),
            diagrama("zanjon/axo-urbano-03", "Axonometría de zona social con cubierta", "Axonometría — zona social"),
          ],
        },
        {
          title: "Componente arquitectónico",
          description: "Implantación de la agrupación de vivienda y su espacio público asociado.",
          variant: "planos",
          images: [
            plano("zanjon/implantacion-vivienda", "Implantación de la agrupación de 200 viviendas con glorieta de acceso", "Implantación general"),
            diagrama("zanjon/axo-vivienda-01", "Axonometría de la agrupación con piscina y zonas verdes", "Axonometría — agrupación"),
            diagrama("zanjon/axo-vivienda-02", "Axonometría de una manzana de vivienda", "Axonometría — manzana"),
            diagrama("zanjon/axo-vivienda-03", "Axonometría de las hileras de vivienda con cubiertas fotovoltaicas", "Axonometría — hileras de vivienda"),
          ],
        },
        {
          title: "Tipología de vivienda",
          variant: "planos",
          images: [
            plano("zanjon/plantas-tipologia", "Plantas arquitectónicas de primer y segundo piso de la tipología", "Planta piso 1 y piso 2"),
            plano("zanjon/cortes-fachadas", "Cortes A-A, B-B, 1-1 y 2-2 y fachadas principal y posterior", "Cortes y fachadas"),
            diagrama("zanjon/axo-tipologia-01", "Axonometría seccionada de la vivienda", "Axonometría seccionada"),
            diagrama("zanjon/axo-tipologia-02", "Axonometría de la agrupación de cuatro viviendas", "Agrupación tipo"),
            diagrama("zanjon/axo-tipologia-03", "Axonometría exterior de la vivienda con cubierta curva", "Volumetría"),
          ],
        },
      ],
      solution: [
        "Reubicación de las viviendas invasoras en un lote estratégico, con 200 unidades de vivienda.",
        "Espacio público lineal a lo largo del zanjón: canchas deportivas, plazoletas, senderos y grandes zonas verdes.",
        "Zonas sociales y deportivas propias para la nueva agrupación, pensadas para mejorar la calidad de vida de las familias reubicadas.",
      ],
      result: [
        {
          title: "Renders",
          images: [
            render("zanjon/render-aereo", "Vista aérea del corredor verde y las zonas de estancia", "Vista aérea del corredor"),
            render("zanjon/render-plazoleta", "Plazoleta arborizada junto a la vía", "Plazoleta"),
            render("zanjon/render-sendero", "Sendero adoquinado con bancas y vegetación", "Sendero"),
            render("zanjon/render-acceso", "Zona de juegos y plazoleta arborizada", "Zona lúdica"),
            render("zanjon/render-canal", "Deck peatonal junto al canal con mesas y parasoles", "Deck junto al canal"),
          ],
        },
      ],
      learnings: [
        "Lectura de un problema urbano y social antes que de un programa arquitectónico.",
        "Trabajo en dos escalas: corredor urbano y unidad de vivienda.",
        "Representación completa: plantas, cortes, fachadas, axonometrías y renders.",
      ],
    },
  },
  {
    slug: "horizonte-ciudadela",
    number: "04",
    name: "Horizonte Ciudadela",
    year: 2026,
    location: "Guadalajara de Buga",
    typology: "Vivienda multifamiliar con comercio",
    category: "profesional",
    status: "diseno",
    role: "Diseño arquitectónico",
    responsibilities: ["Diseño arquitectónico de los cuatro niveles", "Plantas arquitectónicas", "Renders de fachada"],
    summary:
      "Edificio de cuatro niveles: parqueadero y local comercial en primer piso, planta tipo en los pisos 2 y 3 y una vivienda más amplia en el último nivel.",
    cover: render("horizonte/render-fachada", "Render de la fachada del edificio Horizonte Ciudadela, cuatro niveles con balcones"),
    coverLayout: "tall",
    featured: true,
    caseStudy: {
      problem:
        "Resolver en un lote urbano un programa mixto —comercio, parqueadero y vivienda— sin sacrificar la calidad de los apartamentos.",
      concept:
        "Apilar el programa por niveles: la base activa la calle, la planta tipo se repite con eficiencia y el último piso se libera para una vivienda más amplia.",
      process: [
        {
          title: "Plantas arquitectónicas",
          variant: "planos",
          images: [
            plano("horizonte/plantas", "Plantas arquitectónicas: piso 1, planta tipo pisos 2 y 3, y piso 4", "Planta piso 1 · Planta tipo pisos 2 y 3 · Planta piso 4"),
          ],
        },
      ],
      solution: [
        "Primer nivel con parqueadero y local comercial hacia la calle.",
        "Planta tipo en los niveles 2 y 3; un diseño más amplio en el último nivel.",
        "Cada vivienda cuenta con una amplia zona social con cocina integral, barra y sala.",
        "Cada habitación tiene vestier y balcón.",
      ],
      result: [
        {
          title: "Renders",
          images: [
            render("horizonte/render-fachada", "Fachada en perspectiva con muros laterales en concreto oscuro", "Perspectiva de fachada"),
            render("horizonte/render-frontal", "Fachada frontal con enchape en piedra y balcones", "Fachada frontal"),
            render("horizonte/render-nocturno", "Detalle nocturno del acceso y los balcones", "Acceso — vista nocturna"),
          ],
        },
      ],
      learnings: [
        "Organización de un programa mixto en vertical.",
        "Optimización de la planta tipo para repetirse en varios niveles.",
      ],
    },
  },
  {
    slug: "vivienda-el-arbolito",
    number: "03",
    name: "Vivienda El Arbolito",
    year: 2025,
    location: "Guadalajara de Buga",
    typology: "Vivienda unifamiliar — zonas comunes y fachada",
    category: "profesional",
    status: "diseno",
    role: "Diseño arquitectónico de zonas comunes y fachada",
    responsibilities: [
      "Diseño de zona BBQ y piscina",
      "Recorridos, materas y zonas verdes",
      "Diseño de la fachada principal y selección de materiales",
      "Planta arquitectónica, fachada y renders",
    ],
    summary:
      "Diseño de las zonas comunes —BBQ, piscina, recorridos y zonas verdes— y de la fachada principal, con materiales elegidos para generar contraste.",
    cover: render("arbolito/render-fachada", "Render de la fachada principal de Vivienda El Arbolito con garaje doble y enchape en piedra"),
    coverLayout: "wide",
    featured: true,
    caseStudy: {
      problem:
        "Los clientes buscaban zonas comunes para el encuentro —BBQ, piscina, recorridos y zonas verdes— y un nuevo diseño para la fachada principal.",
      concept:
        "Tratar el patio como una secuencia de recorridos entre la BBQ, la piscina y las zonas verdes, y la fachada como un juego de contrastes de material.",
      process: [
        {
          title: "Planta y fachada",
          variant: "planos",
          images: [
            plano("arbolito/planta-arquitectonica", "Planta arquitectónica con BBQ, piscina, recorridos y zonas verdes", "Planta arquitectónica"),
            plano("arbolito/fachada", "Fachada principal de la vivienda", "Fachada principal"),
          ],
        },
      ],
      solution: [
        "Zona BBQ y piscina como núcleo social del patio.",
        "Recorridos, materas y zonas verdes según los requerimientos de los clientes.",
        "Fachada principal con materiales escogidos para generar contrastes y una mejor estética.",
      ],
      result: [
        {
          title: "Zonas comunes",
          images: [
            render("arbolito/render-bbq", "Zona BBQ con pérgola metálica y barra", "Zona BBQ"),
            render("arbolito/render-patio", "Patio con pérgola, sendero y zona de estar", "Patio y recorridos"),
            render("arbolito/render-jardin", "Jardinera lineal y muro en piedra", "Jardín"),
            render("arbolito/render-cocina", "Barra y cocina exterior bajo pérgola", "Barra exterior"),
          ],
        },
        {
          title: "Fachada",
          images: [
            render("arbolito/render-fachada", "Fachada principal con garaje doble", "Fachada principal"),
            render("arbolito/render-garaje-01", "Perspectiva de la fachada y el garaje", "Perspectiva"),
            render("arbolito/render-garaje-02", "Vista frontal del acceso vehicular", "Acceso vehicular"),
            render("arbolito/render-garaje-03", "Garaje cubierto con dos vehículos", "Garaje cubierto"),
            render("arbolito/render-fachada-02", "Detalle de vanos verticales en la fachada", "Detalle de fachada"),
            render("arbolito/render-fachada-03", "Ventanal y enchape en piedra de la fachada", "Materialidad"),
          ],
        },
      ],
      learnings: [
        "Diseño a partir de requerimientos concretos de clientes.",
        "Selección de materiales y control del contraste en fachada.",
      ],
    },
  },
  {
    slug: "casa-mirador-de-turpiales",
    number: "02",
    name: "Casa Mirador de Turpiales",
    year: 2026,
    location: "Guadalajara de Buga",
    typology: "Vivienda unifamiliar — intervención",
    category: "profesional",
    status: "diseno",
    role: "Diseño arquitectónico",
    responsibilities: [
      "Diseño arquitectónico conservando la estructura existente",
      "Plantas técnicas de piso 1 y piso 2",
      "Plantas ambientadas y renders",
    ],
    summary:
      "Vivienda para una familia de tres personas que conserva gran parte de la estructura existente e incorpora piscina, zona BBQ, estudio y salas de estar.",
    cover: render("mirador/render-fachada", "Render de la Casa Mirador de Turpiales, volumen blanco de dos pisos con ventanales"),
    coverLayout: "square",
    featured: true,
    caseStudy: {
      problem:
        "Adaptar una casa existente a una familia de tres personas, reorganizando el programa y conservando gran parte de la estructura.",
      concept:
        "Equilibrar lo común y lo privado: espacios abiertos para compartir en torno a la piscina y la BBQ, y zonas privadas acogedoras para estudiar y descansar.",
      process: [
        {
          title: "Planos técnicos",
          variant: "planos",
          images: [plano("mirador/planos-tecnicos", "Plantas arquitectónicas técnicas de piso 1 y piso 2", "Planta piso 1 · Planta piso 2")],
        },
        {
          title: "Plantas ambientadas",
          images: [
            render("mirador/planta-render-01", "Planta ambientada del primer piso con garaje y piscina", "Planta piso 1"),
            render("mirador/planta-render-02", "Planta ambientada del segundo piso con habitaciones y estudio", "Planta piso 2"),
          ],
        },
      ],
      solution: [
        "Conservación de gran parte de la estructura existente.",
        "Espacios comunes para el disfrute: piscina y zona BBQ.",
        "Espacios privados acogedores con zonas de estudio y salas de estar, diseñados según las necesidades de los habitantes.",
      ],
      result: [
        {
          title: "Renders",
          images: [
            render("mirador/render-fachada", "Fachada en esquina con ventanales de piso a techo", "Fachada en esquina"),
            render("mirador/render-esquina", "Volumetría de la vivienda desde la calle", "Volumetría"),
            render("mirador/render-frontal", "Fachada frontal con balcón y garaje", "Fachada frontal"),
          ],
        },
      ],
      learnings: [
        "Diseño sobre preexistencias: decidir qué conservar y qué transformar.",
        "Programa doméstico ajustado a una familia concreta.",
      ],
    },
  },
  {
    slug: "portal-de-san-jeronimo",
    number: "05",
    name: "Portal de San Jerónimo",
    year: 2025,
    location: "Guadalajara de Buga",
    typology: "Vivienda — obra nueva",
    category: "profesional",
    status: "licencia",
    role: "Diseño arquitectónico, planimetría y trámite de licencia",
    responsibilities: [
      "Diseño arquitectónico",
      "Planimetría técnica completa para curaduría",
      "Acompañamiento en todo el proceso de la licencia",
    ],
    summary:
      "Proyecto de obra nueva para radicación de licencia de construcción, con diseño arquitectónico y toda su planimetría técnica.",
    cover: plano("san-jeronimo/plantas", "Plantas arquitectónicas del Portal de San Jerónimo"),
    coverLayout: "wide",
    featured: false,
    caseStudy: {
      problem: "Llevar un proyecto de obra nueva desde el diseño hasta la radicación de su licencia de construcción.",
      concept: "Un diseño claro y documentado que cumpla los requisitos de la curaduría desde el primer plano.",
      process: [
        {
          title: "Planimetría para curaduría",
          variant: "planos",
          images: [
            plano("san-jeronimo/plantas", "Plantas de piso 1, piso 2 y cubierta", "Plantas piso 1, piso 2 y cubierta"),
            plano("san-jeronimo/fachada-cortes", "Fachada principal y cortes A-A y B-B", "Fachada y cortes A-A, B-B"),
          ],
        },
      ],
      solution: [
        "Diseño arquitectónico de obra nueva.",
        "Planimetría técnica completa conforme a los requisitos de la curaduría.",
        "Acompañamiento en todo el proceso de la licencia.",
      ],
      result: [],
      learnings: ["Conocimiento de los requisitos de radicación ante curaduría urbana.", "Producción de planimetría técnica completa."],
    },
  },
  {
    slug: "esencia-el-jardin",
    number: "06",
    name: "Esencia El Jardín",
    year: 2026,
    location: "Guadalajara de Buga",
    typology: "Vivienda — obra nueva",
    category: "profesional",
    status: "licencia",
    role: "Diseño arquitectónico y planimetría técnica",
    responsibilities: ["Diseño arquitectónico", "Planimetría técnica para la curaduría urbana de Buga"],
    summary:
      "Obra nueva para radicación de licencia ante la curaduría urbana de Buga: diseño arquitectónico y planimetría técnica completa.",
    cover: plano("esencia/plantas", "Plantas arquitectónicas de Esencia El Jardín"),
    coverLayout: "square",
    featured: false,
    caseStudy: {
      problem: "Desarrollar una vivienda de obra nueva con la documentación exigida por la curaduría urbana de Buga.",
      concept: "Distribución compacta en dos niveles, documentada en plantas, cubierta, fachada y cortes.",
      process: [
        {
          title: "Planimetría para curaduría",
          variant: "planos",
          images: [
            plano("esencia/plantas", "Plantas de piso 1, piso 2 y cubierta", "Plantas piso 1, piso 2 y cubierta"),
            plano("esencia/fachada-cortes", "Fachada principal y cortes A-A y B-B", "Fachada y cortes A-A, B-B"),
          ],
        },
      ],
      solution: [
        "Diseño arquitectónico de obra nueva en dos niveles.",
        "Planimetría técnica que cumple los requisitos de la curaduría urbana de Buga.",
      ],
      result: [],
      learnings: ["Documentación técnica orientada a trámite.", "Cortes y fachadas como verificación del diseño."],
    },
  },
  {
    slug: "casa-dais-del-turpial",
    number: "07",
    name: "Casa Dais del Turpial",
    year: 2026,
    location: "Guadalajara de Buga",
    typology: "Vivienda unifamiliar — modificación",
    category: "profesional",
    status: "licencia",
    role: "Diseño arquitectónico y trámite de licencia",
    responsibilities: [
      "Diseño arquitectónico",
      "Radicación de la licencia de construcción (modificación)",
      "Acompañamiento durante todo el proceso",
    ],
    summary:
      "Vivienda unifamiliar con diseño arquitectónico y radicación de licencia de construcción en modalidad de modificación.",
    cover: render("dais/planta-render-01", "Planta ambientada del primer piso de Casa Dais del Turpial"),
    coverLayout: "tall",
    featured: false,
    caseStudy: {
      problem: "Modificar una vivienda unifamiliar existente y obtener la licencia correspondiente.",
      concept: "Distribución en dos niveles, comunicada con plantas técnicas para el trámite y plantas ambientadas para el cliente.",
      process: [
        {
          title: "Planimetría para curaduría",
          variant: "planos",
          images: [plano("dais/plantas", "Plantas técnicas de piso 1 y piso 2", "Planta piso 1 · Planta piso 2")],
        },
      ],
      solution: [
        "Diseño arquitectónico de la modificación.",
        "Radicación de la licencia de construcción y acompañamiento durante todo el proceso.",
      ],
      result: [
        {
          title: "Plantas ambientadas",
          images: [
            render("dais/planta-render-01", "Planta ambientada del primer piso con parqueo de motos, cocina y sala", "Planta piso 1"),
            render("dais/planta-render-02", "Planta ambientada del segundo piso con habitaciones y estudio", "Planta piso 2"),
          ],
        },
      ],
      learnings: ["Trámite de licencias en modalidad de modificación.", "Comunicación del proyecto al cliente con plantas ambientadas."],
    },
  },
];

export const categoryLabels: Record<Project["category"], string> = {
  academico: "Académico",
  profesional: "Profesional",
  concurso: "Concurso",
  personal: "Personal",
};

export const statusLabels: Record<Project["status"], string> = {
  conceptual: "Conceptual",
  academico: "Académico",
  diseno: "Proyecto de diseño",
  licencia: "Radicación de licencia",
  "en-desarrollo": "En desarrollo",
  construido: "Construido",
};

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export function getAdjacentProjects(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}
