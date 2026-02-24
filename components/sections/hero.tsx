"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

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
        {/* Flat tint — lets the image breathe */}
        <div className="absolute inset-0 bg-background/30" />
        {/* Bottom fade for text legibility */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background/72 to-transparent" />
      </motion.div>

      {/* Hero content — anchored bottom-left */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative h-full flex flex-col justify-end section-padding pb-20 md:pb-28"
      >
        {/* Eyebrow label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-sans text-[9px] tracking-[0.48em] uppercase text-parchment-muted/65 mb-5"
        >
          Creative Floral Studio
        </motion.p>

        {/* Main headline — three-line stepped composition */}
        <h1 className="font-serif font-light mb-10 flex flex-col leading-none">
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-3xl italic text-parchment"
          >
            creating
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-3xl text-parchment/72 pl-[0.08em]"
          >
            botanical
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-2xl italic text-gold pl-[0.28em]"
          >
            magic.
          </motion.span>
        </h1>

        {/* CTAs — editorial text links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="flex items-center gap-9"
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="font-sans text-[10px] tracking-[0.3em] uppercase text-parchment/80 hover:text-gold transition-colors duration-300 border-b border-current/20 pb-0.5"
          >
            Commission a Project
          </button>
          <span className="w-5 h-px bg-parchment-muted/20" />
          <button
            onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
            className="font-sans text-[10px] tracking-[0.3em] uppercase text-parchment-muted hover:text-gold transition-colors duration-300"
          >
            View Work
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll — word only, anchored bottom-right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1.2 }}
        style={{ opacity }}
        className="absolute bottom-10 right-8 md:right-16"
      >
        <span className="font-sans text-[9px] tracking-[0.48em] uppercase text-parchment-muted/45">
          scroll
        </span>
      </motion.div>
    </section>
  );
}
