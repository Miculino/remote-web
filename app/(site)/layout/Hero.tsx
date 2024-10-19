// Next
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[url('/Hero_BG.webp')] bg-center w-full bg-cover flex items-center p-40 px-60 pb-50">
      <div className="flex flex-col gap-8 max-w-[50%]">
        <p className="uppercase font-poppins">
          Start Anywhere. Grow Everywhere.
        </p>
        <h1 className="font-crimson text-7xl font-bold pr-50">
          Global HR solutions for world-changing ideas
        </h1>
        <div className="flex flex-col gap-8 pr-[10%] text-xl text-white/80">
          <p>
            Navigate global HR with ease. Streamline payroll in multiple
            currencies, manage diverse teams, and recruit top talent, all from
            one intuitive platform. Transform your ambitious visions into global
            success.
          </p>
          <div className="flex items-center gap-8">
            <button>Get Started</button>
            <Image src={"/G2_Fall_Leader.svg"} width={168} height={43} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
