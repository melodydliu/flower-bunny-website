"use client";

const brands = [
  { name: "DIOR",           className: "font-sans tracking-[0.42em] text-[24px]" },
  { name: "Chanel",         className: "font-serif italic text-[29px] tracking-[0.06em]" },
  { name: "LOUIS VUITTON",  className: "font-sans tracking-[0.28em] text-[13px]" },
  { name: "Hermès",         className: "font-serif text-[26px] tracking-[0.08em]" },
  { name: "TIFFANY & CO.",  className: "font-sans tracking-[0.28em] text-[13px]" },
  { name: "The Ritz-Carlton", className: "font-serif text-[22px] tracking-[0.1em]" },
  { name: "CARTIER",        className: "font-sans tracking-[0.42em] text-[16px]" },
  { name: "Valentino",      className: "font-serif italic text-[29px] tracking-[0.04em]" },
  { name: "GUCCI",          className: "font-sans tracking-[0.42em] text-[16px]" },
  { name: "Sotheby's",      className: "font-serif text-[24px] tracking-[0.08em]" },
];

export function Marquee() {
  const repeated = [...brands, ...brands];

  return (
    <div className="bg-background pt-5 pb-[130px]">
      {/* Marquee track with edge fade — constrained to 40% and centered */}
      <div className="max-w-[60%] mx-auto overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div
          className="flex items-center whitespace-nowrap"
          style={{ animation: "marquee-scroll 10s linear infinite" }}
        >
          {repeated.map((brand, i) => (
            <span key={i} className="flex items-center">
              <span className={`${brand.className} text-parchment-muted/55 px-10`}>
                {brand.name}
              </span>
              <span className="text-gold/25 text-[6px]">◆</span>
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
