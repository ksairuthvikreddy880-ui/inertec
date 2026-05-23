"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const megaMenus = {
  Products: {
    sections: [
      {
        title: "Glovebox Systems",
        items: [
          { label: "Glovebox Workstations", href: "/products/glovebox-workstations", desc: "Research & industrial gloveboxes" },
          { label: "Gas Purification", href: "/products/gas-purifiers", desc: "Sub-ppm O₂ & H₂O removal" },
          { label: "Solvent Purification", href: "/products/solvent-purification", desc: "Ultra-dry solvent delivery" },
          { label: "Customized Enclosures", href: "/products/customized-enclosures", desc: "Bespoke inert systems" },
        ],
      },
      {
        title: "Process Equipment",
        items: [
          { label: "Battery Fabrication", href: "/battery-fabrication", desc: "Coin, pouch & cylindrical cells" },
          { label: "Engineering & Robotics", href: "/products/engineering-robotics", desc: "Automated inert processes" },
          { label: "Process Tools", href: "/products/process-tools", desc: "Ovens, hotplates & dispensers" },
          { label: "Accessories & Spare Parts", href: "/products/accessories", desc: "Genuine replacement parts" },
        ],
      },
    ],
    featured: { label: "View All Products", href: "/products", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=70" },
  },
  Applications: {
    sections: [
      {
        title: "Research",
        items: [
          { label: "Laboratory & Chemistry", href: "/applications/laboratory-chemistry", desc: "Air-sensitive synthesis" },
          { label: "Batteries", href: "/applications/batteries", desc: "Li-ion cell research" },
          { label: "Perovskite", href: "/applications/perovskite", desc: "Solar cell fabrication" },
          { label: "OLEDs / Organic Electronics", href: "/applications/oleds", desc: "Device fabrication" },
        ],
      },
      {
        title: "Industrial",
        items: [
          { label: "Additive Manufacturing", href: "/applications/additive-manufacturing", desc: "Reactive metal powders" },
          { label: "Welding", href: "/applications/welding", desc: "Titanium & reactive metals" },
          { label: "Material Purification", href: "/applications/material-purification", desc: "API & chemical purification" },
          { label: "Thermal Treatment", href: "/applications/thermal-treatment", desc: "Inert atmosphere annealing" },
        ],
      },
    ],
    featured: { label: "All Applications", href: "/industries", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=70" },
  },
  Company: {
    sections: [
      {
        title: "About",
        items: [
          { label: "About Inertec", href: "/about", desc: "Our story & mission" },
          { label: "Sites & History", href: "/company/history", desc: "15+ years of engineering" },
          { label: "Certifications", href: "/company/certifications", desc: "ISO 9001:2015 & CE" },
          { label: "Code of Conduct", href: "/company/code-of-conduct", desc: "Our values" },
        ],
      },
      {
        title: "Careers",
        items: [
          { label: "Career", href: "/company/career", desc: "Join our team" },
        ],
      },
    ],
    featured: { label: "Contact Us", href: "/contact", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=70" },
  },
};

type MenuKey = keyof typeof megaMenus;

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setOpenMenu(null); }, [pathname]);

  const open = (key: MenuKey) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenMenu(key);
  };
  const close = () => {
    timerRef.current = setTimeout(() => setOpenMenu(null), 180);
  };

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-[var(--color-topbar)] text-white/80 text-xs py-2 hidden md:block">
        <div className="container-wide flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              +91 XXXXX XXXXX
            </a>
            <a href="mailto:info@intertecsystems.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
              info@intertecsystems.com
            </a>
            <span className="flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              India
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className={cn(
        "sticky top-0 z-50 bg-white transition-shadow duration-300",
        scrolled ? "shadow-md" : "border-b border-[var(--color-border)]"
      )}>
        <div className="container-wide flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo.jpeg" alt="Inertec Systems" width={660} height={228} className="h-9 w-auto object-contain" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center h-full">
            {(["Products", "Applications"] as MenuKey[]).map((key) => (
              <div key={key} className="relative h-full flex items-center"
                onMouseEnter={() => open(key)} onMouseLeave={close}>
                <button className={cn(
                  "flex items-center gap-1 px-4 h-full text-sm font-medium transition-colors border-b-2",
                  openMenu === key ? "text-[var(--color-primary)] border-[var(--color-primary)]" : "text-[var(--color-text-muted)] border-transparent hover:text-[var(--color-text)]"
                )}>
                  {key}
                  <svg className={cn("w-3.5 h-3.5 transition-transform", openMenu === key && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            ))}

            {[
              { label: "Battery Fabrication", href: "/battery-fabrication" },
              { label: "Services", href: "/services" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className={cn(
                "px-4 h-full flex items-center text-sm font-medium transition-colors border-b-2",
                pathname === link.href ? "text-[var(--color-primary)] border-[var(--color-primary)]" : "text-[var(--color-text-muted)] border-transparent hover:text-[var(--color-text)]"
              )}>
                {link.label}
              </Link>
            ))}

            <div className="relative h-full flex items-center"
              onMouseEnter={() => open("Company")} onMouseLeave={close}>
              <button className={cn(
                "flex items-center gap-1 px-4 h-full text-sm font-medium transition-colors border-b-2",
                openMenu === "Company" ? "text-[var(--color-primary)] border-[var(--color-primary)]" : "text-[var(--color-text-muted)] border-transparent hover:text-[var(--color-text)]"
              )}>
                Company
                <svg className={cn("w-3.5 h-3.5 transition-transform", openMenu === "Company" && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <Link href="/contact" className={cn(
              "px-4 h-full flex items-center text-sm font-medium transition-colors border-b-2",
              pathname === "/contact" ? "text-[var(--color-primary)] border-[var(--color-primary)]" : "text-[var(--color-text-muted)] border-transparent hover:text-[var(--color-text)]"
            )}>Contact</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-xs py-2 px-4">Request a Quote</Link>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <span className={cn("block w-5 h-0.5 bg-[var(--color-text)] transition-all mb-1.5", mobileOpen && "rotate-45 translate-y-2")} />
            <span className={cn("block w-5 h-0.5 bg-[var(--color-text)] transition-all mb-1.5", mobileOpen && "opacity-0")} />
            <span className={cn("block w-5 h-0.5 bg-[var(--color-text)] transition-all", mobileOpen && "-rotate-45 -translate-y-2")} />
          </button>
        </div>

        {/* Mega menu */}
        <AnimatePresence>
          {openMenu && megaMenus[openMenu] && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="absolute left-0 right-0 bg-white border-b border-[var(--color-border)] shadow-xl z-50"
              onMouseEnter={() => open(openMenu)}
              onMouseLeave={close}
            >
              <div className="container-wide py-8">
                <div className="grid grid-cols-12 gap-8">
                  {megaMenus[openMenu].sections.map((section) => (
                    <div key={section.title} className="col-span-3">
                      <p className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest mb-4">{section.title}</p>
                      <div className="space-y-1">
                        {section.items.map((item) => (
                          <Link key={item.href} href={item.href} onClick={() => setOpenMenu(null)}
                            className="group flex flex-col px-3 py-2.5 rounded-lg hover:bg-[var(--color-primary-light)] transition-colors">
                            <span className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">{item.label}</span>
                            <span className="text-xs text-[var(--color-text-muted)] mt-0.5">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="col-span-3 col-start-10">
                    <div className="relative rounded-xl overflow-hidden h-40 group cursor-pointer">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={megaMenus[openMenu].featured.img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/80 to-transparent" />
                      <Link href={megaMenus[openMenu].featured.href} onClick={() => setOpenMenu(null)}
                        className="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold flex items-center justify-between">
                        {megaMenus[openMenu].featured.label}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-20 px-6 overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {[
                { label: "Products", href: "/products" },
                { label: "Applications", href: "/industries" },
                { label: "Battery Fabrication", href: "/battery-fabrication" },
                { label: "Services", href: "/services" },
                { label: "Company", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                  className="py-4 text-lg font-semibold border-b border-[var(--color-border)] text-[var(--color-text)]">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary w-full justify-center">Request a Quote</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
