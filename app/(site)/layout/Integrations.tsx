import CTA from "../components/CTA";

export default function Integrations() {
  return (
    <section className="p-5 md:p-10 lg:px-52 bg-gray-100 text-black">
      <CTA
        subheading="Integrations make Remote even better"
        description={[
          "We play well with others. Connect Remote to some of the world’s top names in HR and see how good life can be when all your tools work together.",
        ]}
        btnLabel="Learn about our integrations"
      />
    </section>
  );
}
