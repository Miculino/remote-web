// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function MobileIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <div className={clsx(className)}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        {...props}
      >
        <path
          d="M3.76562 22.2657H16.25C18.4591 22.2657 20.25 20.4748 20.25 18.2657V12.9918V1.76564L7.76562 1.76562C5.55649 1.76562 3.76562 3.55649 3.76562 5.76562V22.2657Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M12.375 18.375H11.625V19.125H12.375V18.375Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="0.75"
        ></path>
        <path
          d="M3.86963 15.3479H20.1305"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
