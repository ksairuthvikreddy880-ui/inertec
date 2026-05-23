import PageLayout from "@/components/ui/PageLayout";
export const metadata = { title: "Career" };
export default function CareerPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80"
      heroTitle="Career at Inertec Systems"
      breadcrumb={[{ label: "Company", href: "/about" }, { label: "Career", href: "/company/career" }]}
      title="Join Our Engineering Team"
      description="At Inertec, you'll work on challenging engineering problems that directly impact cutting-edge research in batteries, semiconductors, pharmaceuticals, and aerospace. We're always looking for talented engineers who share our passion for precision."
      sections={[
        { title: "Why Work With Us", content: "Our team is small enough that every person makes a real difference, and large enough to offer diverse projects and career growth. You'll work alongside experienced engineers on systems that are used in world-class research institutions and industrial facilities globally." },
        { title: "Open Positions", content: "We are always looking for talented mechanical engineers, electrical engineers, PLC programmers, and application engineers. Even if no specific role is listed, we welcome speculative applications from motivated candidates." },
      ]}
      features={["Mechanical Design Engineer (SolidWorks)", "Electrical & Controls Engineer (PLC/HMI)", "Application Engineer — Glovebox Systems", "Sales Engineer — International Markets", "Manufacturing Technician", "Quality Assurance Engineer"]}
      applications={["Engineering", "Manufacturing", "Sales & Applications", "Quality & Compliance"]}
      relatedLinks={[{ label: "About Inertec", href: "/about" }, { label: "Contact Us", href: "/contact" }]}
    />
  );
}
