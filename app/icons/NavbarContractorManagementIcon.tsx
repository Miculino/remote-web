// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function NavbarContractorManagementIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <div className={clsx(className)}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M9 0V18C4.02943 18 0 13.9705 0 9C0 4.02949 4.02956 0 9 0Z"
          fill="#005B43"
        />
        <path
          d="M9 18L9 -7.86805e-07C13.9706 -3.52264e-07 18 4.02949 18 9C18 13.9705 13.9704 18 9 18Z"
          fill="#C1D9D2"
        />
      </svg>
    </div>
  );
}
