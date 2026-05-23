export interface BatteryEquipment {
  name: string;
  description: string;
}

export interface BatteryCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  equipment: BatteryEquipment[];
  specs: { label: string; value: string }[];
}

export const batteryCategories: BatteryCategory[] = [
  {
    id: "coin-cell",
    title: "Coin Cell Fabrication",
    subtitle: "CR2016 / CR2032 / CR2025",
    description:
      "Complete coin cell assembly lines designed for research and pilot-scale production. All equipment engineered for operation inside inert atmosphere gloveboxes, ensuring contamination-free cell assembly.",
    image: "/images/battery/coin-cell.jpg",
    equipment: [
      { name: "Electrode Disc Cutter", description: "Precision pneumatic punch for anode/cathode discs" },
      { name: "Electrolyte Dispenser", description: "Micro-volume dispensing with ±0.5 µL accuracy" },
      { name: "Coin Cell Crimper", description: "Hydraulic crimper with adjustable pressure control" },
      { name: "Separator Cutter", description: "Clean-cut separator disc punching tool" },
      { name: "Cell Stacking Jig", description: "Alignment fixtures for consistent layer stacking" },
      { name: "Vacuum Sealer", description: "Optional vacuum-assisted sealing for improved performance" },
    ],
    specs: [
      { label: "Cell Formats", value: "CR2016, CR2025, CR2032" },
      { label: "Throughput", value: "Up to 200 cells/hr" },
      { label: "Environment", value: "Glovebox compatible" },
      { label: "Crimping Force", value: "500–1500 N (adjustable)" },
    ],
  },
  {
    id: "pouch-cell",
    title: "Pouch Cell Fabrication",
    subtitle: "Flexible Format Battery Assembly",
    description:
      "Modular pouch cell fabrication systems for flexible-format lithium-ion batteries. Supports stacked and wound electrode configurations with integrated electrolyte filling and vacuum sealing.",
    image: "/images/battery/pouch-cell.jpg",
    equipment: [
      { name: "Electrode Slitter", description: "Precision slitting for anode and cathode strips" },
      { name: "Stacking Machine", description: "Z-fold or flat-stack electrode assembly" },
      { name: "Tab Welder", description: "Ultrasonic welding for aluminum and nickel tabs" },
      { name: "Electrolyte Filler", description: "Vacuum-assisted electrolyte injection system" },
      { name: "Vacuum Sealer", description: "Heat-seal pouch with vacuum degassing" },
      { name: "Formation Fixture", description: "Constrained formation jigs for uniform SEI" },
    ],
    specs: [
      { label: "Cell Size", value: "Custom (up to 300×200 mm)" },
      { label: "Stacking Method", value: "Z-fold / Flat stack" },
      { label: "Sealing", value: "Vacuum heat seal" },
      { label: "Tab Materials", value: "Al / Ni / Cu" },
    ],
  },
  {
    id: "cylindrical-cell",
    title: "Cylindrical Cell Fabrication",
    subtitle: "18650 / 21700 / 26650 Formats",
    description:
      "Industrial-grade cylindrical cell winding and assembly equipment. Engineered for consistent jellyroll formation, electrolyte filling, and crimping across standard cylindrical formats.",
    image: "/images/battery/cylindrical-cell.jpg",
    equipment: [
      { name: "Electrode Winder", description: "Precision tension-controlled jellyroll winder" },
      { name: "Mandrel Set", description: "Format-specific mandrels for 18650/21700/26650" },
      { name: "Electrolyte Filler", description: "Vacuum electrolyte injection with metered dosing" },
      { name: "Can Crimper", description: "Hydraulic crimping for steel and aluminum cans" },
      { name: "Insulation Inserter", description: "Automated PTC and insulation disc placement" },
      { name: "Leak Tester", description: "Helium or pressure-decay leak detection" },
    ],
    specs: [
      { label: "Formats", value: "18650, 21700, 26650" },
      { label: "Winding Speed", value: "Up to 60 cells/hr" },
      { label: "Winding Tension", value: "Servo-controlled" },
      { label: "Can Material", value: "Steel / Aluminum" },
    ],
  },
];
