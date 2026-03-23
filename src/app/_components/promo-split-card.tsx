import Image from "next/image";
import type { ReactNode } from "react";

type PromoSplitCardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  imageNode?: ReactNode;
  reverse?: boolean;
  className?: string;
};

export function PromoSplitCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
  imageNode,
  reverse = false,
  className = "",
}: PromoSplitCardProps) {
  return (
    <section className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="rounded-4xl px-6 sm:px-8 md:px-10 lg:px-15">
        <div
          className={[
            "grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
            reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : "",
          ].join(" ")}
        >
          <div>
            <h2 className="text-2xl font-extrabold leading-[1.2] text-[#191A23] sm:text-4xl lg:text-6xl">
              {title}
            </h2>

            <p className="mt-5 text-[16px] leading-[1.6] text-[#191A23] sm:text-2xl">
              {description}
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-175">
              {imageNode ? (
                imageNode
              ) : imageSrc ? (
                <div className="relative aspect-494/394 w-full overflow-hidden rounded-4xl">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex aspect-494/394 w-full items-center justify-center rounded-3xl border border-dashed border-[#191A23]/30 text-[#191A23]/50">
                  Add image or visual
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}