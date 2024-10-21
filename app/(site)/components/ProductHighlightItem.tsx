import MagnifierPlusIcon from "@/app/icons/MagnifierPlusIcon";
import { SVGProps } from "react";

interface ProductHighlightItemProps {
  title: string;
  description: string;
  icon: React.FC<SVGProps<SVGSVGElement>>;
}

export default function ProductHighlightItem({
  title,
  description,
  icon: Icon,
}: ProductHighlightItemProps) {
  return (
    <li className="flex flex-col gap-6 text-black">
      <Icon width={48} height={48} />
      <div className="flex flex-col gap-2">
        <h4 className="text-2xl font-semibold">{title}</h4>
        <p>{description}</p>
      </div>
    </li>
  );
}
