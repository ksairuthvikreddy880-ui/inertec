import PageLayout from "@/components/ui/PageLayout";
export const metadata = { title: "Engineering & Robotics" };
export default function EngineeringRoboticsPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1400&q=80"
      heroTitle="Engineering & Robotics"
      breadcrumb={[{ label: "Products", href: "/products" }, { label: "Engineering & Robotics", href: "/products/engineering-robotics" }]}
      title="Engineering & Robotics Integration"
      description="Inertec Systems integrates robotic automation and custom engineering solutions into inert atmosphere environments. From simple motorized stages to full robotic arms operating inside gloveboxes, we enable hands-free processing for high-throughput and hazardous applications."
      sections={[
        { title: "Robotic Integration", content: "We integrate collaborative and industrial robots into custom glovebox enclosures for automated sample handling, electrode coating, cell assembly, and material transfer. All robotic systems are adapted for inert atmosphere operation with sealed cable feedthroughs and inert-compatible materials." },
        { title: "Custom Engineering Solutions", content: "Our in-house engineering team designs bespoke automation solutions including motorized stages, conveyor systems, automated antechambers, and process-specific tooling. SolidWorks-based design with FEA analysis ensures structural integrity and process reliability." },
      ]}
      features={["Robotic arms adapted for inert atmosphere", "Sealed cable and pneumatic feedthroughs", "Motorized XYZ stages and conveyors", "Automated antechamber loading systems", "PLC integration with existing process control", "Custom tooling and end-effectors", "Remote monitoring and control capability", "Full CE marking and safety compliance"]}
      applications={["Battery electrode coating", "Automated cell assembly", "Hazardous material handling", "High-throughput screening", "Semiconductor processing"]}
      relatedLinks={[{ label: "Glovebox Workstations", href: "/products/glovebox-workstations" }, { label: "Customized Enclosures", href: "/products/customized-enclosures" }, { label: "Process Tools", href: "/products/process-tools" }]}
    />
  );
}
