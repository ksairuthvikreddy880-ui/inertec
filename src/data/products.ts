export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  specs: ProductSpec[];
  badge?: string;
}

export const products: Product[] = [
  {
    id: "glovebox-standard",
    category: "Glovebox Systems",
    title: "Standard Inert Atmosphere Glovebox",
    description:
      "Single or dual-station gloveboxes engineered for oxygen and moisture-sensitive processes. Maintains <1 ppm O₂ and H₂O levels with integrated purification systems.",
    image: "/products/glovebox-3.webp",
    badge: "Best Seller",
    specs: [
      { label: "O₂ Level", value: "< 1 ppm" },
      { label: "H₂O Level", value: "< 1 ppm" },
      { label: "Working Volume", value: "Custom" },
      { label: "Glove Ports", value: "2–4" },
      { label: "Material", value: "SS 304 / Acrylic" },
      { label: "Purge Gas", value: "Argon / Nitrogen" },
    ],
  },
  {
    id: "glovebox-dual",
    category: "Glovebox Systems",
    title: "Dual-Chamber Glovebox System",
    description:
      "Interconnected dual-chamber configuration for complex multi-step processes. Ideal for battery research and semiconductor applications requiring isolated environments.",
    image: "/products/glovebox-4.webp",
    specs: [
      { label: "O₂ Level", value: "< 0.5 ppm" },
      { label: "H₂O Level", value: "< 0.5 ppm" },
      { label: "Chambers", value: "2 (interconnected)" },
      { label: "Antechamber", value: "Included" },
      { label: "Circulation", value: "Closed-loop" },
      { label: "Control", value: "PLC + HMI" },
    ],
  },
  {
    id: "purge-box-standard",
    category: "Inert Purge Boxes",
    title: "Inert Purge Box — Standard Series",
    description:
      "Compact purge boxes for short-duration inert atmosphere work. Rapid purge cycles with continuous gas flow. Ideal for sample transfer and quick assembly tasks.",
    image: "/products/purge-box.png",
    specs: [
      { label: "Purge Time", value: "< 5 min" },
      { label: "Volume", value: "20–200 L" },
      { label: "Gas Inlet", value: "1/4\" NPT" },
      { label: "Viewing Window", value: "Tempered glass" },
      { label: "Glove Ports", value: "2" },
      { label: "Material", value: "Powder-coated steel" },
    ],
  },
  {
    id: "purge-box-large",
    category: "Inert Purge Boxes",
    title: "Large-Format Purge Box",
    description:
      "High-volume purge enclosures for large component handling. Engineered for industrial-scale inert atmosphere requirements with multiple access ports.",
    image: "/products/glovebox-1.webp",
    specs: [
      { label: "Volume", value: "200–2000 L" },
      { label: "Access Ports", value: "4–8" },
      { label: "Gas Flow", value: "Continuous / Batch" },
      { label: "Monitoring", value: "O₂ sensor included" },
      { label: "Frame", value: "Stainless steel" },
      { label: "Customizable", value: "Yes" },
    ],
  },
  {
    id: "custom-enclosure",
    category: "Customized Inert Enclosures",
    title: "Custom Inert Enclosure Systems",
    description:
      "Fully bespoke inert enclosures designed to your exact process requirements. From benchtop to room-scale, engineered with precision for unique industrial applications.",
    image: "/products/custom-enclosure.png",
    badge: "Custom",
    specs: [
      { label: "Size", value: "Fully custom" },
      { label: "Material", value: "SS / Aluminum / Acrylic" },
      { label: "Integration", value: "Process equipment" },
      { label: "Atmosphere", value: "Ar / N₂ / Mixed" },
      { label: "Monitoring", value: "Multi-point sensors" },
      { label: "Lead Time", value: "8–16 weeks" },
    ],
  },
  {
    id: "storage-cabinet",
    category: "Inert Storage Cabinets",
    title: "Inert Atmosphere Storage Cabinet",
    description:
      "Sealed storage cabinets for long-term preservation of moisture and oxygen-sensitive materials. Continuous purge maintains stable inert atmosphere without active monitoring.",
    image: "/products/purelab.jpg",
    specs: [
      { label: "Capacity", value: "50–500 L" },
      { label: "Atmosphere", value: "N₂ / Ar" },
      { label: "Shelves", value: "Adjustable SS" },
      { label: "Door Seal", value: "EPDM gasket" },
      { label: "Gas Consumption", value: "Low-flow optimized" },
      { label: "Indicator", value: "O₂ / RH display" },
    ],
  },
];

export const productCategories = [
  {
    id: "glovebox-systems",
    title: "Glovebox Systems",
    description: "Precision inert atmosphere gloveboxes for research and industrial applications.",
    icon: "🔬",
    count: 2,
    href: "/products#glovebox-systems",
  },
  {
    id: "purge-boxes",
    title: "Inert Purge Boxes",
    description: "Rapid-cycle purge enclosures for short-duration inert atmosphere work.",
    icon: "📦",
    count: 2,
    href: "/products#purge-boxes",
  },
  {
    id: "custom-enclosures",
    title: "Custom Enclosures",
    description: "Bespoke inert enclosure systems engineered to your exact specifications.",
    icon: "⚙️",
    count: 1,
    href: "/products#custom-enclosures",
  },
  {
    id: "battery-fabrication",
    title: "Battery Fabrication",
    description: "Specialized equipment for coin cell, pouch cell, and cylindrical cell production.",
    icon: "🔋",
    count: 3,
    href: "/battery-fabrication",
  },
  {
    id: "storage-cabinets",
    title: "Inert Storage Cabinets",
    description: "Long-term inert atmosphere storage for sensitive materials and components.",
    icon: "🗄️",
    count: 1,
    href: "/products#storage-cabinets",
  },
];
