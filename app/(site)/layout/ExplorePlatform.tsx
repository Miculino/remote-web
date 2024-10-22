// Components
import CTA from "../components/CTA";
import PlatformCoreFeature from "../components/PlatformCoreFeature";

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
      <CTA
        subheading="The global HR platform you deserve"
        description={[
          "Complete your to-do list without opening a second tab. The only all-in-one platform you need to manage your entire team from Marseille to Manilla. ",
          "Enjoy the ultimate flexibility by managing all your global HR with Remote. EOR employees in Estonia? Payroll in Peru? Contractors in Costa Rica? It’s all in one place, so you can spend less time tracking down documents and more time giving your global team the experience they deserve.",
        ]}
        btnLabel="Explore the Platform"
      />
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
