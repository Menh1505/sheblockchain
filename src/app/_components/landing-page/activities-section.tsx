"use client";

import { useState } from "react";
import { PromoSplitCard } from "../promo-split-card";

type Activity = {
  title: string;
  image: string;
};

type ActivitiesSectionProps = {
  activities: readonly Activity[];
};

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
  );
}

export function ActivitiesSection({ activities }: ActivitiesSectionProps) {
  const slides = [
    {
      title: "Blockchain training course",
      description:
        "Boost your tech savvy with Blockchain essentials! Hanoi Foreign Trade University students joined the TICK THE TECH BOX short-term program on Blockchain, co-hosted by S.H.E Blockchain. Exploring the core concepts and applications of Blockchain technology from industry experts and gain hands-on experience.",
      imageSrc: activities[0]?.image ?? "/act/act1.svg",
      imageAlt: "Blockchain training course",
      reverse: false,
    },
    {
      title: "Industrial Experience Program",
      description:
        "Van Lang University and SMU Singapore, a top Asian university, joined the INDUSTRIAL EXPERIENCE PROGRAM co-organized by S.H.E Blockchain.",
      imageSrc: activities[1]?.image ?? "/act/act2.svg",
      imageAlt: "Industrial Experience Program",
      reverse: true,
    },
    {
      title: "Unitour Program",
      description:
        "Connect, learn, and innovate: Discover the power of Blockchain at VinUniversity's knowledge exchange event which co-hosted by S.H.E Blockchain.",
      imageSrc: activities[2]?.image ?? "/act/act3.svg",
      imageAlt: "Unitour Program",
      reverse: false,
    },
  ] as const;

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="mx-auto scroll-mt-32 px-6 py-8 sm:px-8 lg:px-16">
      <div className="text-center mb-10">
        <h2 className="relative inline-block text-4xl font-black uppercase text-white sm:text-5xl">
          Our Activities
          <span className="absolute left-1/2 top-full mt-2 h-1 w-16 -translate-x-1/2 rounded-full bg-cyan-500" />
        </h2>
      </div>

      <div className="mt-8 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.title} className="w-full shrink-0">
              <PromoSplitCard
                title={slide.title}
                description={slide.description}
                imageSrc={slide.imageSrc}
                imageAlt={slide.imageAlt}
                reverse={slide.reverse}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous activity"
          onClick={handlePrevious}
          className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-gray-700 bg-gray-800 text-cyan-400 shadow-[4px_4px_0_#8b5cf6] transition hover:-translate-y-0.5"
        >
          <ArrowLeftIcon />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Go to ${slide.title}`}
              onClick={() => setActiveIndex(index)}
              className={`h-3 rounded-full transition-all ${activeIndex === index ? "w-10 bg-cyan-500" : "w-3 bg-gray-600"
                }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next activity"
          onClick={handleNext}
          className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-gray-700 bg-gray-800 text-cyan-400 shadow-[4px_4px_0_#8b5cf6] transition hover:-translate-y-0.5"
        >
          <ArrowRightIcon />
        </button>
      </div>
    </section>
  );
}
