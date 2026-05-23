import PageLayout from "@/components/ui/PageLayout";

export const metadata = { title: "Career" };

export default function CareerPage() {
  return (
    <PageLayout
      heroImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80"
      heroTitle="Career"
      title="Career at Inertec Systems"
      description="Join a team of passionate engineers and technicians building precision inert atmosphere solutions for the world's most demanding industries. Inertec Systems LLP offers exciting opportunities in mechanical engineering, electrical engineering, software development, and sales."
      sections={[
        {
          title: "Why Work With Us",
          content: "At Inertec, you'll work on challenging engineering problems that directly impact cutting-edge research in batteries, semiconductors, pharmaceuticals, and aerospace. Our team is small enough that every person makes a real difference, and large enough to offer diverse projects and career growth.",
        },
        {
          title: "Open Positions",
          content: "We are always looking for talented mechanical engineers, electrical engineers, PLC programmers, and application engineers. Even if no specific role is listed, we welcome speculative applications from motivated candidates who share our passion for precision engineering.",
        },
      ]}
      features={[
        "Mechanical Design Engineer (SolidWorks)",
        "Electrical & Controls Engineer (PLC/HMI)",
        "Application Engineer — Glovebox Systems",
        "Sales Engineer — International Markets",
        "Manufacturing Technician",
        "Quality Assurance Engineer",
      ]}
      applications={["Engineering", "Manufacturing", "Sales & Applications", "Quality & Compliance"]}
      relatedLinks={[
        { label: "About Inertec", href: "/about" },
        { label: "Contact Us", href: "/contact" },
      ]}
    />
  );
}
