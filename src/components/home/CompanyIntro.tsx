"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { companyStats } from "@/data/company";

export default function CompanyIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white">
      <div className="container-wide" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <div className="section-rule" />
            <p className="label-tag mb-3">About Inertec Systems</p>
            <h2 className="text-display-lg mb-6">
              Engineering Pure Environments Since 2009
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
              Inertec Systems LLP is a precision engineering company specializing in inert atmosphere solutions. From single-station research gloveboxes to full-scale battery fabrication lines, we engineer environments where contamination is not an option.
            </p>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
              Our systems maintain oxygen and moisture levels below 1 ppm, meeting the strictest requirements of aerospace, semiconductor, pharmaceutical, and battery industries worldwide.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/about" className="btn-primary">Our Story</a>
              <a href="/contact" className="btn-outline">Get in Touch</a>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-4"
          >
            {companyStats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}
                className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-primary)] hover:shadow-lg transition-all duration-200">
                <div className="text-3xl font-bold font-display text-[var(--color-primary)] mb-2">{stat.value}</div>
                <div className="text-sm text-[var(--color-text-muted)]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
