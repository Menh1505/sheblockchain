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
      <div className="mx-auto w-full rounded-4xl border border-gray-700 bg-gray-800/90 shadow-[0_14px_40px_rgba(16,63,47,0.10)] backdrop-blur">
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
                className="text-sm font-extrabold uppercase tracking-[0.14em] text-white transition hover:text-purple-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border-2 border-white bg-purple-600 px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[4px_4px_0_#8b5cf6] transition hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_#8b5cf6] sm:inline-flex"
            >
              Get Started
            </a>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((value) => !value)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-gray-800 text-white shadow-[4px_4px_0_#8b5cf6] transition hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_#8b5cf6] lg:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition ${isMenuOpen ? "translate-y-1.75 rotate-45" : ""}`}
                />
                <span
                  className={`absolute left-0 top-1.75 h-0.5 w-5 bg-white transition ${isMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`absolute left-0 top-3.5 h-0.5 w-5 bg-white transition ${isMenuOpen ? "-translate-y-1.75 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-gray-700 px-5 py-5 lg:hidden">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl border border-gray-600 bg-gray-700 px-4 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-gray-600"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full border-2 border-black dark:border-white bg-purple-600 px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-black dark:text-white shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#8b5cf6]"
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
