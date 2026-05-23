import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Services" };

const services = [
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>,
    title: "Technical Support",
    desc: "Dedicated application engineers available for troubleshooting, remote diagnostics, and on-site support across all Inertec systems.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>,
    title: "Installation & Commissioning",
    desc: "Professional installation by certified engineers. Full system commissioning, atmosphere verification, and operator training included.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: "Maintenance & Calibration",
    desc: "Scheduled preventive maintenance programs, sensor calibration, and purification column regeneration to maximize system uptime.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>,
    title: "Training",
    desc: "Comprehensive operator and maintenance training programs — on-site or remote — tailored to your team and application.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>,
    title: "Consulting",
    desc: "Application engineering consultation for new projects, process optimization, and system integration into existing workflows.",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
    title: "Global Reach",
    desc: "Service network spanning 40+ countries. Local partners and certified service engineers ensure fast response times worldwide.",
  },
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
                <div className="w-11 h-11 bg-[#E8F1FC] rounded-lg flex items-center justify-center text-[#0B63CE] mb-4 group-hover:bg-[#0B63CE] group-hover:text-white transition-colors">
                  {s.icon}
                </div>
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
