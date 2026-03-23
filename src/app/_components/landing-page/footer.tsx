import Image from "next/image";

const services = [
  "Advisory Services",
  "Training Programs",
  "Networking",
  "Event Organization",
  "Startup Incubation",
] as const;

// export function Footer() {
//   return (
//     <footer id="contact" className="mt-10 bg-[#0f6a33] text-white">
//       <div className="ml-56 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//         <div className="grid gap-10 lg:grid-cols-4">
//           <div className="space-y-5 lg:col-span-2">
//             <div className="inline-flex items-center rounded-[28px] bg-white px-8 py-3 shadow-lg shadow-black/10">
//               <Image
//                 src="/she-logo.png"
//                 alt="S.H.E Blockchain"
//                 width={220}
//                 height={120}
//                 className="h-auto w-35 sm:w-45"
//               />
//             </div>
//             <p className="max-w-md text-sm leading-7 text-white/85 sm:text-base">
//               Our mission is to educate, nurture, and guide the next generation of young talent. Through training
//               programs, skill development, startup incubation, and career orientation, we equip young people with
//               the knowledge, capabilities, and mindset needed to thrive in rapidly emerging technologies, especially
//               Blockchain.
//             </p>
//           </div>

//           <div className="space-y-5 lg:col-span-1">
//             <h5 className="text-xl font-extrabold uppercase tracking-[0.12em] text-white">Contact Information</h5>
//             <div className="h-1 w-20 rounded-full bg-[#8ed15f]" />
//             <div className="space-y-4 text-sm leading-7 text-white/85 sm:text-base">
//               <p>Address: Huong Duong 03 Huynh Van Nghe, Phuc Dong Ward, Long Bien District, Hanoi</p>
//               <p>
//                 Phone:{" "}
//                 <a href="tel:+84936368600" className="font-semibold text-white transition hover:text-[#c9f39f]">
//                   +84 936 368 600
//                 </a>
//               </p>
//               <p>
//                 Email:{" "}
//                 <a
//                   href="mailto:contact@she-blockchain-e9e089.ingress-baronn.ewp.live"
//                   className="break-all font-semibold text-white transition hover:text-[#c9f39f]"
//                 >
//                   contact@she-blockchain-e9e089.ingress-baronn.ewp.live
//                 </a>
//               </p>
//             </div>
//           </div>

//           <div className="space-y-5 lg:col-span-1">
//             <h5 className="text-xl font-extrabold uppercase tracking-[0.12em] text-white">Services</h5>
//             <div className="h-1 w-20 rounded-full bg-[#8ed15f]" />
//             <ul className="space-y-3 text-sm text-white/85 sm:text-base">
//               {services.map((service) => (
//                 <li key={service} className="flex items-center gap-3">
//                   <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#8ed15f]" />
//                   <span>{service}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-white/10 bg-[#0b5528]">
//         <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-white/75 sm:px-6 lg:flex-row lg:items-center lg:justify-end lg:px-8">
//           <span>Copyright</span>
//           <span>&copy; 2024 SHE Blockchain.</span>
//           <span>All rights reserved.</span>
//         </div>
//       </div>
//     </footer>
//   );
// }

export function Footer() {
  return (
    <footer className="px-4 pb-4 md:px-8 lg:px-12">
      <div className="mx-auto max-w-310 rounded-4xl bg-[#191A23] px-6 py-10 text-white md:px-10 md:py-12 lg:px-15 lg:py-13.75">
        <div className="flex flex-col gap-10">
          {/* Top row */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            {/* Left side */}
            <div className="flex flex-col gap-8">
              {/* Logo + nav */}
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-14">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-sm bg-white [clip-path:polygon(50%_0%,65%_35%,100%_50%,65%_65%,50%_100%,35%_65%,0%_50%,35%_35%)]" />
                  <span className="text-[28px] font-medium leading-none tracking-tight">
                    Positivus
                  </span>
                </div>

                <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[18px]">
                  <a href="#" className="underline underline-offset-4">
                    About us
                  </a>
                  <a href="#" className="underline underline-offset-4">
                    Services
                  </a>
                  <a href="#" className="underline underline-offset-4">
                    Use Cases
                  </a>
                  <a href="#" className="underline underline-offset-4">
                    Pricing
                  </a>
                  <a href="#" className="underline underline-offset-4">
                    Blog
                  </a>
                </nav>
              </div>

              {/* Contact block */}
              <div className="max-w-md">
                <span className="inline-block rounded-md bg-[#B9FF66] px-3 py-1 text-[20px] font-medium leading-none text-black">
                  Contact us:
                </span>

                <div className="mt-7 space-y-5 text-[20px] leading-[1.4] text-white/95">
                  <p>Email: info@positivus.com</p>
                  <p>Phone: 555-567-8901</p>
                  <p>
                    Address: 1234 Main St
                    <br />
                    Moonstone City, Stardust State 12345
                  </p>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="w-full lg:max-w-158.5">
              {/* Social icons */}
              <div className="mb-8 flex justify-start gap-5 lg:justify-end">
                <SocialIcon label="LinkedIn">in</SocialIcon>
                <SocialIcon label="Facebook">f</SocialIcon>
                <SocialIcon label="Twitter">t</SocialIcon>
              </div>

              {/* Subscribe box */}
              <div className="rounded-[20px] bg-[#292A32] p-6 md:p-8 lg:px-10 lg:py-14">
                <form className="flex flex-col gap-4 md:flex-row">
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-17 w-full rounded-[14px] border border-white bg-transparent px-6 text-[20px] text-white outline-none placeholder:text-white/70"
                  />
                  <button
                    type="submit"
                    className="h-17 rounded-[14px] bg-[#B9FF66] px-8 text-[20px] font-medium text-black transition hover:opacity-90"
                  >
                    Subscribe to news
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white/80" />

          {/* Bottom row */}
          <div className="flex flex-col gap-4 text-[18px] md:flex-row md:items-center md:gap-10">
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <a href="#" className="underline underline-offset-4">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[20px] font-bold text-[#191A23] transition hover:scale-105"
    >
      {children}
    </a>
  );
}