type HeroProps = {
  highlights: readonly string[];
};

export function Hero({ highlights }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(111,190,76,0.18),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-black uppercase tracking-tight text-[#106b34] sm:text-5xl lg:text-7xl">
            S.H.E Blockchain
          </h1>
          <p className="mt-4 text-lg font-medium text-[#4f6f5b] sm:text-xl">
            Services - Human Resources - Education
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#cfe8be] bg-[#e8f3df] px-4 py-2 text-sm font-semibold text-[#2d5f3f] shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
