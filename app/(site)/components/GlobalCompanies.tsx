// Next
import Image from "next/image";

// Constants
import { GLOBAL_COMPANIES } from "@/app/constants/globalCompanies";

export default function GlobalCompanies() {
  return (
    <div
      title="Global companies grow with Remote"
      className="bg-dark-gray p-5 flex flex-col gap-8"
    >
      <p className="text-slate-500 text-lg text-center">
        Global companies grow with Remote
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-4">
        {GLOBAL_COMPANIES.map((company, index) => (
          <Image
            key={index}
            src={company.logo}
            width={company.width}
            height={company.height}
            alt={`${company.name} Logo`}
          />
        ))}
      </div>
    </div>
  );
}
