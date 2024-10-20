// Next
import Image from "next/image";
import Link from "next/link";

// React
import { SVGProps } from "react";

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
  company?: "semrush";
  logo: React.FC<
    SVGProps<SVGSVGElement> & {
      pathFills?: string;
    }
  > | null;
}

const socialProofCard = cva("card", {
  variants: {
    company: {
      semrush: "hover:bg-semrush",
      shootsta: "hover:bg-shootsta",
      fountain: "hover:bg-fountain",
      "reverse-tech": "hover:bg-reverse-tech",
      weaviate: "hover:bg-weaviate",
      pento: "hover:bg-pento",
      commercetools: "hover:bg-commercetools",
      tablevibe: "hover:bg-tablevibe",
      tele2: "hover:bg-tele2",
      fluz: "hover:bg-fluz",
      homeproject: "hover:bg-homeproject",
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
  return (
    <div
      className={clsx(
        "rounded-3xl w-full justify-between h-full flex flex-col mx-2 md:mx-4 gap-12 text-dark-navy hover:text-white border-[1px] border-dark-blue hover:border-transparent p-4 md:p-8 max-w-fit transition-all duration-500",
        socialProofCard({ company })
      )}
    >
      <div className="flex flex-col gap-4">
        <p>{testimonial}</p>
        <Link className="flex items-center gap-1 underline" href={link}>
          <span>Read full story</span>
          <ArrowIcon pathStrokes="var(--primary)" />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-2  md:items-center justify-between">
        <div className="flex items-center gap-6">
          <Image
            className="rounded-full"
            src={avatar}
            alt="Maria Shkaruppa"
            width={56}
            height={56}
          />
          <span className="uppercase font-semibold">{name}</span>
        </div>
        {CompanyLogo && <CompanyLogo pathFills="var(--background)" />}
      </div>
    </div>
  );
}
