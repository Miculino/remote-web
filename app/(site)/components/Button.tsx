"use client";

// React
import { SVGProps, useState } from "react";

// Class Variance Authority
import { cva, VariantProps } from "class-variance-authority";

// CLSX
import clsx from "clsx";

// Icons
import ArrowIcon from "@/app/svg/ArrowIcon";

const button = cva("p-3 flex transition-all duration-200", {
  variants: {
    intent: {
      primary: ["bg-primary text-white"],
      "primary-hover": ["bg-primary-hover"],
      secondary: ["bg-secondary text-primary"],
      "secondary-hover": ["bg-secondary-hover"],
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
  arrowPathStrokes?: string;
}

export default function Button({
  intent = "primary",
  label,
  arrow = false,
  rounded = "rounded-full",
  arrowPathStrokes = "var(--primary)",
  icon: Icon,
  ...props
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const hoverIntent = `${intent}-hover` as "primary-hover" | "secondary-hover";

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex items-center"
      {...props}
    >
      <span
        className={clsx(
          button({ intent }),
          rounded,
          isHovered && button({ intent: hoverIntent }),
          "flex items-center gap-2"
        )}
      >
        {Icon && <Icon />}
        {label}
      </span>
      {arrow && (
        <ArrowIcon
          className={clsx(
            "rounded-full h-10 px-2 grid place-content-center transition-all duration-200",
            isHovered ? button({ intent: hoverIntent }) : button({ intent })
          )}
          pathStrokes={arrowPathStrokes}
        />
      )}
    </button>
  );
}
