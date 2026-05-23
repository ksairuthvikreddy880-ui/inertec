import PageLayout from "@/components/ui/PageLayout";

export const metadata = { title: "Glovebox Workstations" };

export default function GloveboxWorkstationsPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=80"
      heroTitle="Glovebox Workstations"
      title="Glovebox Workstations"
      description="Inertec Systems offers a wide range of ready-to-use glovebox workstations that can be equipped with a comprehensive set of optional features. University and industrial labs use glove boxes for the research and development of emerging technologies including Lithium Batteries, Chemical, OLED / PLED and Welding."
      sections={[
        {
          title: "Standard Inert Atmosphere Glovebox",
          content: "Single or dual-station gloveboxes engineered for oxygen and moisture-sensitive processes. Maintains <1 ppm O₂ and H₂O levels with integrated purification systems. Available in SS 304 or acrylic construction with 2–4 glove ports.",
        },
        {
          title: "Dual-Chamber Glovebox System",
          content: "Interconnected dual-chamber configuration for complex multi-step processes. Ideal for battery research and semiconductor applications requiring isolated environments. Features closed-loop circulation and PLC + HMI control.",
        },
      ]}
      features={[
        "O₂ and H₂O levels maintained below 1 ppm",
        "Single or dual-station configurations",
        "Integrated gas purification and recirculation",
        "PLC-based control with touchscreen HMI",
        "Antechamber for material transfer",
        "Custom dimensions and port configurations",
        "Argon or Nitrogen atmosphere compatible",
        "CE marked and ISO 9001:2015 certified",
      ]}
      applications={["Laboratory and Chemistry", "Batteries", "OLEDs / Organic Electronics", "Perovskite", "Welding"]}
      relatedLinks={[
        { label: "Gas Purifiers", href: "/products/gas-purifiers" },
        { label: "Customized Enclosures", href: "/products/customized-enclosures" },
        { label: "Battery Fabrication", href: "/battery-fabrication" },
      ]}
    />
  );
}
