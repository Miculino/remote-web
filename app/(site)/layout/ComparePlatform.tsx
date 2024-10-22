// Components
import Button from "../components/Button";
import Subheading from "../components/Subheading";

export default function ComparePlatform() {
  return (
    <section className="bg-gray-200 text-dark-blue px-5 md:px-10 lg:px-56 flex flex-col lg:flex-row gap-10 md:gap-32">
      <div className="flex-1 flex flex-col gap-7">
        <Subheading>The #1 global HR platform as voted by you</Subheading>
        <p>
          Executives, HR leaders, managers, and employees agree: Remote is the
          number one choice for global HR, no matter where on the globe you
          might be.
        </p>
        <Button
          label="Compare Remote"
          arrow
          arrowPathStrokes="var(--foreground)"
        />
      </div>
      <div className="flex-1">
        <object className="w-full" data="/illustration/Smooth_Onboarding.svg" />
      </div>
    </section>
  );
}
