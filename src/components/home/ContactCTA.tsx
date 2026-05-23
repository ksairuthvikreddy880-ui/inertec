"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-gradient-to-br from-[var(--color-primary)] to-[#0E1726] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="container-wide relative z-10">
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div variants={fadeUp} className="section-rule" />
            {/* Readable label on dark gradient */}
            <motion.p variants={fadeUp} className="text-slate-300 text-xs font-bold tracking-widest uppercase mb-4">
              Ready to Engineer Your Environment?
            </motion.p>
            <motion.h2 variants={fadeUp} style={{ color: "#ffffff" }} className="text-display-lg mb-4">
              Let&apos;s Build Your Inert Atmosphere Solution
            </motion.h2>
            {/* slate-300 instead of white/60 */}
            <motion.p variants={fadeUp} className="text-slate-300 leading-relaxed">
              Our engineering team is ready to design a system tailored to your exact process
              requirements — from initial consultation to installation and commissioning.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-outline-white">
                Request a Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/products" className="btn-outline-white">Browse Products</Link>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
              {[
                { label: "Email", value: "info@intertecsystems.com" },
                { label: "Phone", value: "+91 XXXXX XXXXX" },
                { label: "Location", value: "India" },
              ].map((item) => (
                <div key={item.label}>
                  {/* slate-400 instead of white/40 */}
                  <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-white text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
