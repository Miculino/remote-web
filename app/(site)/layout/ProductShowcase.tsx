// Next
import Image from "next/image";

// Components
import ProductHighlightCard from "../components/ProductShowcaseCard";

// Constants
import { PRODUCT_HIGHLIGHTS_LIST } from "@/app/constants/productShowcaseList";
import Subheading from "../components/Subheading";

type FeatureTypes = "payroll" | "employer-of-record";

export default function ProductShowcase() {
  return (
    <section className="bg-gray-100 text-black pt-40 px-5 lg:px-56 relative">
      <div className="absolute top-0 right-0 z-0">
        <Image
          src={"/illustration/Floral_Watermark.svg"}
          width={971}
          height={1365}
          alt=""
        />
      </div>
      <div className="relative z-10 flex flex-col gap-12">
        <div className="text-dark-navy flex flex-col gap-6">
          <Subheading>Payroll Anywhere</Subheading>
          <p className="font-poppins text-[min(20px,_16px_+_0.16vw)] md:max-w-[50%] font-normal">
            Run payroll seamlessly across borders with timely and compliant
            payments to your entire team, no matter where they&apos;re located.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 -mb-52">
          {PRODUCT_HIGHLIGHTS_LIST.map((highlight, index) => (
            <ProductHighlightCard
              key={index}
              title={highlight.title}
              description={highlight.description}
              url={highlight.url}
              illustration={highlight.illustration}
              benefits={highlight.benefits}
              feature={highlight.feature as FeatureTypes}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
