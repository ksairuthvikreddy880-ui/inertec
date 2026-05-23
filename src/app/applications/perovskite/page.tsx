import PageLayout from "@/components/ui/PageLayout";

export const metadata = { title: "Perovskite" };

export default function PerovskitePage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&q=80"
      heroTitle="Perovskite"
      title="Perovskite Solar Cells"
      description="Perovskite solar cell fabrication demands ultra-low humidity and oxygen environments throughout the deposition, annealing, and encapsulation process. Inertec gloveboxes provide the stable inert atmosphere required for reproducible, high-efficiency perovskite device fabrication."
      sections={[
        {
          title: "Thin-Film Deposition",
          content: "Perovskite precursor solutions are highly sensitive to moisture. Our gloveboxes maintain H₂O levels below 1 ppm during spin coating, blade coating, and slot-die coating processes, ensuring consistent film morphology and device performance.",
        },
        {
          title: "Annealing & Encapsulation",
          content: "Post-deposition annealing and device encapsulation are performed inside the inert atmosphere to prevent degradation. Integrated hotplates and UV curing systems can be installed directly inside the glovebox.",
        },
      ]}
      features={[
        "H₂O <1 ppm for perovskite stability",
        "Spin coater and blade coater integration",
        "Integrated hotplate for annealing",
        "UV curing system compatibility",
        "Anti-vibration platform options",
        "Solvent purification integration",
      ]}
      applications={["Perovskite precursor preparation", "Spin coating", "Thermal annealing", "Device encapsulation", "Efficiency characterization"]}
      relatedLinks={[
        { label: "Glovebox Workstations", href: "/products/glovebox-workstations" },
        { label: "OLEDs / Organic Electronics", href: "/applications/oleds" },
        { label: "Process Tools", href: "/products/process-tools" },
      ]}
    />
  );
}
