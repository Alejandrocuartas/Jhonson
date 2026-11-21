import manifest from "@/content/image-manifest.json";
import type { ImageAsset } from "@/content/types";

type ManifestEntry = { src: string; width: number; height: number };
const entries = manifest as Record<string, ManifestEntry>;

/** Resuelve una imagen del manifiesto generado por scripts/extract_assets.py */
export function img(key: string, alt: string, extra: Partial<ImageAsset> = {}): ImageAsset {
  const entry = entries[key];
  if (!entry) throw new Error(`Imagen no encontrada en el manifiesto: ${key}`);
  return { ...entry, alt, ...extra };
}
