type Advantage = {
  title: string;
  description: string;
  icon: "expertise" | "network" | "shield";
};

type CompetitiveAdvantagesSectionProps = {
  advantages: readonly Advantage[];
};

function AdvantageIcon({ icon }: Pick<Advantage, "icon">) {
  switch (icon) {
    case "expertise":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M5 20a7 7 0 0 1 14 0" />
          <path d="M4 4h4" />
          <path d="M16 4h4" />
          <path d="M4 8V4" />
          <path d="M20 8V4" />
        </svg>
      );
    case "network":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="4" r="1.5" />
          <circle cx="12" cy="20" r="1.5" />
          <circle cx="4" cy="12" r="1.5" />
          <circle cx="20" cy="12" r="1.5" />
          <circle cx="6.5" cy="6.5" r="1.5" />
          <circle cx="17.5" cy="6.5" r="1.5" />
          <circle cx="6.5" cy="17.5" r="1.5" />
          <circle cx="17.5" cy="17.5" r="1.5" />
          <path d="M12 5.5v5" />
          <path d="M12 13v5.5" />
          <path d="M5.5 12H10" />
          <path d="M14 12h4.5" />
          <path d="M7.6 7.6 10.5 10.5" />
          <path d="M13.5 13.5 16.4 16.4" />
          <path d="M16.4 7.6 13.5 10.5" />
          <path d="M10.5 13.5 7.6 16.4" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-4Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
  }
}

export function CompetitiveAdvantagesSection({ advantages }: CompetitiveAdvantagesSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-black uppercase text-[#116b35] sm:text-4xl">Competitive Advantages</h2>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {advantages.map((item) => (
          <div
            key={item.title}
            className="rounded-[28px] border border-[#d8e9cc] bg-[#eef6e8] p-8 text-center shadow-[0_14px_40px_rgba(36,82,47,0.06)]"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#2b7c42] shadow-sm">
              <AdvantageIcon icon={item.icon} />
            </div>
            <h3 className="mt-5 text-2xl font-extrabold text-[#1f4938]">{item.title}</h3>
            <p className="mt-3 text-base leading-7 text-[#527061]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
