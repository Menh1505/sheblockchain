"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
    isActive: boolean;
    direction: 1 | -1; // 1 = scrolling down (new section comes from below), -1 = scrolling up
    sectionKey: string;
};

const DISTANCE = 40;
const DURATION = 0.55;
const EASE = [0.22, 1, 0.36, 1] as const;

export function SectionReveal({ children, isActive, direction, sectionKey }: Props) {
    return (
        <AnimatePresence mode="wait" initial={false}>
            {isActive && (
                <motion.div
                    key={sectionKey}
                    className="h-full w-full"
                    initial={{ opacity: 0, y: direction * DISTANCE }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: direction * -DISTANCE }}
                    transition={{ duration: DURATION, ease: EASE }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
