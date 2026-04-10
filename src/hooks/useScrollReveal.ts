"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
    options?: IntersectionObserverInit
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Already visible on mount — reveal immediately, no animation needed
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add("revealed");
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("revealed");
                    observer.disconnect();
                }
            },
            { threshold: 0.05, rootMargin: "0px 0px -40px 0px", ...options }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return ref;
}
