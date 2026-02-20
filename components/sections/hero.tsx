"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Parallax image */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 scale-110"
      >
        <Image
          src="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=1800&q=85"
          alt="Luxury floral installation"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
      </motion.div>

      {/* Ornamental corner decorations */}
      <div className="absolute top-24 left-8 md:left-16 opacity-30">
        <OrnamentCorner />
      </div>
      <div className="absolute top-24 right-8 md:right-16 opacity-30 rotate-90">
        <OrnamentCorner />
      </div>

      {/* Hero content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative h-full flex flex-col justify-end section-padding pb-20 md:pb-28"
      >
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-px w-12 bg-gold/60" />
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold">
              Luxury Floral Design
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-display-2xl text-parchment leading-[0.92] mb-6"
          >
            Where{" "}
            <em className="gold-gradient not-italic">nature</em>
            <br />
            becomes{" "}
            <em className="italic text-parchment/80">spectacle.</em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="font-sans font-light text-base text-parchment-dim max-w-lg mb-10 leading-relaxed"
          >
            Bespoke floral installations for luxury brands, fashion events,
            and the spaces that demand to be remembered.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <button
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group font-sans text-[11px] tracking-[0.25em] uppercase text-background bg-gold px-8 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Commission a Project
            </button>
            <button
              onClick={() => {
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-sans text-[11px] tracking-[0.25em] uppercase text-parchment-dim hover:text-gold transition-colors duration-300 flex items-center gap-3"
            >
              <span>View Work</span>
              <span className="w-6 h-px bg-current inline-block" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-gold/60" />
        </motion.div>
        <span
          className="font-sans text-[9px] tracking-[0.3em] uppercase text-parchment-muted"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

function OrnamentCorner() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M1 39V1H39" stroke="#C9A96E" strokeWidth="0.75" />
      <path d="M1 20V1H20" stroke="#C9A96E" strokeWidth="0.5" opacity="0.5" />
      <circle cx="1" cy="1" r="1.5" fill="#C9A96E" />
    </svg>
  );
}
