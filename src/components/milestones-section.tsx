"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./milestones-section.module.css";

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

function MilestoneNode({
    milestone,
    index,
    isInView,
}: {
    milestone: Milestone;
    index: number;
    isInView: boolean;
}) {
    const s = milestone.status ?? "past";

    return (
        <motion.div
            className={`${styles.node} ${styles[s]}`}
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* dot cluster */}
            <div className={styles.dotWrap}>
                {s === "present" && (
                    <motion.div
                        className={styles.dotGlow}
                        animate={{ scale: [1, 1.25, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                )}
                <div className={styles.dotRing} />
                <div className={styles.dotCore} />
            </div>

            <motion.p
                className={styles.date}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.45 + index * 0.15 }}
            >
                {milestone.date}
            </motion.p>

            {milestone.highlight && (
                <span className={styles.badge}>{milestone.highlight}</span>
            )}

            <h3 className={styles.title}>{milestone.title}</h3>
            <p className={styles.body}>{milestone.description}</p>
        </motion.div>
    );
}

export function MilestonesSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <section ref={ref} className={styles.section}>
            <div className={styles.card}>
                {/* heading */}
                <motion.div
                    className={styles.heading}
                    initial={{ opacity: 0, y: -16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <p className={styles.eyebrow}>Our Journey</p>
                    <h2 className={styles.h2}>Memorable Milestones</h2>
                </motion.div>

                {/* timeline */}
                <div className={styles.timeline}>
                    {/* base line */}
                    <div className={styles.lineBase} />
                    {/* animated reveal line */}
                    <motion.div
                        className={styles.lineReveal}
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    />
                    {milestones.map((m, i) => (
                        <div key={m.date} className={styles.nodeWrap}>
                            <MilestoneNode milestone={m} index={i} isInView={isInView} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
