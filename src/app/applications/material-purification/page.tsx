import PageLayout from "@/components/ui/PageLayout";
export const metadata = { title: "Material Purification" };
export default function MaterialPurificationPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1400&q=80"
      heroTitle="Material Purification"
      breadcrumb={[{ label: "Applications", href: "/industries" }, { label: "Material Purification", href: "/applications/material-purification" }]}
      title="Material Purification"
      description="Purification of air-sensitive and moisture-reactive materials requires inert atmosphere processing at every stage. Inertec provides glovebox systems and custom enclosures for distillation, recrystallization, filtration, and drying of sensitive chemical and pharmaceutical materials."
      sections={[
        { title: "Pharmaceutical API Purification", content: "Active pharmaceutical ingredients that are moisture-sensitive or oxygen-reactive require inert atmosphere processing during purification steps. Our GMP-compatible gloveboxes support recrystallization, filtration, and drying under controlled conditions." },
        { title: "Chemical & Materials Purification", content: "Distillation, sublimation, and zone refining of reactive materials can be performed inside Inertec gloveboxes with integrated heating and vacuum systems. Custom configurations support specific process requirements." },
      ]}
      features={["GMP-compatible construction available", "Integrated vacuum and heating systems", "Distillation and sublimation capability", "Filtration under inert atmosphere", "Full process documentation support", "Cleanable and sterilizable surfaces"]}
      applications={["API purification", "Solvent distillation", "Recrystallization", "Sublimation", "Zone refining"]}
      relatedLinks={[{ label: "Solvent Purification", href: "/products/solvent-purification" }, { label: "Glovebox Workstations", href: "/products/glovebox-workstations" }, { label: "Personal Protection", href: "/applications/personal-protection" }]}
    />
  );
}
