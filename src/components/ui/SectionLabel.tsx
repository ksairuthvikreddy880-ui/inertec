import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3 mb-4", className)}>
      <span className="block w-8 h-px bg-[var(--color-accent)]" />
      <span className="label-mono">{children}</span>
    </div>
  );
}
