// Layout
import Hero from "./layout/Hero";
import SocialProof from "./layout/SocialProof";

// Components
import GlobalCompanies from "./components/GlobalCompanies";
import ProductHighlightsDemo from "./layout/ProductHighlightsDemo";

export default function Home() {
  return (
    <>
      <Hero />
      <GlobalCompanies />
      <SocialProof />
      <ProductHighlightsDemo />
      <div className="h-screen w-full bg-white relative z-1"></div>
    </>
  );
}
