"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";

const services = [
  {
    index: "01",
    title: "Brand Activations",
    headline: "Florals that launch a moment into memory.",
    description:
      "From product launches to immersive pop-ups, we create botanical environments that amplify your brand's aesthetic and generate genuine spectacle. Every detail — scale, scent, texture — is calibrated to your identity.",
    image: "https://images.unsplash.com/photo-1606041011872-596597976b25?w=900&q=85",
  },
  {
    index: "02",
    title: "Window Displays",
    headline: "The art of the first impression.",
    description:
      "Retail windows are a canvas. We design seasonal and bespoke window installations for luxury flagships and boutiques — installations that stop pedestrians, drive footfall, and become their own editorial moment.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
  },
  {
    index: "03",
    title: "Fashion Events",
    headline: "Runways grown from the earth.",
    description:
      "Fashion shows demand environments as considered as the clothes themselves. We collaborate with designers and creative directors on catwalk backdrops, set design, and full venue transformation — turning a space into a world.",
    image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=900&q=85",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const handleActive = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section id="services" ref={headerRef} className="py-24 md:py-32 section-padding bg-surface">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: EASE }}
        className="mb-16 md:mb-20"
      >
        <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold block mb-4">
          Services
        </span>
        <div className="flex items-end gap-8">
          <h2 className="font-serif text-display-xl text-parchment shrink-0">
            What we <em className="italic text-gold">create</em>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: EASE, delay: 0.25 }}
            className="hidden md:block flex-1 h-px bg-gradient-to-r from-gold/25 to-transparent origin-left mb-3"
          />
        </div>
      </motion.div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-20 xl:gap-28">
        {/* Left: stacked services */}
        <div>
          {services.map((service, i) => (
            <ServiceItem
              key={service.index}
              service={service}
              index={i}
              onActive={handleActive}
            />
          ))}
        </div>

        {/* Right: sticky image — desktop only */}
        <div className="hidden lg:block">
          <div className="sticky top-28 h-full">
            <div className="relative h-full overflow-hidden">
              {/* Transitioning image */}
              <AnimatePresence mode="sync">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.85, ease: EASE }}
                  className="absolute inset-0"
                >
                  <Image
                    src={services[activeIndex].image}
                    alt={services[activeIndex].title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Corner brackets */}
              {[
                "top-3 left-3",
                "top-3 right-3 rotate-90",
                "bottom-3 right-3 rotate-180",
                "bottom-3 left-3 -rotate-90",
              ].map((pos, i) => (
                <div key={i} className={`absolute ${pos} opacity-40 z-10`}>
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                    <path d="M0.5 11.5V0.5H11.5" stroke="#C9A96E" strokeWidth="0.75" />
                  </svg>
                </div>
              ))}

              {/* Active service label — bottom left of image */}
              <div className="absolute bottom-5 left-6 z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/60 block mb-1">
                      {services[activeIndex].index}
                    </span>
                    <span className="font-serif text-lg text-parchment/75">
                      {services[activeIndex].title}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress dots */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2.5">
                {services.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: i === activeIndex ? 1 : 0.3,
                      scaleY: i === activeIndex ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-px h-4 bg-gold origin-center"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceItem({
  service,
  index,
  onActive,
}: {
  service: (typeof services)[0];
  index: number;
  onActive: (index: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Entrance animation — fires once
  const entryInView = useInView(ref, { once: true, margin: "-60px" });

  // Active tracking — fires whenever item is in the middle band of the viewport
  const activeInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

  useEffect(() => {
    if (activeInView) onActive(index);
  }, [activeInView, index, onActive]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={entryInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: EASE, delay: index * 0.08 }}
      className="py-10 md:py-14 border-b border-gold/10 first:border-t first:border-gold/10"
    >
      <div className="flex items-start gap-6">
        {/* Index */}
        <span className="font-serif text-4xl text-gold/20 leading-none mt-0.5 select-none shrink-0">
          {service.index}
        </span>

        {/* Content */}
        <div className="space-y-3 min-w-0">
          <h3 className="font-serif text-2xl md:text-3xl text-parchment leading-tight">
            {service.title}
          </h3>
          <p className="font-serif text-[14px] italic text-gold/70 leading-snug">
            {service.headline}
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={entryInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 + index * 0.08 }}
            className="w-7 h-px bg-gold/30 origin-left"
          />
          <p className="font-sans font-light text-[13px] leading-[1.9] text-parchment-dim">
            {service.description}
          </p>

          {/* Mobile image — shown below description on small screens */}
          <div className="lg:hidden mt-6 relative aspect-[4/3] overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
