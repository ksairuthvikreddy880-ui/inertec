import PageLayout from "@/components/ui/PageLayout";

export const metadata = { title: "Code of Conduct" };

export default function CodeOfConductPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80"
      heroTitle="Code of Conduct"
      title="Code of Conduct"
      description="Inertec Systems LLP is committed to conducting business with integrity, transparency, and respect for all stakeholders. Our Code of Conduct defines the ethical standards and principles that guide our operations, relationships, and decision-making."
      sections={[
        {
          title: "Integrity & Honesty",
          content: "We conduct all business activities with honesty and integrity. We do not engage in bribery, corruption, or any form of unethical business practice. All financial reporting is accurate and transparent, and we comply with all applicable laws and regulations in every country where we operate.",
        },
        {
          title: "Respect & Inclusion",
          content: "We treat all employees, customers, suppliers, and partners with dignity and respect. We do not tolerate discrimination, harassment, or any form of workplace misconduct. We are committed to creating an inclusive environment where diverse perspectives are valued.",
        },
        {
          title: "Environmental Responsibility",
          content: "We are committed to minimizing our environmental impact through responsible manufacturing practices, waste reduction, and energy efficiency. We comply with all applicable environmental regulations and continuously seek to improve our environmental performance.",
        },
        {
          title: "Supply Chain Standards",
          content: "We expect our suppliers and partners to uphold the same ethical standards we apply to ourselves. We conduct due diligence on our supply chain to ensure compliance with labor standards, environmental regulations, and anti-corruption requirements.",
        },
      ]}
      features={[
        "Zero tolerance for bribery and corruption",
        "Full compliance with applicable laws",
        "Respect and dignity for all stakeholders",
        "Inclusive and diverse workplace",
        "Environmental responsibility",
        "Ethical supply chain management",
        "Confidentiality and data protection",
        "Whistleblower protection policy",
      ]}
      applications={["Business ethics", "Supplier relations", "Employee conduct", "Environmental compliance"]}
      relatedLinks={[
        { label: "About Inertec", href: "/about" },
        { label: "Certifications", href: "/company/certifications" },
        { label: "Career", href: "/company/career" },
      ]}
    />
  );
}
