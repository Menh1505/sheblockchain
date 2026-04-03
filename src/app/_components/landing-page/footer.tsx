import Image from "next/image";

const services = [
  "Advisory Services",
  "Training Programs",
  "Networking",
  "Event Organization",
  "Startup Incubation",
] as const;

export function Footer() {
  return (
    <footer className="w-full px-4 py-3 sm:px-6 lg:px-12">
      {/* card fills remaining viewport height — same pattern as advantages */}
      <div
        className="mx-auto w-full rounded-4xl border border-[#00ff88]/20 backdrop-blur-sm shadow-[0_20px_80px_rgba(0,255,136,0.08)] flex flex-col justify-center px-8 py-6 text-white lg:px-14 lg:py-10"
        style={{ height: "calc(100vh - var(--landing-header-offset, 96px) - 1.5rem)" }}
      >
        <div className="grid gap-10 lg:grid-cols-4">
          {/* brand + description */}
          <div className="space-y-6 lg:col-span-2">
            <div className="inline-flex items-center rounded-[28px] bg-gray-800 px-8 py-4 shadow-lg shadow-black/10">
              <Image
                src="/she-logo.png"
                alt="S.H.E Blockchain"
                width={260}
                height={120}
                className="h-auto w-40 sm:w-52"
              />
            </div>
            <p className="max-w-lg text-base leading-8 text-gray-300 sm:text-lg">
              Our mission is to educate, nurture, and guide the next generation of young talent. Through training
              programs, skill development, startup incubation, and career orientation, we equip young people with
              the knowledge, capabilities, and mindset needed to thrive in rapidly emerging technologies, especially
              Blockchain.
            </p>
          </div>

          {/* contact */}
          <div className="space-y-5 lg:col-span-1">
            <h5 className="text-2xl font-extrabold uppercase tracking-[0.12em] text-white">Contact Information</h5>
            <div className="h-1 w-20 rounded-full bg-[#00ff88]" />
            <div className="space-y-4 text-base leading-7 text-gray-300 sm:text-lg">
              <p>Address: Huong Duong 03 Huynh Van Nghe, Phuc Dong Ward, Long Bien District, Hanoi</p>
              <p>
                Phone:{" "}
                <a href="tel:+84936368600" className="font-semibold text-white transition hover:text-[#00ff88]">
                  +84 936 368 600
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:contact@she-blockchain-e9e089.ingress-baronn.ewp.live"
                  className="break-all font-semibold text-white transition hover:text-[#00ff88]"
                >
                  contact@she-blockchain-e9e089.ingress-baronn.ewp.live
                </a>
              </p>
              <p>
                Telegram:{" "}
                <a
                  href="https://t.me/sheblockchain"
                  className="break-all font-semibold text-white transition hover:text-[#00ff88]"
                >
                  S.H.E Blockchain group
                </a>
              </p>
            </div>
          </div>

          {/* services list */}
          <div className="space-y-5 lg:col-span-1">
            <h5 className="text-2xl font-extrabold uppercase tracking-[0.12em] text-white">Services</h5>
            <div className="h-1 w-20 rounded-full bg-[#00ff88]" />
            <ul className="space-y-4 text-base text-white/85 sm:text-lg">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-3">
                  <span className="h-3 w-3 shrink-0 rounded-full bg-[#00ff88]" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 h-px w-full bg-white/10" />

        <div className="mt-6 flex flex-col gap-4 text-lg md:flex-row md:items-center md:justify-end md:gap-10">
          <p>Copyright</p>
          <p>&copy; 2024 SHE Blockchain.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
