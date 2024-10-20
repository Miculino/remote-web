// Components
import Badges from "../components/Badges";
import Ratings from "../components/Ratings";
import SocialProofCarousel from "../components/SocialProofCarousel";

export default function SocialProof() {
  return (
    <section className="bg-dark-gray text-black py-10 pb-20 flex flex-col gap-10">
      <SocialProofCarousel />
      <Badges />
      <Ratings />
    </section>
  );
}
