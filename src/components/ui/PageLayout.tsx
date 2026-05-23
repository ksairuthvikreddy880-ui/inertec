import Link from "next/link";

interface Section {
  title: string;
  content: string;
}

interface PageLayoutProps {
  heroImage: string;
  heroTitle: string;
  title: string;
  description: string;
  sections?: Section[];
  features?: string[];
  applications?: string[];
  relatedLinks?: { label: string; href: string }[];
}

export default function PageLayout({
  heroImage,
  heroTitle,
  title,
  description,
  sections = [],
  features = [],
  applications = [],
  relatedLinks = [],
}: PageLayoutProps) {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div
        className="relative w-full"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "380px",
        }}
      >
        <div className="absolute inset-0 bg-[#1A2744]/55" />
        <div className="relative z-10 flex items-end h-full" style={{ minHeight: "380px" }}>
          <div className="p-10 pb-12">
            <h1 className="text-white text-4xl font-bold bg-white/10 backdrop-blur-sm px-6 py-4 inline-block">
              {heroTitle}
            </h1>
          </div>
        </div>
      </div>

      {/* Title + description */}
      <div className="bg-white py-12 border-b border-[var(--color-border)]">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-bold text-[var(--color-ink)] mb-3">{title}</h2>
          <div className="w-12 h-1 bg-[var(--color-blue)] mb-6" />
          <p className="text-[var(--color-steel)] leading-relaxed text-base">{description}</p>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-[var(--color-off-white)] section-padding border-b border-[var(--color-border)]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: sections + features */}
            <div className="lg:col-span-2 space-y-8">
              {sections.map((s) => (
                <div key={s.title}>
                  <h3 className="text-lg font-bold text-[var(--color-ink)] mb-3">{s.title}</h3>
                  <p className="text-[var(--color-steel)] leading-relaxed text-sm">{s.content}</p>
                </div>
              ))}

              {features.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-ink)] mb-4">Key Features</h3>
                  <ul className="space-y-0 border border-[var(--color-border)]">
                    {features.map((f, i) => (
                      <li key={i} className={`flex items-start gap-3 px-5 py-3.5 bg-white text-sm text-[var(--color-steel)] ${i < features.length - 1 ? "border-b border-[var(--color-border)]" : ""}`}>
                        <span className="w-1.5 h-1.5 bg-[var(--color-blue)] rounded-full mt-1.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right: applications + related + CTA */}
            <div className="space-y-6">
              {applications.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-widest mb-3">Applications</h4>
                  <div className="space-y-0 border border-[var(--color-border)]">
                    {applications.map((app, i) => (
                      <div key={i} className={`flex items-center gap-3 px-4 py-3 bg-white text-sm text-[var(--color-ink)] ${i < applications.length - 1 ? "border-b border-[var(--color-border)]" : ""}`}>
                        <div className="w-5 h-5 border border-[var(--color-border)] flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 bg-[var(--color-blue-light)] border border-[var(--color-blue)]/30" />
                        </div>
                        {app}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {relatedLinks.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-[var(--color-muted)] uppercase tracking-widest mb-3">Related</h4>
                  <div className="space-y-0 border border-[var(--color-border)]">
                    {relatedLinks.map((l, i) => (
                      <Link key={i} href={l.href} className={`flex items-center justify-between px-4 py-3 bg-white text-sm text-[var(--color-blue)] hover:bg-[var(--color-blue-light)] transition-colors ${i < relatedLinks.length - 1 ? "border-b border-[var(--color-border)]" : ""}`}>
                        {l.label}
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-[var(--color-blue)] p-6">
                <h4 className="text-white font-semibold mb-2">Request a Quote</h4>
                <p className="text-white/70 text-sm mb-4">Get a customized solution for your requirements.</p>
                <Link href="/contact" className="inline-block bg-white text-[var(--color-blue)] text-sm font-semibold px-5 py-2.5 hover:bg-[var(--color-blue-light)] transition-colors">
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
