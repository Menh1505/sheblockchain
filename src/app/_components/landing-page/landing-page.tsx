"use client";

import { activities, highlights, partners, services } from "./data";
import { ActivitiesSection } from "./activities-section";
import { CompanyOverviewSection } from "./company-overview-section";
import { CompetitiveAdvantagesSection } from "./competitive-advantages-section";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";
import { MilestonesSection } from "./milestones-section";
import { MissionVisionSection } from "./mission-vision-section";
import { PartnersSection } from "./partners-section";
import { TeamSection } from "./team";
import { NetworkCanvas } from "./network-canvas";
import { useEffect, useRef, useState } from "react";

const sectionAnchors = [
  "home",
  "partners",
  "mission",
  "services",
  "activities",
  "advantages",
  "team",
  "milestones",
  "contact",
] as const;

export function LandingPage() {
  const [isHeroActive, setIsHeroActive] = useState(true);
  const bgRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Parallax: background moves slower than content, glow at mid speed
  useEffect(() => {
    let ticking = false;
    let currentSection = 0;
    const totalSections = sectionAnchors.length;

    const onSectionChange = (index: number) => {
      currentSection = index;
      if (!ticking) {
        requestAnimationFrame(() => {
          const progress = currentSection / (totalSections - 1);
          // background travels 30% of total scroll distance (slower = parallax)
          const bgY = progress * 30;
          // glow travels 55% (mid speed)
          const glowY = progress * 55;
          if (bgRef.current) bgRef.current.style.transform = `translateY(${bgY}%)`;
          if (glowRef.current) glowRef.current.style.transform = `translateY(${glowY}%)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    // expose so fullpage callbacks can call it
    (window as Window & { __sheParallax?: (i: number) => void }).__sheParallax = onSectionChange;

    return () => {
      delete (window as Window & { __sheParallax?: (i: number) => void }).__sheParallax;
    };
  }, []);

  useEffect(() => {
    let resizeObserver: ResizeObserver | null = null;
    let isMounted = true;
    let fullPageInstance: import("fullpage.js").FullPageInstance | null = null;

    const updateHeaderOffset = () => {
      const headerElement = document.getElementById("header");

      if (!headerElement) {
        return;
      }

      document.documentElement.style.setProperty("--landing-header-offset", `${headerElement.offsetHeight}px`);
    };

    updateHeaderOffset();

    const headerElement = document.getElementById("header");
    if (headerElement && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        updateHeaderOffset();
      });
      resizeObserver.observe(headerElement);
    }

    if (typeof window !== "undefined") {
      import("fullpage.js").then((fullpage) => {
        if (!isMounted) {
          return;
        }

        fullPageInstance = new fullpage.default("#fullpage", {
          licenseKey: "gplv3-license",
          autoScrolling: true,
          scrollHorizontally: true,
          navigation: true,
          navigationPosition: "right",
          showActiveTooltip: true,
          slidesNavigation: true,
          slidesNavPosition: "bottom",
          controlArrows: true,
          verticalCentered: false,
          sectionsColor: Array(sectionAnchors.length).fill("transparent"),
          anchors: [...sectionAnchors],
          menu: "#menu",
          fixedElements: "#header",
          responsiveWidth: 768,
          responsiveHeight: 600,
          afterLoad: (_origin, destination) => {
            setIsHeroActive(destination.anchor === "home");
            const idx = sectionAnchors.indexOf(destination.anchor as typeof sectionAnchors[number]);
            (window as Window & { __sheParallax?: (i: number) => void }).__sheParallax?.(idx);
          },
          onLeave: (_origin, destination) => {
            setIsHeroActive(destination.anchor === "home");
            const idx = sectionAnchors.indexOf(destination.anchor as typeof sectionAnchors[number]);
            (window as Window & { __sheParallax?: (i: number) => void }).__sheParallax?.(idx);
          },
        });
      });
    }

    return () => {
      isMounted = false;
      resizeObserver?.disconnect();

      if (fullPageInstance) {
        fullPageInstance.destroy("all");
        fullPageInstance = null;
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      {/* ── Layer 1: Cinematic network canvas — slowest parallax ── */}
      <div
        ref={bgRef}
        className="fixed inset-0 -z-20 will-change-transform transition-transform duration-700 ease-out"
        style={{ top: "-30%" }}
      >
        <NetworkCanvas className="h-[160%] w-full" />
      </div>

      {/* ── Layer 2: Volumetric glow orbs — mid-speed parallax ── */}
      <div
        ref={glowRef}
        className="fixed inset-0 -z-10 pointer-events-none will-change-transform transition-transform duration-500 ease-out"
        style={{ top: "-55%" }}
      >
        {/* top-left: warm indigo bloom */}
        <div className="absolute -left-[10vw] top-[5vh] h-[55vh] w-[55vw] rounded-full bg-indigo-600/8 blur-[140px]" />
        {/* center: cyan knowledge light */}
        <div className="absolute left-1/2 top-[30vh] h-[45vh] w-[45vw] -translate-x-1/2 rounded-full bg-cyan-500/7 blur-[120px]" />
        {/* right: violet depth accent */}
        <div className="absolute -right-[8vw] top-[55vh] h-[40vh] w-[40vw] rounded-full bg-violet-600/8 blur-[110px]" />
        {/* bottom: subtle teal anchor */}
        <div className="absolute left-1/3 top-[80vh] h-[30vh] w-[35vw] rounded-full bg-teal-500/5 blur-[100px]" />
      </div>
      <Header isHeroActive={isHeroActive} />
      <div id="fullpage">
        <div className="section pt-(--landing-header-offset,96px)" data-menuanchor="home">
          <Hero highlights={highlights} />
        </div>
        <div className="section" data-menuanchor="partners">
          <div className="pt-(--landing-header-offset,96px) h-full w-full flex items-center justify-center">
            <PartnersSection partners={partners} />
          </div>
        </div>
        <div className="section" data-menuanchor="mission">
          <div className="pt-(--landing-header-offset,96px) h-full w-full flex items-start justify-center overflow-y-auto">
            <MissionVisionSection />
          </div>
        </div>
        <div className="section" data-menuanchor="services">
          <div className="pt-(--landing-header-offset,96px) h-full w-full flex items-start justify-center overflow-y-auto">
            <CompanyOverviewSection services={services} />
          </div>
        </div>
        <div className="section" data-menuanchor="activities">
          <div className="pt-(--landing-header-offset,96px) h-full w-full flex items-center justify-center">
            <ActivitiesSection activities={activities} />
          </div>
        </div>
        <div className="section" data-menuanchor="advantages">
          <div className="pt-(--landing-header-offset,96px) h-full w-full flex items-center justify-center">
            <CompetitiveAdvantagesSection />
          </div>
        </div>
        <div className="section" data-menuanchor="team">
          <div className="pt-(--landing-header-offset,96px) h-full w-full flex items-center justify-center">
            <TeamSection />
          </div>
        </div>
        <div className="section" data-menuanchor="milestones">
          <div className="pt-(--landing-header-offset,96px) h-full w-full flex items-center justify-center">
            <MilestonesSection />
          </div>
        </div>
        <div className="section" data-menuanchor="contact">
          <div className="pt-(--landing-header-offset,96px) h-full w-full flex items-center justify-center">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
