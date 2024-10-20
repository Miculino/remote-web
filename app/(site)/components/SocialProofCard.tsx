// React
import { SVGProps, useState } from "react";

// Next
import Image from "next/image";
import Link from "next/link";

// Class Variance Authority
import { cva } from "class-variance-authority";

// CLSX
import clsx from "clsx";

// Icons
import ArrowIcon from "@/app/svg/ArrowIcon";

interface SocialProofCardProps {
  name: string;
  avatar: string;
  testimonial: string;
  link: string;
  company:
    | "semrush"
    | "shootsta"
    | "fountain"
    | "reverse-tech"
    | "weaviate"
    | "pento"
    | "commercetools"
    | "tablevibe"
    | "tele2"
    | "fluz"
    | "homeproject";
  logo: React.FC<
    SVGProps<SVGSVGElement> & {
      pathFills?: string;
    }
  > | null;
}

const socialProofCard = cva("card", {
  variants: {
    company: {
      semrush: "hover:bg-semrush hover:text-white",
      shootsta: "hover:bg-shootsta hover:text-white",
      fountain: "hover:bg-fountain hover:text-white",
      "reverse-tech": "hover:bg-reverse-tech",
      weaviate: "hover:bg-weaviate hover:text-white",
      pento: "hover:bg-pento hover:text-white",
      commercetools: "hover:bg-commercetools",
      tablevibe: "hover:bg-tablevibe",
      tele2: "hover:bg-tele2 hover:text-white",
      fluz: "hover:bg-fluz",
      homeproject: "hover:bg-homeproject",
    },
  },
});

const socialProofLogoHover = cva("", {
  variants: {
    company: {
      semrush: "var(--foreground)",
      shootsta: "var(--foreground)",
      fountain: "var(--foreground)",
      "reverse-tech": "var(--background)",
      weaviate: "var(--foreground)",
      pento: "var(--foreground)",
      commercetools: "var(--background)",
      tablevibe: "var(--background)",
      tele2: "var(--foreground)",
      fluz: "var(--background)",
      homeproject: "var(--background)",
    },
  },
});

const socialProofLink = cva("", {
  variants: {
    company: {
      semrush: "var(--foreground)",
      shootsta: "var(--foreground)",
      fountain: "var(--foreground)",
      "reverse-tech": "var(--vibrant-purple)",
      weaviate: "var(--foreground)",
      pento: "var(--foreground)",
      commercetools: "var(--vibrant-purple)",
      tablevibe: "var(--background)",
      tele2: "var(--foreground)",
      fluz: "var(--vibrant-purple)",
      homeproject: "var(--background)",
    },
  },
});

export default function SocialProofCard({
  name,
  avatar,
  testimonial,
  link,
  logo: CompanyLogo,
  company = "semrush",
}: SocialProofCardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const textColor = isHovered ? socialProofLink({ company }) : "text-link";
  const logoColor = isHovered
    ? socialProofLogoHover({ company })
    : "var(--background)";

  const arrowColor = isHovered
    ? socialProofLink({ company })
    : "var(--vibrant-purple)";

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "cursor-grab rounded-3xl w-full justify-between h-full flex flex-col mx-2 md:mx-4 gap-12 text-dark-navy border-[1px] border-dark-blue hover:border-transparent p-4 md:p-8 max-w-fit transition-all duration-500",
        socialProofCard({ company })
      )}
    >
      <div className="flex flex-col gap-4">
        <p>{testimonial}</p>
        <Link
          className={clsx("flex items-center gap-1 underline max-w-fit")}
          href={link}
        >
          <span className={textColor}>Read full story</span>
          <ArrowIcon pathStrokes={arrowColor} />
        </Link>
      </div>
      <div className="flex flex-col flex-wrap md:flex-row gap-2 md:items-center justify-between">
        <div className="flex items-center gap-6">
          <Image
            className="rounded-full"
            src={avatar}
            alt={name}
            width={56}
            height={56}
          />
          <span className="uppercase font-semibold">{name}</span>
        </div>
        {CompanyLogo && (
          <CompanyLogo
            pathFills={logoColor}
            style={{ transition: "all 1s ease-in-out" }}
          />
        )}
      </div>
    </div>
  );
}
