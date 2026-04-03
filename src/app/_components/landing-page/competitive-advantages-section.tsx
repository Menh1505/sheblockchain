const advantages = [
  {
    title: "Outstanding Expertise",
    description:
      "The founding team are experts recognized by the international community and have over 6 years of experience in the Web3 space.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
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
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
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
      <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
] as const;

export function CompetitiveAdvantagesSection() {
  return (
    <section id="advantages" className="bg-gray-900 mx-auto scroll-mt-32 px-4 pb-8 sm:px-6 lg:px-16 sm:mt-8 md:mt-14 lg:mt-26">
      <div className="mb-10 text-center">
        <h2 className="relative inline-block text-4xl font-black uppercase text-white sm:text-5xl">
          Competitive Advantages
          <span className="absolute left-1/2 top-full mt-2 h-1 w-16 -translate-x-1/2 rounded-full bg-cyan-500" />
        </h2>
      </div>

      <div className="rounded-4xl border border-gray-700 bg-gray-900 p-6 shadow-[0_20px_80px_rgba(6,182,212,0.08)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-0">
          {advantages.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col items-center text-center text-white ${index !== 0 ? "lg:border-l lg:border-gray-600" : ""} ${index !== 2 ? "border-b border-gray-700 pb-8 lg:border-b-0 lg:pb-0" : ""} ${index !== 0 ? "lg:pl-8" : ""} ${index !== 2 ? "lg:pr-8" : ""}`}
            >
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-gray-600 bg-gray-800 text-cyan-300">
                {item.icon}
              </div>
              <h3 className="mt-6 text-2xl font-black uppercase tracking-[0.06em] text-white dark:text-white">{item.title}</h3>
              <p className="mt-4 max-w-sm text-base leading-8 text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
