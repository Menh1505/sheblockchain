import { activities, advantages, highlights, partners } from "./data";
import { ActivitiesSection } from "./activities-section";
import { CompanyOverviewSection } from "./company-overview-section";
import { CompetitiveAdvantagesSection } from "./competitive-advantages-section";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";
import { MilestonesSection } from "./milestones-section";
import { MissionVisionSection } from "./mission-vision-section";
import { PartnersSection } from "./partners-section";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f6faf4] text-[#1b3f2f]">
      <Header />
      <Hero highlights={highlights} />
      <MissionVisionSection />
      <CompanyOverviewSection />
      <ActivitiesSection activities={activities} />
      <CompetitiveAdvantagesSection advantages={advantages} />
      <PartnersSection partners={partners} />
      <MilestonesSection />
      <Footer />
    </div>
  );
}
