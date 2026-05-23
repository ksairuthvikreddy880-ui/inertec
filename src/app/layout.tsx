import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Inertec Systems LLP — Engineering Pure Environments",
    template: "%s | Inertec Systems LLP",
  },
  description:
    "Precision inert atmosphere glovebox systems, inert purge boxes, customized inert enclosures, and battery fabrication equipment for aerospace, semiconductor, pharmaceutical, and battery industries.",
  keywords: [
    "glovebox systems",
    "inert atmosphere",
    "purge box",
    "battery fabrication",
    "coin cell",
    "pouch cell",
    "inert enclosure",
    "Inertec Systems",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-white text-[var(--color-ink)] antialiased">
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
