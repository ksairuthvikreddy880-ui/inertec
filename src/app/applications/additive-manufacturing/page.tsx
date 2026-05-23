import PageLayout from "@/components/ui/PageLayout";
export const metadata = { title: "Additive Manufacturing" };
export default function AdditiveManufacturingPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1400&q=80"
      heroTitle="Additive Manufacturing"
      breadcrumb={[{ label: "Applications", href: "/industries" }, { label: "Additive Manufacturing", href: "/applications/additive-manufacturing" }]}
      title="Additive Manufacturing"
      description="Metal additive manufacturing with reactive materials such as titanium, aluminum, and magnesium requires inert atmosphere control to prevent oxidation and ensure part quality. Inertec provides custom enclosures and powder handling systems for SLS, SLM, and DED processes."
      sections={[
        { title: "Reactive Metal Powder Handling", content: "Titanium, aluminum, and other reactive metal powders must be handled under inert atmosphere to prevent oxidation and moisture absorption. Our powder handling gloveboxes include sieving, weighing, and storage capabilities under continuous inert gas purge." },
        { title: "Build Chamber Integration", content: "Custom inert atmosphere enclosures can be integrated with existing SLS/SLM build chambers or designed as standalone powder preparation and post-processing stations. Oxygen levels are maintained below 100 ppm for reactive metal processing." },
      ]}
      features={["O₂ <100 ppm for reactive metal processing", "Powder sieving and weighing integration", "Anti-static design for powder safety", "Large-format enclosures available", "Continuous inert gas purge", "Explosion-proof options for reactive metals"]}
      applications={["Titanium powder handling", "SLS/SLM build preparation", "Post-processing under inert atmosphere", "Powder storage and recycling", "Quality control sampling"]}
      relatedLinks={[{ label: "Customized Enclosures", href: "/products/customized-enclosures" }, { label: "Engineering & Robotics", href: "/products/engineering-robotics" }, { label: "Contact for Custom Solutions", href: "/contact" }]}
    />
  );
}
