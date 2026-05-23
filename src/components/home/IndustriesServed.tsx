"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { industries } from "@/data/industries";

export default function IndustriesServed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="section-rule" />
            <p className="label-tag mb-3">Industries We Serve</p>
            <h2 className="text-display-lg">Critical Industries,<br />Pure Environments</h2>
          </div>
          <Link href="/industries" className="btn-outline text-sm flex-shrink-0">All Industries</Link>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {industries.slice(0, 10).map((industry, i) => (
            <motion.div key={industry.id} variants={fadeUp}>
              <Link href={`/industries#${industry.id}`}
                className="group flex flex-col items-start p-5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] transition-all duration-200 h-full">
                <span className="text-xs font-mono text-[var(--color-border-mid)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                  {industry.title}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
