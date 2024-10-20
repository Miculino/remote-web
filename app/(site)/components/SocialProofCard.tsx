// Next
import Image from "next/image";
import Link from "next/link";

// React
import { SVGProps } from "react";

// Icons
import ArrowIcon from "@/app/svg/ArrowIcon";

interface SocialProofCardProps {
  name: string;
  avatar: string;
  testimonial: string;
  link: string;
  logo: React.FC<
    SVGProps<SVGSVGElement> & {
      pathFills?: string;
    }
  > | null;
}

export default function SocialProofCard({
  name,
  avatar,
  testimonial,
  link,
  logo: CompanyLogo,
}: SocialProofCardProps) {
  return (
    <div className="rounded-3xl w-full justify-between h-full flex flex-col mx-2 md:mx-4 gap-12 text-dark-navy hover:text-white border-2 border-dark-blue hover:border-transparent p-4 md:p-8 max-w-fit hover:bg-purple-blue transition-all duration-500">
      <div>
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
