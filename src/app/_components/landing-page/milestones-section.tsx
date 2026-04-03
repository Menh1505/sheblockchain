"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Milestone = {
  date: string;
  title: string;
  description: string;
  highlight?: string;
  status?: "past" | "present" | "future";
};

const milestones: Milestone[] = [
  {
    date: "05 / 2022",
    title: "Foundation",
    highlight: "Official Launch",
    description:
      "Officially launched S.H.E Blockchain. Provided scholarships for female students, achieved 92% satisfaction rate, and helped 30 students pursue blockchain careers.",
    status: "past",
  },
  {
    date: "2023",
    title: "Global Bridges",
    highlight: "International Programs",
    description:
      "Facilitated industrial experience program between Van Lang University and Singapore Management University. Organized blockchain training activities across Vietnam.",
    status: "past",
  },
  {
    date: "2024",
    title: "Scale & Impact",
    highlight: "20,000+ Students Reached",
    description:
      "Co-hosted the Unitour Program with ABAII, reaching over 20,000 students across 30+ universities nationwide.",
    status: "present",
  },
  {
    date: "2025",
    title: "Web3 Hub",
    highlight: "Ho Chi Minh City",
    description:
      "Set to launch the Web3 Hub in Ho Chi Minh City — a dedicated space for education, incubation, and ecosystem building.",
    status: "future",
  },
];

// dot color per status — all bright, just different hues
const dotStyles = {
  past: { core: "bg-white shadow-[0_0_18px_rgba(255,255,255,0.55)]", ring: "border-white/35", glow: "bg-white/8", pulse: false },
  present: { core: "bg-[#00ff88] shadow-[0_0_24px_rgba(0,255,136,0.75)]", ring: "border-[#00ff88]/55", glow: "bg-[#00ff88]/12", pulse: true },
  future: { core: "bg-[#38bdf8] shadow-[0_0_18px_rgba(56,189,248,0.55)]", ring: "border-[#38bdf8]/40", glow: "bg-[#38bdf8]/8", pulse: false },
} as const;

const textStyles = {
  past: { date: "text-gray-300", badge: "bg-white/8 text-white/80 border-white/20", title: "text-white", body: "text-gray-300" },
  present: { date: "text-[#00ff88]", badge: "bg-[#00ff88]/12 text-[#00ff88] border-[#00ff88]/35", title: "text-white", body: "text-gray-200" },
  future: { date: "text-[#38bdf8]", badge: "bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/30", title: "text-white/85", body: "text-gray-400" },
} as const;

function MilestoneNode({ milestone, index, isInView }: { milestone: Milestone; index: number; isInView: boolean }) {
  const s = milestone.status ?? "past";
  const dot = dotStyles[s];
  const txt = textStyles[s];

  return (
    <motion.div
      className="relative flex h-full flex-col items-center"
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* dot cluster */}
      <div className="relative flex shrink-0 items-center justify-center">
        {/* outer glow */}
        <motion.div
          className={`absolute h-16 w-16 rounded-full ${dot.glow}`}
          animate={dot.pulse ? { scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] } : {}}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* mid ring */}
        <div className={`absolute h-10 w-10 rounded-full border ${dot.ring}`} />
        {/* core */}
        <div className={`relative z-10 h-5 w-5 rounded-full ${dot.core}`} />
      </div>

      {/* date */}
      <motion.p
        className={`mt-6 text-base font-black uppercase tracking-[0.22em] ${txt.date}`}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.45 + index * 0.15 }}
      >
        {milestone.date}
      </motion.p>

      {/* badge */}
      {milestone.highlight && (
        <span className={`mt-2.5 inline-block rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-widest border ${txt.badge}`}>
          {milestone.highlight}
        </span>
      )}

      {/* title */}
      <h3 className={`mt-4 text-center text-2xl font-black uppercase tracking-tight lg:text-3xl ${txt.title}`}>
        {milestone.title}
      </h3>

      {/* description */}
      <p className={`mt-4 max-w-[260px] text-center text-base leading-7 lg:text-lg lg:leading-8 ${txt.body}`}>
        {milestone.description}
      </p>
    </motion.div>
  );
}

export function MilestonesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="mx-auto w-full px-4 py-3 sm:px-6 lg:px-16">
      <div
        className="flex flex-col rounded-4xl border border-[#00ff88]/15 bg-gray-900/80 px-8 py-8 shadow-[0_20px_80px_rgba(0,255,136,0.06)] backdrop-blur-sm lg:px-14 lg:py-10"
        style={{ height: "calc(100vh - var(--landing-header-offset, 96px) - 1.5rem)" }}
      >
        {/* heading */}
        <motion.div
          className="mb-8 shrink-0 text-center"
          initial={{ opacity: 0, y: -16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#00ff88]">Our Journey</p>
          <h2 className="relative mt-2 inline-block text-4xl font-black uppercase text-white sm:text-5xl">
            Memorable Milestones
            <span className="absolute left-1/2 top-full mt-2 h-px w-24 -translate-x-1/2 rounded-full bg-linear-to-r from-transparent via-[#00ff88] to-transparent" />
          </h2>
        </motion.div>

        {/* desktop: horizontal timeline — fills remaining height */}
        <div className="hidden flex-1 lg:flex lg:flex-col lg:justify-center">
          <div className="relative flex items-start justify-between gap-6">
            {/* base line */}
            <div className="absolute left-0 right-0 top-[2.4rem] h-px bg-white/8" />
            {/* animated reveal line */}
            <motion.div
              className="absolute left-0 top-[2.4rem] h-px bg-linear-to-r from-white/50 via-[#00ff88]/70 to-[#38bdf8]/50"
              style={{ right: 0, transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            />

            {milestones.map((m, i) => (
              <div key={m.date} className="flex-1">
                <MilestoneNode milestone={m} index={i} isInView={isInView} />
              </div>
            ))}
          </div>
        </div>

        {/* mobile: vertical timeline */}
        <div className="flex flex-1 flex-col gap-8 overflow-y-auto lg:hidden">
          {milestones.map((m, i) => {
            const s = m.status ?? "past";
            const dot = dotStyles[s];
            const txt = textStyles[s];
            return (
              <motion.div
                key={m.date}
                className="flex gap-5"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex flex-col items-center">
                  <div className={`h-4 w-4 shrink-0 rounded-full ${dot.core}`} />
                  {i < milestones.length - 1 && (
                    <div className="mt-2 w-px flex-1 bg-linear-to-b from-white/20 to-transparent" />
                  )}
                </div>
                <div className="pb-2">
                  <p className={`text-sm font-black uppercase tracking-[0.2em] ${txt.date}`}>{m.date}</p>
                  {m.highlight && (
                    <span className={`mt-1.5 inline-block rounded-full px-3 py-0.5 text-[11px] font-bold uppercase tracking-widest border ${txt.badge}`}>
                      {m.highlight}
                    </span>
                  )}
                  <h3 className={`mt-2 text-xl font-black uppercase ${txt.title}`}>{m.title}</h3>
                  <p className={`mt-2 text-sm leading-6 ${txt.body}`}>{m.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
