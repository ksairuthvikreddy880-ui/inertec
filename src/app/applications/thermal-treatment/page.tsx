import PageLayout from "@/components/ui/PageLayout";

export const metadata = { title: "Thermal Treatment" };

export default function ThermalTreatmentPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=80"
      heroTitle="Thermal Treatment"
      title="Thermal Treatment"
      description="Heat treatment of reactive metals, advanced ceramics, and sensitive electronic materials requires inert atmosphere protection to prevent oxidation, decarburization, and contamination. Inertec provides integrated thermal treatment solutions within controlled atmosphere enclosures."
      sections={[
        {
          title: "Inert Atmosphere Annealing",
          content: "Annealing of titanium, aluminum alloys, and other reactive metals under inert atmosphere prevents surface oxidation and maintains material properties. Our integrated furnace gloveboxes allow loading, heat treatment, and unloading without atmospheric exposure.",
        },
        {
          title: "Sintering & Calcination",
          content: "Sintering of advanced ceramics, battery cathode materials, and metal powders under controlled atmosphere ensures consistent material properties. Custom tube furnace integrations and batch furnace enclosures are available.",
        },
      ]}
      features={[
        "Temperature range up to 1200°C",
        "Inert atmosphere maintained during heating and cooling",
        "Integrated loading and unloading under inert gas",
        "Programmable temperature profiles",
        "Multiple atmosphere options: Ar, N₂, H₂/N₂",
        "Custom furnace integration available",
      ]}
      applications={["Titanium annealing", "Battery cathode sintering", "Ceramic processing", "Metal powder sintering", "Semiconductor annealing"]}
      relatedLinks={[
        { label: "Customized Enclosures", href: "/products/customized-enclosures" },
        { label: "Process Tools", href: "/products/process-tools" },
        { label: "Batteries", href: "/applications/batteries" },
      ]}
    />
  );
}
