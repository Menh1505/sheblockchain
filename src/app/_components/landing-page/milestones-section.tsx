import Image from "next/image";

export function MilestonesSection() {
  return (
    <section className="mx-auto px-6 py-8 sm:px-8 lg:px-16 lg:pb-16 sm:mt-8 md:mt-14 lg:mt-26">
      <div className="mb-8 text-center">
        <h2 className="relative inline-block text-4xl font-black uppercase text-[#116b35] sm:text-5xl">
          Memorable Milestones
          <span className="absolute left-1/2 top-full mt-2 h-1 w-16 -translate-x-1/2 rounded-full bg-[#116b35]" />
        </h2>
      </div>
      <div className="overflow-hidden rounded-[28px] p-3 sm:p-4">
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
