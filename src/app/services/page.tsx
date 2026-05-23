import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Services" };

const services = [
  { icon: "🔧", title: "Technical Support", desc: "Dedicated application engineers available for troubleshooting, remote diagnostics, and on-site support across all Inertec systems." },
  { icon: "🏗️", title: "Installation & Commissioning", desc: "Professional installation by certified engineers. Full system commissioning, atmosphere verification, and operator training included." },
  { icon: "🔄", title: "Maintenance & Calibration", desc: "Scheduled preventive maintenance programs, sensor calibration, and purification column regeneration to maximize system uptime." },
  { icon: "📚", title: "Training", desc: "Comprehensive operator and maintenance training programs — on-site or remote — tailored to your team and application." },
  { icon: "💡", title: "Consulting", desc: "Application engineering consultation for new projects, process optimization, and system integration into existing workflows." },
  { icon: "🌍", title: "Global Reach", desc: "Service network spanning 40+ countries. Local partners and certified service engineers ensure fast response times worldwide." },
];

const timeline = [
  { step: "01", title: "Initial Consultation", desc: "Discuss your application requirements with our engineering team." },
  { step: "02", title: "System Design", desc: "Custom engineering design tailored to your process specifications." },
  { step: "03", title: "Manufacturing", desc: "In-house fabrication with full quality control and documentation." },
  { step: "04", title: "Testing & Validation", desc: "Complete system testing and atmosphere performance verification." },
  { step: "05", title: "Installation", desc: "On-site installation and commissioning by certified engineers." },
  { step: "06", title: "Ongoing Support", desc: "Lifetime technical support, maintenance, and spare parts supply." },
];

export default function ServicesPage() {
  return (
    <div className="bg-[var(--color-bg)] min-h-screen">
      {/* Hero */}
      <div className="relative" style={{ minHeight: "420px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=80"
          alt="Services" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1726]/90 via-[#0E1726]/70 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0B63CE] to-[#25B7FF]" />
        <div className="relative z-10 flex flex-col justify-end h-full px-10 pb-12 pt-24 container-wide" style={{ minHeight: "420px" }}>
          <nav className="flex items-center gap-2 text-slate-400 text-xs mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </nav>
          <h1 style={{ color: "#ffffff" }} className="text-white text-5xl font-bold font-display mb-4">Engineering Support</h1>
          <p className="text-slate-300 text-lg max-w-xl">From installation to lifetime support — we&apos;re with you at every stage.</p>
        </div>
      </div>

      {/* Services grid */}
      <section className="section-padding bg-white border-b border-[var(--color-border)]">
        <div className="container-wide">
          <div className="mb-12">
            <div className="section-rule" />
            <p className="label-tag mb-3">What We Offer</p>
            <h2 className="text-display-lg">Complete Service Portfolio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-primary)] hover:shadow-md transition-all group">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-semibold text-[var(--color-text)] text-base mb-2 group-hover:text-[var(--color-primary)] transition-colors">{s.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="section-padding bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        <div className="container-wide">
          <div className="mb-12">
            <div className="section-rule" />
            <p className="label-tag mb-3">Our Process</p>
            <h2 className="text-display-lg">From Concept to Commissioning</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.map((t) => (
              <div key={t.step} className="bg-white border border-[var(--color-border)] rounded-xl p-6">
                <div className="text-3xl font-bold font-display text-[var(--color-primary)]/20 mb-3">{t.step}</div>
                <h3 className="font-semibold text-[var(--color-text)] mb-2">{t.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support form CTA */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #0B63CE 0%, #0E1726 100%)" }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-10 h-0.5 mb-4" style={{ background: "#25B7FF" }} />
              <h2 className="text-display-lg mb-4" style={{ color: "#ffffff" }}>Need Support?</h2>
              <p className="leading-relaxed mb-8" style={{ color: "#cbd5e1" }}>
                Whether you need technical assistance, spare parts, or want to schedule a maintenance visit — our team is ready to help.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all" style={{ border: "1.5px solid rgba(255,255,255,0.6)", color: "#ffffff", background: "transparent" }}>Contact Support</Link>
                <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all" style={{ border: "1.5px solid rgba(255,255,255,0.6)", color: "#ffffff", background: "transparent" }}>Browse Products</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Response Time", value: "< 24 hrs" },
                { label: "Countries Served", value: "40+" },
                { label: "Systems Supported", value: "500+" },
                { label: "Uptime Guarantee", value: "99.8%" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
                  <div className="text-2xl font-bold font-display mb-1" style={{ color: "#ffffff" }}>{stat.value}</div>
                  <div className="text-xs uppercase tracking-wide" style={{ color: "#94a3b8" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
