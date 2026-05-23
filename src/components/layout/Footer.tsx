import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Products: [
    { label: "Glovebox Workstations", href: "/products/glovebox-workstations" },
    { label: "Gas Purification", href: "/products/gas-purifiers" },
    { label: "Battery Fabrication", href: "/battery-fabrication" },
    { label: "Custom Enclosures", href: "/products/customized-enclosures" },
    { label: "Process Tools", href: "/products/process-tools" },
  ],
  Applications: [
    { label: "Batteries", href: "/applications/batteries" },
    { label: "Laboratory & Chemistry", href: "/applications/laboratory-chemistry" },
    { label: "Perovskite", href: "/applications/perovskite" },
    { label: "OLEDs", href: "/applications/oleds" },
    { label: "Additive Manufacturing", href: "/applications/additive-manufacturing" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Certifications", href: "/company/certifications" },
    { label: "Career", href: "/company/career" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--color-footer)] text-white">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo.jpeg" alt="Inertec Systems" width={660} height={228} className="h-10 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Precision inert atmosphere engineering for the world&apos;s most demanding industries. Gloveboxes, purge boxes, and battery fabrication equipment.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-white/40">
              <span>ISO 9001:2015</span>
              <span>·</span>
              <span>CE Certified</span>
              <span>·</span>
              <span>Made in India</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-5">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">Contact</h4>
            <div className="space-y-3 text-sm text-white/50">
              <p>+91 XXXXX XXXXX</p>
              <p>info@intertecsystems.com</p>
              <p>India</p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[var(--color-accent)] hover:text-white transition-colors">
              Get in Touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} Inertec Systems LLP. All rights reserved.</p>
          <p className="text-white/30 text-xs">Precision Engineered in India</p>
        </div>
      </div>
    </footer>
  );
}
