/** Prefija rutas de archivos estáticos (PDF, logos) con el basePath de GitHub Pages. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (path: string) => `${basePath}${path}`;
