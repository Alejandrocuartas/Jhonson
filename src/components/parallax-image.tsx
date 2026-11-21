"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { ImageAsset } from "@/content/types";

type Props = {
  image: ImageAsset;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Recorrido del desplazamiento en % de la altura. */
  strength?: number;
  contain?: boolean;
};

/**
 * Imagen que se desplaza levemente dentro de su contenedor al hacer scroll.
 * Solo usa transform (sin layout) y se desactiva con prefers-reduced-motion.
 */
export function ParallaxImage({ image, sizes, className = "", priority, strength = 6, contain }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-x-0"
        style={reduce || contain ? { top: 0, bottom: 0 } : { y, top: `-${strength}%`, bottom: `-${strength}%` }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={contain ? "object-contain p-[6%]" : "object-cover"}
        />
      </motion.div>
    </div>
  );
}
