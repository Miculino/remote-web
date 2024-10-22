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
  illustration: string | null;
  benefits: string[] | null;
  feature:
    | "payroll"
    | "employer-of-record"
    | "research"
    | "blog"
    | "employee-cost-calculator"
    | "country-explorer"
    | "misclassification-risk-tool";
}

const productHighlightCardBg = cva("", {
  variants: {
    feature: {
      payroll: "bg-payroll",
      "employer-of-record": "bg-employer-of-record",
      research:
        "bg-research lg:col-start-1 lg:col-end-6 lg:row-span-11 lg:col-span-11",
      blog: "bg-blog lg:row-span-6 lg:col-start-1 lg:col-span-5",
      "employee-cost-calculator":
        "bg-employee-cost-calculator lg:row-start-1 lg:row-span-1 lg:col-start-6 lg:col-span-11",
      "country-explorer":
        "bg-country-explorer lg:row-start-2 lg:row-span-12 lg:col-start-6 lg:col-span-4",
      "misclassification-risk-tool":
        "bg-misclassification-risk-tool lg:row-start-2 lg:row-span-12 lg:col-start-10 lg:col-span-7",
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
          "bg-payroll-radial transition-all duration-300 absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-[30%] z-0",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      ></div>
      <div>
        <div className="flex items-center justify-between mb-2 relative z-1">
          <h3 className="font-crimson text-[min(30px,_20px_+_0.5vw)] font-medium">
            {title}
          </h3>
          <ArrowIcon
            className={clsx(
              "transition-all duration-400 bg-white/30 p-2  rounded-full",
              isHovered ? "px-2" : "px-1"
            )}
            style={{
              transform: `rotate(${isHovered ? "0" : "-45deg"})`,
              transition: "all .4s ease-in-out",
            }}
            pathStrokes="var(--foreground)"
          />
        </div>
        <p className="text-base relative z-1">{description}</p>
      </div>

      {benefits ? (
        <ul className="flex flex-wrap gap-4 mt-4 text-base">
          {benefits.map((benefit, index) => (
            <ListItem key={index} label={benefit} />
          ))}
        </ul>
      ) : null}
      <div className="px-7 pt-6 pb-0">
        {illustration ? (
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
        ) : null}
      </div>
    </Link>
  );
}
