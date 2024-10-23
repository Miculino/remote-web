// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function MoneyUSDCheckIcon({
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
          d="M13.7515 3.62817H7.18114C4.87196 3.62817 3 5.50013 3 7.8093C3 10.1185 4.87196 11.9904 7.18114 11.9904H9.07543"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M3 16.5302C3 18.5095 4.60454 20.1141 6.58384 20.1141H9.45084C11.6941 20.1141 13.5126 18.2956 13.5126 16.0524C13.5126 13.8092 11.6941 11.9907 9.45084 11.9907H7.10943"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M8.25635 20.5916L8.25641 1"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M8.25657 23.0001L8.25635 18.2026"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M14.4375 10.9531L17.8438 14.3593L22.5625 9.64062"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
