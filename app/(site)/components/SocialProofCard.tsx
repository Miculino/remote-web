// Next
import Image from "next/image";
import Link from "next/link";

// Icons
import ArrowIcon from "@/app/svg/ArrowIcon";
import SemrushLogo from "@/app/svg/SemrushLogo";

export default function SocialProofCard() {
  return (
    <div className="rounded-3xl flex flex-col gap-12 text-dark-navy hover:text-white border-2 border-dark-blue hover:border-transparent p-8 max-w-fit mx-auto hover:bg-purple-blue transition-all duration-500">
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          voluptas velit assumenda quas incidunt quae laudantium laborum
          accusamus reprehenderit eligendi.
        </p>
        <Link
          className="flex items-center gap-1 underline"
          href={"https://remote.com/blog/remote-semrush"}
        >
          <span>Read full story</span>
          <ArrowIcon pathStrokes="var(--primary)" />
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Image
            className="rounded-full"
            src={"/testimonials/Semrush/Maria_Shkaruppa-Semrush.png"}
            alt="Maria Shkaruppa"
            width={56}
            height={56}
          />
          <span className="uppercase font-semibold">Maria Shkaruppa</span>
        </div>
        <SemrushLogo pathFills="var(--background)" />
      </div>
    </div>
  );
}
