import Link from "next/link";
import { navigation, profile, site } from "@/content/site";
import { asset } from "@/lib/paths";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="shell grid-12 gap-y-8 py-10">
        <div className="col-span-full flex items-center gap-3 md:col-span-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/brand/mark.png")} alt="" width={22} height={20} className="h-5 w-auto" loading="lazy" />
          <p className="eyebrow">{site.brand}</p>
        </div>
        <nav aria-label="Pie de página" className="col-span-full md:col-span-4">
          <ul className="eyebrow flex flex-wrap gap-x-6 gap-y-2 text-muted">
            {navigation.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-ink">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <p className="eyebrow col-span-full text-muted md:col-span-4 md:text-right">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="col-span-full max-w-2xl text-xs leading-relaxed text-muted">
          Las imágenes de proyectos son renders, plantas ambientadas y planos de diseño; no son fotografías de obras construidas.
        </p>
      </div>
    </footer>
  );
}
