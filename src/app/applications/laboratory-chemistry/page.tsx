import PageLayout from "@/components/ui/PageLayout";

export const metadata = { title: "Laboratory & Chemistry" };

export default function LaboratoryChemistryPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1400&q=80"
      heroTitle="Laboratory & Chemistry"
      title="Laboratory & Chemistry"
      description="Research laboratories and chemistry departments rely on Inertec glovebox systems for handling air-sensitive compounds, conducting moisture-free synthesis, and storing reactive materials. Our systems provide the controlled atmosphere needed for reproducible, contamination-free research."
      sections={[
        {
          title: "Air-Sensitive Synthesis",
          content: "Organometallic chemistry, Schlenk-line work, and air-sensitive reagent handling all benefit from a dedicated inert atmosphere glovebox. Maintain sub-ppm O₂ and H₂O levels throughout your synthesis workflow without the limitations of Schlenk techniques.",
        },
        {
          title: "Material Storage & Characterization",
          content: "Store hygroscopic reagents, reactive metals, and moisture-sensitive catalysts under inert atmosphere. Integrate analytical instruments such as balances, microscopes, and electrochemical workstations directly inside the glovebox.",
        },
      ]}
      features={[
        "Sub-ppm O₂ and H₂O atmosphere",
        "Instrument integration capability",
        "Antechamber for material transfer",
        "Solvent purification integration",
        "Vacuum-compatible design",
        "Modular and expandable configurations",
      ]}
      applications={["Organometallic synthesis", "Air-sensitive reagent handling", "Electrochemistry", "Catalysis research", "Material storage"]}
      relatedLinks={[
        { label: "Glovebox Workstations", href: "/products/glovebox-workstations" },
        { label: "Solvent Purification", href: "/products/solvent-purification" },
        { label: "Gas Purifiers", href: "/products/gas-purifiers" },
      ]}
    />
  );
}
