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
    cardClassName: "bg-gray-800 border-gray-700 shadow-[0_14px_0_#06B6D4] text-white",
    titleClassName: "bg-cyan-600 text-white",
    textClassName: "text-gray-300",
    ctaClassName: "text-white",
    iconWrapClassName: "bg-cyan-600",
    iconClassName: "text-white",
  },
  green: {
    cardClassName: "bg-cyan-600 border-gray-700 shadow-[0_14px_0_#06B6D4] text-white",
    titleClassName: "bg-gray-900 text-white",
    textClassName: "text-gray-300",
    ctaClassName: "text-white",
    iconWrapClassName: "bg-cyan-600",
    iconClassName: "text-white",
  },
  dark: {
    cardClassName: "bg-gray-900 border-gray-700 shadow-[0_14px_0_#06B6D4] text-white",
    titleClassName: "bg-gray-800 text-white",
    textClassName: "text-gray-300",
    ctaClassName: "text-white",
    iconWrapClassName: "bg-cyan-600",
    iconClassName: "text-white",
  },
  mixed: {
    cardClassName: "bg-gray-800 border-gray-700 shadow-[0_14px_0_#06B6D4] text-white",
    titleClassName: "bg-cyan-600 text-white",
    textClassName: "text-gray-300",
    ctaClassName: "text-white",
    iconWrapClassName: "bg-cyan-600",
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
    <article className={`rounded-[30px] border p-6 sm:p-7 lg:p-8 ${styles.cardClassName}`}>
      <div className="flex h-full min-h-72.5 flex-col justify-between gap-8 lg:flex-row lg:items-center">
        <div className="flex max-w-90 flex-1 flex-col justify-between">
          <div>
            <div className="space-y-2">
              {titleLines.map((line) => (
                <span
                  key={line}
                  className={`inline-block w-fit rounded-2xl px-4 py-2 text-2xl font-black uppercase leading-none sm:text-3xl ${styles.titleClassName}`}
                >
                  {line}
                </span>
              ))}
            </div>
            <p className={`mt-5 text-sm leading-7 sm:text-base ${styles.textClassName}`}>{service.description}</p>
          </div>

          <a
            href="#contact"
            className={`mt-6 inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.14em] ${styles.ctaClassName}`}
          >
            <span
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-black ${styles.iconWrapClassName}`}
            >
              <ArrowUpRightIcon className={`h-4 w-4 ${styles.iconClassName}`} />
            </span>
            <span>Learn more</span>
          </a>
        </div>

        <div className="flex flex-1 justify-end">
          <Image
            src={illustrationSrc}
            alt={service.title}
            width={220}
            height={180}
            className="h-auto w-full max-w-45 object-contain"
          />
        </div>
      </div>
    </article>
  );
}

export function CompanyOverviewSection({ services }: CompanyOverviewSectionProps) {
  const variants: CardVariant[] = ["light", "green", "dark", "mixed"];

  return (
    <section className="mx-auto scroll-mt-32 px-8 py-8 sm:px-10 lg:px-16">
      <div className="mb-10 text-center">
        <p className="text-xl font-black uppercase tracking-[0.2em] text-cyan-400">What We Offer</p>
        <h2 className="relative inline-block text-4xl font-black uppercase text-white sm:text-5xl">
          Products and Services
          <span className="absolute left-1/2 top-full mt-2 h-1 w-16 -translate-x-1/2 rounded-full bg-cyan-500" />
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
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
