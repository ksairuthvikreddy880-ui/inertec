import PageLayout from "@/components/ui/PageLayout";

export const metadata = { title: "Batteries" };

export default function BatteriesPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1620714223084-8fcacc2dbe4d?w=1400&q=80"
      heroTitle="Batteries"
      title="Batteries"
      description="Lithium-ion battery research and production requires strict inert atmosphere control at every stage — from electrode preparation to cell assembly and formation cycling. Inertec provides complete glovebox and fabrication equipment solutions for battery labs worldwide."
      sections={[
        {
          title: "Cell Assembly",
          content: "Coin cell, pouch cell, and cylindrical cell assembly all require moisture and oxygen levels below 1 ppm to prevent electrolyte degradation and lithium metal reactivity. Our gloveboxes maintain these conditions continuously with automatic purification and regeneration.",
        },
        {
          title: "Electrode Processing",
          content: "Electrode slurry preparation, coating, drying, and calendering can be integrated into inert atmosphere workflows. Our process tools and custom enclosures support the full electrode manufacturing chain under controlled conditions.",
        },
      ]}
      features={[
        "O₂ and H₂O <1 ppm for lithium compatibility",
        "Coin, pouch, and cylindrical cell assembly",
        "Electrode drying and calendering integration",
        "Electrolyte filling under inert atmosphere",
        "Formation cycling equipment integration",
        "Scalable from R&D to pilot production",
      ]}
      applications={["Coin cell assembly", "Pouch cell fabrication", "Cylindrical cell production", "Electrolyte handling", "Formation cycling"]}
      relatedLinks={[
        { label: "Battery Fabrication Equipment", href: "/battery-fabrication" },
        { label: "Glovebox Workstations", href: "/products/glovebox-workstations" },
        { label: "Process Tools", href: "/products/process-tools" },
      ]}
    />
  );
}
