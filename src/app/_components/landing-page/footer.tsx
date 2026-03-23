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
    <footer id="contact" className="mt-10 bg-[#0f6a33] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-5">
            <div className="inline-flex items-center rounded-[28px] bg-white px-4 py-3 shadow-lg shadow-black/10">
              <Image
                src="/she-logo.png"
                alt="S.H.E Blockchain"
                width={220}
                height={120}
                className="h-auto w-35 sm:w-45"
              />
            </div>
            <p className="max-w-md text-sm leading-7 text-white/85 sm:text-base">
              Our mission is to educate, nurture, and guide the next generation of young talent. Through training
              programs, skill development, startup incubation, and career orientation, we equip young people with
              the knowledge, capabilities, and mindset needed to thrive in rapidly emerging technologies, especially
              Blockchain.
            </p>
          </div>

          <div className="space-y-5">
            <h5 className="text-xl font-extrabold uppercase tracking-[0.12em] text-white">Contact Information</h5>
            <div className="h-1 w-20 rounded-full bg-[#8ed15f]" />
            <div className="space-y-4 text-sm leading-7 text-white/85 sm:text-base">
              <p>Address: Huong Duong 03 Huynh Van Nghe, Phuc Dong Ward, Long Bien District, Hanoi</p>
              <p>
                Phone:{" "}
                <a href="tel:+84936368600" className="font-semibold text-white transition hover:text-[#c9f39f]">
                  +84 936 368 600
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:contact@she-blockchain-e9e089.ingress-baronn.ewp.live"
                  className="break-all font-semibold text-white transition hover:text-[#c9f39f]"
                >
                  contact@she-blockchain-e9e089.ingress-baronn.ewp.live
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <h5 className="text-xl font-extrabold uppercase tracking-[0.12em] text-white">Services</h5>
            <div className="h-1 w-20 rounded-full bg-[#8ed15f]" />
            <ul className="space-y-3 text-sm text-white/85 sm:text-base">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#8ed15f]" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#0b5528]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-white/75 sm:px-6 lg:flex-row lg:items-center lg:justify-end lg:px-8">
          <span>Copyright</span>
          <span>&copy; 2024 SHE Blockchain.</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
