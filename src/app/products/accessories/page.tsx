import PageLayout from "@/components/ui/PageLayout";
export const metadata = { title: "Accessories & Spare Parts" };
export default function AccessoriesPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80"
      heroTitle="Accessories & Spare Parts"
      breadcrumb={[{ label: "Products", href: "/products" }, { label: "Accessories & Spare Parts", href: "/products/accessories" }]}
      title="Accessories & Spare Parts"
      description="Keep your Inertec glovebox and process equipment running at peak performance with genuine spare parts and accessories. From gloves and seals to purification columns and sensors, we stock everything needed for routine maintenance and upgrades."
      sections={[
        { title: "Gloves & Seals", content: "Genuine replacement gloves in butyl rubber, Hypalon, and neoprene for all Inertec glovebox models. O-ring kits, door seals, and antechamber gaskets available for all standard configurations. Custom sizes available on request." },
        { title: "Purification Consumables", content: "Replacement molecular sieve and copper catalyst columns for gas purification systems. Pre-activated columns for immediate installation. Regeneration kits and sensor replacement modules also available." },
      ]}
      features={["Genuine Inertec replacement parts", "Gloves: butyl rubber, Hypalon, neoprene", "O-ring and gasket kits for all models", "Replacement purification columns", "O₂ and H₂O sensor modules", "Antechamber seals and door gaskets", "Feedthrough connectors and fittings", "Fast dispatch from stock"]}
      applications={["Routine maintenance", "Glovebox upgrades", "Purification system service", "Sensor replacement"]}
      relatedLinks={[{ label: "Glovebox Workstations", href: "/products/glovebox-workstations" }, { label: "Gas Purifiers", href: "/products/gas-purifiers" }, { label: "Contact for Service", href: "/contact" }]}
    />
  );
}
