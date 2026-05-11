import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { CategoryStrip } from "@/components/CategoryStrip";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { DeliveryBanner } from "@/components/DeliveryBanner";
import { PartyPackages } from "@/components/PartyPackages";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <DeliveryBanner />
      <CategoryStrip />
      <FeaturedProducts />
      <PartyPackages />
    </>
  );
}
