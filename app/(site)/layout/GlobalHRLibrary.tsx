// Components
import BentoGrid from "../components/BentoGrid";
import Subheading from "../components/Subheading";

export default function GlobalHRLibrary() {
  return (
    <section className="px-5 md:px-10 lg:px-48 bg-gray-300 md:pt-20 lg:pt-40 flex flex-col gap-10 text-dark-blue">
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <Subheading>Browse our global HR library</Subheading>
        <p>
          Browser our virtual shelves and expand your global HR knowledge. Run
          the numbers with global employment calculators, dive into new
          research, and read the latest on the Remote blog.
        </p>
      </div>
      <BentoGrid />
    </section>
  );
}
