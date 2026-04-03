import Image from "next/image";

type PartnerImage = {
  name: string;
  src: string;
  link: string;
};

type PartnersSectionProps = {
  partners: readonly PartnerImage[];
};

export function PartnersSection({ partners }: PartnersSectionProps) {
  const marqueePartners = [...partners, ...partners];

  return (
    <section className="mx-auto scroll-mt-32 px-4 py-6 sm:px-6 lg:px-8">
      <div className="overflow-hidden">

        <div className="relative overflow-hidden rounded-3xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-linear-to-r from-gray-900 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-linear-to-l from-gray-900 to-transparent" />

          <div className="partners-marquee flex w-max gap-8">
            {marqueePartners.map((partner, index) => (
              <a
                key={`${partner.name}-${index}`}
                href={partner.link}
                target="_blank"
                rel="noreferrer"
                aria-label={partner.name}
                className="flex h-48 w-96 shrink-0 items-center justify-center rounded-3xl transition hover:scale-[1.2]"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={240}
                  height={460}
                  className="h-auto max-h-48 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
