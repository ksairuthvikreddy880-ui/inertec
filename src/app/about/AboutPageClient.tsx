"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from "@/lib/animations";
import { certifications, timeline, engineeringCapabilities, companyStats } from "@/data/company";
import Link from "next/link";

export default function AboutPageClient() {
  const overviewRef = useRef(null);
  const capRef = useRef(null);
  const certRef = useRef(null);
  const timelineRef = useRef(null);
  const overviewInView = useInView(overviewRef, { once: true, margin: "-80px" });
  const capInView = useInView(capRef, { once: true, margin: "-80px" });
  const certInView = useInView(certRef, { once: true, margin: "-80px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-80px" });

  return (
    <div className="bg-[var(--color-bg)] min-h-screen">
      {/* Hero */}
      <div className="relative" style={{ minHeight: "420px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80"
          alt="About" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)]/90 via-[var(--color-secondary)]/70 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)]" />
        <div className="relative z-10 flex flex-col justify-end h-full px-10 pb-12 pt-24 container-wide" style={{ minHeight: "420px" }}>
          <nav className="flex items-center gap-2 text-slate-400 text-xs mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">About</span>
          </nav>
          <h1 className="text-white text-5xl font-bold font-display mb-4">About Inertec Systems</h1>
          <p className="text-slate-300 text-lg max-w-xl">15+ years of precision inert atmosphere engineering.</p>
        </div>
      </div>

      {/* Overview */}
      <section className="section-padding bg-white border-b border-[var(--color-border)]" ref={overviewRef}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={slideInLeft} initial="hidden" animate={overviewInView ? "visible" : "hidden"}>
              <div className="section-rule" />
              <p className="label-tag mb-3">Company Overview</p>
              <h2 className="text-display-md mb-6">Engineering Pure Environments Since 2009</h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                Inertec Systems LLP was established with a singular focus: to engineer inert atmosphere solutions that meet the most demanding requirements of modern industry and research.
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                From our manufacturing facility in India, we design, fabricate, and commission glovebox systems, purge boxes, custom enclosures, and battery fabrication equipment for clients across 40+ countries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {companyStats.map((stat) => (
                  <div key={stat.label} className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-5">
                    <div className="text-3xl font-bold font-display text-[var(--color-primary)] mb-1">{stat.value}</div>
                    <div className="text-sm text-[var(--color-text-muted)]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={slideInRight} initial="hidden" animate={overviewInView ? "visible" : "hidden"}
              className="relative rounded-2xl overflow-hidden h-96">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Facility" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engineering Capabilities */}
      <section className="section-padding bg-[var(--color-bg)] border-b border-[var(--color-border)]" ref={capRef}>
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate={capInView ? "visible" : "hidden"}>
            <motion.div variants={fadeUp} className="mb-12">
              <div className="section-rule" />
              <p className="label-tag mb-3">Engineering Capabilities</p>
              <h2 className="text-display-md">In-House Engineering Excellence</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {engineeringCapabilities.map((cap) => (
                <motion.div key={cap.title} variants={fadeUp}
                  className="bg-white border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-primary)] hover:shadow-md transition-all group">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mb-4" />
                  <h3 className="font-semibold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">{cap.title}</h3>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section-padding bg-white border-b border-[var(--color-border)]" ref={certRef}>
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate={certInView ? "visible" : "hidden"}>
            <motion.div variants={fadeUp} className="mb-12">
              <div className="section-rule" />
              <p className="label-tag mb-3">Quality & Compliance</p>
              <h2 className="text-display-md">Certified to the Highest Standards</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {certifications.map((cert) => (
                <motion.div key={cert.name} variants={fadeUp}
                  className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-5 text-center hover:border-[var(--color-primary)] transition-colors">
                  <div className="w-8 h-8 bg-[var(--color-primary-light)] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <div className="w-3 h-3 bg-[var(--color-primary)] rounded-sm" />
                  </div>
                  <p className="text-[var(--color-text)] font-semibold text-sm">{cert.name}</p>
                  <p className="text-[var(--color-text-muted)] text-xs mt-1">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[var(--color-bg)] border-b border-[var(--color-border)]" ref={timelineRef}>
        <div className="container-wide">
          <div className="mb-12">
            <div className="section-rule" />
            <p className="label-tag mb-3">Company Journey</p>
            <h2 className="text-display-md">Our Story</h2>
          </div>
          <div className="relative max-w-3xl">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-[var(--color-border)]" />
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <motion.div key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`relative flex gap-10 items-start py-8 ${i < timeline.length - 1 ? "border-b border-[var(--color-border)]" : ""}`}>
                  <div className="w-16 flex-shrink-0 text-right">
                    <span className="text-[var(--color-primary)] font-mono font-bold text-sm">{item.year}</span>
                  </div>
                  <div className="absolute left-16 top-10 w-3 h-3 border-2 border-[var(--color-primary)] bg-white rounded-full -translate-x-1/2 z-10" />
                  <div className="flex-1 pl-4">
                    <h3 className="text-[var(--color-text)] font-semibold mb-1">{item.title}</h3>
                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
        <div className="container-wide text-center">
          <h2 className="text-display-md text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-slate-300 max-w-md mx-auto mb-8">Our engineering team is ready to discuss your inert atmosphere requirements.</p>
          <Link href="/contact" className="btn-outline-white">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}
