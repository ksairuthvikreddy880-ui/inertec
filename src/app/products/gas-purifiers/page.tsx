import PageLayout from "@/components/ui/PageLayout";

export const metadata = { title: "Gas Purifiers" };

export default function GasPurifiersPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80"
      heroTitle="Gas Purifiers"
      title="Gas Purifiers"
      description="Inertec gas purification systems remove oxygen and moisture from inert gases to sub-ppm levels. Designed for integration with glovebox workstations or as standalone units for process gas purification in industrial and research environments."
      sections={[
        {
          title: "Integrated Purification Systems",
          content: "Our purification columns use molecular sieve and copper catalyst technology to simultaneously remove O₂ and H₂O from argon or nitrogen gas streams. Automatic regeneration cycles ensure continuous operation without manual intervention.",
        },
        {
          title: "Standalone Gas Purifiers",
          content: "Standalone units for purifying process gases before introduction into sensitive equipment. Available in various flow rate configurations from laboratory scale to industrial production volumes.",
        },
      ]}
      features={[
        "Removes O₂ and H₂O to <1 ppm simultaneously",
        "Automatic regeneration — no manual intervention",
        "Compatible with Argon and Nitrogen",
        "Flow rates from 1 to 100+ L/min",
        "Integrated O₂ and H₂O sensors",
        "PLC control with alarm outputs",
        "Compact footprint for bench or rack mounting",
        "Suitable for Ar and N₂ atmospheres",
      ]}
      applications={["Glovebox purification", "Process gas cleaning", "Laboratory research", "Semiconductor manufacturing"]}
      relatedLinks={[
        { label: "Glovebox Workstations", href: "/products/glovebox-workstations" },
        { label: "Solvent Purification", href: "/products/solvent-purification" },
        { label: "Accessories & Spare Parts", href: "/products/accessories" },
      ]}
    />
  );
}
