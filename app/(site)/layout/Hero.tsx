// Next
import Image from "next/image";

// Components
import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="bg-[url('/Hero_BG.webp')] relative text-center lg:text-left bg-center w-full bg-cover px-5 py-32 flex items-center lg:p-40 lg:pb-50 justify-center lg:justify-start">
      <div className="lg:opacity-0 bg-black/40 absolute top-0 left-0 w-full h-full z-0"></div>
      <div className="flex flex-col gap-8 lg:max-w-[50%] relative z-10">
        <p className="uppercase font-poppins">
          Start Anywhere. Grow Everywhere.
        </p>
        <h1 className="font-crimson text-[min(60px,_20px_+_2.18vw)] font-bold pr-50">
          Global HR solutions for world-changing ideas
        </h1>
        <div className="flex flex-col gap-8 lg:pr-[10%] text-white/80">
          <p className="text-[min(20px,_18px_+0.16vw)]">
            Navigate global HR with ease. Streamline payroll in multiple
            currencies, manage diverse teams, and recruit top talent, all from
            one intuitive platform. Transform your ambitious visions into global
            success.
          </p>
          <div className="flex items-center gap-8 mx-auto lg:mx-0">
            <Button intent={"secondary"} label="Get Started" />
            <Image src={"/G2_Fall_Leader.svg"} width={168} height={43} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
