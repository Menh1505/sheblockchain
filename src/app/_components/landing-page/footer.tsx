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
    <footer className="px-4 md:px-8 lg:px-12">
      <div className="mx-auto rounded-t-4xl bg-gray-900 px-6 py-10 text-white md:px-10 md:py-12 lg:px-15 lg:py-13.75">
        <div className="flex flex-col gap-10">
          <div className="grid gap-10 lg:grid-cols-4">
            <div className="space-y-5 lg:col-span-2">
              <div className="inline-flex items-center rounded-[28px] bg-gray-800 px-8 py-3 shadow-lg shadow-black/10">
                <Image
                  src="/she-logo.png"
                  alt="S.H.E Blockchain"
                  width={220}
                  height={120}
                  className="h-auto w-35 sm:w-45"
                />
              </div>
              <p className="max-w-md text-sm leading-7 text-gray-300 sm:text-base">
                Our mission is to educate, nurture, and guide the next generation of young talent. Through training
                programs, skill development, startup incubation, and career orientation, we equip young people with
                the knowledge, capabilities, and mindset needed to thrive in rapidly emerging technologies, especially
                Blockchain.
              </p>
            </div>

            <div className="space-y-5 lg:col-span-1">
              <h5 className="text-xl font-extrabold uppercase tracking-[0.12em] text-white">Contact Information</h5>
              <div className="h-1 w-20 rounded-full bg-[#00ff88]" />
              <div className="space-y-4 text-sm leading-7 text-gray-300 sm:text-base">
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

            <div className="space-y-5 lg:col-span-1">
              <h5 className="text-xl font-extrabold uppercase tracking-[0.12em] text-white">Services</h5>
              <div className="h-1 w-20 rounded-full bg-[#00ff88]" />
              <ul className="space-y-3 text-sm text-white/85 sm:text-base">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#00ff88]" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-px w-full bg-white/10" />

          <div className="flex flex-col gap-4 text-[18px] md:flex-row md:items-center md:justify-end md:gap-10">
            <p>Copyright</p>
            <p>&copy; 2024 SHE Blockchain.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
