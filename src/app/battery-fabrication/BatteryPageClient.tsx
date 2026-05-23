"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { batteryCategories } from "@/data/battery";
import Link from "next/link";

function BatteryCategorySection({
  category,
  index,
}: {
  category: (typeof batteryCategories)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <section
      id={category.id}
      ref={ref}
      className={`section-padding border-b border-[var(--color-border)] ${!isEven ? "bg-[var(--color-off-white)]" : "bg-white"}`}
    >
      <div className="container-wide">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start ${!isEven ? "lg:grid-flow-dense" : ""}`}>
          {/* Text */}
          <motion.div
            variants={isEven ? slideInLeft : slideInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={!isEven ? "lg:col-start-2" : ""}
          >
            <div className="section-rule" />
            <p className="label-tag mb-3">{category.subtitle}</p>
            <h2 className="text-display-md mb-5">{category.title}</h2>
            <p className="text-[var(--color-steel)] leading-relaxed mb-8">{category.description}</p>

            {/* Specs table */}
            <div className="border border-[var(--color-border)] mb-8">
              {category.specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`flex justify-between items-center px-5 py-3 ${i % 2 === 0 ? "bg-[var(--color-surface)]" : "bg-white"} ${i < category.specs.length - 1 ? "border-b border-[var(--color-border)]" : ""}`}
                >
                  <span className="text-[var(--color-steel)] text-sm">{spec.label}</span>
                  <span className="text-[var(--color-ink)] text-sm font-mono font-medium">{spec.value}</span>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-primary">
              Enquire About This Equipment
            </Link>
          </motion.div>

          {/* Equipment list */}
          <motion.div
            variants={isEven ? slideInRight : slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}
          >
            {/* Visual */}
            <div className="relative h-52 bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center mb-6 overflow-hidden">
              <div className="absolute inset-0 eng-grid-fine opacity-80" />
              <span className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[var(--color-blue)]" />
              <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[var(--color-blue)]" />
              <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[var(--color-blue)]" />
              <span className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[var(--color-blue)]" />
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 border border-[var(--color-border-mid)] mx-auto flex items-center justify-center mb-3">
                  <div className="w-8 h-8 border border-[var(--color-blue-mid)] bg-[var(--color-blue-light)]" />
                </div>
                <p className="label-tag text-[var(--color-muted)]">{category.title}</p>
              </div>
            </div>

            {/* Equipment list */}
            <div>
              <p className="label-tag text-[var(--color-muted)] mb-4">Equipment Included</p>
              <div className="border border-[var(--color-border)]">
                {category.equipment.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                    className={`flex items-start gap-4 px-5 py-4 ${i < category.equipment.length - 1 ? "border-b border-[var(--color-border)]" : ""} hover:bg-[var(--color-blue-light)] transition-colors duration-200`}
                  >
                    <span className="label-tag text-[var(--color-muted)] flex-shrink-0 w-6 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-[var(--color-ink)] text-sm font-medium">{item.name}</p>
                      <p className="text-[var(--color-steel)] text-xs mt-0.5">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function BatteryPageClient() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative border-b border-[var(--color-border)] overflow-hidden">
        <div
          className="relative w-full"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1620714223084-8fcacc2dbe4d?w=1400&q=80)", backgroundSize: "cover", backgroundPosition: "center", minHeight: "380px" }}
        >
          <div className="absolute inset-0 bg-[#1A2744]/55" />
          <div className="relative z-10 flex items-end h-full" style={{ minHeight: "380px" }}>
            <div className="p-10 pb-12">
              <h1 className="text-white text-4xl font-bold bg-white/10 backdrop-blur-sm px-6 py-4 inline-block">
                Battery Fabrication Equipment
              </h1>
            </div>
          </div>
        </div>
      </section>

      {batteryCategories.map((cat, i) => (
        <BatteryCategorySection key={cat.id} category={cat} index={i} />
      ))}

      {/* CTA */}
      <section className="section-padding bg-[var(--color-blue)] text-white relative overflow-hidden">
        <div className="absolute inset-0 eng-grid-dark pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative z-10 text-center">
          <h2 className="text-display-md text-white mb-4">Ready to Build Your Battery Lab?</h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8 leading-relaxed">
            Our engineers will help you select and configure the right equipment for your
            specific cell format and production requirements.
          </p>
          <Link href="/contact" className="btn-outline-white">
            Contact Our Battery Team
          </Link>
        </div>
      </section>
    </div>
  );
}
