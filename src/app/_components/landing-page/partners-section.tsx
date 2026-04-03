"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type PartnerImage = {
  name: string;
  src: string;
  link: string;
};

type PartnersSectionProps = {
  partners: readonly PartnerImage[];
};

function PartnerCard({ partner, index, isInView }: { partner: PartnerImage; index: number; isInView: boolean }) {
  return (
    <motion.a
      href={partner.link}
      target="_blank"
      rel="noreferrer"
      aria-label={partner.name}
      className="group flex min-h-44 items-center justify-center rounded-3xl border border-white/10 bg-white/30 p-6 sm:min-h-48 sm:p-7 lg:min-h-52 lg:p-8 backdrop-blur-sm transition-colors duration-300 hover:border-[#00ff88]/25 hover:bg-white"
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
    >
      {/* relative wrapper forces next/image fill to respect a real height */}
      <div className="relative h-16 w-full sm:h-20 lg:h-24">
        <Image
          src={partner.src}
          alt={partner.name}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 28vw, 42vw"
          className="object-contain grayscale opacity-75 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
        />
      </div>
    </motion.a>
  );
}

export function PartnersSection({ partners }: PartnersSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section ref={ref} className="mx-auto w-full px-4 py-3 sm:px-6 lg:px-16">
      <div
        className="flex flex-col justify-center rounded-4xl border border-white/8 px-8 py-8 shadow-[0_20px_80px_rgba(0,255,136,0.04)] backdrop-blur-sm lg:px-14 lg:py-10"
        style={{ height: "calc(100vh - var(--landing-header-offset, 96px) - 1.5rem)" }}
      >
        {/* heading */}
        <motion.div
          className="mb-4 text-center"
          initial={{ opacity: 0, y: -14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#00ff88]">Our Network</p>
          <h2 className="relative mt-2 inline-block text-4xl font-black uppercase text-white sm:text-5xl">
            Trusted Partners
            <span className="absolute left-1/2 top-full mt-2 h-px w-24 -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-[#00ff88] to-transparent" />
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400">
            Collaborating with leading universities, blockchain ecosystems, and Web3 communities to build the next generation of talent.
          </p>
        </motion.div>

        {/* subtle radial glow behind grid */}
        <div className="relative flex-1 flex flex-col justify-center">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[40%] w-[60%] rounded-full bg-[#00ff88]/4 blur-[80px]" />
          </div>

          {/* partner grid */}
          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {partners.map((partner, i) => (
              <PartnerCard key={partner.name} partner={partner} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
