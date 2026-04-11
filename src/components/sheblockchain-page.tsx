"use client";

import React from "react";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Handshake, Clock } from "lucide-react";
import styles from "./sheblockchain-page.module.css";
import { MilestonesSection } from "./milestones-section";
import { TeamSection } from "./team-section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type NavItem = {
  label: string;
  href: string;
  hasCaret?: boolean;
};

type Stat = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

type Feature = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  reverse?: boolean;
};

type StoryCard = {
  title: string;
  description: string;
  label: string;
  accent?: "light" | "blue";
  image: string;
};

type ResourceCard = {
  type: string;
  title: string;
  description: string;
  mediaLabel: string;
  cropClass?: string;
  large?: boolean;
};

const navItems: NavItem[] = [
  { label: "Programs", href: "#programs" },
  { label: "Services", href: "#services" },
  { label: "Partners", href: "#partners" },
  { label: "Mission", href: "#mission" },
];

const stats: Stat[] = [
  { icon: <Users size={32} strokeWidth={1.5} />, value: "30+", label: "clients served" },
  { icon: <Handshake size={32} strokeWidth={1.5} />, value: "50+", label: "ecosystem partners" },
  { icon: <Clock size={32} strokeWidth={1.5} />, value: "6+", label: "years in Web3" },
];

const features: Feature[] = [
  {
    eyebrow: "",
    title: "Learn Web3 skills. Build real careers.",
    description:
      "For students, job seekers, beginners, and experts. Join practical programs, gain industry exposure, and connect with real opportunities in blockchain.",
    cta: "Explore Programs",
    image: "/mission/mission.png",
  },
  {
    eyebrow: "",
    title: "Find talent, training, and trusted ecosystem support.",
    description:
      "For startups, blockchain projects, and organizations. Scale with advisory, upskilling, partnerships, and event-driven brand visibility.",
    cta: "Partner With Us",
    image: "/mission/vision.png",
    reverse: true,
  },
];

const storyCards: StoryCard[] = [
  {
    title: "Advisory Services",
    description:
      "Expert consulting shaped by 6+ years in Web3. Get practical guidance on strategy, growth, and ecosystem positioning.",
    label: "Service",
    accent: "light",
    image: "/act/act1.svg",
  },
  {
    title: "Training Programs",
    description:
      "Customized blockchain education for communities, teams, and institutions. Built for clarity, adoption, and measurable outcomes.",
    label: "Service",
    accent: "blue",
    image: "/act/act5.svg",
  },
];

const resources: ResourceCard[] = [
  {
    type: "05/2022",
    title: "Founded in Ho Chi Minh City",
    description:
      "S.H.E Blockchain launched with a mission to equip the next generation with Web3 skills and opportunity.",
    mediaLabel: "Milestone founded image placeholder",
    cropClass: "cropResourceEarth",
    large: true,
  },
  {
    type: "2023-2024",
    title: "Expanded partnerships and scaled programs",
    description:
      "We grew our network, strengthened delivery, and expanded education programs across the ecosystem.",
    mediaLabel: "Milestone expansion image placeholder",
    cropClass: "cropResourceArticle",
  },
  {
    type: "2025",
    title: "Global growth vision",
    description:
      "We are building a stronger bridge between young talent, startups, and blockchain opportunities worldwide.",
    mediaLabel: "Milestone global growth image placeholder",
    cropClass: "cropResourcePress",
  },
];

const partnerLogos = [
  { src: "/partners/ftu.svg", alt: "FTU" },
  { src: "/partners/greenwich.svg", alt: "Greenwich" },
  { src: "/partners/hca.svg", alt: "HCA" },
  { src: "/partners/hutech.svg", alt: "HUTECH" },
  { src: "/partners/moneyfi.svg", alt: "MoneyFi" },
  { src: "/partners/rmit.svg", alt: "RMIT" },
  { src: "/partners/sandbox.svg", alt: "Sandbox" },
  { src: "/partners/smu.svg", alt: "SMU" },
  { src: "/partners/twendee.svg", alt: "Twendee" },
  { src: "/partners/ueh.svg", alt: "UEH" },
  { src: "/partners/vanlang.svg", alt: "Van Lang" },
  { src: "/partners/wallacy.svg", alt: "Wallacy" },
];

const footerColumns = [
  {
    title: "Programs",
    links: ["Blockchain Training Courses", "Industrial Experience Program", "Unitour Program"],
  },
  {
    title: "Services",
    links: ["Advisory Services", "Training Programs", "Networking & Partnerships", "Events & Branding"],
  },
  {
    title: "Company",
    links: ["About S.H.E Blockchain", "Mission & Vision", "Partners", "Contact"],
  },
  {
    title: "Audience",
    links: ["For Individuals", "For Startups", "For Universities", "For Organizations"],
  },
];

function Caret() {
  return <span className={styles.caret}>v</span>;
}

function MiniIcon({ children }: { children: string }) {
  return <span className={styles.miniIcon}>{children}</span>;
}

function MediaPlaceholder({
  label,
  tone,
  className,
  cropClass,
}: {
  label: string;
  tone: string;
  className?: string;
  cropClass?: string;
}) {
  return (
    <div
      className={`${styles.mediaPlaceholder} ${styles[`tone${tone}`]} ${cropClass ? styles[cropClass] : ""} ${className ?? ""}`}
    >
      {cropClass ? (
        <Image
          src="/studyportals-clone-source.png"
          alt={label}
          width={932}
          height={4224}
          className={styles.spriteImage}
        />
      ) : null}
      <div className={styles.mediaOverlay} />
      {!cropClass ? <span>{label}</span> : null}
    </div>
  );
}

function SectionButton({ href, children }: { href: string; children: string }) {
  return (
    <Link className={styles.primaryButton} href={href}>
      {children}
    </Link>
  );
}

export function SheBlockchainPage() {
  const refStats = useScrollReveal();
  const refFeature1 = useScrollReveal<HTMLElement>();
  const refFeature2 = useScrollReveal<HTMLElement>();
  const refLogoBand = useScrollReveal<HTMLElement>();
  const refStory = useScrollReveal<HTMLElement>();
  const refPartner = useScrollReveal<HTMLElement>();
  const refImpact = useScrollReveal<HTMLElement>();
  const refAwards = useScrollReveal<HTMLElement>();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={styles.pageShell}>
      <div className={styles.backgroundStripes} aria-hidden="true" />

      <header className={styles.header}>
        <div className={styles.brand}>
          <Image src="/she-logo.png" alt="S.H.E Blockchain" width={160} height={40} style={{ objectFit: "contain" }} />
          <span className={styles.hiringPill}>Web3 EdTech</span>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="#contact" className={styles.contactButton}>
          Partner With Us
        </Link>

        {/* hamburger — only visible ≤920px */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barTop : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barMid : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barBot : ""}`} />
        </button>
      </header>

      {/* mobile drawer */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={styles.mobileNavLink}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link href="#contact" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
          Partner With Us
        </Link>
      </div>

      <section className={styles.heroSection}>
        <div className={styles.heroArt}>
          {/* left — red, highest z */}
          <div className={styles.heroSlashCoral} />
          {/* middle — image */}
          <div className={styles.heroDiamond}>
            <Image
              src="/hero/entrepreneur.jpg"
              alt="S.H.E Blockchain hero"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
          {/* right — blue, lowest z */}
          <div className={styles.heroSlashBlue} />
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Build your future in Web3.</h1>
          <p className={styles.heroCopy}>
            Education, talent, and partnerships for the next generation of blockchain builders.
            Learn faster. Connect smarter. Grow with a trusted Web3 ecosystem.
          </p>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div ref={refStats} className={styles.statsPanel}>
          {stats.map((stat, i) => (
            <article key={stat.label} className={styles.statCard}>
              <span className={styles.statIcon}>{stat.icon}</span>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="programs" className={styles.featuresWrap}>
        {features.map((feature, fi) => (
          <section
            ref={fi === 0 ? refFeature1 : refFeature2}
            key={feature.title}
            id={fi === 0 ? "students" : "institutions"}
            className={`${styles.featureSection} ${feature.reverse ? styles.featureReverse : ""} ${fi === 0 ? "reveal-left" : "reveal-right"}`}
          >
            <div className={styles.featureText}>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
              <SectionButton href={fi === 0 ? "#services" : "#contact"}>
                {feature.cta}
              </SectionButton>
            </div>

            <div className={styles.featureMedia}>
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </section>
        ))}
      </section>

      <section ref={refLogoBand} className={`${styles.logoBand} reveal`}>
        <h3>50+ partners across education, community, and Web3</h3>
        <div className={styles.logoMarqueeWrap}>
          <div className={styles.logoMarqueeTrack}>
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div key={i} className={styles.logoMarqueeItem}>
                <Image src={logo.src} alt={logo.alt} width={120} height={52} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={refStory} id="services" className={`${styles.storySection} reveal`}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionLabel}>Services</span>
          <h2>Support built for growth, adoption, and long-term Web3 success</h2>
        </div>

        <div className={styles.storyGrid}>
          {storyCards.map((card) => (
            <article
              key={card.title}
              className={`${styles.storyCard} ${card.accent === "blue" ? styles.storyCardBlue : styles.storyCardLight
                }`}
            >
              <div className={styles.storyMedia}>
                <Image src={card.image} alt={card.title} fill style={{ objectFit: "cover" }} />
              </div>
              <div className={styles.storyContent}>
                <span className={styles.storyPill}>{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <SectionButton href="#contact">
                  {card.title === "Training Programs" ? "Explore Programs" : "Partner With Us"}
                </SectionButton>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.viewAllRow}>
          <Link href="#mission">View all services</Link>
        </div>
      </section>

      <section ref={refPartner} id="partners" className={`${styles.partnershipSection} reveal`}>
        <div className={styles.partnershipText}>
          <h2>Networking, partnerships, and visibility that move Web3 forward</h2>
          <p>
            We connect startups and organizations with governments, universities, KOLs, and
            communities. We also create events that help brands earn attention and trust.
          </p>
          <SectionButton href="#contact">Partner With Us</SectionButton>
        </div>

        <div className={styles.partnerBoard}>
          <div className={styles.partnerGrid}>
            {partnerLogos.map((logo) => (
              <div key={logo.alt} className={styles.partnerGridItem}>
                <Image src={logo.src} alt={logo.alt} width={100} height={44} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={refImpact} id="mission" className={`${styles.impactSection} reveal`}>
        <div className={styles.impactMedia}>
          <Image src="/act/act3.svg" alt="S.H.E Blockchain mission" fill style={{ objectFit: "cover" }} />
        </div>
        <div className={styles.impactText}>
          <h2>Empowering talent. Connecting opportunity.</h2>
          <p>
            Our mission is to equip the next generation with skills and opportunities to thrive in
            Web3. Our vision is to connect young talent with blockchain careers through a strong
            ecosystem network.
          </p>
          <SectionButton href="#contact">Explore Programs</SectionButton>
        </div>
      </section>

      <section ref={refAwards} className={`${styles.awardsSection} reveal-scale`}>
        <div className={styles.awardsText}>
          <h2>Why teams choose S.H.E Blockchain</h2>
          <p>
            Deep Web3 expertise. A 50+ partner network. A dedicated, customer-first team focused
            on practical outcomes.
          </p>
          <Link href="#contact" className={styles.secondaryButton}>
            Partner With Us
          </Link>
        </div>
        <div className={styles.awardsMedia}>
          <Image src="/act/act4.svg" alt="Why choose S.H.E Blockchain" fill style={{ objectFit: "cover" }} />
        </div>
      </section>

      <TeamSection />

      <MilestonesSection />

      <footer id="contact" className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.brand}>
            <Image src="/she-logo.png" alt="S.H.E Blockchain" width={320} height={80} style={{ objectFit: "contain" }} />
          </div>

          <div className={styles.footerGrid}>
            {footerColumns.map((column) => (
              <div key={column.title} className={styles.footerColumn}>
                <h4>{column.title}</h4>
                {column.links.map((link) => (
                  <Link key={link} href="#contact">
                    {link}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <hr className={styles.footerDivider} />

        <div className={styles.footerBottom}>
          <div className={styles.footerMeta}>
            <span>&copy; 2026 S.H.E Blockchain. All rights reserved.</span>
            <Link href="#contact">Ho Chi Minh City, Vietnam</Link>
            <Link href="#contact">10-49 Team Members</Link>
            <Link href="#contact">Contact</Link>
          </div>

          <div className={styles.socials}>
            <span>f</span>
            <span>x</span>
            <span>o</span>
            <span>in</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
