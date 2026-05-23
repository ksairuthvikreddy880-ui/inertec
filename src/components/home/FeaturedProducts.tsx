"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const featured = products.slice(0, 3);

  return (
    <section className="section-padding bg-[var(--color-off-white)] border-b border-[var(--color-border)]">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="section-rule" />
            <h2 className="text-display-lg">Featured Products</h2>
          </div>
          <Link href="/products" className="btn-outline text-sm flex-shrink-0">View All Products</Link>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {featured.map((product) => (
            <motion.div key={product.id} variants={fadeUp}>
              <div className="card-white group h-full flex flex-col bg-white">
                <div className="relative h-52 bg-[var(--color-surface)] overflow-hidden border-b border-[var(--color-border)] flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-2 py-0.5 bg-[var(--color-blue)] text-white text-xs font-semibold">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="label-tag mb-2">{product.category}</p>
                  <h3 className="text-[var(--color-ink)] font-semibold text-base mb-3 group-hover:text-[var(--color-blue)] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-[var(--color-steel)] text-sm leading-relaxed flex-1">{product.description}</p>
                  <div className="mt-5 border-t border-[var(--color-border)] pt-4">
                    {product.specs.slice(0, 2).map((spec) => (
                      <div key={spec.label} className="spec-row">
                        <span className="spec-label">{spec.label}</span>
                        <span className="spec-value">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/products" className="mt-5 flex items-center gap-2 text-[var(--color-blue)] text-sm font-semibold hover:gap-3 transition-all">
                    View Specifications
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
