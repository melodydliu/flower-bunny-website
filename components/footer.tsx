"use client";

import { motion } from "framer-motion";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-16 section-padding border-t border-gold/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Studio */}
          <div>
            <h3 className="font-serif text-2xl text-parchment mb-4">Flower Bunny</h3>
            <p className="font-sans font-light text-[13px] leading-relaxed text-parchment-muted max-w-xs">
              Bespoke floral design for luxury brands, fashion events, and private commissions.
              Based in London. Working worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {["Work", "Services", "About", "Enquire"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const id = link === "Enquire" ? "contact" : link.toLowerCase();
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-sans text-[13px] text-parchment-dim hover:text-gold transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-5">
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:studio@flowerbunny.co"
                  className="font-sans text-[13px] text-parchment-dim hover:text-gold transition-colors duration-300"
                >
                  studio@flowerbunny.co
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-sans text-[13px] text-parchment-dim hover:text-gold transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-sans text-[13px] text-parchment-dim hover:text-gold transition-colors duration-300"
                >
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gold/10">
          {/* Ornament */}
          <div className="flex items-center gap-3">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z" stroke="#C9A96E" strokeWidth="0.75" fill="rgba(201,169,110,0.1)" />
            </svg>
            <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-parchment-muted">
              Flower Bunny
            </span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z" stroke="#C9A96E" strokeWidth="0.75" fill="rgba(201,169,110,0.1)" />
            </svg>
          </div>

          <p className="font-sans text-[11px] text-parchment-muted/40">
            © {year} Flower Bunny. All rights reserved.
          </p>

          <p className="font-sans text-[11px] text-parchment-muted/40">
            Melody Liu · London
          </p>
        </div>
      </div>
    </footer>
  );
}
