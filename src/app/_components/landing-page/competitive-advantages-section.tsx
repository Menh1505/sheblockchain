import Image from "next/image";

type Advantage = {
  name: string;
  image: string;
};

type CompetitiveAdvantagesSectionProps = {
  advantages: readonly Advantage[];
};

export function CompetitiveAdvantagesSection({ advantages }: CompetitiveAdvantagesSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 sm:mt-8 md:mt-14 lg:mt-26">
      <div className="text-center">
        <h2 className="relative inline-block text-4xl font-black uppercase text-[#116b35] sm:text-5xl">
          Competitive Advantages
          <span className="absolute left-1/2 top-full mt-2 h-1 w-16 -translate-x-1/2 rounded-full bg-[#116b35]" />
        </h2>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {advantages.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-[28px] p-3"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={800}
              height={600}
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="h-auto w-full rounded-[20px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
