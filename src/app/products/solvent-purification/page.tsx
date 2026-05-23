import PageLayout from "@/components/ui/PageLayout";

export const metadata = { title: "Solvent Purification" };

export default function SolventPurificationPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1400&q=80"
      heroTitle="Solvent Purification"
      title="Solvent Purification"
      description="Inertec solvent purification systems deliver ultra-dry, oxygen-free solvents directly to your glovebox or process equipment. Eliminate the need for distillation and reduce solvent waste with our column-based purification technology."
      sections={[
        {
          title: "Column-Based Purification",
          content: "Activated alumina and molecular sieve columns remove water and oxygen from common laboratory solvents including THF, DCM, DMF, acetonitrile, toluene, and more. Solvents are dispensed under inert gas pressure directly into your process.",
        },
        {
          title: "Multi-Solvent Systems",
          content: "Configure systems with 2 to 8 solvent columns for laboratories requiring multiple purified solvents. Each column is independently switchable and can be regenerated in-situ without system shutdown.",
        },
      ]}
      features={[
        "Water content reduced to <5 ppm",
        "Oxygen content <1 ppm in dispensed solvent",
        "2 to 8 solvent column configurations",
        "In-situ column regeneration",
        "Inert gas pressurized dispensing",
        "Compatible with most common lab solvents",
        "Stainless steel construction throughout",
        "Integrated flow control and monitoring",
      ]}
      applications={["Organic synthesis", "Electrochemistry", "OLED fabrication", "Battery electrolyte preparation", "Pharmaceutical research"]}
      relatedLinks={[
        { label: "Glovebox Workstations", href: "/products/glovebox-workstations" },
        { label: "Gas Purifiers", href: "/products/gas-purifiers" },
        { label: "Process Tools", href: "/products/process-tools" },
      ]}
    />
  );
}
