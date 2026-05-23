import type { Metadata } from "next";
import IndustriesPageClient from "./IndustriesPageClient";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Inertec Systems serves aerospace, pharmaceutical, semiconductor, solar, lithium-ion battery, OLED, medical, research, and additive manufacturing industries with precision inert atmosphere solutions.",
};

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}
