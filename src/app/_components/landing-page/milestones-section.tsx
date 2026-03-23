import Image from "next/image";

export function MilestonesSection() {
  return (
    <section className="mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:pb-16">
      <div className="overflow-hidden rounded-[28px] bg-white p-3 shadow-[0_16px_50px_rgba(36,82,47,0.08)] sm:p-4">
        <Image
          src="/milestone.svg"
          alt="SHE Blockchain memorable milestones"
          width={1600}
          height={900}
          sizes="100vw"
          className="h-auto w-full rounded-[22px] object-contain"
          priority
        />
      </div>
    </section>
  );
}
