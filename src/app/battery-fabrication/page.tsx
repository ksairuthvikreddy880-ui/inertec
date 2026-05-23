import type { Metadata } from "next";
import BatteryPageClient from "./BatteryPageClient";

export const metadata: Metadata = {
  title: "Battery Fabrication Equipment",
  description:
    "Coin cell, pouch cell, and cylindrical cell fabrication equipment designed for inert atmosphere glovebox operation. Complete battery assembly solutions from Inertec Systems.",
};

export default function BatteryFabricationPage() {
  return <BatteryPageClient />;
}
