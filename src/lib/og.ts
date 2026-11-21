import { site } from "@/content/site";

/** Imagen Open Graph (JPG 1200×630) generada en /public/og. */
export const ogImage = (name: string) => ({ url: `${site.url}/og/${name}.jpg`, width: 1200, height: 630 });
