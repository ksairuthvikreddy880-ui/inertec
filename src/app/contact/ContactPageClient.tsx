"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";

const productOptions = [
  "Glovebox Systems",
  "Inert Purge Boxes",
  "Customized Inert Enclosures",
  "Battery Fabrication Equipment",
  "Inert Storage Cabinets",
  "Other / General Inquiry",
];

const inputClass =
  "w-full bg-white border border-[var(--color-border)] text-[var(--color-ink)] placeholder-[var(--color-muted)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-blue)] transition-colors duration-200";

export default function ContactPageClient() {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative border-b border-[var(--color-border)] overflow-hidden">
        <div
          className="relative w-full"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1400&q=80)", backgroundSize: "cover", backgroundPosition: "center", minHeight: "380px" }}
        >
          <div className="absolute inset-0 bg-[#1A2744]/55" />
          <div className="relative z-10 flex items-end h-full" style={{ minHeight: "380px" }}>
            <div className="p-10 pb-12">
              <h1 className="text-white text-4xl font-bold bg-white/10 backdrop-blur-sm px-6 py-4 inline-block">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="section-padding border-b border-[var(--color-border)]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-16" ref={formRef}>
            {/* Form — 3 cols */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="lg:col-span-3"
            >
              <h2 className="text-display-md mb-8">Send an Inquiry</h2>

              {submitted ? (
                <div className="border border-[var(--color-border)] p-10 text-center">
                  <div className="w-14 h-14 border-2 border-[var(--color-blue)] flex items-center justify-center mx-auto mb-6">
                    <svg className="w-7 h-7 text-[var(--color-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[var(--color-ink)] font-semibold text-xl mb-3">Inquiry Received</h3>
                  <p className="text-[var(--color-steel)]">
                    Thank you for reaching out. Our engineering team will contact you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="label-tag text-[var(--color-muted)] block mb-2" htmlFor="name">Full Name *</label>
                      <input id="name" type="text" required placeholder="John Smith" className={inputClass} />
                    </div>
                    <div>
                      <label className="label-tag text-[var(--color-muted)] block mb-2" htmlFor="company">Company *</label>
                      <input id="company" type="text" required placeholder="Company Name" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="label-tag text-[var(--color-muted)] block mb-2" htmlFor="email">Email Address *</label>
                      <input id="email" type="email" required placeholder="john@company.com" className={inputClass} />
                    </div>
                    <div>
                      <label className="label-tag text-[var(--color-muted)] block mb-2" htmlFor="phone">Phone Number</label>
                      <input id="phone" type="tel" placeholder="+1 (555) 000-0000" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className="label-tag text-[var(--color-muted)] block mb-2" htmlFor="product">Product Interest *</label>
                    <select
                      id="product"
                      required
                      defaultValue=""
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>Select a product category</option>
                      {productOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="label-tag text-[var(--color-muted)] block mb-2" htmlFor="message">Message / Requirements *</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Describe your application, required atmosphere, dimensions, or any specific requirements..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-4">
                    Submit Inquiry
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info — 2 cols */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="lg:col-span-2 space-y-5"
            >
              <h2 className="text-display-md mb-8">Contact Information</h2>

              {[
                {
                  label: "Address",
                  value: "Inertec Systems LLP\nIndustrial Area, India",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                },
                {
                  label: "Email",
                  value: "info@intertecsystems.com",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                },
                {
                  label: "Phone",
                  value: "+91 XXXXX XXXXX",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-5 border border-[var(--color-border)] hover:border-[var(--color-blue)] transition-colors duration-200">
                  <div className="w-10 h-10 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-blue)] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="label-tag text-[var(--color-muted)] mb-1">{item.label}</p>
                    <p className="text-[var(--color-ink)] text-sm whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="relative h-48 bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 eng-grid-fine opacity-60" />
                <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[var(--color-blue)]" />
                <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[var(--color-blue)]" />
                <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[var(--color-blue)]" />
                <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[var(--color-blue)]" />
                <div className="relative z-10 text-center">
                  <svg className="w-8 h-8 text-[var(--color-blue)] mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="label-tag text-[var(--color-muted)]">Map Placeholder</p>
                  <p className="text-[var(--color-muted)] text-xs mt-1">Embed Google Maps here</p>
                </div>
              </div>

              {/* Response time */}
              <div className="flex items-center gap-3 p-4 bg-[var(--color-blue-light)] border border-[var(--color-blue-mid)]/30">
                <div className="w-2 h-2 rounded-full bg-[var(--color-blue)] flex-shrink-0" />
                <p className="text-[var(--color-steel)] text-sm">
                  Typical response time:{" "}
                  <span className="text-[var(--color-ink)] font-medium">1 business day</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
