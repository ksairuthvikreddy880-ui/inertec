"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { certifications } from "@/data/company";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-14 bg-white border-y border-[var(--color-border)]">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <p className="label-tag">Certifications & Standards</p>
          </div>
          <div className="w-px h-8 bg-[var(--color-border)] hidden md:block" />
          <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap gap-3 flex-1">
            {certifications.map((cert) => (
              <motion.div key={cert.name} variants={fadeUp}
                className="flex items-center gap-3 px-4 py-2.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary)] transition-colors">
                <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full flex-shrink-0" />
                <div>
                  <p className="text-[var(--color-text)] text-sm font-semibold">{cert.name}</p>
                  <p className="text-[var(--color-text-muted)] text-xs">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
