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
    <section className="section-padding bg-white border-b border-[var(--color-border)]">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="section-rule" />
            <h2 className="text-display-lg">Industries We Serve</h2>
          </div>
          <Link href="/industries" className="btn-outline text-sm flex-shrink-0">All Industries</Link>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[var(--color-border)]"
        >
          {industries.map((industry, i) => (
            <motion.div key={industry.id} variants={fadeUp}>
              <Link
                href={`/industries#${industry.id}`}
                className="group bg-white flex flex-col items-start p-6 hover:bg-[var(--color-blue-light)] transition-colors duration-200 block h-full min-h-28"
              >
                <span className="text-xs text-[var(--color-border-mid)] font-mono mb-3 group-hover:text-[var(--color-blue)] transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[var(--color-ink)] text-sm font-semibold group-hover:text-[var(--color-blue)] transition-colors leading-snug">
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
