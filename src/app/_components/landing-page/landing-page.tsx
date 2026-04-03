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
import { useEffect, useState } from "react";

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
          verticalCentered: true,
          sectionsColor: Array(sectionAnchors.length).fill("#111827"),
          anchors: [...sectionAnchors],
          menu: "#menu",
          fixedElements: "#header",
          responsiveWidth: 768,
          responsiveHeight: 600,
          afterLoad: (_origin, destination) => {
            setIsHeroActive(destination.anchor === "home");
          },
          onLeave: (_origin, destination) => {
            setIsHeroActive(destination.anchor === "home");
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
    <div className="relative min-h-screen bg-gray-900 text-white">
      <Header isHeroActive={isHeroActive} />
      <div id="fullpage">
        <div className="section pt-[var(--landing-header-offset,96px)]" data-menuanchor="home">
          <Hero highlights={highlights} />
        </div>
        <div className="section" data-menuanchor="partners">
          <PartnersSection partners={partners} />
        </div>
        <div className="section" data-menuanchor="mission">
          <MissionVisionSection />
        </div>
        <div className="section" data-menuanchor="services">
          <CompanyOverviewSection services={services} />
        </div>
        <div className="section" data-menuanchor="activities">
          <ActivitiesSection activities={activities} />
        </div>
        <div className="section" data-menuanchor="advantages">
          <CompetitiveAdvantagesSection />
        </div>
        <div className="section" data-menuanchor="team">
          <TeamSection />
        </div>
        <div className="section" data-menuanchor="milestones">
          <MilestonesSection />
        </div>
        <div className="section" data-menuanchor="contact">
          <Footer />
        </div>
      </div>
    </div>
  );
}
