// Components
import Button from "../components/Button";
import PlatformCoreFeature from "../components/PlatformCoreFeature";
import Subheading from "../components/Subheading";

// Constants
import { PLATFORM_CORE_FEATURES_LIST } from "@/app/constants/platformCoreFeaturesList";

type FeatureTypes =
  | "hr-management"
  | "contractor-management"
  | "remote-talent"
  | "remote-apis";

export default function ExplorePlatform() {
  return (
    <section className="bg-gray-200 pt-72 pb-28 lg:pt-96 text-black flex flex-col lg:flex-row px-5 lg:pb-40 gap-10 lg:px-56">
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-col gap-7">
          <Subheading>The global HR platform you deserve</Subheading>
          <p className="font-poppins text-base">
            Complete your to-do list without opening a second tab. The only
            all-in-one platform you need to manage your entire team from
            Marseille to Manilla.
          </p>
          <p className="font-poppins text-base">
            Enjoy the ultimate flexibility by managing all your global HR with
            Remote. EOR employees in Estonia? Payroll in Peru? Contractors in
            Costa Rica? It&apos;s all in one place, so you can spend less time
            tracking down documents and more time giving your global team the
            experience they deserve.
          </p>
        </div>
        <Button
          intent="primary"
          label="Explore the Platform"
          arrow
          arrowPathStrokes="var(--foreground)"
        />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        {PLATFORM_CORE_FEATURES_LIST.map((coreFeature, index) => (
          <PlatformCoreFeature
            key={index}
            title={coreFeature.title}
            description={coreFeature.description}
            illustration={coreFeature.illustration}
            url={coreFeature.url}
            feature={coreFeature.feature as FeatureTypes}
          />
        ))}
      </div>
    </section>
  );
}
