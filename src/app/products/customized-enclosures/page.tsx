import PageLayout from "@/components/ui/PageLayout";

export const metadata = { title: "Customized Enclosures" };

export default function CustomizedEnclosuresPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1400&q=80"
      heroTitle="Customized Enclosures"
      title="Customized Enclosures"
      description="Fully bespoke inert enclosures designed to your exact process requirements. From benchtop research enclosures to room-scale industrial systems, Inertec engineers custom inert atmosphere solutions for unique applications where standard products don't fit."
      sections={[
        {
          title: "Bespoke Design Process",
          content: "Every custom enclosure begins with a detailed application review. Our engineers work with you to define atmosphere requirements, access needs, equipment integration, and dimensional constraints. SolidWorks 3D design and FEA analysis ensure the final system meets all structural and process requirements.",
        },
        {
          title: "Materials & Construction",
          content: "Custom enclosures are fabricated in SS 304, SS 316L, aluminum, or acrylic depending on application requirements. All seals use EPDM or Viton gaskets rated for inert gas service. Electrical and pneumatic feedthroughs are helium leak-tested to 10⁻⁹ mbar·L/s.",
        },
      ]}
      features={[
        "Fully custom dimensions and configurations",
        "SS 304 / SS 316L / Aluminum / Acrylic construction",
        "EPDM or Viton sealing throughout",
        "Helium leak tested to 10⁻⁹ mbar·L/s",
        "Multi-point O₂ and H₂O monitoring",
        "Custom glove port and viewport placement",
        "Equipment integration and feedthroughs",
        "Lead time 8–16 weeks from design approval",
      ]}
      applications={["Industrial process integration", "Hazardous material handling", "Large-scale battery production", "Custom research setups", "Pharmaceutical manufacturing"]}
      relatedLinks={[
        { label: "Glovebox Workstations", href: "/products/glovebox-workstations" },
        { label: "Engineering & Robotics", href: "/products/engineering-robotics" },
        { label: "Process Tools", href: "/products/process-tools" },
      ]}
    />
  );
}
