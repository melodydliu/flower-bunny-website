"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const INTERVAL_MS = 6500;

const testimonials = [
  {
    quote:
      "Flower Bunny transformed our brand activation into something truly unforgettable. Their ability to blend elegance with intentionality is unmatched—every detail felt considered, every element purposeful.",
    author: "Isabelle Laurent",
    title: "Creative Director",
    company: "Maison Valentino",
    year: "2024",
  },
  {
    quote:
      "Working with Flower Bunny was like watching poetry take visual form. They didn't just design our windows—they gave them a soul. The results exceeded every expectation we had.",
    author: "Marcus Reid",
    title: "Head of Visual Merchandising",
    company: "Selfridges",
    year: "2024",
  },
  {
    quote:
      "There's a rare quality to their work—a sense of timelessness that still feels utterly contemporary. Our runway garden produced pieces that guests are still talking about a year later.",
    author: "Sofía Esposito",
    title: "Show Producer",
    company: "Simone Rocha",
    year: "2023",
  },
  {
    quote:
      "The level of craft and thoughtfulness Flower Bunny brings to every commission is extraordinary. They understand luxury not as excess, but as the art of restraint done perfectly.",
    author: "James Whitfield",
    title: "Founder",
    company: "Frieze London",
    year: "2023",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setActive((prev) => (prev + 1) % testimonials.length);
      }
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const navigate = (idx: number) => {
    setActive(idx);
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative overflow-hidden py-[clamp(5rem,10vw,9rem)]"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      {/* Ambient glow behind quote */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,169,110,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Watermark quote character */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none"
        aria-hidden="true"
      >
        <motion.span
          className="font-serif leading-none text-parchment"
          style={{ fontSize: "45vw", opacity: 0 }}
          animate={inView ? { opacity: 0.028 } : {}}
          transition={{ duration: 2.5, ease: EASE }}
        >
          &ldquo;
        </motion.span>
      </div>

      <div className="section-padding relative mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {/* Eyebrow with animated lines */}
          <div className="mb-5 flex items-center justify-center gap-5">
            <motion.div
              className="h-px bg-gold/40"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, ease: EASE }}
              style={{ transformOrigin: "right", width: "3rem" }}
            />
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold">
              Kind Words
            </span>
            <motion.div
              className="h-px bg-gold/40"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, ease: EASE }}
              style={{ transformOrigin: "left", width: "3rem" }}
            />
          </div>
          <h2 className="font-serif text-display-xl text-parchment">
            Client Stories
          </h2>
        </motion.div>

        {/* Quote area */}
        <div className="relative">
          {/* Decorative SVG quote mark */}
          <motion.div
            className="mb-10 flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
          >
            <svg
              width="48"
              height="38"
              viewBox="0 0 48 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1 38V22.8C1 15.2 3.533 8.933 8.6 4C11.933 1.333 15.6 0 19.6 0L20.6 5.2C16.933 5.733 13.933 7.733 11.6 11.2C9.933 14 9 17.467 8.733 21.6H19.6V38H1ZM29.4 38V22.8C29.4 15.2 31.933 8.933 37 4C40.333 1.333 44 0 48 0L49 5.2C45.333 5.733 42.333 7.733 40 11.2C38.333 14 37.4 17.467 37.133 21.6H48V38H29.4Z"
                fill="#C9A96E"
                opacity="0.65"
              />
            </svg>
          </motion.div>

          {/* Quote text */}
          <motion.div
            className="relative min-h-[128px] md:min-h-[100px]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          >
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.65, ease: EASE }}
                className="text-center font-serif italic leading-[1.78] text-parchment"
                style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.75rem)" }}
              >
                {testimonials[active].quote}
              </motion.blockquote>
            </AnimatePresence>
          </motion.div>

          {/* Diamond ornament divider */}
          <div className="my-10 flex items-center justify-center gap-4">
            <motion.div
              className="h-px bg-gradient-to-r from-transparent to-gold/45"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.1, delay: 0.6, ease: EASE }}
              style={{ transformOrigin: "left", width: "5rem" }}
            />
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.85, ease: EASE }}
            >
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                <rect
                  x="4.5"
                  y="0.4"
                  width="5.8"
                  height="5.8"
                  rx="0.4"
                  transform="rotate(45 4.5 0.4)"
                  fill="#C9A96E"
                  opacity="0.7"
                />
              </svg>
            </motion.div>
            <motion.div
              className="h-px bg-gradient-to-l from-transparent to-gold/45"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.1, delay: 0.6, ease: EASE }}
              style={{ transformOrigin: "right", width: "5rem" }}
            />
          </div>

          {/* Author attribution */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`author-${active}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="text-center"
            >
              <p className="font-serif text-xl text-parchment">
                {testimonials[active].author}
              </p>
              <p className="mt-2 font-sans text-[11px] tracking-[0.24em] uppercase text-gold/65">
                {testimonials[active].title}&ensp;·&ensp;
                {testimonials[active].company}&ensp;·&ensp;
                {testimonials[active].year}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot navigation */}
        <motion.div
          className="mt-14 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1, ease: EASE }}
        >
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => navigate(idx)}
              className="flex h-6 w-6 items-center justify-center"
              aria-label={`View testimonial ${idx + 1}`}
            >
              <motion.svg
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
                aria-hidden="true"
                animate={{
                  scale: idx === active ? 1 : 0.7,
                  opacity: idx === active ? 1 : 0.3,
                }}
                transition={{ duration: 0.4, ease: EASE }}
                className="transition-transform hover:opacity-60"
              >
                <rect
                  x="3.5"
                  y="0.3"
                  width="4.5"
                  height="4.5"
                  rx="0.3"
                  transform="rotate(45 3.5 0.3)"
                  fill="#C9A96E"
                />
              </motion.svg>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
