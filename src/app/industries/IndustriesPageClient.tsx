"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { industries } from "@/data/industries";

export default function IndustriesPageClient() {
  const [activeId, setActiveId] = useState(industries[0].id);
  const active = industries.find((i) => i.id === activeId) ?? industries[0];

  return (
    <div className="bg-[var(--color-bg)] min-h-screen">
      {/* Hero */}
      <div className="relative" style={{ minHeight: "420px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=80"
          alt="Applications" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1726]/90 via-[#0E1726]/70 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0B63CE] to-[#25B7FF]" />
        <div className="relative z-10 flex flex-col justify-end h-full px-10 pb-12 pt-24 container-wide" style={{ minHeight: "420px" }}>
          <nav className="flex items-center gap-2 text-slate-400 text-xs mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Applications</span>
          </nav>
          <h1 style={{ color: "#ffffff" }} className="text-white text-5xl font-bold font-display mb-4">Industries We Serve</h1>
          <p className="text-slate-300 text-lg max-w-xl">Critical industries where contamination is not an option.</p>
        </div>
      </div>

      {/* Industry selector + detail */}
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden sticky top-24">
                {industries.map((ind) => (
                  <button key={ind.id} onClick={() => setActiveId(ind.id)}
                    className={`w-full text-left px-5 py-3.5 text-sm font-medium border-b border-[var(--color-border)] last:border-0 transition-colors ${
                      activeId === ind.id
                        ? "bg-[var(--color-primary)] text-white"
                        : "text-[var(--color-text-muted)] hover:bg-[var(--color-bg)] hover:text-[var(--color-text)]"
                    }`}>
                    {ind.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Detail */}
            <div className="lg:col-span-3">
              <motion.div key={activeId} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <div className="bg-white rounded-xl border border-[var(--color-border)] p-8 mb-6">
                  <div className="section-rule" />
                  <h2 className="text-display-md mb-4">{active.title}</h2>
                  <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">{active.description}</p>
                  <div>
                    <h4 className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest mb-3">Key Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {active.applications.map((app) => (
                        <span key={app} className="px-3 py-1.5 bg-[var(--color-primary-light)] text-[var(--color-primary)] text-sm font-medium rounded-lg">{app}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl border border-[var(--color-border)] p-6">
                    <h4 className="font-semibold text-[var(--color-text)] mb-3">Recommended Products</h4>
                    <div className="space-y-2">
                      {["Glovebox Workstations", "Gas Purification Systems", "Custom Enclosures"].map((p) => (
                        <div key={p} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                          <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full" />
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#0B63CE] rounded-xl p-6 text-white">
                    <h4 className="font-semibold mb-2">Discuss Your Application</h4>
                    <p className="text-slate-200 text-sm mb-4">Our engineers will help you find the right solution.</p>
                    <Link href="/contact" className="inline-block bg-white text-[var(--color-primary)] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[var(--color-primary-light)] transition-colors">
                      Contact Us →
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* All industries grid */}
      <div className="section-padding bg-white border-t border-[var(--color-border)]">
        <div className="container-wide">
          <h3 className="text-display-md mb-8">All Industries</h3>
          <motion.div variants={staggerContainer} initial="hidden" animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((ind) => (
              <motion.div key={ind.id} variants={fadeUp}>
                <button onClick={() => { setActiveId(ind.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="w-full text-left p-5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] transition-all group">
                  <p className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">{ind.title}</p>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
