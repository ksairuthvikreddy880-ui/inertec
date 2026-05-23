import PageLayout from "@/components/ui/PageLayout";

export const metadata = { title: "Process Tools" };

export default function ProcessToolsPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1400&q=80"
      heroTitle="Process Tools"
      title="Process Tools"
      description="Inertec offers a range of process tools designed for use inside inert atmosphere gloveboxes. From vacuum ovens and hotplates to spin coaters and dispensing systems, our process tools are engineered for reliable operation in controlled atmosphere environments."
      sections={[
        {
          title: "Vacuum Ovens & Hotplates",
          content: "Compact vacuum ovens and heated stages designed for glovebox integration. Temperature ranges from ambient to 300°C with precise PID control. Vacuum-compatible feedthroughs allow connection to external pumping systems.",
        },
        {
          title: "Dispensing & Coating Systems",
          content: "Precision dispensing systems for electrolyte filling, electrode slurry application, and thin-film coating inside inert atmosphere enclosures. Compatible with viscous and low-viscosity materials.",
        },
      ]}
      features={[
        "Designed for glovebox interior installation",
        "Compact footprint to maximize working space",
        "Inert atmosphere compatible materials",
        "Sealed electrical feedthroughs",
        "Temperature control up to 300°C",
        "Vacuum and pressure capability",
        "Compatible with Ar and N₂ atmospheres",
        "Custom configurations available",
      ]}
      applications={["Electrode drying", "Electrolyte filling", "Thin-film coating", "Sample annealing", "Material characterization"]}
      relatedLinks={[
        { label: "Glovebox Workstations", href: "/products/glovebox-workstations" },
        { label: "Battery Fabrication", href: "/battery-fabrication" },
        { label: "Accessories & Spare Parts", href: "/products/accessories" },
      ]}
    />
  );
}
