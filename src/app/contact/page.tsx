import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Inertec Systems LLP for glovebox systems, inert purge boxes, battery fabrication equipment, and custom inert enclosure inquiries.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
