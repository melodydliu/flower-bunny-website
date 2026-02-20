"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: image with parallax */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <motion.div style={{ y: imageY }} className="absolute inset-[-10%]">
                <Image
                  src="https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=800&q=80"
                  alt="Melody Liu — Flower Bunny"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />

              {/* Ornamental frame */}
              {[
                "top-4 left-4",
                "top-4 right-4 rotate-90",
                "bottom-4 right-4 rotate-180",
                "bottom-4 left-4 -rotate-90",
              ].map((pos, i) => (
                <div key={i} className={`absolute ${pos} opacity-50`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M0.5 23.5V0.5H23.5" stroke="#C9A96E" strokeWidth="0.75" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Floating credential card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-8 -right-4 md:-right-10 bg-surface-raised border border-gold/20 p-6 max-w-[220px]"
            >
              <div className="font-serif text-3xl text-gold mb-1">8+</div>
              <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-parchment-muted leading-relaxed">
                Years creating for the world's most discerning clients
              </div>
            </motion.div>
          </motion.div>

          {/* Right: text */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold block mb-4">
                About
              </span>
              <h2 className="font-serif text-display-lg text-parchment">
                Melody Liu
              </h2>
              <p className="font-serif text-xl text-gold/70 italic mt-1">
                Founder & Creative Director
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-5"
            >
              <p className="font-sans font-light text-[15px] leading-[1.9] text-parchment-dim">
                Flower Bunny was born from a conviction that florals are not decoration — they
                are architecture. Melody Liu founded the studio after a decade working at the
                intersection of art, fashion, and spatial design, developing a language that is
                simultaneously lush and disciplined.
              </p>
              <p className="font-sans font-light text-[15px] leading-[1.9] text-parchment-dim">
                She has collaborated with fashion houses, gallery institutions, and private
                collectors across London, Paris, and New York — bringing the same obsessive
                attention to a 40-person dinner as to a flagship launch attended by thousands.
              </p>
              <p className="font-sans font-light text-[15px] leading-[1.9] text-parchment-dim">
                Her work has been featured in{" "}
                <em className="text-parchment not-italic">Vogue</em>,{" "}
                <em className="text-parchment not-italic">Wallpaper*</em>, and{" "}
                <em className="text-parchment not-italic">AnOther Magazine</em>.
              </p>
            </motion.div>

            {/* Philosophy quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 pl-6 border-l border-gold/30"
            >
              <p className="font-serif text-xl md:text-2xl text-parchment italic leading-snug">
                "I want every room to feel like something has grown there —
                not placed, but summoned."
              </p>
              <footer className="mt-3 font-sans text-[11px] tracking-[0.2em] uppercase text-gold/60">
                — Melody Liu
              </footer>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
