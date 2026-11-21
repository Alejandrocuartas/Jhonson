import type { NextConfig } from "next";

// GitHub Pages sirve el sitio bajo /<repo>. En local el basePath queda vacío.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  turbopack: {
    rules: {
      "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" },
    },
  },
  images: {
    // Exportación estática: las variantes WebP se generan previamente
    // (ver scripts/README) y el loader elige el tamaño adecuado.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [640, 960, 1280, 1920, 2560],
    imageSizes: [320],
  },
};

export default nextConfig;
