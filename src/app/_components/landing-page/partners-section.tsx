type PartnersSectionProps = {
  partners: readonly string[];
};

export function PartnersSection({ partners }: PartnersSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[28px] border-2 border-[#5eba46] bg-white shadow-[0_16px_50px_rgba(36,82,47,0.08)]">
        <div className="bg-[#0f6a33] px-6 py-4 text-center text-2xl font-black uppercase tracking-wide text-white">
          Partners
        </div>
        <div className="grid gap-4 px-6 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 xl:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex min-h-[88px] items-center justify-center rounded-2xl border border-[#e5f0dd] bg-[#fafdf8] px-4 text-center text-xl font-extrabold text-[#274f3f]"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
