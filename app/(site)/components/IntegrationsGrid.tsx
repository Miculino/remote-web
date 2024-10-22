"use client";

// Next
import Link from "next/link";

// Components
import IntegrationLink from "./IntegrationLink";

// Constants
import { INTEGRATIONS_LIST } from "@/app/constants/integrationsList";
import ArrowIcon from "@/app/svg/ArrowIcon";

type IntegrationNameTypes = "gusto" | "bamboohr" | "greenhouse" | "zapier";

export default function IntegrationsGrid() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="grid grid-cols-2 gap-4 flex-1">
        {INTEGRATIONS_LIST.map((integration, index) => (
          <IntegrationLink
            key={index}
            company={integration.name as IntegrationNameTypes}
            logo={integration.logo}
            url={integration.url}
          />
        ))}
      </div>
      <Link
        href={"https://remote.com/resources/integrations-for-customers"}
        className="border-dashed border-primary border relative rounded-2xl p-3 py-6 grid place-content-center text-primary hover:text-white hover:bg-primary transition-all duration-500"
      >
        <span className="uppercase font-medium">
          Connect with 5,000+ apps and tools
        </span>
        <ArrowIcon
          className="absolute right-2 top-1/2 -translate-y-1/2"
          pathStrokes="var(--foreground)"
        />
      </Link>
    </div>
  );
}
