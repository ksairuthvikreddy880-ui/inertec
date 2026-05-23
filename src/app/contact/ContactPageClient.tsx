"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";
import Link from "next/link";

const productOptions = [
  "Glovebox Systems", "Inert Purge Boxes", "Customized Inert Enclosures",
  "Battery Fabrication Equipment", "Inert Storage Cabinets", "Other / General Inquiry",
];

const inputClass = "w-full bg-white border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-muted)] px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all";

export default function ContactPageClient() {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-[var(--color-bg)] min-h-screen">
      {/* Hero */}
      <div className="relative" style={{ minHeight: "380px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
          alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)]/90 via-[var(--color-secondary)]/70 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)]" />
        <div className="relative z-10 flex flex-col justify-end h-full px-10 pb-12 pt-24 container-wide" style={{ minHeight: "380px" }}>
          <nav className="flex items-center gap-2 text-slate-400 text-xs mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 style={{ color: "#ffffff" }} className="text-white text-5xl font-bold font-display mb-4">Contact Us</h1>
          <p className="text-slate-300 text-lg max-w-xl">Our engineering team responds within one business day.</p>
        </div>
      </div>

      {/* Main */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12" ref={formRef}>
            {/* Form */}
            <motion.div variants={slideInLeft} initial="hidden" animate={isInView ? "visible" : "hidden"} className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8">
                <h2 className="text-display-md mb-8">Send an Inquiry</h2>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-[var(--color-text)] font-semibold text-xl mb-3">Inquiry Received</h3>
                    <p className="text-[var(--color-text-muted)]">Our engineering team will contact you within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Full Name *</label>
                        <input type="text" required placeholder="John Smith" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Company *</label>
                        <input type="text" required placeholder="Company Name" className={inputClass} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Email *</label>
                        <input type="email" required placeholder="john@company.com" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Phone</label>
                        <input type="tel" placeholder="+91 XXXXX XXXXX" className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Product Interest *</label>
                      <select required defaultValue="" className={`${inputClass} cursor-pointer`}>
                        <option value="" disabled>Select a product category</option>
                        {productOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Message *</label>
                      <textarea required rows={5} placeholder="Describe your application and requirements..." className={`${inputClass} resize-none`} />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center py-4">Submit Inquiry</button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info */}
            <motion.div variants={slideInRight} initial="hidden" animate={isInView ? "visible" : "hidden"} className="lg:col-span-2 space-y-5">
              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="font-semibold text-[var(--color-text)] text-lg mb-5">Contact Information</h3>
                {[
                  { label: "Address", value: "Inertec Systems LLP\nIndustrial Area, India" },
                  { label: "Email", value: "info@intertecsystems.com" },
                  { label: "Phone", value: "+91 XXXXX XXXXX" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 py-4 border-b border-[var(--color-border)] last:border-0">
                    <div className="w-9 h-9 bg-[var(--color-primary-light)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-1">{item.label}</p>
                      <p className="text-[var(--color-text)] text-sm whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl p-6 text-white">
                <h4 className="font-semibold text-lg mb-2">Typical Response Time</h4>
                <p className="text-slate-200 text-sm mb-4">We respond to all inquiries within <strong className="text-white">1 business day</strong>.</p>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-pulse" />
                  Engineering team available Mon–Sat
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
