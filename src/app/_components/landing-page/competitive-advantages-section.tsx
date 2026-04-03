const advantages = [
  {
    title: "Outstanding Expertise",
    description:
      "The founding team are experts recognized by the international community and have over 6 years of experience in the Web3 space.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M5 20a7 7 0 0 1 14 0" />
        <path d="M4 4h4" />
        <path d="M16 4h4" />
        <path d="M4 8V4" />
        <path d="M20 8V4" />
      </svg>
    ),
  },
  {
    title: "Intensive Network",
    description:
      "Strong relationships with 50+ partners including government agencies, enterprises, universities, communities, and KOLs.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      </svg>
    ),
  },
  {
    title: "Professional & Dedicate",
    description:
      "Dedication, responsibility, enthusiasm, and putting the customer first are the collaborative values we uphold.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
] as const;

export function CompetitiveAdvantagesSection() {
  return (
    <section className="mx-auto w-full px-4 py-3 sm:px-6 lg:px-16">
      <div className="mb-6 text-center shrink-0">
        <h2 className="relative inline-block text-4xl font-black uppercase text-white sm:text-5xl">
          Competitive Advantages
          <span className="absolute left-1/2 top-full mt-2 h-1 w-16 -translate-x-1/2 rounded-full bg-[#00ff88]" />
        </h2>
      </div>

      {/* card fills remaining viewport height */}
      <div
        className="rounded-4xl border border-[#00ff88]/20 backdrop-blur-sm shadow-[0_20px_80px_rgba(0,255,136,0.08)] flex items-center"
        style={{ height: "calc(100vh - var(--landing-header-offset, 96px) - 7rem)" }}
      >
        <div className="grid w-full gap-8 px-8 py-6 lg:grid-cols-3 lg:gap-0 lg:px-12 lg:py-10">
          {advantages.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col items-center text-center text-white
                ${index !== 0 ? "lg:border-l lg:border-gray-600" : ""}
                ${index !== 2 ? "border-b border-gray-700 pb-8 lg:border-b-0 lg:pb-0" : ""}
                ${index !== 0 ? "lg:pl-10" : ""}
                ${index !== 2 ? "lg:pr-10" : ""}
              `}
            >
              <div className="inline-flex h-28 w-28 items-center justify-center rounded-full border border-[#00ff88]/30 bg-gray-800 text-[#00ff88] shadow-[0_0_32px_rgba(0,255,136,0.12)]">
                {item.icon}
              </div>
              <h3 className="mt-8 text-2xl font-black uppercase tracking-[0.06em] text-white sm:text-3xl">{item.title}</h3>
              <p className="mt-5 max-w-sm text-base leading-8 text-gray-300 sm:text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
