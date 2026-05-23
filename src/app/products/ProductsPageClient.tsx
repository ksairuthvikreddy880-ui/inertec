"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { products } from "@/data/products";

const categories = [
  { id: "all", label: "All Products" },
  { id: "Glovebox Systems", label: "Glovebox Systems" },
  { id: "Inert Purge Boxes", label: "Purge Boxes" },
  { id: "Customized Inert Enclosures", label: "Custom Enclosures" },
  { id: "Inert Storage Cabinets", label: "Storage Cabinets" },
];

export default function ProductsPageClient() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div className="bg-[var(--color-bg)] min-h-screen">
      {/* Hero */}
      <div className="relative" style={{ minHeight: "420px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=80"
          alt="Products" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)]/90 via-[var(--color-secondary)]/70 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)]" />
        <div className="relative z-10 flex flex-col justify-end h-full px-10 pb-12 pt-24 container-wide" style={{ minHeight: "420px" }}>
          <nav className="flex items-center gap-2 text-slate-400 text-xs mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Products</span>
          </nav>
          <h1 style={{ color: "#ffffff" }} className="text-white text-5xl font-bold font-display mb-4">Engineered Systems</h1>
          <p className="text-slate-300 text-lg max-w-xl">Advanced process solutions for modern manufacturing and research.</p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="bg-white border-b border-[var(--color-border)] sticky top-16 z-30">
        <div className="container-wide">
          <div className="flex items-center gap-1 overflow-x-auto py-3">
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActive(cat.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  active === cat.id
                    ? "bg-[var(--color-primary)] text-white"
                    : "text-[var(--color-text-muted)] hover:bg-[var(--color-bg)] hover:text-[var(--color-text)]"
                }`}>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="section-padding">
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <motion.div key={product.id} variants={fadeUp}>
                <div className="card group h-full flex flex-col bg-white overflow-hidden">
                  <div className="relative h-52 overflow-hidden bg-[var(--color-surface)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={product.image} alt={product.title}
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                    {product.badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-[var(--color-primary)] text-white text-xs font-semibold rounded-md">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="label-tag mb-2">{product.category}</p>
                    <h3 className="font-semibold text-[var(--color-text)] text-base mb-3 group-hover:text-[var(--color-primary)] transition-colors">{product.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">{product.description}</p>
                    <div className="mt-5 pt-4 border-t border-[var(--color-border)]">
                      {product.specs.slice(0, 2).map((spec) => (
                        <div key={spec.label} className="spec-row">
                          <span className="spec-label">{spec.label}</span>
                          <span className="spec-value">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="mt-5 btn-primary text-xs py-2.5 justify-center">Request a Quote</Link>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Battery fabrication CTA card */}
            <motion.div variants={fadeUp}>
              <div className="card h-full flex flex-col bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white overflow-hidden" style={{ minHeight: "300px" }}>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest mb-4">Dedicated Section</p>
                    <h3 className="font-semibold text-xl mb-3">Battery Fabrication Equipment</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">Coin cell, pouch cell, and cylindrical cell assembly systems for inert atmosphere operation.</p>
                  </div>
                  <Link href="/battery-fabrication" className="btn-outline-white mt-6 self-start text-sm">View Battery Equipment</Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
