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
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-black uppercase text-[#116b35] sm:text-4xl">Competitive Advantages</h2>
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
