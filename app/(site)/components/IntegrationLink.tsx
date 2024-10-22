"use client";

// React
import { SVGProps, useState } from "react";

// Next
import Link from "next/link";

// CLSX
import clsx from "clsx";

// Class Variance Authority
import { cva } from "class-variance-authority";

interface IntegrationLinkProps {
  company: "gusto" | "bamboohr" | "greenhouse" | "zapier";
  url: string;
  logo: React.FC<
    SVGProps<SVGSVGElement> & { pathFills?: string; pathStrokes?: string }
  >;
}

export const integrationLinkStyle = cva(
  "rounded-3xl border transition-all duration-500",
  {
    variants: {
      company: {
        gusto: "hover:bg-gusto border-gusto",
        bamboohr: "hover:bg-bamboohr border-bamboohr",
        greenhouse: "hover:bg-greenhouse border-greenhouse",
        zapier: "hover:bg-zapier border-zapier",
      },
    },
  }
);

export default function IntegrationLink({
  company,
  url,
  logo: IntegrationCompanyLogo,
}: IntegrationLinkProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Link
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={url}
      className={clsx(
        integrationLinkStyle({ company }),
        "p-4 py-10 grid place-content-center"
      )}
    >
      <IntegrationCompanyLogo
        style={{
          transform: `scale(${isHovered ? "1.05" : "1"})`,
          transition: "all .25s ease-in-out",
        }}
        pathFills={isHovered ? "#fff" : undefined}
      />
    </Link>
  );
}
