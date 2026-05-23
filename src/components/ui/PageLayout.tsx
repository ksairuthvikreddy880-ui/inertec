import Link from "next/link";

interface Section { title: string; content: string; }

interface PageLayoutProps {
  heroImage: string;
  heroTitle: string;
  breadcrumb?: { label: string; href: string }[];
  title: string;
  description: string;
  sections?: Section[];
  features?: string[];
  applications?: string[];
  relatedLinks?: { label: string; href: string }[];
}

export default function PageLayout({
  heroImage, heroTitle, breadcrumb = [], title, description,
  sections = [], features = [], applications = [], relatedLinks = [],
}: PageLayoutProps) {
  return (
    <div className="bg-[var(--color-bg)] min-h-screen">
      {/* Hero */}
      <div className="relative w-full" style={{ minHeight: "380px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={heroImage} alt={heroTitle} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1726]/85 via-[#0E1726]/60 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0B63CE] to-[#25B7FF]" />
        <div className="relative z-10 flex flex-col justify-end h-full px-10 pb-12 pt-24" style={{ minHeight: "380px" }}>
          {breadcrumb.length > 0 && (
            <nav className="flex items-center gap-2 text-slate-300 text-xs mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              {breadcrumb.map((b) => (
                <span key={b.href} className="flex items-center gap-2">
                  <span className="text-slate-500">/</span>
                  <Link href={b.href} className="hover:text-white transition-colors">{b.label}</Link>
                </span>
              ))}
            </nav>
          )}
          <h1 style={{ color: "#ffffff" }} className="text-white text-4xl md:text-5xl font-bold font-display leading-tight max-w-2xl">{heroTitle}</h1>
        </div>
      </div>

      {/* Title + description */}
      <div className="bg-white py-12 border-b border-[var(--color-border)]">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-3">{title}</h2>
          <div className="section-rule" />
          <p className="text-[var(--color-text-muted)] leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Main content */}
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left */}
            <div className="lg:col-span-2 space-y-8">
              {sections.map((s) => (
                <div key={s.title} className="bg-white rounded-xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">{s.title}</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">{s.content}</p>
                </div>
              ))}
              {features.length > 0 && (
                <div className="bg-white rounded-xl border border-[var(--color-border)] p-6">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                        <div className="w-5 h-5 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full" />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right sidebar */}
            <div className="space-y-5">
              {applications.length > 0 && (
                <div className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                  <h4 className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest mb-4">Applications</h4>
                  <div className="space-y-2">
                    {applications.map((app, i) => (
                      <div key={i} className="flex items-center gap-3 py-2.5 border-b border-[var(--color-border)] last:border-0 text-sm text-[var(--color-text)]">
                        <div className="w-5 h-5 border border-[var(--color-border)] rounded flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 bg-[var(--color-primary-light)] border border-[var(--color-primary)]/30 rounded-sm" />
                        </div>
                        {app}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {relatedLinks.length > 0 && (
                <div className="bg-white rounded-xl border border-[var(--color-border)] p-5">
                  <h4 className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest mb-4">Related</h4>
                  {relatedLinks.map((l, i) => (
                    <Link key={i} href={l.href}
                      className="flex items-center justify-between py-2.5 border-b border-[var(--color-border)] last:border-0 text-sm text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors">
                      {l.label}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  ))}
                </div>
              )}
              <div className="bg-[#0B63CE] rounded-xl p-6 text-white">
                <h4 className="font-semibold mb-2 text-white">Request a Quote</h4>
                <p className="text-slate-300 text-sm mb-4">Get a customized solution for your requirements.</p>
                <Link href="/contact" className="inline-block bg-white text-[#0B63CE] text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#E8F1FC] transition-colors border border-white/30">
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
