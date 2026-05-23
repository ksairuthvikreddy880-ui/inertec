"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const featured = {
  category: "Glovebox Systems",
  title: "Ultra-Low Oxygen Controlled Workstations",
  desc: "Sub-ppm inert atmosphere gloveboxes engineered for the most demanding research and industrial processes.",
  href: "/products/glovebox-workstations",
  img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=85",
};

const compact = [
  {
    category: "Gas Purification",
    title: "Molecular-Level Gas Cleaning",
    desc: "Remove O₂ and H₂O to below 1 ppm.",
    href: "/products/gas-purifiers",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    category: "Battery Fabrication",
    title: "Cell Assembly Equipment",
    desc: "Coin, pouch, and cylindrical cell systems.",
    href: "/battery-fabrication",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
  },
  {
    category: "Process Automation",
    title: "Robotic Inert Integration",
    desc: "Automated handling inside inert environments.",
    href: "/products/engineering-robotics",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
  },
  {
    category: "Custom Engineering",
    title: "Bespoke Enclosure Systems",
    desc: "Engineered to your exact specifications.",
    href: "/products/customized-enclosures",
    img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
  },
];

const OVERLAY = "linear-gradient(180deg, transparent 20%, rgba(14,23,38,0.88) 100%)";

export default function ProductCategories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        background: "#F5F7FA",
        backgroundImage:
          "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(11,99,206,0.06) 0%, transparent 70%), " +
          "linear-gradient(0deg, rgba(14,23,38,0.03) 1px, transparent 1px), " +
          "linear-gradient(90deg, rgba(14,23,38,0.03) 1px, transparent 1px)",
        backgroundSize: "auto, 48px 48px, 48px 48px",
      }}
    >
      <div className="container-wide" ref={ref}>

        {/* ── Header row ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#0B63CE] mb-4">
              Our Solutions
            </p>
            <h2
              className="font-light leading-[1.05] text-[#0E1726] mb-5"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Engineered Systems for<br />
              <span className="font-semibold">Controlled Environments</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed max-w-xl">
              Precision-engineered solutions designed for glovebox technology, inert atmosphere
              control, and battery manufacturing — built to the strictest industrial standards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex-shrink-0"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#0B63CE] text-[#0B63CE] text-sm font-semibold rounded-lg hover:bg-[#0B63CE] hover:text-white transition-all duration-200"
            >
              View All Solutions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* ── Asymmetric grid ── */}
        <div className="flex flex-col lg:flex-row gap-4">

          {/* Featured card — 55% width, 620px tall */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:w-[55%] flex-shrink-0"
          >
            <Link href={featured.href} className="group relative block overflow-hidden rounded-2xl h-[420px] lg:h-[620px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.img}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0" style={{ background: OVERLAY }} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-10">
                {/* Category top */}
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#25B7FF] self-start px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  {featured.category}
                </span>

                {/* Bottom text */}
                <div>
                  <h3
                    className="font-semibold leading-tight mb-3 transition-transform duration-300 group-hover:-translate-y-1"
                    style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#ffffff" }}
                  >
                    {featured.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5 max-w-md">{featured.desc}</p>
                  <div className="flex items-center gap-2 text-white text-sm font-semibold overflow-hidden">
                    <span>Explore</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* 2×2 compact grid */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {compact.map((item, i) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.08 }}
              >
                <Link href={item.href} className="group relative block overflow-hidden rounded-xl h-[200px] lg:h-[302px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0" style={{ background: OVERLAY }} />

                  <div className="absolute inset-0 flex flex-col justify-between p-5">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#25B7FF] self-start">
                      {item.category}
                    </span>
                    <div>
                      <h4
                        className="font-semibold text-base leading-snug mb-1.5 transition-transform duration-300 group-hover:-translate-y-0.5"
                        style={{ color: "#ffffff" }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-slate-300 text-xs leading-relaxed mb-3 hidden lg:block">{item.desc}</p>
                      <div className="flex items-center gap-1.5 text-white text-xs font-semibold">
                        <span>Explore</span>
                        <svg
                          className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 px-8 py-6 rounded-2xl border border-[#0B63CE]/20 bg-white/60 backdrop-blur-sm"
        >
          <div>
            <p className="text-[#0E1726] font-semibold text-base">Need a customized system?</p>
            <p className="text-slate-500 text-sm mt-0.5">Our engineers design solutions tailored to your exact process requirements.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#0B63CE] text-white text-sm font-semibold rounded-lg hover:bg-[#0950A8] transition-colors duration-200"
          >
            Talk to Engineering Team
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
