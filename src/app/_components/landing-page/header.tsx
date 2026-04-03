"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Partners", href: "#partners" },
  { label: "Mission", href: "#mission" },
  { label: "Services", href: "#services" },
  { label: "Activities", href: "#activities" },
  { label: "Advantages", href: "#advantages" },
  { label: "Team", href: "#team" },
  { label: "Milestones", href: "#milestones" },
] as const;

type HeaderProps = {
  isHeroActive: boolean;
};

export function Header({ isHeroActive }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="header" className="fixed inset-x-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto w-full rounded-4xl transition-all duration-300 ${isHeroActive
          ? "border border-[#00ff88]/20 bg-gray-800/90 shadow-[0_14px_40px_rgba(0,255,136,0.08)] backdrop-blur"
          : "border border-transparent bg-transparent shadow-none backdrop-blur-0"
          }`}
      >
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

          <nav id="menu" className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-extrabold uppercase tracking-[0.14em] text-white transition hover:text-[#00ff88]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border-2 border-[#00ff88] bg-[#00c853] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[4px_4px_0_#00ff88] transition hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_#00ff88] sm:inline-flex"
            >
              Get Started
            </a>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((value) => !value)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-gray-800 text-white shadow-[4px_4px_0_#00ff88] transition hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_#00ff88] lg:hidden"
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
          <div className={`px-5 py-5 lg:hidden ${isHeroActive ? "border-t border-gray-700" : "border-t border-white/10 bg-gray-900/95 backdrop-blur"}`}>
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
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
