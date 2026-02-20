"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "I",
    title: "Discovery",
    description:
      "We begin with a deep conversation — your vision, the space, the feeling you want to leave behind. Nothing is assumed.",
  },
  {
    number: "II",
    title: "Concept",
    description:
      "From mood to material, we develop a visual proposal: references, botanical selections, colour palettes, and spatial sketches.",
  },
  {
    number: "III",
    title: "Craft",
    description:
      "Each element is sourced, tested, and perfected. We work only with growers and suppliers who share our standard for quality.",
  },
  {
    number: "IV",
    title: "Installation",
    description:
      "The studio team installs on-site with precision. Every stem, every wire, every shadow is considered until the work is complete.",
  },
];

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-32 section-padding bg-surface">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold block mb-4">
            The Approach
          </span>
          <h2 className="font-serif text-display-lg text-parchment">
            How we work
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px bg-gradient-to-r from-gold/30 to-gold/10" />
              )}

              <div className="px-6 py-8 text-center md:text-left">
                {/* Roman numeral */}
                <div className="flex justify-center md:justify-start mb-6">
                  <div className="relative">
                    <div className="w-14 h-14 border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors duration-500">
                      <span className="font-serif text-lg text-gold">{step.number}</span>
                    </div>
                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                <h3 className="font-serif text-xl text-parchment mb-3">{step.title}</h3>
                <p className="font-sans font-light text-[13px] leading-relaxed text-parchment-dim">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider ornament */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 flex items-center gap-6 origin-center"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/20" />
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="1.5" fill="#C9A96E" />
            <circle cx="16" cy="16" r="6" stroke="#C9A96E" strokeWidth="0.5" opacity="0.4" />
            <circle cx="16" cy="16" r="12" stroke="#C9A96E" strokeWidth="0.3" opacity="0.2" />
            <path d="M16 4V28M4 16H28" stroke="#C9A96E" strokeWidth="0.3" opacity="0.25" />
          </svg>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/20" />
        </motion.div>
      </div>
    </section>
  );
}
