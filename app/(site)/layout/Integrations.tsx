// Components
import CTA from "../components/CTA";
import IntegrationsGrid from "../components/IntegrationsGrid";

export default function Integrations() {
  return (
    <section className="p-5 md:p-16 md:pt-60 lg:px-48 lg:py-40 lg:pt-60 bg-gray-100 text-black flex flex-col lg:flex-row gap-20">
      <CTA
        subheading="Integrations make Remote even better"
        description={[
          "We play well with others. Connect Remote to some of the world’s top names in HR and see how good life can be when all your tools work together.",
        ]}
        btnLabel="Learn about our integrations"
      />
      <IntegrationsGrid />
    </section>
  );
}
