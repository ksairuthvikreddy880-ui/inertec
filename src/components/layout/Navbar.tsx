"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const productsMenu = [
  { label: "Glovebox Workstations", href: "/products/glovebox-workstations" },
  { label: "Gas purifiers", href: "/products/gas-purifiers" },
  { label: "Solvent purification", href: "/products/solvent-purification" },
  { label: "Engineering & Robotics", href: "/products/engineering-robotics" },
  { label: "Battery Fabrication", href: "/battery-fabrication" },
  { label: "Customized Enclosures", href: "/products/customized-enclosures" },
  { label: "Process tools", href: "/products/process-tools" },
  { label: "Accessories & Spare Parts", href: "/products/accessories" },
];

const applicationsMenu = [
  { label: "Laboratory & Chemistry", href: "/applications/laboratory-chemistry" },
  { label: "Batteries", href: "/applications/batteries" },
  { label: "Perovskite", href: "/applications/perovskite" },
  { label: "Personal Protection", href: "/applications/personal-protection" },
  { label: "OLEDs / Organic Electronics", href: "/applications/oleds" },
  { label: "Additive Manufacturing", href: "/applications/additive-manufacturing" },
  { label: "Welding", href: "/applications/welding" },
  { label: "Material Purification", href: "/applications/material-purification" },
  { label: "Thermal Treatment", href: "/applications/thermal-treatment" },
];

const companyMenu = [
  { label: "Career", href: "/company/career" },
  { label: "About Inertec", href: "/about" },
  { label: "Sites & History", href: "/company/history" },
  { label: "Certifications", href: "/company/certifications" },
  { label: "Code of Conduct", href: "/company/code-of-conduct" },
];

const navLinks = [
  { label: "Products", href: "/products", menu: productsMenu },
  { label: "Applications", href: "/industries", menu: applicationsMenu },
  { label: "Battery Fabrication", href: "/battery-fabrication", menu: null },
  { label: "Company", href: "/about", menu: companyMenu },
  { label: "Contact", href: "/contact", menu: null },
];

function NavDropdown({ items }: { items: { label: string; href: string }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.15 }}
      className="absolute top-full left-0 z-50 bg-white min-w-[260px]"
      style={{ borderTop: "3px solid var(--color-blue)", boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}
    >
      {items.map((item, i) => (
        <Link
          key={item.href + i}
          href={item.href}
          className="flex items-center justify-between px-5 py-3.5 text-[#4a5568] text-sm hover:text-[var(--color-blue)] hover:bg-[var(--color-blue-light)] transition-colors border-b border-[var(--color-border)] last:border-0"
        >
          <span>{item.label}</span>
        </Link>
      ))}
    </motion.div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setMobileOpen(false); setOpenMenu(null); }, [pathname]);

  const open = (label: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenMenu(label);
  };
  const close = () => {
    timerRef.current = setTimeout(() => setOpenMenu(null), 150);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-[var(--color-topbar)] text-white text-xs py-2">
        <div className="container-wide flex items-center justify-between">
          <span className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Have any Questions? &nbsp;
            <a href="tel:+91XXXXXXXXXX" className="font-semibold hover:underline">+91 XXXXX XXXXX</a>
          </span>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-[var(--color-border)] shadow-sm">
        <div className="container-wide flex items-center justify-between py-2">
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo.jpeg" alt="Inertec Systems LLP" width={660} height={228} className="h-10 w-auto object-contain" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-stretch">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.menu && open(link.label)}
                onMouseLeave={() => link.menu && close()}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-5 text-sm font-medium transition-colors border-b-2",
                    pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                      ? "text-[var(--color-blue)] border-[var(--color-blue)]"
                      : "text-[var(--color-steel)] border-transparent hover:text-[var(--color-ink)]"
                  )}
                >
                  {link.label}
                  {link.menu && (
                    <svg className={cn("w-3 h-3 transition-transform", openMenu === link.label && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                <AnimatePresence>
                  {link.menu && openMenu === link.label && (
                    <div onMouseEnter={() => open(link.label)} onMouseLeave={close}>
                      <NavDropdown items={link.menu} />
                    </div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <span className={cn("block w-5 h-0.5 bg-[var(--color-ink)] transition-all mb-1.5", mobileOpen && "rotate-45 translate-y-2")} />
            <span className={cn("block w-5 h-0.5 bg-[var(--color-ink)] transition-all mb-1.5", mobileOpen && "opacity-0")} />
            <span className={cn("block w-5 h-0.5 bg-[var(--color-ink)] transition-all", mobileOpen && "-rotate-45 -translate-y-2")} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-6 overflow-y-auto"
          >
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-4 text-lg font-semibold border-b border-[var(--color-border)]",
                      pathname === link.href ? "text-[var(--color-blue)]" : "text-[var(--color-ink)]"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.menu && (
                    <div className="pl-4 pb-2">
                      {link.menu.map((item, i) => (
                        <Link key={item.href + i} href={item.href} className="block py-2.5 border-b border-[var(--color-border)]/50 text-sm text-[var(--color-steel)]">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">Request a Quote</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
