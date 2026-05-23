"use client";

import Link from "next/link";

const socialLinks = [
  { label: "Inertec on LinkedIn", icon: "in", href: "#" },
  { label: "Inertec on Instagram", icon: "ig", href: "#" },
  { label: "Inertec on Facebook", icon: "fb", href: "#" },
  { label: "Inertec on YouTube", icon: "yt", href: "#" },
];

export default function ContactCTA() {
  return (
    <>
      {/* Social / Follow section */}
      <section className="bg-[#1A2744] text-white section-padding border-b border-white/10">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-display-lg text-white mb-4">Like - Follow - Share</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
                Whether it&apos;s about exhibitions, roadshows or other events, about product
                innovations, the latest trends in the industry or interesting solutions from
                our users — you will find information on those topics from us on almost all
                channels, around the clock.
              </p>
              <div className="flex flex-col gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="inline-flex items-center gap-3 bg-[var(--color-blue)] hover:bg-[var(--color-blue-dark)] text-white text-sm font-medium px-5 py-2.5 transition-colors w-fit"
                  >
                    <span className="w-5 h-5 bg-white/20 rounded-sm flex items-center justify-center text-xs font-bold">
                      {s.icon}
                    </span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="bg-white/5 border border-white/10 p-8 max-w-sm w-full">
                <h3 className="text-white font-semibold text-lg mb-2">Get in Touch</h3>
                <p className="text-white/50 text-sm mb-6">Ready to engineer your environment?</p>
                <div className="flex flex-col gap-3">
                  <Link href="/contact" className="btn-primary text-center justify-center">
                    Request a Quote
                  </Link>
                  <Link href="/products" className="btn-outline-white text-center justify-center">
                    Browse Products
                  </Link>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 gap-3">
                  {[
                    { label: "Email", value: "info@intertecsystems.com" },
                    { label: "Phone", value: "+91 XXXXX XXXXX" },
                    { label: "Location", value: "India" },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <span className="text-white/40 text-xs uppercase tracking-widest w-16 flex-shrink-0 pt-0.5">{item.label}</span>
                      <span className="text-white/80 text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#111827] py-10 border-b border-white/10">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-white text-xl font-semibold">Subscribe to our newsletter</h3>
            <form className="flex gap-3 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="E-Mail *"
                className="flex-1 md:w-72 px-4 py-2.5 bg-white text-[var(--color-ink)] text-sm border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-blue)]"
              />
              <button type="submit" className="btn-primary px-6 py-2.5 text-sm">
                Subscribe
              </button>
            </form>
          </div>
          <p className="text-white/30 text-xs mt-4">
            <input type="checkbox" className="mr-2" />
            I have read and accept the{" "}
            <a href="#" className="underline hover:text-white/60">Data Protection</a> and{" "}
            <a href="#" className="underline hover:text-white/60">Information Duties</a>.
          </p>
        </div>
      </section>
    </>
  );
}
