"use client";

import { useState } from "react";
import Link from "next/link";

export default function BatteryShowcase() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="border-b border-[var(--color-border)]">
      {/* Battery fabrication two-column */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-white p-12 lg:p-16 flex flex-col justify-center">
          <div className="section-rule" />
          <p className="label-tag mb-3">Battery Fabrication</p>
          <h2 className="text-display-lg mb-6">Complete Cell Assembly Equipment</h2>
          <p className="text-[var(--color-steel)] leading-relaxed mb-8">
            From coin cell research to cylindrical cell pilot production, our battery
            fabrication equipment is engineered for operation inside inert atmosphere
            gloveboxes ensuring contamination-free assembly at every stage.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/battery-fabrication" className="btn-primary">Explore Battery Equipment</Link>
            <Link href="/contact" className="btn-outline">Request a Quote</Link>
          </div>
        </div>
        <div
          className="relative min-h-72 lg:min-h-0"
          style={{ backgroundImage: "url(/products/glovebox-4.webp)", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-[var(--color-blue)]/20" />
        </div>
      </div>

      {/* Service section */}
      <div
        className="relative cursor-pointer overflow-hidden"
        style={{
          backgroundImage: "url(/bg-4xgrid.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "380px",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Teal overlay */}
        <div className="absolute inset-0 bg-[#0099aa]/60" />

        {/* "Service" text — visible by default, fades out on hover */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-400"
          style={{ opacity: hovered ? 0 : 1 }}
        >
          <span
            className="text-white font-bold tracking-wide select-none"
            style={{ fontSize: "clamp(4rem, 12vw, 9rem)", lineHeight: 1 }}
          >
            Service
          </span>
        </div>

        {/* Quadrant labels — hidden by default, fades in on hover */}
        <div
          className="absolute inset-0 z-20 transition-opacity duration-400"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          {/* Dividers */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/30" />
          <div className="absolute left-0 right-0 top-1/2 h-px bg-white/30" />

          <div className="grid grid-cols-2 h-full">
            <div className="flex items-start justify-start p-10">
              <span className="text-white text-lg font-semibold">Spare Parts</span>
            </div>
            <div className="flex items-start justify-end p-10">
              <span className="text-white text-lg font-semibold">Technical Support</span>
            </div>
            <div className="flex items-end justify-start p-10">
              <span className="text-white text-lg font-semibold">Sensors Calibration</span>
            </div>
            <div className="flex items-end justify-end p-10">
              <span className="text-white text-lg font-semibold">First Care Kit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}