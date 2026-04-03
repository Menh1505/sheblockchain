import Image from "next/image";

export function MissionVisionSection() {
  return (
    <section className="mx-auto w-full px-4 sm:px-6 lg:px-16 py-3">
      {/* outer card fills the available height below header */}
      <div
        className="rounded-4xl border border-gray-700 backdrop-blur-sm p-4 shadow-[0_20px_80px_rgba(0,255,136,0.06)] flex flex-col"
        style={{ height: "calc(100vh - var(--landing-header-offset, 96px) - 1.5rem)" }}
      >
        {/* intro text */}
        <p className="mx-auto max-w-5xl text-center text-sm leading-7 text-gray-300 sm:text-base sm:leading-8 shrink-0">
          For <span className="font-bold text-[#00ff88]">individuals</span> and{" "}
          <span className="font-bold text-[#00ff88]">startup projects</span> seeking career opportunities in emerging
          technology, <span className="font-bold text-[#00ff88]">S.H.E blockchain</span> is an edtech company that{" "}
          <span className="font-bold text-[#00ff88]">empowers young professionals and startups</span> with nurturing
          and incubation initiatives, enabling them to thrive in the fast-evolving Web3 landscape. By{" "}
          <span className="font-bold text-[#00ff88]">cutting-edge education and extensive expertise</span>, we are
          dedicated to your success by leveraging{" "}
          <span className="font-bold text-[#00ff88]">our industry-leading Web3 network</span>.
        </p>

        {/* 2 articles share remaining height equally */}
        <div className="mt-3 grid flex-1 grid-rows-2 gap-3 min-h-0">
          <article className="grid min-h-0 items-stretch gap-4 lg:grid-cols-2 lg:gap-6">
            <div className="relative overflow-hidden rounded-[20px] border border-gray-600 bg-gray-700 min-h-0">
              <Image
                src="/mission/mission.png"
                alt="SHE Blockchain mission"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex items-center p-2 lg:p-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#00ff88] sm:text-sm">Our Mission</p>
                <h3 className="mt-2 text-xl font-black uppercase text-white sm:text-2xl lg:text-3xl">
                  Empower the Next Generation
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-300">
                  To empower the next generation with the skills and opportunities needed to thrive in the evolving
                  Web3 landscape.
                </p>
              </div>
            </div>
          </article>

          <article className="grid min-h-0 items-stretch gap-4 lg:grid-cols-2 lg:gap-6">
            <div className="flex items-center p-2 lg:order-1 lg:p-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#00ff88] sm:text-sm">Our Vision</p>
                <h3 className="mt-2 text-xl font-black uppercase text-white sm:text-2xl lg:text-3xl">
                  Connect Talent to Opportunity
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-300">
                  To provide innovative education, human resources, and services that connect young talent with
                  career opportunities in emerging blockchain technologies through our extensive network.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[20px] border border-gray-600 bg-gray-700 min-h-0 lg:order-2">
              <Image
                src="/mission/vision.png"
                alt="SHE Blockchain vision"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
