// Layout
import Hero from "./layout/Hero";
import SocialProof from "./layout/SocialProof";
import ProductShowcase from "./layout/ProductShowcase";
import ProductHighlightDemo from "./layout/ProductHighlights";

// Components
import GlobalCompanies from "./components/GlobalCompanies";

export default function Home() {
  return (
    <>
      <Hero />
      <GlobalCompanies />
      <SocialProof />
      <ProductShowcase />
      <ProductHighlightDemo />
      <div className="h-screen w-full bg-gray-200"></div>
    </>
  );
}
