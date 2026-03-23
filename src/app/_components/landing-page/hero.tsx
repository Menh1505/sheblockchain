import Image from "next/image";

type Highlight = {
  name: string;
  image: string;
};

type HeroProps = {
  highlights: readonly Highlight[];
};

export function Hero({ highlights }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(111,190,76,0.18),transparent_40%)]" />
      <div className="relative mx-auto w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto w-full text-center">
          <h1 className="text-4xl font-black uppercase tracking-tight text-[#106b34] sm:text-5xl lg:text-7xl">
            S.H.E Blockchain
          </h1>
          <p className="mt-4 text-lg font-medium text-[#4f6f5b] sm:text-xl">
            Services - Human Resources - Education
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {highlights.map((item) => (
              <div
                key={item.name}
                className="overflow-hidden rounded-full border border-[#cfe8be] bg-[#e8f3df] p-1 shadow-sm"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={420}
                  height={80}
                  className="h-auto max-w-70 object-contain sm:max-w-[320px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
