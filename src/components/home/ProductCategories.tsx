"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { staggerContainer, fadeUp } from "@/lib/animations";

const categories = [
  { id: "glovebox", title: "Glovebox Systems", desc: "Sub-ppm inert atmosphere workstations for research and production.", href: "/products/glovebox-workstations", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=70" },
  { id: "gas", title: "Gas Purification", desc: "Remove O₂ and H₂O to below 1 ppm from Ar and N₂ streams.", href: "/products/gas-purifiers", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=70" },
  { id: "battery", title: "Battery Fabrication", desc: "Coin, pouch, and cylindrical cell assembly inside inert atmosphere.", href: "/battery-fabrication", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=70" },
  { id: "custom", title: "Custom Enclosures", desc: "Bespoke inert enclosures engineered to your exact specifications.", href: "/products/customized-enclosures", img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=70" },
  { id: "process", title: "Process Automation", desc: "Robotic integration and automated handling inside inert environments.", href: "/products/engineering-robotics", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=70" },
  { id: "storage", title: "Research Equipment", desc: "Process tools, ovens, hotplates, and dispensing systems.", href: "/products/process-tools", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=70" },
];

export default function ProductCategories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-[var(--color-bg)]">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="section-rule" />
            <p className="label-tag mb-3">Our Products</p>
            <h2 className="text-display-lg">Engineered Systems</h2>
          </div>
          <Link href="/products" className="btn-outline text-sm flex-shrink-0">View All Products</Link>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat) => (
            <motion.div key={cat.id} variants={fadeUp}>
              <Link href={cat.href} className="group card block overflow-hidden">
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-[var(--color-text)] text-base mb-2 group-hover:text-[var(--color-primary)] transition-colors">{cat.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex items-center gap-2 text-[var(--color-primary)] text-sm font-semibold">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
