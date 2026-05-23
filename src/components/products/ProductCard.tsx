"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/data/products";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [specsOpen, setSpecsOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25 }}
        className="card-white group flex flex-col h-full"
      >
        {/* Image */}
        <div className="relative h-56 bg-[var(--color-surface)] overflow-hidden border-b border-[var(--color-border)] flex items-center justify-center">
          <div className="absolute inset-0 eng-grid-fine opacity-40" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.title}
            className="relative z-10 w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 z-20 px-2 py-0.5 bg-[var(--color-blue)] text-white text-xs font-mono">
              {product.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <p className="label-tag text-[var(--color-muted)] mb-2">{product.category}</p>
          <h3 className="text-[var(--color-ink)] font-semibold text-base mb-3 group-hover:text-[var(--color-blue)] transition-colors duration-300">
            {product.title}
          </h3>
          <p className="text-[var(--color-steel)] text-sm leading-relaxed flex-1">
            {product.description}
          </p>

          {/* Key specs preview */}
          <div className="mt-5 border-t border-[var(--color-border)] pt-4">
            {product.specs.slice(0, 2).map((spec) => (
              <div key={spec.label} className="spec-row">
                <span className="spec-label">{spec.label}</span>
                <span className="spec-value">{spec.value}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setSpecsOpen(true)}
            className="mt-5 w-full py-2.5 border border-[var(--color-blue)] text-[var(--color-blue)] text-sm font-medium hover:bg-[var(--color-blue)] hover:text-white transition-all duration-200"
          >
            Full Specifications
          </button>
        </div>
      </motion.div>

      {/* Specs Modal */}
      <AnimatePresence>
        {specsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setSpecsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 16 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-[var(--color-border)] max-w-lg w-full shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-start justify-between p-6 border-b border-[var(--color-border)]">
                <div>
                  <p className="label-tag text-[var(--color-muted)] mb-1">{product.category}</p>
                  <h3 className="text-[var(--color-ink)] font-display font-semibold text-lg">{product.title}</h3>
                </div>
                <button
                  onClick={() => setSpecsOpen(false)}
                  className="text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors ml-4 mt-1"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Specs table */}
              <div className="p-6">
                <div className="border border-[var(--color-border)]">
                  {product.specs.map((spec, i) => (
                    <div
                      key={spec.label}
                      className={`flex justify-between items-center px-4 py-3 ${i % 2 === 0 ? "bg-[var(--color-off-white)]" : "bg-white"} ${i < product.specs.length - 1 ? "border-b border-[var(--color-border)]" : ""}`}
                    >
                      <span className="text-[var(--color-steel)] text-sm">{spec.label}</span>
                      <span className="text-[var(--color-ink)] text-sm font-mono font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-6 pb-6">
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center"
                  onClick={() => setSpecsOpen(false)}
                >
                  Request a Quote for This Product
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
