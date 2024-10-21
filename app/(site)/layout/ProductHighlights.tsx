// Components
import ProductHighlightItem from "../components/ProductHighlightItem";

// Constants
import { PRODUCT_HIGHLIGHT_ITEMS } from "@/app/constants/productShowcaseList";

export default function ProductHighlightDemo() {
  return (
    <section className="w-full bg-white relative z-1 pt-80 px-5 lg:px-56">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-8 gap-y-16 md:gap-y-8">
        {PRODUCT_HIGHLIGHT_ITEMS.map((item, index) => (
          <ProductHighlightItem
            key={index}
            title={item.title}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
}
