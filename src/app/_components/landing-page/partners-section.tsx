import Image from "next/image";

type PartnerImage = {
  name: string;
  src: string;
};

type PartnersSectionProps = {
  partners: PartnerImage;
};

export function PartnersSection({ partners }: PartnersSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[28px] border-2 border-[#5eba46] bg-white shadow-[0_16px_50px_rgba(36,82,47,0.08)]">
        <div className="bg-[#0f6a33] px-6 py-4 text-center text-2xl font-black uppercase tracking-wide text-white">
          Partners
        </div>
        <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#fafdf8] p-3 sm:p-4">
            <Image
              src={partners.src}
              alt={partners.name}
              width={1600}
              height={900}
              sizes="100vw"
              className="h-auto w-full rounded-2xl object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
