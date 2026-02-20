"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const services = [
  {
    index: "01",
    title: "Brand Activations",
    headline: "Florals that launch a moment into memory.",
    description:
      "From product launches to immersive pop-ups, we create botanical environments that amplify your brand's aesthetic and generate genuine spectacle. Every detail — scale, scent, texture — is calibrated to your identity.",
    image: "https://images.unsplash.com/photo-1606041011872-596597976b25?w=700&q=80",
    tags: ["Launch Events", "Pop-Up Environments", "Brand Identity"],
  },
  {
    index: "02",
    title: "Window Displays",
    headline: "The art of the first impression.",
    description:
      "Retail windows are a canvas. We design seasonal and bespoke window installations for luxury flagships and boutiques — installations that stop pedestrians, drive footfall, and become their own editorial moment.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    tags: ["Seasonal Windows", "Flagship Retail", "Visual Merchandising"],
  },
  {
    index: "03",
    title: "Fashion Events",
    headline: "Runways grown from the earth.",
    description:
      "Fashion shows demand environments as considered as the clothes themselves. We collaborate with designers and creative directors on catwalk backdrops, set design, and full venue transformation — turning a space into a world.",
    image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=700&q=80",
    tags: ["Runway Design", "Show Sets", "Creative Direction"],
  },
  {
    index: "04",
    title: "Private Commissions",
    headline: "Extraordinary moments deserve an extraordinary table.",
    description:
      "Intimate dinners, milestone celebrations, and private residences — we bring the same rigour and artistry to personal spaces that we apply to the world's most prestigious brands. No commission is too considered.",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=700&q=80",
    tags: ["Private Dining", "Celebrations", "Residences"],
  },
];

export function Services() {
  const headerRef = useRef<HTMLElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={headerRef} className="py-24 md:py-32 section-padding bg-surface">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold block mb-4">
          Services
        </span>
        <h2 className="font-serif text-display-xl text-parchment max-w-lg">
          What we{" "}
          <em className="italic text-gold">create</em>
        </h2>
      </motion.div>

      {/* Service rows */}
      <div className="space-y-0 divide-y divide-gold/10">
        {services.map((service, i) => (
          <ServiceRow key={service.index} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}

function ServiceRow({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.25, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.05 * index,
      }}
      className="grid lg:grid-cols-12 gap-8 lg:gap-16 py-12 lg:py-16 items-start group"
    >
      {/* Index + Title */}
      <div className="lg:col-span-4 flex items-start gap-6">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 + 0.05 * index }}
          className="font-sans text-[10px] tracking-[0.2em] text-gold/60 pt-1 shrink-0"
        >
          {service.index}
        </motion.span>
        <div>
          <h3 className="font-serif text-2xl md:text-3xl text-parchment leading-tight">
            {service.title}
          </h3>
          <p className="font-serif text-base italic text-gold/70 mt-1">
            {service.headline}
          </p>
        </div>
      </div>

      {/* Description + Tags */}
      <div className="lg:col-span-5 lg:pt-1 space-y-5">
        <p className="font-sans font-light text-[14px] leading-[1.85] text-parchment-dim">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="font-sans text-[9px] tracking-[0.2em] uppercase border border-gold/20 text-gold/60 px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image thumbnail */}
      <div className="lg:col-span-3">
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.div
            initial={{ scale: 1.08 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.05 * index }}
            className="absolute inset-0"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </motion.div>
          {/* Frame corners */}
          {[
            "top-2 left-2",
            "top-2 right-2 rotate-90",
            "bottom-2 right-2 rotate-180",
            "bottom-2 left-2 -rotate-90",
          ].map((pos, i) => (
            <div key={i} className={`absolute ${pos} opacity-40`}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M0.5 11.5V0.5H11.5" stroke="#C9A96E" strokeWidth="0.75" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
