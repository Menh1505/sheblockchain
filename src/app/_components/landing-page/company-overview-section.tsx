type Service = {
  title: string;
  description: string;
};

type CompanyOverviewSectionProps = {
  services: readonly Service[];
};

export function CompanyOverviewSection({ services }: CompanyOverviewSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[28px] border-2 border-[#5eba46] bg-white shadow-[0_16px_50px_rgba(36,82,47,0.08)]">
          <div className="bg-[#0f6a33] px-6 py-4 text-center text-2xl font-black uppercase tracking-wide text-white">
            Scale of the Company
          </div>
          <div className="space-y-7 px-6 py-8 sm:px-8">
            <div>
              <div className="text-2xl font-bold text-[#25523f]">Number of Employees</div>
              <div className="mt-2 flex items-end gap-3">
                <span className="text-5xl font-black text-[#15a757]">10 - 49</span>
                <span className="pb-2 text-lg text-[#557164]">members</span>
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold text-[#25523f]">Served Clients</div>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-start">
                <span className="text-5xl font-black text-[#15a757]">30+</span>
                <ul className="space-y-2 text-base leading-7 text-[#4a6658]">
                  <li>• Individuals (newcomers & experts)</li>
                  <li>• Organization: Foundations, recruitment firms, blockchain companies, startup projects, and VCs</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold text-[#25523f]">Headquarters and Representative Offices</div>
              <p className="mt-2 text-lg text-[#4a6658]">Ho Chi Minh City, Vietnam</p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border-2 border-[#5eba46] bg-white shadow-[0_16px_50px_rgba(36,82,47,0.08)]">
          <div className="bg-[#0f6a33] px-6 py-4 text-center text-2xl font-black uppercase tracking-wide text-white">
            Products and Services
          </div>
          <div className="space-y-5 px-6 py-8 sm:px-8">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl border border-[#deedd4] bg-[#fbfef8] p-5">
                <h3 className="text-2xl font-extrabold text-[#24523f]">{service.title}</h3>
                <p className="mt-2 text-base leading-7 text-[#4b6759]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
