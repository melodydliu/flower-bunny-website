"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "DIOR",           className: "font-sans tracking-[0.42em] text-[12px]" },
  { name: "Chanel",         className: "font-serif italic text-[22px] tracking-[0.06em]" },
  { name: "LOUIS VUITTON",  className: "font-sans tracking-[0.28em] text-[10px]" },
  { name: "Hermès",         className: "font-serif text-[20px] tracking-[0.08em]" },
  { name: "TIFFANY & CO.",  className: "font-sans tracking-[0.28em] text-[10px]" },
  { name: "The Ritz-Carlton", className: "font-serif text-[16px] tracking-[0.1em]" },
  { name: "CARTIER",        className: "font-sans tracking-[0.42em] text-[12px]" },
  { name: "Valentino",      className: "font-serif italic text-[22px] tracking-[0.04em]" },
  { name: "GUCCI",          className: "font-sans tracking-[0.42em] text-[12px]" },
  { name: "Sotheby's",      className: "font-serif text-[18px] tracking-[0.08em]" },
];

export function Marquee() {
  const repeated = [...brands, ...brands, ...brands];

  return (
    <div className="border-y border-gold/10 bg-surface-raised">
      {/* Label */}
      <div className="flex items-center justify-center pt-11 pb-8">
        <div className="flex items-center gap-6">
          <span className="h-px w-10 bg-gold/25" />
          <span className="font-sans text-[9px] tracking-[0.42em] uppercase text-parchment-muted/45">
            Select Collaborations
          </span>
          <span className="h-px w-10 bg-gold/25" />
        </div>
      </div>

      {/* Marquee track with edge fade */}
      <div
        className="overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 9%, black 91%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 9%, black 91%, transparent)",
        }}
      >
        <motion.div
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex items-center whitespace-nowrap"
        >
          {repeated.map((brand, i) => (
            <span key={i} className="flex items-center">
              <span className={`${brand.className} text-parchment-muted/55 px-10`}>
                {brand.name}
              </span>
              <span className="text-gold/25 text-[6px]">◆</span>
            </span>
          ))}
        </motion.div>
      </div>

      <div className="pb-11" />
    </div>
  );
}
