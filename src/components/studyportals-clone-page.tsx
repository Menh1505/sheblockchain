import Image from "next/image";
import Link from "next/link";
import styles from "./studyportals-clone-page.module.css";

type NavItem = {
  label: string;
  href: string;
  hasCaret?: boolean;
};

type Stat = {
  icon: string;
  value: string;
  label: string;
};

type Feature = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  mediaLabel: string;
  mediaTone: string;
  cropClass?: string;
  reverse?: boolean;
};

type StoryCard = {
  title: string;
  description: string;
  label: string;
  accent?: "light" | "blue";
  mediaLabel: string;
  cropClass?: string;
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
  { label: "Services", href: "#services", hasCaret: true },
  { label: "Partners", href: "#partners", hasCaret: true },
  { label: "Mission", href: "#mission", hasCaret: true },
];

const stats: Stat[] = [
  { icon: "CL", value: "30+", label: "clients served" },
  { icon: "PT", value: "50+", label: "ecosystem partners" },
  { icon: "YR", value: "6+", label: "years in Web3" },
];

const features: Feature[] = [
  {
    eyebrow: "For individuals",
    title: "Learn Web3 skills. Build real careers.",
    description:
      "For students, job seekers, beginners, and experts. Join practical programs, gain industry exposure, and connect with real opportunities in blockchain.",
    cta: "Explore Programs",
    mediaLabel: "Individuals program image placeholder",
    mediaTone: "warm",
    cropClass: "cropStudents",
  },
  {
    eyebrow: "For startups",
    title: "Find talent, training, and trusted ecosystem support.",
    description:
      "For startups, blockchain projects, and organizations. Scale with advisory, upskilling, partnerships, and event-driven brand visibility.",
    cta: "Partner With Us",
    mediaLabel: "Startup support image placeholder",
    mediaTone: "campus",
    cropClass: "cropCampus",
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
    mediaLabel: "Advisory services image placeholder",
    cropClass: "cropPortsmouth",
  },
  {
    title: "Training Programs",
    description:
      "Customized blockchain education for communities, teams, and institutions. Built for clarity, adoption, and measurable outcomes.",
    label: "Service",
    accent: "blue",
    mediaLabel: "Training programs image placeholder",
    cropClass: "cropPolyu",
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

export function StudyportalsClonePage() {
  return (
    <main className={styles.pageShell}>
      <div className={styles.backgroundStripes} aria-hidden="true" />

      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>S</span>
          <span className={styles.brandText}>S.H.E Blockchain</span>
        </div>

        <span className={styles.hiringPill}>Web3 EdTech</span>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={styles.navLink}>
              {item.label}
              {item.hasCaret ? <Caret /> : null}
            </Link>
          ))}
        </nav>

        <Link href="#contact" className={styles.contactButton}>
          Partner With Us
        </Link>
      </header>

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

          <div className={styles.heroCards}>
            <Link href="#programs" className={styles.heroCard}>
              <MiniIcon>IN</MiniIcon>
              <strong>For individuals</strong>
              <span>Explore Programs</span>
            </Link>
            <Link href="#partners" className={styles.heroCard}>
              <MiniIcon>ST</MiniIcon>
              <strong>For startups</strong>
              <span>Partner With Us</span>
            </Link>
          </div>

          <p className={styles.heroCopy}>
            Education, talent, and partnerships for the next generation of blockchain builders.
            Learn faster. Connect smarter. Grow with a trusted Web3 ecosystem.
          </p>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.statsPanel}>
          {stats.map((stat) => (
            <article key={stat.label} className={styles.statCard}>
              <span className={styles.statIcon}>{stat.icon}</span>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="programs" className={styles.featuresWrap}>
        {features.map((feature) => (
          <section
            key={feature.title}
            id={feature.eyebrow.includes("individuals") ? "students" : "institutions"}
            className={`${styles.featureSection} ${feature.reverse ? styles.featureReverse : ""}`}
          >
            <div className={styles.featureText}>
              <div className={styles.eyebrow}>
                <MiniIcon>{feature.eyebrow.includes("individuals") ? "ID" : "SU"}</MiniIcon>
                <span>{feature.eyebrow}</span>
              </div>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
              <SectionButton href={feature.eyebrow.includes("individuals") ? "#services" : "#contact"}>
                {feature.cta}
              </SectionButton>
            </div>

            <MediaPlaceholder
              label={feature.mediaLabel}
              tone={feature.mediaTone}
              cropClass={feature.cropClass}
              className={styles.featureMedia}
            />
          </section>
        ))}
      </section>

      <section className={styles.logoBand}>
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

      <section id="services" className={styles.storySection}>
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
              <MediaPlaceholder
                label={card.mediaLabel}
                tone={card.accent === "blue" ? "blue" : "steel"}
                cropClass={card.cropClass}
                className={styles.storyMedia}
              />
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

      <section id="partners" className={styles.partnershipSection}>
        <div className={styles.partnershipText}>
          <h2>Networking, partnerships, and visibility that move Web3 forward</h2>
          <p>
            We connect startups and organizations with governments, universities, KOLs, and
            communities. We also create events that help brands earn attention and trust.
          </p>
          <SectionButton href="#contact">Partner With Us</SectionButton>
        </div>

        <div className={styles.partnerBoard}>
          <div className={styles.partnerSlashBlue} />
          <div className={styles.partnerSlashCoral} />
          <MediaPlaceholder
            label="Partner logos wall"
            tone="article"
            cropClass="cropPartners"
            className={styles.partnerBoardMedia}
          />
        </div>
      </section>

      <section id="mission" className={styles.impactSection}>
        <MediaPlaceholder
          label="S.H.E Blockchain mission image"
          tone="charity"
          cropClass="cropImpact"
          className={styles.impactMedia}
        />
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

      <section className={styles.awardsSection}>
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
        <MediaPlaceholder
          label="Competitive advantages banner"
          tone="awards"
          cropClass="cropAwards"
          className={styles.awardsMedia}
        />
      </section>

      <section id="resources" className={styles.resourcesSection}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionLabel}>Milestones</span>
          <h2>From first launch to global growth vision</h2>
        </div>

        <div className={styles.resourcesGrid}>
          {resources.map((resource) => (
            <article
              key={resource.title}
              className={`${styles.resourceCard} ${resource.large ? styles.resourceCardLarge : ""}`}
            >
              <MediaPlaceholder
                label={resource.mediaLabel}
                tone={resource.large ? "earth" : "article"}
                cropClass={resource.cropClass}
                className={styles.resourceMedia}
              />
              <div className={styles.resourceBody}>
                <span className={styles.storyPill}>{resource.type}</span>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <Link href="#contact" className={styles.inlineLink}>
                  Explore Programs
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.resourcesFooter}>
          <Link href="#contact">See the next chapter</Link>
          <div className={styles.sliderDots}>
            <span />
            <span />
          </div>
        </div>
      </section>

      <footer id="contact" className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.brand}>
            <span className={styles.brandMark}>S</span>
            <span className={styles.brandText}>S.H.E Blockchain</span>
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
