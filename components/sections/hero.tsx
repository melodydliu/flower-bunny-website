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
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/25 to-background/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/20 to-transparent" />
      </motion.div>

      {/* Ornamental corner decorations */}
      <div className="absolute top-24 left-8 md:left-16 opacity-40">
        <OrnamentCorner />
      </div>
      <div className="absolute top-24 right-8 md:right-16 opacity-40 rotate-90">
        <OrnamentCorner />
      </div>

      {/* Hero content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative h-full flex flex-col justify-end section-padding pb-20 md:pb-28"
      >
        <div>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-4 mb-3"
          >
            <span className="h-px w-8 bg-gold/50" />
            <span className="font-sans text-[9px] tracking-[0.42em] uppercase text-gold/70">
              Flower Bunny · London
            </span>
          </motion.div>

          {/* Main title — three-line serif composition */}
          <h1 className="font-serif font-light mb-8 flex flex-col gap-2">
            {/* <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-xl text-parchment/45 leading-none"
            >
              Where
            </motion.span> */}
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-2xl "
            >
              creating
            </motion.span>
            
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.78, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-2xl text-parchment/75 italic leading-none text-[#c9a96e]"
            >
              botanical magic.
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="font-sans font-light text-[14px] text-parchment-dim max-w-sm mb-10 leading-loose"
          >
            Concept-driven botanical installations for luxury brands,
            experiential spaces, editorial and creative collaborations.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <button
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group font-sans text-[10px] tracking-[0.28em] uppercase text-background bg-gold px-8 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Commission a Project
            </button>
            <button
              onClick={() => {
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-sans text-[10px] tracking-[0.28em] uppercase text-parchment-dim hover:text-gold transition-colors duration-300 flex items-center gap-3"
            >
              <span>View Work</span>
              <span className="w-8 h-px bg-current inline-block transition-all duration-300 group-hover:w-12" />
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
