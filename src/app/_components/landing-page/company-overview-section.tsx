import Image from "next/image";

type Service = {
  title: string;
  description: string;
};

type CompanyOverviewSectionProps = {
  services: readonly Service[];
};

type CardVariant = "light" | "green" | "dark" | "mixed";

const cardVariants: Record<
  CardVariant,
  {
    cardClassName: string;
    titleClassName: string;
    textClassName: string;
    ctaClassName: string;
    iconWrapClassName: string;
    iconClassName: string;
  }
> = {
  light: {
    cardClassName: "bg-gray-800 border-gray-700 shadow-[0_14px_0_#00ff88] text-white",
    titleClassName: "bg-[#00c853] text-white",
    textClassName: "text-gray-300",
    ctaClassName: "text-white",
    iconWrapClassName: "bg-[#00c853]",
    iconClassName: "text-white",
  },
  green: {
    cardClassName: "bg-[#00c853] border-gray-700 shadow-[0_14px_0_#00ff88] text-white",
    titleClassName: "bg-gray-900 text-white",
    textClassName: "text-black",
    ctaClassName: "text-black",
    iconWrapClassName: "bg-[#00c853]",
    iconClassName: "text-white",
  },
  dark: {
    cardClassName: "bg-gray-900 border-gray-700 shadow-[0_14px_0_#00ff88] text-white",
    titleClassName: "bg-gray-800 text-white",
    textClassName: "text-gray-300",
    ctaClassName: "text-white",
    iconWrapClassName: "bg-[#00c853]",
    iconClassName: "text-white",
  },
  mixed: {
    cardClassName: "bg-gray-800 border-gray-700 shadow-[0_14px_0_#00ff88] text-white",
    titleClassName: "bg-[#00c853] text-white",
    textClassName: "text-gray-300",
    ctaClassName: "text-white",
    iconWrapClassName: "bg-[#00c853]",
    iconClassName: "text-white",
  },
};

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function ServiceCard({
  service,
  variant,
  index,
}: {
  service: Service;
  variant: CardVariant;
  index: number;
}) {
  const styles = cardVariants[variant];
  const illustrationSrc = `/services/sv${index + 1}.svg`;
  const titleLines = service.title.includes("&")
    ? service.title.split("&").map((line) => line.trim())
    : service.title.split(" ").length > 1
      ? [service.title.split(" ").slice(0, -1).join(" "), service.title.split(" ").slice(-1).join(" ")]
      : [service.title];

  return (
    <article className={`rounded-3xl border p-4 sm:p-5 h-full ${styles.cardClassName}`}>
      <div className="flex h-full flex-col justify-between gap-3 lg:flex-row lg:items-center">
        <div className="flex max-w-90 flex-1 flex-col justify-between">
          <div>
            <div className="space-y-2">
              {titleLines.map((line) => (
                <span
                  key={line}
                  className={`inline-block w-fit rounded-xl px-3 py-1.5 text-xl font-black uppercase leading-none sm:text-2xl ${styles.titleClassName}`}
                >
                  {line}
                </span>
              ))}
            </div>
            <p className={`mt-3 text-sm leading-6 sm:text-base ${styles.textClassName}`}>{service.description}</p>
          </div>

          <a
            href="#contact"
            className={`mt-4 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] ${styles.ctaClassName}`}
          >
            <span
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-black ${styles.iconWrapClassName}`}
            >
              <ArrowUpRightIcon className={`h-4 w-4 ${styles.iconClassName}`} />
            </span>
            <span>Learn more</span>
          </a>
        </div>

        <div className="flex flex-1 items-center justify-center lg:justify-end">
          <Image
            src={illustrationSrc}
            alt={service.title}
            width={200}
            height={160}
            className="h-auto w-full max-w-40 lg:max-w-50 object-contain"
          />
        </div>
      </div>
    </article>
  );
}

export function CompanyOverviewSection({ services }: CompanyOverviewSectionProps) {
  const variants: CardVariant[] = ["green", "light", "dark", "mixed"];

  return (
    <section className="mx-auto w-full px-6 py-3 sm:px-8 lg:px-16">
      {/* header row */}
      <div className="mb-4 text-center shrink-0">
        <p className="text-base font-black uppercase tracking-[0.2em] text-[#00ff88]">What We Offer</p>
        <h2 className="relative inline-block text-3xl font-black uppercase text-white sm:text-4xl">
          Products and Services
          <span className="absolute left-1/2 top-full mt-2 h-1 w-16 -translate-x-1/2 rounded-full bg-[#00ff88]" />
        </h2>
      </div>

      {/* grid fills remaining viewport height */}
      <div
        className="grid gap-3 lg:grid-cols-2"
        style={{ height: "calc(100vh - var(--landing-header-offset, 96px) - 8rem)" }}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            service={service}
            variant={variants[index % variants.length]}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
