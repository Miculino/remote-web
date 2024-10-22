"use client";

// Next
import Link from "next/link";

// Class Variance Authority
import { cva } from "class-variance-authority";

// CLSX
import clsx from "clsx";

// SVGs
import ArrowIcon from "@/app/svg/ArrowIcon";
import { useState } from "react";

interface PlatformCoreFeatureProps {
  title: string;
  description: string;
  illustration: string;
  feature:
    | "hr-management"
    | "contractor-management"
    | "remote-talent"
    | "remote-apis";
  url: string;
}

const platformCoreFeatureStyle = cva(
  "rounded-2xl border transition-all duration-500",
  {
    variants: {
      feature: {
        "hr-management": "border-hr-management hover:bg-hr-management",
        "contractor-management":
          "border-contractor-management hover:bg-contractor-management",
        "remote-talent": "border-remote-talent hover:bg-remote-talent",
        "remote-apis": "border-remote-apis hover:bg-remote-apis",
      },
    },
  }
);

const platformCoreFeatureArrowStyle = cva("", {
  variants: {
    feature: {
      "hr-management": "var(--hr-management)",
      "contractor-management": "var(--contractor-management)",
      "remote-talent": "var(--remote-talent)",
      "remote-apis": "var(--remote-apis)",
    },
  },
});

export default function PlatformCoreFeature({
  title,
  description,
  illustration,
  feature,
  url,
}: PlatformCoreFeatureProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link href={url}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={clsx(
          platformCoreFeatureStyle({ feature }),
          "relative p-6 py-8 overflow-hidden cursor-pointer"
        )}
      >
        <div className="flex flex-col gap-1">
          <h4 className="font-crimson font-semibold text-lg">{title}</h4>
          <p className="font-poppins">{description}</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full p-6 py-8 bg-inherit opacity-0 hover:opacity-100 flex justify-between items-center gap-4">
          <div
            className={clsx(
              isHovered
                ? "translate-x-0 opacity-100"
                : "-translate-x-2 opacity-0",
              "transition-all duration-500"
            )}
          >
            <object data={illustration} />
          </div>
          <div
            className={clsx(
              "flex flex-col gap-1 text-white transition-all duration-500",
              isHovered
                ? "translate-x-0 opacity-100"
                : "translate-x-2 opacity-0"
            )}
          >
            <h4 className="font-crimson font-semibold text-lg">{title}</h4>
            <p className="font-poppins">{description}</p>
          </div>
        </div>
        <ArrowIcon
          className={clsx(
            isHovered ? "rotate-0" : "-rotate-45",
            "transition-all duration-500 absolute top-6 right-6"
          )}
          pathStrokes={
            isHovered
              ? "var(--foreground)"
              : platformCoreFeatureArrowStyle({ feature })
          }
        />
      </div>
    </Link>
  );
}
