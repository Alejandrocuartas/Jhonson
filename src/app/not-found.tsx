import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[80vh] flex-col justify-center pt-header">
      <p className="eyebrow text-muted">Error 404</p>
      <h1 className="mt-6 font-display text-h1 font-medium leading-[0.95] tracking-[-0.04em]">
        Este espacio <span className="font-serif font-normal italic">no existe.</span>
      </h1>
      <Link href="/" className="link-underline mt-10 self-start">Volver al inicio</Link>
    </section>
  );
}
