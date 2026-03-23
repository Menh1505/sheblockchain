"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Mission", href: "#mission" },
  { label: "Services", href: "#services" },
  { label: "Activities", href: "#activities" },
  { label: "Team", href: "#team" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="header" className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full rounded-4xl border border-[#d8ebcb] bg-white/90 shadow-[0_14px_40px_rgba(16,63,47,0.10)] backdrop-blur">
        <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
          <Link href="#home" className="shrink-0">
            <Image
              src="/she-logo.png"
              alt="SHE Blockchain logo"
              width={220}
              height={86}
              className="h-auto w-30 sm:w-37.5 lg:w-42.5"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#24523f] transition hover:text-[#0f8a38]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border-2 border-black bg-[#8ed15f] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-black shadow-[4px_4px_0_#000] transition hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_#000] sm:inline-flex"
            >
              Get Started
            </a>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((value) => !value)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white text-black shadow-[4px_4px_0_#000] transition hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_#000] lg:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 bg-black transition ${isMenuOpen ? "translate-y-1.75 rotate-45" : ""}`}
                />
                <span
                  className={`absolute left-0 top-1.75 h-0.5 w-5 bg-black transition ${isMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`absolute left-0 top-3.5 h-0.5 w-5 bg-black transition ${isMenuOpen ? "-translate-y-1.75 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-[#d8ebcb] px-5 py-5 lg:hidden">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl border border-[#d8ebcb] bg-[#f6faf4] px-4 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-[#24523f] transition hover:bg-[#e8f3df]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full border-2 border-black bg-[#8ed15f] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-black shadow-[4px_4px_0_#000]"
              >
                Get Started
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
