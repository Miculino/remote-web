// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function BookTextIcon({
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
          d="M14.0839 7.82617H7.82617"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M16.174 12H7.82617"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M20.261 1.78125H7.73926C5.53012 1.78125 3.73926 3.57211 3.73926 5.78125V22.25H16.261C18.4701 22.25 20.261 20.4591 20.261 18.25V1.78125Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M3.73926 17.2175H16.7827C18.7037 17.2175 20.261 15.6602 20.261 13.7393"
          stroke="black"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
