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
import { useEffect } from "react";

export function LandingPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      import("fullpage.js").then((fullpage) => {
        const fullPageInstance = new fullpage.default("#fullpage", {
          autoScrolling: true,
          scrollHorizontally: true,
          navigation: true,
          navigationPosition: "right",
          showActiveTooltip: true,
          slidesNavigation: true,
          slidesNavPosition: "bottom",
          controlArrows: true,
          verticalCentered: true,
          sectionsColor: ["#111827", "#111827", "#111827", "#111827", "#111827", "#111827", "#111827", "#111827"],
          anchors: ["home", "partners", "mission", "services", "activities", "advantages", "team", "milestones"],
          menu: "#menu",
          responsiveWidth: 768,
          responsiveHeight: 600,
        });

        return () => {
          if (fullPageInstance && typeof fullPageInstance.destroy === "function") {
            fullPageInstance.destroy("all");
          }
        };
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div id="fullpage">
        <div className="section">
          <Hero highlights={highlights} />
        </div>
        <div className="section">
          <PartnersSection partners={partners} />
        </div>
        <div className="section">
          <MissionVisionSection />
        </div>
        <div className="section">
          <CompanyOverviewSection services={services} />
        </div>
        <div className="section">
          <ActivitiesSection activities={activities} />
        </div>
        <div className="section">
          <CompetitiveAdvantagesSection />
        </div>
        <div className="section">
          <TeamSection />
        </div>
        <div className="section">
          <MilestonesSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
