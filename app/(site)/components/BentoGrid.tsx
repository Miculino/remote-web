import { HR_LIBRARY_LIST } from "@/app/constants/hrLibraryList";
import ProductHighlightCard from "./ProductShowcaseCard";

type FeatureTypes =
  | "payroll"
  | "employer-of-record"
  | "research"
  | "blog"
  | "employee-cost-calculator"
  | "country-explorer"
  | "misclassification-risk-tool";

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-16">
      {HR_LIBRARY_LIST.map((hrItem, index) => (
        <ProductHighlightCard
          key={index}
          title={hrItem.title}
          description={hrItem.description}
          url={hrItem.url}
          illustration={hrItem.illustration}
          feature={hrItem.feature as FeatureTypes}
          benefits={hrItem.benefits}
        />
      ))}
    </div>
  );
}
