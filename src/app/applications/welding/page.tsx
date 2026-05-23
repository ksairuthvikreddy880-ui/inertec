import PageLayout from "@/components/ui/PageLayout";

export const metadata = { title: "Welding" };

export default function WeldingPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80"
      heroTitle="Welding"
      title="Welding"
      description="Welding of reactive and refractory metals including titanium, zirconium, niobium, and tantalum requires inert atmosphere protection to prevent oxidation and contamination. Inertec welding gloveboxes provide the controlled environment needed for high-quality welds on sensitive materials."
      sections={[
        {
          title: "TIG Welding Under Inert Atmosphere",
          content: "Our welding gloveboxes are designed to accommodate TIG welding torches, fixtures, and workpieces of various sizes. The inert atmosphere eliminates the need for trailing shields and back-purging, resulting in cleaner welds and reduced post-weld cleaning.",
        },
        {
          title: "Electron Beam & Laser Welding",
          content: "Custom enclosures for electron beam and laser welding systems provide the inert atmosphere required for reactive metal joining. Optical viewports and beam entry feedthroughs are designed for specific wavelengths and power levels.",
        },
      ]}
      features={[
        "O₂ <10 ppm for titanium welding",
        "TIG torch and fixture integration",
        "Large working volume for complex assemblies",
        "Viewing windows for weld monitoring",
        "Rotary feedthroughs for positioners",
        "Fume extraction integration",
      ]}
      applications={["Titanium TIG welding", "Zirconium component joining", "Aerospace component fabrication", "Medical implant welding", "Nuclear component assembly"]}
      relatedLinks={[
        { label: "Customized Enclosures", href: "/products/customized-enclosures" },
        { label: "Glovebox Workstations", href: "/products/glovebox-workstations" },
        { label: "Engineering & Robotics", href: "/products/engineering-robotics" },
      ]}
    />
  );
}
