import Image from "next/image";

export function CompanyOverviewSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[28px] border-2 border-[#5eba46] bg-white p-3 shadow-[0_16px_50px_rgba(36,82,47,0.08)] sm:p-4">
        <Image
          src="/product&service.svg"
          alt="Scale of the company and products and services"
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
