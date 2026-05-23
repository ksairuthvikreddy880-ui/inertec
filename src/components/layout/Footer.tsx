import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Products: [
    { label: "Glovebox Systems", href: "/products#glovebox-systems" },
    { label: "Inert Purge Boxes", href: "/products#purge-boxes" },
    { label: "Custom Enclosures", href: "/products#custom-enclosures" },
    { label: "Battery Fabrication", href: "/battery-fabrication" },
    { label: "Storage Cabinets", href: "/products#storage-cabinets" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Certifications", href: "/about#certifications" },
    { label: "Contact", href: "/contact" },
  ],
  Industries: [
    { label: "Aerospace", href: "/industries#aerospace" },
    { label: "Semiconductor", href: "/industries#semiconductor" },
    { label: "Lithium-Ion Battery", href: "/industries#lithium-battery" },
    { label: "Pharmaceutical", href: "/industries#pharmaceutical" },
    { label: "Research Labs", href: "/industries#research" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--color-footer)] text-white">
      <div className="border-b border-white/10">
        <div className="container-wide py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center mb-5">
                <Image
                  src="/logo.jpeg"
                  alt="Inertec Systems LLP"
                  width={660}
                  height={228}
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-5">
                Precision inert atmosphere engineering for the world&apos;s most demanding
                industries. Gloveboxes, purge boxes, and battery fabrication equipment.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-white/40 text-xs tracking-widest uppercase">ISO 9001:2015</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-white/40 text-xs tracking-widest uppercase">CE Certified</span>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white text-sm font-semibold mb-4">{category}</h4>
                <ul className="space-y-2.5">
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
          </div>
        </div>
      </div>

      <div className="container-wide py-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} Inertec Systems LLP. All rights reserved.
        </p>
        <p className="text-white/30 text-xs">Precision Engineered in India</p>
      </div>
    </footer>
  );
}
