"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { batteryCategories } from "@/data/battery";
import Link from "next/link";

function BatteryCategorySection({ category, index }: { category: (typeof batteryCategories)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <section id={category.id} ref={ref}
      className={`section-padding border-b border-[var(--color-border)] ${isEven ? "bg-white" : "bg-[var(--color-bg)]"}`}>
      <div className="container-wide">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${!isEven ? "lg:grid-flow-dense" : ""}`}>
          <motion.div variants={isEven ? slideInLeft : slideInRight} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className={!isEven ? "lg:col-start-2" : ""}>
            <div className="section-rule" />
            <p className="label-tag mb-3">{category.subtitle}</p>
            <h2 className="text-display-md mb-5">{category.title}</h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">{category.description}</p>

            <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl overflow-hidden mb-8">
              {category.specs.map((spec, i) => (
                <div key={spec.label}
                  className={`flex justify-between items-center px-5 py-3.5 ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-bg)]"} ${i < category.specs.length - 1 ? "border-b border-[var(--color-border)]" : ""}`}>
                  <span className="text-[var(--color-text-muted)] text-sm">{spec.label}</span>
                  <span className="text-[var(--color-text)] text-sm font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-primary">Enquire About This Equipment</Link>
          </motion.div>

          <motion.div variants={isEven ? slideInRight : slideInLeft} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
            <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl overflow-hidden mb-6 h-52 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--color-primary-light)] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <div className="w-8 h-8 bg-[var(--color-primary)]/20 rounded-lg border border-[var(--color-primary)]/30" />
                </div>
                <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-widest">{category.title}</p>
              </div>
            </div>

            <div className="bg-white border border-[var(--color-border)] rounded-xl overflow-hidden">
              <div className="px-5 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg)]">
                <p className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest">Equipment Included</p>
              </div>
              {category.equipment.map((item, i) => (
                <motion.div key={item.name}
                  initial={{ opacity: 0, x: 16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  className={`flex items-start gap-4 px-5 py-4 ${i < category.equipment.length - 1 ? "border-b border-[var(--color-border)]" : ""} hover:bg-[var(--color-primary-light)] transition-colors`}>
                  <span className="text-xs font-mono text-[var(--color-text-muted)] flex-shrink-0 w-6 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-[var(--color-text)] text-sm font-semibold">{item.name}</p>
                    <p className="text-[var(--color-text-muted)] text-xs mt-0.5">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function BatteryPageClient() {
  return (
    <div className="bg-[var(--color-bg)] min-h-screen">
      {/* Hero */}
      <div className="relative" style={{ minHeight: "420px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1620714223084-8fcacc2dbe4d?w=1600&q=80"
          alt="Battery Fabrication" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)]/90 via-[var(--color-secondary)]/70 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)]" />
        <div className="relative z-10 flex flex-col justify-end h-full px-10 pb-12 pt-24 container-wide" style={{ minHeight: "420px" }}>
          <nav className="flex items-center gap-2 text-slate-400 text-xs mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Battery Fabrication</span>
          </nav>
          <h1 className="text-white text-5xl font-bold font-display mb-4">Battery Fabrication Equipment</h1>
          <p className="text-slate-300 text-lg max-w-xl mb-8">Complete cell assembly systems for inert atmosphere operation.</p>
          <div className="flex flex-wrap gap-3">
            {batteryCategories.map((cat) => (
              <a key={cat.id} href={`#${cat.id}`}
                className="px-4 py-2 bg-white/10 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors">
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {batteryCategories.map((cat, i) => (
        <BatteryCategorySection key={cat.id} category={cat} index={i} />
      ))}

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
        <div className="container-wide text-center">
          <h2 className="text-display-md text-white mb-4">Ready to Build Your Battery Lab?</h2>
          <p className="text-slate-300 max-w-lg mx-auto mb-8 leading-relaxed">
            Our engineers will help you select and configure the right equipment for your specific cell format and production requirements.
          </p>
          <Link href="/contact" className="btn-outline-white">Contact Our Battery Team</Link>
        </div>
      </section>
    </div>
  );
}
