export function MissionVisionSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[32px] border border-[#dbeacf] bg-[#e8f3df] shadow-[0_20px_80px_rgba(44,88,54,0.08)]">
        <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
          <p className="mx-auto max-w-5xl text-center text-base leading-8 text-[#456553] sm:text-lg">
            For <span className="font-bold text-[#2b6a38]">individuals</span> and{" "}
            <span className="font-bold text-[#2b6a38]">startup projects</span> seeking career{" "}
            <span className="font-bold text-[#2b6a38]">opportunities in emerging technology</span>,{" "}
            <span className="font-bold text-[#2b6a38]">S.H.E blockchain</span> is an edtech company that{" "}
            <span className="font-bold text-[#2b6a38]">empowers young professionals and startups</span> with
            nurturing and incubation initiatives, enabling them to thrive in the fast-evolving Web3 landscape.
            By <span className="font-bold text-[#2b6a38]">cutting-edge education and extensive expertise</span>,
            we are dedicated to your success by leveraging{" "}
            <span className="font-bold text-[#2b6a38]">our industry-leading Web3 network</span>.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[28px] bg-[#77c043] px-6 py-8 text-center text-white shadow-lg shadow-[#77c043]/20">
              <h2 className="text-2xl font-black uppercase">Our Mission</h2>
              <p className="mt-4 text-lg leading-8 text-white/95">
                To empower the next generation with the skills and opportunities needed to thrive in the evolving
                Web3 landscape.
              </p>
            </div>
            <div className="rounded-[28px] bg-[#77c043] px-6 py-8 text-center text-white shadow-lg shadow-[#77c043]/20">
              <h2 className="text-2xl font-black uppercase">Our Vision</h2>
              <p className="mt-4 text-lg leading-8 text-white/95">
                To provide innovative education, human resources, and services that connect young talent with career
                opportunities in emerging blockchain technologies through our extensive network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
