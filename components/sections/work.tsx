"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "The Blanc Arch",
    category: "Brand Activation",
    client: "Maison Valentino",
    year: "2024",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=900&q=80",
    size: "large",
    description: "A monumental arch of white peonies and trailing jasmine framing the entrance to a private launch event.",
  },
  {
    id: 2,
    title: "Window of Seasons",
    category: "Window Display",
    client: "Selfridges London",
    year: "2024",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    size: "medium",
    description: "Six rotating seasonal installations across the Oxford Street flagship windows.",
  },
  {
    id: 3,
    title: "Runway Garden",
    category: "Fashion Show",
    client: "Simone Rocha",
    year: "2023",
    image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=700&q=80",
    size: "medium",
    description: "An immersive garden runway with 2,000 individually wired blooms suspended from the ceiling.",
  },
  {
    id: 4,
    title: "Celestial Table",
    category: "Private Event",
    client: "Private Commission",
    year: "2024",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=900&q=80",
    size: "large",
    description: "A 12-metre tablescape for a private gala dinner, integrating sculptural dried forms with living blooms.",
  },
  {
    id: 5,
    title: "The Moss Chamber",
    category: "Installation",
    client: "Frieze London",
    year: "2023",
    image: "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=700&q=80",
    size: "small",
    description: "A walk-through chamber of preserved moss panels and suspended orchids.",
  },
  {
    id: 6,
    title: "Gold Cascade",
    category: "Brand Activation",
    client: "Veuve Clicquot",
    year: "2023",
    image: "https://images.unsplash.com/photo-1606041011872-596597976b25?w=700&q=80",
    size: "small",
    description: "Cascading golden botanicals echoing the house's signature colour through three floors of a townhouse.",
  },
];

export function Work() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Brand Activation", "Window Display", "Fashion Show", "Private Event", "Installation"];

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" ref={ref} className="py-24 md:py-32 section-padding">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
      >
        <div>
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold block mb-4">
            Selected Work
          </span>
          <h2 className="font-serif text-display-xl text-parchment">
            The Portfolio
          </h2>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-sans text-[10px] tracking-[0.2em] uppercase px-4 py-2 transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-gold text-background"
                  : "border border-gold/20 text-parchment-dim hover:border-gold/50 hover:text-parchment"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Asymmetric grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4"
        >
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: typeof projects[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const colSpan =
    project.size === "large"
      ? "md:col-span-7"
      : project.size === "medium"
      ? "md:col-span-5"
      : "md:col-span-4";

  const aspectRatio =
    project.size === "large"
      ? "aspect-[4/3]"
      : project.size === "medium"
      ? "aspect-[3/4]"
      : "aspect-[1/1]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`${colSpan} group relative overflow-hidden cursor-pointer`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`relative ${aspectRatio} overflow-hidden`}>
        <motion.div
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"
        />

        {/* Gold corner accent */}
        <div className="absolute top-4 right-4 opacity-60">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M0.5 19.5V0.5H19.5" stroke="#C9A96E" strokeWidth="0.75" />
          </svg>
        </div>

        {/* Info on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 right-0 p-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-6 bg-gold/60" />
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold">
              {project.category}
            </span>
          </div>
          <h3 className="font-serif text-2xl text-parchment mb-1">{project.title}</h3>
          <p className="font-sans text-[12px] text-parchment-dim">{project.client} · {project.year}</p>
        </motion.div>
      </div>

      {/* Below-image info (always visible on mobile) */}
      <div className="mt-4 md:hidden">
        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold">
          {project.category}
        </span>
        <h3 className="font-serif text-xl text-parchment mt-1">{project.title}</h3>
        <p className="font-sans text-[12px] text-parchment-dim mt-1">
          {project.client} · {project.year}
        </p>
      </div>
    </motion.article>
  );
}
