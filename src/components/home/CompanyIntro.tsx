"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";

export default function CompanyIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white border-b border-[var(--color-border)]">
      <div className="container-wide" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div variants={slideInLeft} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <p className="text-sm text-[var(--color-muted)] uppercase tracking-widest mb-3 font-medium">
              Made in India
            </p>
            <h2 className="text-display-lg mb-6">
              Leading glovebox<br />manufacturer
            </h2>
            <a
              href="/contact"
              className="inline-block bg-[var(--color-blue)] text-white text-sm font-semibold px-6 py-3 hover:bg-[var(--color-blue-dark)] transition-colors"
            >
              Request a Quote →
            </a>
          </motion.div>

          {/* Right */}
          <motion.div variants={slideInRight} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <p className="text-[var(--color-steel)] leading-relaxed mb-4">
              Inertec Systems LLP has a special mission: to provide versatile clean environmental
              solutions for markets around the world.
            </p>
            <p className="text-[var(--color-steel)] leading-relaxed mb-4">
              Whether gloveboxes, inert gas cleaning, thin film technology, isolators or customised
              system solutions in clean environments, Inertec has the right solution for you. With
              over 15 years of experience, we have the expertise to provide high quality custom
              solutions for controlled environments.
            </p>
            <p className="text-[var(--color-steel)] leading-relaxed mb-6">
              Discover why we say:
            </p>
            <p className="text-display-md text-[var(--color-ink)]">
              Clean. Engineering.<br />Expertise.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
