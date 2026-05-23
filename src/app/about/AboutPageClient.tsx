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
  const mvRef = useRef(null);

  const overviewInView = useInView(overviewRef, { once: true, margin: "-80px" });
  const capInView = useInView(capRef, { once: true, margin: "-80px" });
  const certInView = useInView(certRef, { once: true, margin: "-80px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-80px" });
  const mvInView = useInView(mvRef, { once: true, margin: "-80px" });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative border-b border-[var(--color-border)] overflow-hidden">
        <div
          className="relative w-full"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=80)", backgroundSize: "cover", backgroundPosition: "center", minHeight: "380px" }}
        >
          <div className="absolute inset-0 bg-[#1A2744]/55" />
          <div className="relative z-10 flex items-end h-full" style={{ minHeight: "380px" }}>
            <div className="p-10 pb-12">
              <h1 className="text-white text-4xl font-bold bg-white/10 backdrop-blur-sm px-6 py-4 inline-block">
                About Inertec Systems
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding border-b border-[var(--color-border)]" ref={overviewRef}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
            <motion.div variants={slideInLeft} initial="hidden" animate={overviewInView ? "visible" : "hidden"}>
              <div className="section-rule" />
              <p className="label-tag mb-3">Company Overview</p>
              <h2 className="text-display-md mb-6">Engineering Pure Environments Since 2009</h2>
              <p className="text-[var(--color-steel)] leading-relaxed mb-4">
                Inertec Systems LLP was established with a singular focus: to engineer inert
                atmosphere solutions that meet the most demanding requirements of modern industry
                and research.
              </p>
              <p className="text-[var(--color-steel)] leading-relaxed mb-8">
                From our manufacturing facility in India, we design, fabricate, and commission
                glovebox systems, purge boxes, custom enclosures, and battery fabrication equipment
                for clients across 40+ countries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {companyStats.map((stat) => (
                  <div key={stat.label} className="bg-[var(--color-off-white)] border border-[var(--color-border)] p-6">
                    <div className="text-3xl font-display font-bold text-[var(--color-blue)] mb-1">{stat.value}</div>
                    <div className="label-tag text-[var(--color-muted)]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={slideInRight} initial="hidden" animate={overviewInView ? "visible" : "hidden"}>
              <div className="relative h-96 bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 eng-grid-fine opacity-80" />
                <span className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[var(--color-blue)]" />
                <span className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[var(--color-blue)]" />
                <span className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[var(--color-blue)]" />
                <span className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[var(--color-blue)]" />
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 border border-[var(--color-border-mid)] mx-auto flex items-center justify-center mb-4">
                    <div className="w-12 h-12 border border-[var(--color-blue-mid)] bg-[var(--color-blue-light)]" />
                  </div>
                  <p className="label-tag text-[var(--color-muted)]">Manufacturing Facility</p>
                  <p className="text-[var(--color-steel)] text-xs mt-1">India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engineering Capabilities */}
      <section className="section-padding bg-[var(--color-off-white)] border-b border-[var(--color-border)]" ref={capRef}>
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate={capInView ? "visible" : "hidden"}>
            <motion.div variants={fadeUp} className="mb-12">
              <div className="section-rule" />
              <p className="label-tag mb-3">Engineering Capabilities</p>
              <h2 className="text-display-md">
                In-House Engineering{" "}
                <span className="text-[var(--color-blue)]">Excellence</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)]">
              {engineeringCapabilities.map((cap) => (
                <motion.div key={cap.title} variants={fadeUp}>
                  <div className="bg-white p-8 h-full hover:bg-[var(--color-blue-light)] transition-colors duration-300 group">
                    <div className="w-8 h-0.5 bg-[var(--color-blue)] mb-5" />
                    <h3 className="text-[var(--color-ink)] font-semibold mb-2 group-hover:text-[var(--color-blue)] transition-colors">{cap.title}</h3>
                    <p className="text-[var(--color-steel)] text-sm leading-relaxed">{cap.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section-padding border-b border-[var(--color-border)]" ref={certRef}>
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate={certInView ? "visible" : "hidden"}>
            <motion.div variants={fadeUp} className="mb-12">
              <div className="section-rule" />
              <p className="label-tag mb-3">Quality &amp; Compliance</p>
              <h2 className="text-display-md">
                Certified to the Highest{" "}
                <span className="text-[var(--color-blue)]">Standards</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {certifications.map((cert) => (
                <motion.div key={cert.name} variants={fadeUp}>
                  <div className="card-white p-6 text-center hover:bg-[var(--color-blue-light)] transition-colors duration-300 group">
                    <div className="w-8 h-8 border border-[var(--color-border)] flex items-center justify-center mx-auto mb-3 group-hover:border-[var(--color-blue)] transition-colors">
                      <div className="w-3 h-3 bg-[var(--color-blue)] opacity-40 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-[var(--color-ink)] font-semibold text-sm">{cert.name}</p>
                    <p className="text-[var(--color-muted)] text-xs mt-1">{cert.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[var(--color-off-white)] border-b border-[var(--color-border)]" ref={mvRef}>
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate={mvInView ? "visible" : "hidden"}>
            <motion.div variants={fadeUp} className="mb-12">
              <div className="section-rule" />
              <p className="label-tag mb-3">Our Purpose</p>
              <h2 className="text-display-md">Mission &amp; Vision</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeUp} className="bg-[var(--color-blue)] text-white p-10">
                <p className="text-white/50 text-xs font-mono tracking-widest uppercase mb-5">Mission</p>
                <p className="text-white text-xl font-display leading-relaxed">
                  To engineer precision inert atmosphere solutions that enable breakthrough
                  research and industrial processes — delivering reliability, purity, and
                  performance without compromise.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white border border-[var(--color-border)] p-10">
                <p className="label-tag mb-5">Vision</p>
                <p className="text-[var(--color-ink)] text-xl font-display leading-relaxed">
                  To be the world&apos;s most trusted partner for inert atmosphere engineering —
                  recognized for technical excellence, innovation, and the quality of environments
                  we create.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding border-b border-[var(--color-border)]" ref={timelineRef}>
        <div className="container-wide">
          <div className="mb-12">
            <div className="section-rule" />
            <p className="label-tag mb-3">Company Journey</p>
            <h2 className="text-display-md">Our Story</h2>
          </div>

          <div className="relative max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-[var(--color-border)]" />

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`relative flex gap-10 items-start py-8 ${i < timeline.length - 1 ? "border-b border-[var(--color-border)]" : ""}`}
                >
                  {/* Year */}
                  <div className="w-16 flex-shrink-0 text-right">
                    <span className="text-[var(--color-blue)] font-mono font-bold text-sm">{item.year}</span>
                  </div>

                  {/* Node */}
                  <div className="absolute left-16 top-10 w-3 h-3 border-2 border-[var(--color-blue)] bg-white rounded-full -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className="flex-1 pl-4">
                    <h3 className="text-[var(--color-ink)] font-semibold mb-1">{item.title}</h3>
                    <p className="text-[var(--color-steel)] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--color-off-white)]">
        <div className="container-wide text-center">
          <h2 className="text-display-md mb-4">Ready to Work With Us?</h2>
          <p className="text-[var(--color-steel)] max-w-md mx-auto mb-8">
            Our engineering team is ready to discuss your inert atmosphere requirements.
          </p>
          <Link href="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}
