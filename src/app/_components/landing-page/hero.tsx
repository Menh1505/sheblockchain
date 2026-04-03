import Image from "next/image";

type Highlight = {
  name: string;
  image: string;
};

type HeroProps = {
  highlights: readonly Highlight[];
};

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/sheblockchain?mibextid=LQQJ4d",
    icon: (
      <svg viewBox="0 0 25 25" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M15,24H9.4v-9.1H5.8V9.5h3.6v-2c0-2.3,0.6-4,1.9-5.1c1.5-1.3,3.9-1.7,7.3-1.2l0.6,0.1v4.9h-3c-0.8,0-1.1,0.2-1.1,1.3v2h4.1l-0.7,5.4H15V24zM10.7,22.7h3v-9.1h3.6l0.3-2.8h-3.9V7.5c0-1.7,0.8-2.6,2.4-2.6h1.7V2.4c-2.7-0.4-4.6,0-5.7,0.9c-1,0.8-1.5,2.2-1.5,4.1v3.3H7.1v2.8h3.6V22.7z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://www.twitter.com/",
    icon: (
      <svg viewBox="0 0 25 25" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M8.2,20.6c-2.3,0-4.6-0.7-6.6-1.9l-0.1,0l-0.2-0.4l0.1-0.4l0.4-0.2l0.2,0c1.7,0.2,3.3-0.2,4.7-1c-1.4-0.4-2.6-1.5-3.1-3l0-0.1l0-0.2c0-0.2,0.2-0.3,0.3-0.4C2.7,12.1,2,10.7,2,9.2l0-0.1l0.2-0.3l0.4-0.2l0.2,0.1c-0.9-1.4-1-3.4-0.2-4.9l0.1-0.1l0.4-0.4l0.4,0.4c1.9,2.4,4.7,3.9,7.8,4.2c-0.1-1.3,0.4-2.7,1.3-3.7c0.9-0.9,2.1-1.4,3.3-1.5c1.3,0,2.5,0.4,3.4,1.3c0.7-0.2,1.4-0.4,2.1-0.7l0.2,0l0.5-0.1l0.1,0.5c0.2,1.4-0.3,2.9-1.4,3.8c0.1,2.5-0.6,5-1.9,7.1c-1.8,2.8-4.6,4.8-7.9,5.5C10.1,20.5,9.1,20.6,8.2,20.6z" />
      </svg>
    ),
  },
] as const;

export function Hero({ highlights }: HeroProps) {
  return (
    <section className="relative overflow-hidden scroll-mt-32 px-4 pb-4 pt-6 sm:px-6 lg:px-8 lg:pb-10">
      <div className="absolute inset-0" />
      <div className="absolute inset-0" />
      <div className="relative">
        <div className="grid h-full overflow-hidden rounded-[38px] border border-gray-700 bg-gray-800 lg:min-h-180 lg:grid-cols-[88px_minmax(0,1fr)_minmax(420px,0.92fr)]">
          <div className="hidden h-full border-r border-gray-600 lg:flex lg:flex-col lg:items-center lg:justify-between lg:px-4 lg:py-8">
            <div className="flex flex-col items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-gray-700 text-cyan-400 shadow-[4px_4px_0_#06B6D4] transition hover:-translate-y-0.5"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <a
              href="#mission"
              className="text-[11px] font-black uppercase tracking-[0.28em] text-white [writing-mode:vertical-rl]"
            >
              Scroll
            </a>
          </div>

          <div className="flex h-full">
            <div className="flex w-full flex-col justify-between p-6 sm:p-8 lg:p-10">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-gray-600 bg-gray-700 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500" />
                  Welcome to S.H.E Blockchain
                </div>

                <h1 className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl">
                  Services,
                  <br />
                  Human Resources,
                  <br />
                  Education
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
                  Established in May 2022, <strong>S.H.E Blockchain has been operating</strong> in training, talent
                  development, and project incubation within emerging technology industries, especially Blockchain.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href="#mission"
                    className="inline-flex items-center justify-center rounded-full border-2 border-white bg-cyan-600 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[6px_6px_0_#06B6D4] transition hover:translate-x-px hover:translate-y-px hover:shadow-[3px_3px_0_#06B6D4]"
                  >
                    Our Vision &amp; Mission
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=PAdBwqza7cE"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-gray-600 bg-cyan-600 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-cyan-500"
                  >
                    <span>View Video</span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-cyan-600">
                      <svg viewBox="0 0 23.1 22.3" className="h-4 w-4 fill-current" aria-hidden="true">
                        <path d="M2.3,5.6c0-2.5,2-4.5,4.4-4.5c0.8,0,1.6,0.2,2.3,0.6l9.6,5.6c2.1,1.2,2.8,4,1.6,6.1c-0.4,0.7-0.9,1.2-1.6,1.6L9,20.5C6.9,21.8,4.2,21,3,18.9c-0.4-0.7-0.6-1.4-0.6-2.2L2.3,5.6z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {highlights.map((item) => (
                  <div
                    key={item.name}
                    className="overflow-hidden rounded-full border border-gray-600 bg-gray-700 p-1 shadow-sm"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={420}
                      height={80}
                      className="h-auto max-w-62.5 object-contain sm:max-w-75"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex h-full p-4 sm:p-5">
            <div className="absolute inset-x-10 top-0 h-24 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.8),transparent_68%)] blur-2xl" />
            <div className="relative flex h-full w-full overflow-hidden rounded-[30px] border-2 border-white bg-gray-800">
              <Image
                src="/entrepreneur.jpg"
                alt="S.H.E Blockchain team"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
