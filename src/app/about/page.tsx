import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Inertec Systems LLP — our engineering capabilities, manufacturing facility, certifications, and 15+ years of precision inert atmosphere engineering.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
