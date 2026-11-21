// Loader para la exportación estática. Cada imagen existe en /public/images
// con sufijos -320, -640, -960, -1280, -1920 y -2560 (.webp).
const WIDTHS = [320, 640, 960, 1280, 1920, 2560];
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (!src.startsWith("/images/")) return `${basePath}${src}`;
  const w = WIDTHS.find((candidate) => candidate >= width) ?? WIDTHS[WIDTHS.length - 1];
  return `${basePath}${src}-${w}.webp`;
}
