import type { Metadata } from "next";
import ProductsPageClient from "./ProductsPageClient";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Inertec Systems' full range of inert atmosphere products: glovebox systems, purge boxes, custom enclosures, battery fabrication equipment, and storage cabinets.",
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
