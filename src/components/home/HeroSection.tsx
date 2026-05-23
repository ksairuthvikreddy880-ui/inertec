"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years Engineering" },
  { value: "500+", label: "Systems Installed" },
  { value: "40+", label: "Countries Served" },
  { value: "<1 ppm", label: "O₂ & H₂O Precision" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[var(--color-secondary)]">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-secondary)]/90 to-[var(--color-secondary)]/40" />
      {/* Accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)]" />

      <div className="container-wide relative z-10 py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-0.5 bg-[var(--color-accent)]" />
            <span className="text-[var(--color-accent)] text-xs font-bold tracking-widest uppercase">Precision Inert Atmosphere Engineering</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-display-xl text-white mb-6"
          >
            Engineered for{" "}
            <span className="text-gradient">Zero Contamination</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg leading-relaxed max-w-xl mb-10"
          >
            Inertec Systems designs and manufactures precision glovebox systems, inert purge boxes, and battery fabrication equipment for the world&apos;s most demanding industries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link href="/products" className="btn-primary">
              Explore Products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/contact" className="btn-outline-white">Request a Quote</Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white font-display">{stat.value}</div>
                <div className="text-white/40 text-xs mt-1 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
