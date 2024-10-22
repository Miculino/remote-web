// Layout
import Hero from "./layout/Hero";
import SocialProof from "./layout/SocialProof";
import ProductShowcase from "./layout/ProductShowcase";
import ProductHighlightDemo from "./layout/ProductHighlights";
import ExplorePlatform from "./layout/ExplorePlatform";
import GlobalHRLibrary from "./layout/GlobalHRLibrary";
import ComparePlatform from "./layout/ComparePlatform";
import Integrations from "./layout/Integrations";
import Footer from "./layout/Footer";

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
      <GlobalHRLibrary />
      <Integrations />
      <ComparePlatform />
      <Footer />
    </>
  );
}
