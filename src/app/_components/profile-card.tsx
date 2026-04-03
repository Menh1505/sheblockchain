import Image, { type StaticImageData } from "next/image";

type ProfileCardProps = {
  imageSrc: string | StaticImageData;
  name: string;
  role: string;
  description: string;
  imageHeight?: number;
  alt?: string;
  className?: string;
  priority?: boolean;
};

export function ProfileCard({
  imageSrc,
  name,
  role,
  description,
  imageHeight = 370,
  alt,
  className = "",
  priority = false,
}: ProfileCardProps) {
  const cardHeight = Math.round(imageHeight / 0.6);

  return (
    <article
      className={`flex w-full max-w-85 flex-col overflow-hidden rounded-[28px] border-2 border-white bg-gray-800 shadow-[10px_10px_0_#8b5cf6] ${className}`}
      style={{ height: `${cardHeight}px` }}
    >
      <div className="relative shrink-0 border-b-2 border-white bg-gray-700" style={{ height: `${imageHeight}px` }}>
        <Image
          src={imageSrc}
          alt={alt ?? name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
          className="object-contain"
        />
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-between gap-3 p-5">
        <div>
          <h3 className="text-2xl font-black uppercase leading-tight text-white">{name}</h3>
          <p className="mt-2 mb-3 text-sm font-extrabold uppercase tracking-[0.16em] text-purple-400">{role}</p>
          <p className="overflow-y-auto text-sm leading-6 text-gray-300">{description}</p>
        </div>
      </div>
    </article>
  );
}

export type { ProfileCardProps };
