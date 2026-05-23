import PageLayout from "@/components/ui/PageLayout";

export const metadata = { title: "Sites & History" };

export default function HistoryPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80"
      heroTitle="Sites & History"
      title="Sites & History"
      description="Inertec Systems LLP was founded in 2009 with a singular focus: to engineer inert atmosphere solutions that meet the most demanding requirements of modern industry and research. From a small workshop in India, we have grown into a globally trusted manufacturer serving clients in 40+ countries."
      sections={[
        {
          title: "Our Journey",
          content: "2009 — Founded in India with a focus on custom glovebox systems for research laboratories. 2012 — First international installation in Germany, marking the start of global expansion. 2015 — Achieved ISO 9001:2015 certification. 2018 — Launched dedicated battery fabrication equipment division. 2021 — Delivered our 100th custom glovebox system. 2024 — Systems operating in 40+ countries.",
        },
        {
          title: "Manufacturing Facility",
          content: "Our manufacturing facility in India houses full sheet metal fabrication, welding, machining, and assembly capabilities under one roof. All systems are assembled, tested, and commissioned at our facility before delivery. Helium leak testing, electrical testing, and atmosphere performance verification are standard for every system.",
        },
      ]}
      features={[
        "Founded 2009 in India",
        "500+ systems installed worldwide",
        "40+ countries served",
        "ISO 9001:2015 certified manufacturing",
        "In-house fabrication, welding, and machining",
        "Full system testing before delivery",
      ]}
      applications={["Global installations", "Research institutions", "Industrial manufacturers", "Government laboratories"]}
      relatedLinks={[
        { label: "About Inertec", href: "/about" },
        { label: "Certifications", href: "/company/certifications" },
        { label: "Contact Us", href: "/contact" },
      ]}
    />
  );
}
