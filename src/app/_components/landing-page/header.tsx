import Image from "next/image";

export function Header() {
  return (
    <header className="relative overflow-hidden pt-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(111,190,76,0.18),transparent_40%)]" />
      <div className="relative mx-auto flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center rounded-full border border-[#7bc043]/25 bg-white/85 px-8 py-4 shadow-sm backdrop-blur">
          <Image
            src="/she-logo.png"
            alt="SHE Blockchain logo"
            width={200}
            height={96}
            className="h-full w-full"
            priority
          />
        </div>
      </div>
    </header>
  );
}
