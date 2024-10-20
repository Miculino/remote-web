// Class Variance Authority
import { cva, VariantProps } from "class-variance-authority";

// CLSX
import clsx from "clsx";

// Icons
import ArrowIcon from "@/app/svg/ArrowIcon";

const button = cva("rounded-full p-3 flex", {
  variants: {
    intent: {
      primary: ["bg-primary text-white"],
      secondary: ["bg-secondary text-primary"],
    },
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children?: React.ReactNode;
  label: string;
}

export default function Button({
  intent = "primary",
  label,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className="flex items-center">
      <span className={clsx(button({ intent }))}>{label}</span>
      <ArrowIcon
        className="bg-white rounded-full h-10 px-2 grid place-content-center"
        pathStrokes="var(--primary)"
      />
    </button>
  );
}
