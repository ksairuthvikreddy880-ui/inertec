import PageLayout from "@/components/ui/PageLayout";
export const metadata = { title: "Code of Conduct" };
export default function CodeOfConductPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80"
      heroTitle="Code of Conduct"
      breadcrumb={[{ label: "Company", href: "/about" }, { label: "Code of Conduct", href: "/company/code-of-conduct" }]}
      title="Our Values & Ethics"
      description="Inertec Systems LLP is committed to conducting business with integrity, transparency, and respect for all stakeholders. Our Code of Conduct defines the ethical standards that guide our operations."
      sections={[
        { title: "Integrity & Honesty", content: "We conduct all business activities with honesty and integrity. We do not engage in bribery, corruption, or any form of unethical business practice. All financial reporting is accurate and transparent." },
        { title: "Respect & Inclusion", content: "We treat all employees, customers, suppliers, and partners with dignity and respect. We are committed to creating an inclusive environment where diverse perspectives are valued." },
        { title: "Environmental Responsibility", content: "We are committed to minimizing our environmental impact through responsible manufacturing practices, waste reduction, and energy efficiency." },
      ]}
      features={["Zero tolerance for bribery and corruption", "Full compliance with applicable laws", "Respect and dignity for all stakeholders", "Inclusive and diverse workplace", "Environmental responsibility", "Ethical supply chain management", "Confidentiality and data protection", "Whistleblower protection policy"]}
      applications={["Business ethics", "Supplier relations", "Employee conduct", "Environmental compliance"]}
      relatedLinks={[{ label: "About Inertec", href: "/about" }, { label: "Certifications", href: "/company/certifications" }, { label: "Career", href: "/company/career" }]}
    />
  );
}
