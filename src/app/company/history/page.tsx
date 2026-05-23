import PageLayout from "@/components/ui/PageLayout";
export const metadata = { title: "Sites & History" };
export default function HistoryPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80"
      heroTitle="Sites & History"
      breadcrumb={[{ label: "Company", href: "/about" }, { label: "History", href: "/company/history" }]}
      title="Our Journey"
      description="Founded in 2009 in India, Inertec Systems LLP has grown from a small engineering workshop into a globally trusted manufacturer of inert atmosphere solutions, serving clients in 40+ countries."
      sections={[
        { title: "Our Story", content: "2009 — Founded in India. 2012 — First international installation in Germany. 2015 — ISO 9001:2015 certification. 2018 — Battery fabrication division launched. 2021 — 100th custom glovebox delivered. 2024 — Systems operating in 40+ countries." },
        { title: "Manufacturing Facility", content: "Our facility in India houses full sheet metal fabrication, welding, machining, and assembly under one roof. All systems are assembled, tested, and commissioned before delivery. Helium leak testing and atmosphere performance verification are standard." },
      ]}
      features={["Founded 2009 in India", "500+ systems installed worldwide", "40+ countries served", "ISO 9001:2015 certified", "In-house fabrication and testing", "Full system validation before delivery"]}
      applications={["Global installations", "Research institutions", "Industrial manufacturers", "Government laboratories"]}
      relatedLinks={[{ label: "About Inertec", href: "/about" }, { label: "Certifications", href: "/company/certifications" }, { label: "Contact Us", href: "/contact" }]}
    />
  );
}
