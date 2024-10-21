// React
import { SVGProps } from "react";

// Class Variance Authority
import { cva, VariantProps } from "class-variance-authority";

// CLSX
import clsx from "clsx";

// Icons
import ArrowIcon from "@/app/svg/ArrowIcon";

const button = cva("p-3 flex transition-all duration-200", {
  variants: {
    intent: {
      primary: ["bg-primary text-white hover:bg-primary-hover"],
      secondary: ["bg-secondary text-primary"],
    },
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children?: React.ReactNode;
  label: string;
  arrow?: boolean;
  rounded?: string;
  icon?: React.FC<SVGProps<SVGSVGElement>>;
}

export default function Button({
  intent = "primary",
  label,
  arrow = false,
  rounded = "rounded-full",
  icon: Icon,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className="flex items-center">
      <span
        className={clsx(button({ intent }), rounded, "flex items-center gap-2")}
      >
        {Icon && <Icon />}
        {label}
      </span>
      {arrow && (
        <ArrowIcon
          className="bg-white rounded-full h-10 px-2 grid place-content-center"
          pathStrokes="var(--primary)"
        />
      )}
    </button>
  );
}
