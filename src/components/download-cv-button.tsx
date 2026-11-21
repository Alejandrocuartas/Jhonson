import { ArrowDown } from "lucide-react";
import { documents } from "@/content/site";
import { asset } from "@/lib/paths";

type Props = {
  variant?: "solid" | "outline" | "text";
  label?: string;
  file?: keyof typeof documents;
  tone?: "light" | "dark";
  className?: string;
};

const fileNames = { cv: "CV-Jhonson-Vargas-Castro.pdf", portfolio: "Portafolio-Jhonson-Vargas-Castro.pdf" };

export function DownloadCVButton({ variant = "outline", label = "Descargar CV", file = "cv", tone = "light", className = "" }: Props) {
  const styles = {
    solid:
      tone === "dark"
        ? "bg-paper text-ink hover:bg-stone"
        : "bg-ink text-paper hover:bg-night/85",
    outline:
      tone === "dark"
        ? "border border-paper/30 text-paper hover:border-paper"
        : "border border-ink/25 text-ink hover:border-ink",
    text: "",
  }[variant];

  if (variant === "text") {
    return (
      <a href={asset(documents[file])} download={fileNames[file]} className={`link-underline inline-flex items-center gap-2 ${className}`}>
        {label} <span className="eyebrow opacity-75">PDF</span>
      </a>
    );
  }

  return (
    <a
      href={asset(documents[file])}
      download={fileNames[file]}
      className={`group inline-flex h-12 items-center justify-between gap-6 px-5 text-sm font-medium transition-colors duration-300 ${styles} ${className}`}
    >
      <span>{label}</span>
      <span className="flex items-center gap-2">
        <span className="eyebrow opacity-75">PDF</span>
        <ArrowDown aria-hidden className="size-4 transition-transform duration-500 ease-out group-hover:translate-y-0.5" strokeWidth={1.5} />
      </span>
    </a>
  );
}
