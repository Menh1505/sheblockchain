import Image from "next/image";

type Activity = {
  title: string;
  image: string;
};

type ActivitiesSectionProps = {
  activities: readonly Activity[];
};

export function ActivitiesSection({ activities }: ActivitiesSectionProps) {
  const columns = [
    {
      title: "Blockchain training course",
      items: [activities[0], activities[3]].filter(Boolean),
    },
    {
      title: "Industrial Experience Program",
      items: [activities[1], activities[4]].filter(Boolean),
    },
    {
      title: "Unitour Program",
      items: [activities[2], activities[5]].filter(Boolean),
    },
  ] as const;

  return (
    <section id="activities" className="mx-auto scroll-mt-32 px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-black uppercase text-[#116b35] sm:text-5xl">Our Activities</h2>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-5">
            <div className="rounded-3xl border border-[#d9ebce] bg-[#eef6e7] px-4 py-4 text-center text-xl font-bold text-[#24523f] shadow-[0_10px_30px_rgba(36,82,47,0.06)]">
              {column.title}
            </div>

            {column.items.map((activity, index) => (
              <div
                key={`${column.title}-${index}`}
                className="group overflow-hidden rounded-3xl border border-[#d9ebce] bg-white shadow-[0_14px_40px_rgba(36,82,47,0.08)]"
              >
                <div className="relative h-84 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={column.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
