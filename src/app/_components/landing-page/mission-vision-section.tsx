import Image from "next/image";

export function MissionVisionSection() {
  return (
    <section id="mission" className="mx-auto max-w-7xl scroll-mt-32 px-4 pb-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[32px] border border-[#dbeacf] bg-[#e8f3df] p-3 shadow-[0_20px_80px_rgba(44,88,54,0.08)] sm:p-4">
        <Image
          src="/mission.svg"
          alt="SHE Blockchain mission and vision"
          width={1600}
          height={900}
          sizes="100vw"
          className="h-auto w-full rounded-[24px] object-contain"
          priority
        />
      </div>
    </section>
  );
}
