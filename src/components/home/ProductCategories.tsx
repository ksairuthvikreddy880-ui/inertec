"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { productCategories } from "@/data/products";

export default function ProductCategories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="section-rule" />
            <h2 className="text-display-lg">Our Products</h2>
          </div>
          <Link href="/products" className="btn-outline text-sm flex-shrink-0">
            View All Products
          </Link>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)]"
        >
          {productCategories.map((cat) => (
            <motion.div key={cat.id} variants={fadeUp}>
              <Link
                href={cat.href}
                className="group bg-white flex flex-col h-full p-8 hover:bg-[var(--color-blue-light)] transition-colors duration-200 block"
              >
                <div className="text-3xl mb-4">{cat.icon}</div>
                <h3 className="text-[var(--color-ink)] font-semibold text-base mb-2 group-hover:text-[var(--color-blue)] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[var(--color-steel)] text-sm leading-relaxed flex-1">
                  {cat.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[var(--color-blue)] text-sm font-medium">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
