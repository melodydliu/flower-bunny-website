"use client";

import { motion } from "framer-motion";

const items = [
  "Brand Activations",
  "Window Displays",
  "Fashion Shows",
  "Luxury Events",
  "Floral Installations",
  "Private Commissions",
];

export function Marquee() {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden py-5 border-y border-gold/10 bg-surface-raised">
      <motion.div
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex gap-0 whitespace-nowrap"
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-parchment-muted/40 px-6">
              {item}
            </span>
            <span className="text-gold/30 text-xs">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
