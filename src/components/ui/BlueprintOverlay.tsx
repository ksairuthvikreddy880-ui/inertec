import { cn } from "@/lib/utils";

interface BlueprintOverlayProps {
  className?: string;
  fine?: boolean;
}

export default function BlueprintOverlay({ className, fine = false }: BlueprintOverlayProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none",
        fine ? "blueprint-grid-fine" : "blueprint-grid",
        className
      )}
      aria-hidden="true"
    />
  );
}
