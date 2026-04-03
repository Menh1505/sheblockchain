import Image from "next/image";

export function MissionVisionSection() {
  return (
    <section id="mission" className="mx-auto scroll-mt-32 px-4 pb-8 sm:px-6 lg:px-16">
      <div className="rounded-4xl border border-gray-700 bg-gray-800 p-5 shadow-[0_20px_80px_rgba(139,92,246,0.08)] sm:p-6 lg:p-8">
        <p className="mx-auto max-w-5xl text-center text-base leading-8 text-gray-300 sm:text-lg">
          For <span className="font-bold text-cyan-400">individuals</span> and{" "}
          <span className="font-bold text-cyan-400">startup projects</span> seeking career opportunities in emerging
          technology, <span className="font-bold text-cyan-400">S.H.E blockchain</span> is an edtech company that{" "}
          <span className="font-bold text-cyan-400">empowers young professionals and startups</span> with nurturing
          and incubation initiatives, enabling them to thrive in the fast-evolving Web3 landscape. By{" "}
          <span className="font-bold text-cyan-400">cutting-edge education and extensive expertise</span>, we are
          dedicated to your success by leveraging{" "}
          <span className="font-bold text-cyan-400">our industry-leading Web3 network</span>.
        </p>

        <div className="mt-8 space-y-8">
          <article className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="relative min-h-80 overflow-hidden rounded-[28px] border border-gray-600 bg-gray-700 shadow-[0_16px_40px_rgba(139,92,246,0.08)]">
              <Image
                src="/mission/mission.png"
                alt="SHE Blockchain mission"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex items-center p-2 sm:p-4 lg:p-6">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-500">Our Mission</p>
                <h3 className="mt-3 text-3xl font-black uppercase text-white sm:text-4xl">
                  Empower the Next Generation
                </h3>
                <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
                  To empower the nextgeneration with the skills and opportunities needed to thrive in the evolving
                  Web3 landscape.
                </p>
              </div>
            </div>
          </article>

          <article className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="flex items-center p-2 sm:p-4 lg:order-1 lg:p-6">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-500">Our Vision</p>
                <h3 className="mt-3 text-3xl font-black uppercase text-white sm:text-4xl">
                  Connect Talent to Opportunity
                </h3>
                <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
                  To provide innovative education, human resources, and services that connect young talent with
                  career opportunities in emerging blockchain technologies through our extensive network.
                </p>
              </div>
            </div>
            <div className="relative min-h-80 overflow-hidden rounded-[28px] border border-gray-600 bg-gray-700 shadow-[0_16px_40px_rgba(139,92,246,0.08)] lg:order-2">
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
