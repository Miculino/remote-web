// Components
import CTA from "../components/CTA";

export default function ComparePlatform() {
  return (
    <section className="bg-gray-200 text-dark-blue p-5 md:p-10 lg:px-56 lg:py-40 flex flex-col lg:flex-row gap-10 md:gap-32">
      <CTA
        subheading="The #1 global HR platform as voted by you"
        description={[
          "Executives, HR leaders, managers, and employees agree: Remote is the number one choice for global HR, no matter where on the globe you might be.",
        ]}
        btnLabel="Compare Remote"
      />
      <div className="flex-1">
        <object className="w-full" data="/illustration/Smooth_Onboarding.svg" />
      </div>
    </section>
  );
}
