// Components
import Badges from "../components/Badges";
import Ratings from "../components/Ratings";
import SocialProofCard from "../components/SocialProofCard";

export default function SocialProof() {
  return (
    <section className="bg-dark-gray text-black py-10 pb-20 flex flex-col gap-10">
      <SocialProofCard />
      <Badges />
      <Ratings />
    </section>
  );
}
