"use client";

// React
import { useState } from "react";

// Next
import Link from "next/link";

// Components
import ListItem from "./ListItem";

// CLSX
import clsx from "clsx";

// Class Variance Authority
import { cva } from "class-variance-authority";

// Icons
import ArrowIcon from "@/app/svg/ArrowIcon";

interface ProductHighlightCardProps {
  url: string;
  title: string;
  description: string;
  illustration: string;
  benefits: string[];
  feature: "payroll" | "employer-of-record";
}

const productHighlightCardBg = cva("", {
  variants: {
    feature: {
      payroll: "bg-payroll hover:bg-payroll/10",
      "employer-of-record":
        "bg-employer-of-record hover:bg-employer-of-record/10",
    },
  },
});

export default function ProductHighlightCard({
  url,
  title,
  description,
  illustration,
  benefits,
  feature,
}: ProductHighlightCardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      className={clsx(
        "flex flex-col justify-between relative rounded-3xl overflow-hidden p-8 pb-0 h-full text-white",
        productHighlightCardBg({ feature })
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={url}
    >
      <div
        className={clsx(
          "bg-payroll-radial transition-all duration-300 absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 z-0",
          isHovered ? "-translate-y-[30%] opacity-100" : "opacity-0"
        )}
      ></div>
      <div className="flex items-center justify-between mb-2 relative z-1">
        <h3 className="font-crimson text-[min(30px,_20px_+_0.5vw)] font-medium">
          {title}
        </h3>
        <ArrowIcon
          className={clsx(
            "transition-all duration-500",
            isHovered ? "rotate-0" : "-rotate-45"
          )}
          pathStrokes="var(--foreground)"
        />
      </div>
      <p className="text-base relative z-1">{description}</p>
      <ul className="flex flex-wrap gap-4 mt-4 text-base">
        {benefits.map((benefit, index) => (
          <ListItem key={index} label={benefit} />
        ))}
      </ul>
      <div
        className={clsx(
          "max-h-52 mt-auto relative z-1 transition-all duration-500",
          isHovered ? "translate-y-[10%]" : "translate-y-[15%]"
        )}
      >
        <object
          className={clsx("mx-auto  w-full h-auto")}
          data={illustration}
        />
      </div>
    </Link>
  );
}
