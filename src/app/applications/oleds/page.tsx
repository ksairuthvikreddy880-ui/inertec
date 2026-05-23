import PageLayout from "@/components/ui/PageLayout";

export const metadata = { title: "OLEDs / Organic Electronics" };

export default function OledsPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80"
      heroTitle="OLEDs / Organic Electronics"
      title="OLEDs / Organic Electronics"
      description="Organic light-emitting diode (OLED) fabrication and organic semiconductor research require extremely low moisture and oxygen environments. Even trace amounts of H₂O can quench luminescence and degrade device lifetime. Inertec gloveboxes provide the ultra-clean atmosphere needed for world-class OLED research."
      sections={[
        {
          title: "OLED Device Fabrication",
          content: "From organic layer deposition to cathode evaporation and device encapsulation, every step of OLED fabrication benefits from inert atmosphere control. Our gloveboxes integrate with thermal evaporation systems, spin coaters, and encapsulation equipment.",
        },
        {
          title: "Organic Semiconductor Research",
          content: "Organic transistors, photovoltaics, and novel organic electronic devices all require contamination-free processing. Our systems support the full device fabrication workflow from substrate preparation to final characterization.",
        },
      ]}
      features={[
        "H₂O and O₂ <1 ppm for OLED stability",
        "Thermal evaporator integration",
        "Spin coater and blade coater compatible",
        "UV-Vis and photoluminescence measurement inside",
        "Anti-vibration platform options",
        "Cleanroom-compatible design",
      ]}
      applications={["OLED device fabrication", "Organic photovoltaics", "Organic transistors", "Encapsulation", "Device lifetime testing"]}
      relatedLinks={[
        { label: "Glovebox Workstations", href: "/products/glovebox-workstations" },
        { label: "Perovskite", href: "/applications/perovskite" },
        { label: "Process Tools", href: "/products/process-tools" },
      ]}
    />
  );
}
