// Layout
import Hero from "./layout/Hero";
import SocialProof from "./layout/SocialProof";
import ProductShowcase from "./layout/ProductShowcase";
import ProductHighlightDemo from "./layout/ProductHighlights";
import ExplorePlatform from "./layout/ExplorePlatform";

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
      <ExplorePlatform />
    </>
  );
}
