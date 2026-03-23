import Image from "next/image";

type Activity = {
  title: string;
  image: string;
};

type ActivitiesSectionProps = {
  activities: readonly Activity[];
};

export function ActivitiesSection({ activities }: ActivitiesSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-black uppercase text-[#116b35] sm:text-4xl">Our Activities</h2>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {activities.map((activity, index) => (
          <div
            key={`${activity.title}-${index}`}
            className="group overflow-hidden rounded-3xl border border-[#d9ebce] bg-white shadow-[0_14px_40px_rgba(36,82,47,0.08)]"
          >
            <div className="flex min-h-18 items-center justify-center border-b border-[#ecf4e7] bg-[#eef6e7] px-4 text-center text-xl font-bold text-[#24523f]">
              {activity.title}
            </div>
            <div className="relative h-56 overflow-hidden">
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
