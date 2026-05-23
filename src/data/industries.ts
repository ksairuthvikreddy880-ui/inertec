export interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
  applications: string[];
}

export const industries: Industry[] = [
  {
    id: "aerospace",
    title: "Aerospace",
    description:
      "Inert atmosphere solutions for aerospace-grade material processing, propellant handling, and sensitive component assembly requiring contamination-free environments.",
    image: "/images/industries/aerospace.jpg",
    applications: ["Propellant handling", "Composite processing", "Sensor assembly", "Fuel cell research"],
  },
  {
    id: "pharmaceutical",
    title: "Pharmaceutical",
    description:
      "GMP-compatible inert enclosures for moisture-sensitive API handling, lyophilization support, and controlled atmosphere packaging of pharmaceutical compounds.",
    image: "/images/industries/pharmaceutical.jpg",
    applications: ["API handling", "Lyophilization", "Controlled packaging", "Stability testing"],
  },
  {
    id: "semiconductor",
    title: "Semiconductor",
    description:
      "Ultra-clean inert atmosphere systems for wafer handling, thin-film deposition support, and sensitive semiconductor material processing.",
    image: "/images/industries/semiconductor.jpg",
    applications: ["Wafer handling", "Thin-film deposition", "Material storage", "Device assembly"],
  },
  {
    id: "solar",
    title: "Solar Energy",
    description:
      "Inert processing environments for perovskite solar cell fabrication, organic photovoltaic research, and moisture-sensitive thin-film solar technologies.",
    image: "/images/industries/solar.jpg",
    applications: ["Perovskite cells", "OPV research", "Thin-film processing", "Module assembly"],
  },
  {
    id: "lithium-battery",
    title: "Lithium-Ion Battery",
    description:
      "End-to-end inert atmosphere solutions for lithium-ion battery research, pilot production, and quality testing — from electrode preparation to cell assembly.",
    image: "/images/industries/battery.jpg",
    applications: ["Cell assembly", "Electrode processing", "Electrolyte handling", "Formation cycling"],
  },
  {
    id: "oled",
    title: "OLED",
    description:
      "Precision inert enclosures for OLED device fabrication, organic semiconductor deposition, and encapsulation processes requiring sub-ppm moisture control.",
    image: "/images/industries/oled.jpg",
    applications: ["Device fabrication", "Organic deposition", "Encapsulation", "Lifetime testing"],
  },
  {
    id: "medical",
    title: "Medical Devices",
    description:
      "Controlled atmosphere enclosures for medical device assembly, implantable component handling, and biocompatible material processing under inert conditions.",
    image: "/images/industries/medical.jpg",
    applications: ["Implant assembly", "Biocompatible materials", "Sterile processing", "Device testing"],
  },
  {
    id: "research",
    title: "Research Labs",
    description:
      "Flexible, high-performance glovebox systems for academic and industrial research laboratories working with air-sensitive compounds and novel materials.",
    image: "/images/industries/research.jpg",
    applications: ["Air-sensitive synthesis", "Novel materials", "Electrochemistry", "Catalysis research"],
  },
  {
    id: "additive",
    title: "Additive Manufacturing",
    description:
      "Inert atmosphere enclosures for metal powder handling, SLS/SLM process support, and reactive metal 3D printing requiring oxygen-free environments.",
    image: "/images/industries/additive.jpg",
    applications: ["Metal powder handling", "SLS/SLM support", "Reactive metals", "Post-processing"],
  },
];
