import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Instrument_Serif, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { contact, profile, site } from "@/content/site";
import { ogImage } from "@/lib/og";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const description = `${profile.title} en ${profile.location.city}, ${profile.location.country}. ${profile.specialty}. Portafolio de proyectos, experiencia y CV.`;

export const metadata: Metadata = {
  metadataBase: new URL(`${site.url}/`),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`,
  },
  description,
  authors: [{ name: profile.name }],
  keywords: ["arquitecto", "portafolio de arquitectura", "residente de obra", "Buga", "Valle del Cauca", "licencias de construcción", "vivienda"],
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: profile.name,
    title: `${profile.name} — ${profile.title}`,
    description,
    url: "./",
    images: [{ ...ogImage("home"), alt: "Render de Vivienda El Arbolito — Portafolio de Jhonson Vargas Castro, arquitecto" }],
  },
  twitter: { card: "summary_large_image", title: `${profile.name} — ${profile.title}`, description, images: [ogImage("home").url] },
};

export const viewport: Viewport = {
  themeColor: "#f6f5f1",
  colorScheme: "light",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: `mailto:${contact.email}`,
  telephone: contact.phone,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location.city,
    addressRegion: profile.location.region,
    addressCountry: "CO",
  },
  knowsAbout: profile.skills,
  ...(contact.linkedin ? { sameAs: [contact.linkedin] } : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${manrope.variable} ${inter.variable} ${instrument.variable} ${plexMono.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#contenido"
          className="eyebrow fixed left-3 top-3 z-[100] -translate-y-24 bg-ink px-4 py-3 text-paper transition-transform focus:translate-y-0"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
