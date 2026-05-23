import PageLayout from "@/components/ui/PageLayout";
export const metadata = { title: "Certifications" };
export default function CertificationsPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80"
      heroTitle="Certifications & Standards"
      breadcrumb={[{ label: "Company", href: "/about" }, { label: "Certifications", href: "/company/certifications" }]}
      title="Certified to the Highest Standards"
      description="Inertec Systems LLP is committed to the highest standards of quality, safety, and compliance. Our manufacturing processes and products meet internationally recognized standards."
      sections={[
        { title: "ISO 9001:2015 Quality Management", content: "Our entire manufacturing operation is certified to ISO 9001:2015. Annual third-party audits ensure continuous compliance and improvement across design, procurement, fabrication, assembly, testing, and after-sales service." },
        { title: "CE Marking", content: "All Inertec glovebox systems and electrical panels are CE marked in accordance with the Machinery Directive (2006/42/EC) and Low Voltage Directive (2014/35/EU). Full technical documentation and Declaration of Conformity provided with every system." },
      ]}
      features={["ISO 9001:2015 — Quality Management System", "CE Marking — Machinery & Low Voltage Directives", "IEC 61010 — Electrical Safety", "ATEX — Explosive Atmospheres (on request)", "ASME — Pressure Vessel Standards (on request)", "RoHS — Hazardous Substances Compliance", "Full traceability documentation", "Declaration of Conformity with every system"]}
      applications={["Quality assurance", "Regulatory compliance", "Export documentation", "Customer audits"]}
      relatedLinks={[{ label: "About Inertec", href: "/about" }, { label: "Code of Conduct", href: "/company/code-of-conduct" }, { label: "Contact Us", href: "/contact" }]}
    />
  );
}
