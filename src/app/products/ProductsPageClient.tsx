"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

const categories = [
  { id: "glovebox-systems", label: "Glovebox Workstations", heroImg: "/products/glovebox-3.webp" },
  { id: "purge-boxes", label: "Inert Purge Boxes", heroImg: "/products/purge-box.png" },
  { id: "custom-enclosures", label: "Customized Enclosures", heroImg: "/products/custom-enclosure.png" },
  { id: "storage-cabinets", label: "Inert Storage Cabinets", heroImg: "/products/purelab.jpg" },
];

export default function ProductsPageClient() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const categoryProducts = products.filter((p) => {
    if (activeCategory.id === "glovebox-systems") return p.category === "Glovebox Systems";
    if (activeCategory.id === "purge-boxes") return p.category === "Inert Purge Boxes";
    if (activeCategory.id === "custom-enclosures") return p.category === "Customized Inert Enclosures";
    if (activeCategory.id === "storage-cabinets") return p.category === "Inert Storage Cabinets";
    return false;
  });

  const descriptions: Record<string, string> = {
    "glovebox-systems": "Inertec Systems offers a wide range of ready-to-use glovebox workstations that can be equipped with a comprehensive set of optional features. University and industrial labs use glove boxes for the research and development of emerging technologies including Lithium Batteries, Chemical, OLED / PLED and Welding.",
    "purge-boxes": "Compact purge boxes for short-duration inert atmosphere work. Rapid purge cycles with continuous gas flow, ideal for sample transfer and quick assembly tasks in research and industrial environments.",
    "custom-enclosures": "Fully bespoke inert enclosures designed to your exact process requirements. From benchtop to room-scale, engineered with precision for unique industrial applications requiring controlled atmospheres.",
    "storage-cabinets": "Sealed storage cabinets for long-term preservation of moisture and oxygen-sensitive materials. Continuous purge maintains stable inert atmosphere without active monitoring.",
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero — full width image with title overlay */}
      <div
        className="relative w-full"
        style={{
          backgroundImage: `url(/products-hero.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "420px",
        }}
      >
        <div className="absolute inset-0 bg-[#1A2744]/50" />
        <div className="relative z-10 flex items-end h-full" style={{ minHeight: "420px" }}>
          <div className="p-10 pb-12">
            <h1 className="text-white text-4xl font-bold bg-white/10 backdrop-blur-sm px-6 py-4 inline-block">
              {activeCategory.label}
            </h1>
          </div>
        </div>
      </div>

      {/* Title + description */}
      <div className="bg-white py-12 border-b border-[var(--color-border)]">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-3">{activeCategory.label}</h2>
          <div className="w-12 h-1 bg-[var(--color-blue)] mb-6" />
          <p className="text-[var(--color-steel)] leading-relaxed text-base">
            {descriptions[activeCategory.id]}
          </p>
        </div>
      </div>

      {/* Dark textured category tiles */}
      <div
        className="relative"
        style={{
          backgroundImage: "url(/products-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1A2744]/75" />
        <div className="relative z-10 container-wide py-0">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className={`py-5 px-6 text-left text-sm font-semibold border border-white/10 transition-colors ${
                  activeCategory.id === cat.id
                    ? "bg-white text-[var(--color-ink)]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="bg-[var(--color-off-white)] section-padding border-b border-[var(--color-border)]">
        <div className="container-wide">
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[var(--color-steel)] mb-6">Detailed product listings coming soon.</p>
              <Link href="/contact" className="btn-primary">Request Information</Link>
            </div>
          )}
        </div>
      </div>

      {/* Battery fabrication CTA */}
      <div className="bg-[var(--color-blue)] text-white py-12">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-1">Battery Fabrication Equipment</h3>
            <p className="text-white/70 text-sm">Coin cell, pouch cell, and cylindrical cell assembly systems</p>
          </div>
          <Link href="/battery-fabrication" className="btn-outline-white flex-shrink-0">
            View Battery Equipment →
          </Link>
        </div>
      </div>
    </div>
  );
}
