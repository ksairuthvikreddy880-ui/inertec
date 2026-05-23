"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const H = "560px";
const TILE_H = "186px";

const productTiles = [
  { label: "Glovebox Workstations", href: "/products#glovebox-systems" },
  { label: "Gas Purifiers", href: "/products#gas-purification" },
  { label: "Solvent Purification", href: "/products#purge-boxes" },
  { label: "Engineering & Robotics", href: "/products#custom-enclosures" },
  { label: "Battery Fabrication", href: "/battery-fabrication" },
  { label: "Customized Enclosures", href: "/products#custom-enclosures" },
  { label: "Process Tools", href: "/products" },
  { label: "Accessories & Spare Parts", href: "/products" },
  { label: "Storage Cabinets", href: "/products#storage-cabinets" },
];

const applicationTiles = [
  { label: "Laboratory & Chemistry", href: "/industries#research" },
  { label: "Batteries", href: "/industries#lithium-battery" },
  { label: "Personal Protection", href: "/industries" },
  { label: "Perovskite", href: "/industries#semiconductor" },
  { label: "OLEDs / Organic Electronics", href: "/industries#semiconductor" },
  { label: "Additive Manufacturing", href: "/industries" },
  { label: "Welding", href: "/industries" },
  { label: "Material Purification", href: "/industries#pharmaceutical" },
  { label: "Thermal Treatment", href: "/industries" },
];

type ActivePanel = "none" | "products" | "applications";

const SelectButton = () => (
  <button className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-[var(--color-ink)] transition-colors">
    Select
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
);

export default function HeroSection() {
  const [active, setActive] = useState<ActivePanel>("none");

  const toggleProducts = () => setActive((p) => (p === "products" ? "none" : "products"));
  const toggleApplications = () => setActive((p) => (p === "applications" ? "none" : "applications"));

  const panelBase = { backgroundSize: "cover", backgroundPosition: "center", minHeight: H };

  return (
    <div>
      {/* Hero banner */}
      <div className="bg-white py-10 flex flex-col items-center justify-center text-center border-b border-[var(--color-border)]">
        <Image src="/logo.jpeg" alt="Inertec Systems LLP" width={660} height={228} className="h-28 w-auto object-contain" priority />
      </div>

      {/* Products / Applications selector */}
      <div className="flex flex-col md:flex-row" style={{ minHeight: H }}>

        {/* ── LEFT: Products ── */}
        {active === "products" ? (
          <div className="relative" style={{ width: "50%", backgroundImage: "url(/products-bg.jpg)", ...panelBase }}>
            <div className="absolute inset-0 bg-[#1B4F8A]/60" />
            <div className="relative z-10 grid grid-cols-3 h-full" style={{ minHeight: H }}>
              {productTiles.map((tile) => (
                <Link key={tile.label} href={tile.href}
                  className="flex items-end p-5 border border-white/20 hover:bg-white/10 transition-colors"
                  style={{ minHeight: TILE_H }}>
                  <span className="text-white text-sm font-semibold leading-snug">{tile.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="relative flex items-center justify-center cursor-pointer select-none"
            style={{ width: "50%", backgroundImage: "url(/products-bg.jpg)", ...panelBase }}
            onClick={toggleProducts}>
            <div className="absolute inset-0 bg-[#1B4F8A]/60" />
            <div className="relative z-10 text-center px-8">
              <h2 className="text-4xl font-bold text-white tracking-widest uppercase mb-8">Products</h2>
              <SelectButton />
            </div>
          </div>
        )}

        {/* ── RIGHT: Applications ── */}
        {active === "applications" ? (
          <div className="relative" style={{ width: "50%", backgroundImage: "url(/applications-bg.jpg)", ...panelBase }}>
            <div className="absolute inset-0 bg-[#7a8a96]/60" />
            <div className="relative z-10 grid grid-cols-3 h-full" style={{ minHeight: H }}>
              {applicationTiles.map((tile) => (
                <Link key={tile.label} href={tile.href}
                  className="flex items-end p-5 border border-white/20 hover:bg-white/10 transition-colors"
                  style={{ minHeight: TILE_H }}>
                  <span className="text-white text-sm font-semibold leading-snug">{tile.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="relative flex items-center justify-center cursor-pointer select-none"
            style={{ width: "50%", backgroundImage: "url(/applications-bg.jpg)", ...panelBase }}
            onClick={toggleApplications}>
            <div className="absolute inset-0 bg-[#7a8a96]/60" />
            <div className="relative z-10 text-center px-8">
              <h2 className="text-4xl font-bold text-white tracking-widest uppercase mb-8">Applications</h2>
              <SelectButton />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
