import PageLayout from "@/components/ui/PageLayout";

export const metadata = { title: "Personal Protection" };

export default function PersonalProtectionPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80"
      heroTitle="Personal Protection"
      title="Personal Protection"
      description="Inertec containment gloveboxes protect operators from hazardous, toxic, and radioactive materials while maintaining a controlled internal environment. Our negative-pressure and containment-grade systems are used in pharmaceutical, nuclear, and chemical industries."
      sections={[
        {
          title: "Containment Gloveboxes",
          content: "Negative-pressure containment gloveboxes prevent hazardous materials from escaping into the laboratory environment. HEPA-filtered exhaust systems and interlocked antechambers ensure operator safety during all material handling operations.",
        },
        {
          title: "Pharmaceutical & Chemical Containment",
          content: "Handling highly potent active pharmaceutical ingredients (HPAPIs), cytotoxic compounds, and reactive chemicals requires both containment and inert atmosphere. Our dual-function systems provide both simultaneously.",
        },
      ]}
      features={[
        "Negative pressure containment design",
        "HEPA H14 filtered exhaust",
        "Interlocked antechamber for safe transfer",
        "Continuous air monitoring and alarms",
        "Stainless steel 316L construction",
        "Decontamination port and drain",
        "Compliant with OEB 4/5 requirements",
        "Validation documentation available",
      ]}
      applications={["HPAPI handling", "Cytotoxic compound processing", "Radioactive material handling", "Reactive chemical synthesis", "Pharmaceutical manufacturing"]}
      relatedLinks={[
        { label: "Customized Enclosures", href: "/products/customized-enclosures" },
        { label: "Glovebox Workstations", href: "/products/glovebox-workstations" },
        { label: "Contact for Custom Solutions", href: "/contact" },
      ]}
    />
  );
}
