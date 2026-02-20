"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1606041011872-596597976b25?w=800&q=80",
    caption: "Brand Activation · Veuve Clicquot",
  },
  {
    src: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=800&q=80",
    caption: "Fashion Show · Simone Rocha",
  },
  {
    src: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&q=80",
    caption: "Private Event · Mayfair Commission",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    caption: "Window Display · Selfridges London",
  },
  {
    src: "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=800&q=80",
    caption: "Installation · Frieze London",
  },
  {
    src: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80",
    caption: "Brand Activation · Maison Valentino",
  },
];

export function Carousel() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: true }));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [autoplay.current]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section ref={ref} className="py-20 overflow-hidden bg-surface">
      <div className="section-padding mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between"
        >
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold">
            From the Studio
          </span>
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 border border-gold/30 flex items-center justify-center text-parchment-dim hover:border-gold hover:text-gold transition-colors duration-300"
              aria-label="Previous"
            >
              <ArrowLeft size={14} />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 border border-gold/30 flex items-center justify-center text-parchment-dim hover:border-gold hover:text-gold transition-colors duration-300"
              aria-label="Next"
            >
              <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex gap-4 pl-6 md:pl-12 lg:pl-20 xl:pl-28">
          {carouselImages.map((item, i) => (
            <div
              key={i}
              className="relative flex-none w-[280px] md:w-[360px] lg:w-[420px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="420px"
                />
                {/* Subtle gold frame */}
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/10" />
              </div>
              <p className="mt-3 font-sans text-[11px] tracking-[0.15em] text-parchment-muted">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
