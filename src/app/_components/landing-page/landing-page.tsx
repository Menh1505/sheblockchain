import { activities, advantages, highlights, partners, services } from "./data";
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

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f6faf4] text-[#1b3f2f]">
      <Header />
      <Hero highlights={highlights} />
      <PartnersSection partners={partners} />
      <MissionVisionSection />
      <CompanyOverviewSection services={services} />
      <ActivitiesSection activities={activities} />
      <CompetitiveAdvantagesSection advantages={advantages} />
      <TeamSection />
      <MilestonesSection />
      <Footer />
    </div>
  );
}
