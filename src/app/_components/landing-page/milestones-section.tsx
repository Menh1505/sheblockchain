type Milestone = {
  year: string;
  items: readonly string[];
};

type MilestonesSectionProps = {
  milestones: readonly Milestone[];
};

export function MilestonesSection({ milestones }: MilestonesSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:pb-16">
      <div className="rounded-[28px] bg-white p-6 shadow-[0_16px_50px_rgba(36,82,47,0.08)] sm:p-8 lg:p-10">
        <h2 className="text-center text-3xl font-black uppercase text-[#12a54f] sm:text-4xl">
          Memorable Milestones
        </h2>

        <div className="relative mt-12 hidden lg:block">
          <div className="absolute left-0 right-0 top-7 h-1 rounded-full bg-[#16b458]" />
          <div className="grid grid-cols-4 gap-6">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative text-center">
                <div className="mx-auto h-14 w-14 rounded-full border-4 border-[#e9f7ec] bg-[#12aa52] shadow-lg shadow-[#12aa52]/20" />
                <div className="mt-5 text-3xl font-black text-[#1aa34f]">{milestone.year}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {milestones.map((milestone) => (
            <div key={milestone.year} className="rounded-[24px] border border-[#e3efdc] bg-[#fbfef9] p-6">
              <div className="text-2xl font-black text-[#1aa34f] lg:hidden">{milestone.year}</div>
              <ul className="space-y-3 text-base leading-7 text-[#4b6759] lg:mt-2">
                {milestone.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#18b257]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
