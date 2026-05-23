"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { certifications } from "@/data/company";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-12 bg-white border-b border-[var(--color-border)]">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-shrink-0 md:w-44">
            <p className="label-tag">Certifications &amp; Standards</p>
          </div>
          <div className="w-px h-8 bg-[var(--color-border)] hidden md:block" />
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap gap-3 flex-1"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                variants={fadeUp}
                className="flex items-center gap-3 px-4 py-2.5 bg-[var(--color-off-white)] border border-[var(--color-border)] hover:border-[var(--color-blue)] transition-colors"
              >
                <div className="w-2 h-2 bg-[var(--color-blue)] rounded-full flex-shrink-0" />
                <div>
                  <p className="text-[var(--color-ink)] text-sm font-semibold">{cert.name}</p>
                  <p className="text-[var(--color-muted)] text-xs">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
