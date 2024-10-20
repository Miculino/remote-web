// Next
import Image from "next/image";

// Constants
import { BADGES } from "@/app/constants/badges";

export default function Badges() {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap mx-auto">
      {BADGES.map((badge, index) => (
        <Image
          key={index}
          src={badge.path}
          alt={badge.name}
          width={77}
          height={100}
        />
      ))}
    </div>
  );
}
