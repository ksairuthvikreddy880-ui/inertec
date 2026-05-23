"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { whyChooseUs } from "@/data/company";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <div className="section-rule" />
            <h2 className="text-display-lg mb-4">Why Inertec</h2>
            <p className="text-[var(--color-steel)] text-sm leading-relaxed">
              15+ years of precision engineering expertise and a commitment to performance
              that never compromises.
            </p>
          </div>

          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {whyChooseUs.map((item) => (
              <motion.div
                key={item.icon}
                variants={fadeUp}
                className="bg-white border border-[var(--color-border)] p-6 hover:border-[var(--color-blue)] hover:shadow-sm transition-all duration-200"
              >
                <h3 className="text-[var(--color-ink)] font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-[var(--color-steel)] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
