"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const budgetRanges = [
  "£5k – £15k",
  "£15k – £50k",
  "£50k – £100k",
  "£100k+",
];

const projectTypes = [
  "Brand Activation",
  "Window Display",
  "Fashion Show",
  "Private Event",
  "Other",
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 section-padding bg-surface">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold block mb-4">
              Commission
            </span>
            <h2 className="font-serif text-display-lg text-parchment mb-8 leading-tight">
              Begin a{" "}
              <em className="italic text-gold">conversation.</em>
            </h2>
            <p className="font-sans font-light text-[15px] leading-[1.9] text-parchment-dim mb-8">
              Every project begins with an enquiry. Tell us about your vision —
              the grander or more specific, the better. We typically respond within
              48 hours and schedule a call to explore the project in depth.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                { label: "Studio", value: "London, UK" },
                { label: "Email", value: "studio@flowerbunny.co" },
                { label: "Instagram", value: "@flowerbunny" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold/60 w-20 pt-0.5">
                    {item.label}
                  </span>
                  <span className="font-sans text-[14px] text-parchment-dim">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Ornamental divider */}
            <div className="flex items-center gap-4 mt-12">
              <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 1L12 8L19 10L12 12L10 19L8 12L1 10L8 8L10 1Z" stroke="#C9A96E" strokeWidth="0.75" fill="rgba(201,169,110,0.1)" />
              </svg>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col justify-center py-16 text-center"
              >
                <div className="flex justify-center mb-8">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="23" stroke="#C9A96E" strokeWidth="0.75" />
                    <path d="M14 24L21 31L34 17" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-serif text-3xl text-parchment mb-4">
                  Received with gratitude.
                </h3>
                <p className="font-sans font-light text-[14px] text-parchment-dim leading-relaxed max-w-sm mx-auto">
                  We'll review your enquiry and be in touch within 48 hours.
                  We look forward to creating something extraordinary together.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Company / Brand"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

                {/* Project type */}
                <div>
                  <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold/70 block mb-3">
                    Project Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, projectType: type }))}
                        className={`font-sans text-[10px] tracking-[0.15em] uppercase px-4 py-2 transition-all duration-300 ${
                          form.projectType === type
                            ? "bg-gold text-background"
                            : "border border-gold/20 text-parchment-dim hover:border-gold/40"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold/70 block mb-3">
                    Approximate Budget
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetRanges.map((range) => (
                      <button
                        key={range}
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, budget: range }))}
                        className={`font-sans text-[10px] tracking-[0.15em] uppercase px-4 py-2 transition-all duration-300 ${
                          form.budget === range
                            ? "bg-gold text-background"
                            : "border border-gold/20 text-parchment-dim hover:border-gold/40"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold/70 block mb-3">
                    Tell Us About Your Vision
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-surface-high border border-gold/15 text-parchment font-sans text-sm font-light leading-relaxed p-4 focus:outline-none focus:border-gold/40 transition-colors duration-300 resize-none placeholder:text-parchment-muted/40"
                    placeholder="Describe your event, space, vision, and any constraints we should know about…"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-background font-sans text-[11px] tracking-[0.3em] uppercase h-14 hover:bg-gold-light transition-colors duration-300 mt-2"
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold/70 block mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-surface-high border border-gold/15 text-parchment font-sans text-sm font-light h-12 px-4 focus:outline-none focus:border-gold/40 transition-colors duration-300 placeholder:text-parchment-muted/30"
      />
    </div>
  );
}
