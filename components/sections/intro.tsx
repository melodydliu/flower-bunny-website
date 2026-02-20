"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Intro() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 md:py-40 section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Ornament */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-6 mb-16 origin-left"
        >
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-sans">Studio</span>
          <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
          <GoldOrnament />
          <div className="flex-1 h-px bg-gradient-to-l from-gold/40 to-transparent" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left: large statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-display-xl text-parchment leading-[1.0]">
              Flowers as a{" "}
              <em className="italic text-gold">language</em>
              <br />
              of luxury.
            </h2>
          </motion.div>

          {/* Right: body text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 pt-2"
          >
            <p className="font-sans font-light text-[15px] leading-[1.85] text-parchment-dim">
              Flower Bunny is the studio of{" "}
              <span className="text-parchment">Melody Liu</span> — a bespoke floral atelier
              working at the intersection of art direction, craft, and the natural world.
            </p>
            <p className="font-sans font-light text-[15px] leading-[1.85] text-parchment-dim">
              Each commission is treated as a singular work: conceived with intention, executed
              with precision, and designed to command the room — whether that room is a couture
              runway, a flagship window, or a private dining table set for forty.
            </p>
            <div className="pt-4 flex items-center gap-4">
              <div className="h-px w-8 bg-gold/40" />
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold/70">
                Est. London
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function GoldOrnament() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" stroke="#C9A96E" strokeWidth="0.75" fill="rgba(201,169,110,0.1)" />
    </svg>
  );
}
