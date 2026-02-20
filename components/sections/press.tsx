"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const publications = [
  "Vogue",
  "Wallpaper*",
  "AnOther Magazine",
  "The World of Interiors",
  "Harper's Bazaar",
  "Architectural Digest",
];

const collaborators = [
  "Valentino",
  "Veuve Clicquot",
  "Selfridges",
  "Simone Rocha",
  "Frieze London",
  "Net-A-Porter",
  "Christian Louboutin",
  "The Dorchester",
];

export function Press() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 section-padding border-t border-gold/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold block mb-4">
            Recognised By
          </span>
          <h2 className="font-serif text-display-md text-parchment">
            As seen in & collaborated with
          </h2>
        </motion.div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold/50 text-center mb-8">
            Press
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {publications.map((pub, i) => (
              <motion.span
                key={pub}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.6 }}
                className="font-serif text-2xl md:text-4xl text-parchment-dim/45 hover:text-parchment-dim/80 transition-colors duration-400 cursor-default"
              >
                {pub}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent my-10" />

        {/* Collaborators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold/50 text-center mb-8">
            Collaborators
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {collaborators.map((brand, i) => (
              <motion.span
                key={brand}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.06, duration: 0.6 }}
                className="font-sans text-[11px] tracking-[0.28em] uppercase text-parchment-muted/55 hover:text-gold/80 transition-colors duration-300 cursor-default"
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
