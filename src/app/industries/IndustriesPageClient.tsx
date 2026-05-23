"use client";

import { useState } from "react";
import Link from "next/link";
import { industries } from "@/data/industries";

const applicationTiles = [
  { label: "Laboratory & Chemistry", id: "research" },
  { label: "Batteries", id: "lithium-battery" },
  { label: "Personal Protection", id: "medical" },
  { label: "Perovskite", id: "solar" },
  { label: "OLEDs / Organic Electronics", id: "oled" },
  { label: "Additive Manufacturing", id: "additive" },
  { label: "Welding", id: "aerospace" },
  { label: "Material Purification", id: "pharmaceutical" },
  { label: "Thermal Treatment", id: "semiconductor" },
];

export default function IndustriesPageClient() {
  const [activeId, setActiveId] = useState(applicationTiles[0].id);
  const activeIndustry = industries.find((i) => i.id === activeId) ?? industries[0];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div
        className="relative w-full"
        style={{
          backgroundImage: "url(/applications-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "420px",
        }}
      >
        <div className="absolute inset-0 bg-[#1A2744]/50" />
        <div className="relative z-10 flex items-end h-full" style={{ minHeight: "420px" }}>
          <div className="p-10 pb-12">
            <h1 className="text-white text-4xl font-bold bg-white/10 backdrop-blur-sm px-6 py-4 inline-block">
              {activeIndustry.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Title + description */}
      <div className="bg-white py-12 border-b border-[var(--color-border)]">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-3">{activeIndustry.title}</h2>
          <div className="w-12 h-1 bg-[var(--color-blue)] mb-6" />
          <p className="text-[var(--color-steel)] leading-relaxed text-base mb-6">
            {activeIndustry.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {activeIndustry.applications.map((app) => (
              <span key={app} className="px-3 py-1.5 bg-[var(--color-blue-light)] border border-[var(--color-border)] text-[var(--color-steel)] text-sm">
                {app}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Dark textured application tiles */}
      <div
        className="relative"
        style={{
          backgroundImage: "url(/applications-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1A2744]/75" />
        <div className="relative z-10 container-wide py-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {applicationTiles.map((tile) => (
              <button
                key={tile.id}
                onClick={() => setActiveId(tile.id)}
                className={`py-5 px-5 text-left text-sm font-semibold border border-white/10 transition-colors ${
                  activeId === tile.id
                    ? "bg-white text-[var(--color-ink)]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {tile.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Two-column detail */}
      <div className="bg-[var(--color-off-white)] section-padding border-b border-[var(--color-border)]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-10 h-1 bg-[var(--color-blue)] mb-5" />
              <h3 className="text-2xl font-bold text-[var(--color-ink)] mb-4">
                Inertec Solutions for {activeIndustry.title}
              </h3>
              <p className="text-[var(--color-steel)] leading-relaxed mb-6">
                {activeIndustry.description}
              </p>
              <Link href="/contact" className="btn-primary">Request a Quote</Link>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-widest mb-4">Key Applications</h4>
              <div className="space-y-0 border border-[var(--color-border)]">
                {activeIndustry.applications.map((app, i) => (
                  <div key={app} className={`flex items-center gap-4 px-5 py-4 bg-white ${i < activeIndustry.applications.length - 1 ? "border-b border-[var(--color-border)]" : ""}`}>
                    <div className="w-2 h-2 bg-[var(--color-blue)] rounded-full flex-shrink-0" />
                    <span className="text-[var(--color-ink)] text-sm font-medium">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All industries grid */}
      <div className="bg-white section-padding">
        <div className="container-wide">
          <h3 className="text-2xl font-bold text-[var(--color-ink)] mb-2">All Industries</h3>
          <div className="w-10 h-1 bg-[var(--color-blue)] mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[var(--color-border)]">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => { setActiveId(ind.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="bg-white p-5 text-left hover:bg-[var(--color-blue-light)] transition-colors group"
              >
                <p className="text-[var(--color-ink)] text-sm font-semibold group-hover:text-[var(--color-blue)] transition-colors">{ind.title}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
