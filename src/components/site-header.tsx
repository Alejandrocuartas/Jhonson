"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, profile } from "@/content/site";
import { asset } from "@/lib/paths";
import { MobileNavigation } from "./mobile-navigation";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-header border-b transition-[background-color,border-color] duration-500 ${
        scrolled ? "border-line bg-paper/90 backdrop-blur-sm" : "border-transparent bg-paper/0"
      }`}
    >
      <div className="shell flex h-full items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${profile.name}, inicio`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/brand/mark.png")} alt="" width={22} height={20} className="h-5 w-auto" />
          <span className="font-display text-[0.95rem] font-semibold uppercase tracking-[0.18em]">
            {profile.shortName}
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navigation.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="eyebrow text-muted transition-colors duration-300 hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNavigation />
      </div>
    </header>
  );
}
