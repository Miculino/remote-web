// Next
import Image from "next/image";

export default function ProductHighlightsDemo() {
  return (
    <section className="bg-gray-100 text-black py-10 px-5 lg:px-40 relative overflow-hidden">
      <div className="absolute top-0 right-0">
        <Image
          src={"/illustration/Floral_Watermark.svg"}
          width={971}
          height={1365}
          alt=""
        />
      </div>
      <div className="text-dark-navy">
        <h2 className="font-crimson text-[min(40px,_20px_+_1vw)]">
          Payroll Anywhere
        </h2>
        <p className="font-poppins text-[min(20px,_17px_+_0.16vw)] max-w-[50%] font-normal">
          Run payroll seamlessly across borders with timely and compliant
          payments to your entire team, no matter where they're located.
        </p>
      </div>
    </section>
  );
}
