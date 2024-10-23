// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function LifeInsuranceIcon({
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
          d="M1.77344 12C1.77344 6.35203 6.35203 1.77344 12 1.77344C17.648 1.77344 22.2266 6.35203 22.2266 12C22.2266 17.648 17.648 22.2266 12 22.2266C6.35203 22.2266 1.77344 17.648 1.77344 12Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M13.3333 6.66626H10.6665V10.6665H6.66626V13.3333H10.6665V17.3335H13.3333V13.3333H17.3335V10.6665H13.3333V6.66626Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
