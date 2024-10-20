import Image from "next/image";

export default function Ratings() {
  return (
    <div className="flex items-center flex-wrap gap-8 justify-center">
      <Image
        src={"/TrustPilot_Stars.svg"}
        alt="TrustPilot Stars Rating"
        width={224}
        height={28}
      />
      <Image
        src={"/Capterra_Stars.svg"}
        alt="Capterra Stars Rating"
        width={217}
        height={24}
      />
      <Image
        src={"/G2_Stars.svg"}
        alt="G2 Stars Rating"
        width={145}
        height={30}
      />
    </div>
  );
}
