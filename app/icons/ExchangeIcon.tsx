// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function ExchangeIcon({
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
          d="M22.33 16.3401H13.02"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M19.2202 13L22.5602 16.34L19.2202 19.68"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M13.0201 16.3401C11.9248 16.3401 10.8743 15.9049 10.0998 15.1304C9.32527 14.3559 8.89014 13.3054 8.89014 12.2101V12.1401"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M1.72998 7.93994H11.04"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M4.84 11.2901L1.5 7.94009L4.84 4.6001"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M11 7.93994C11.5432 7.93994 12.0811 8.0471 12.5828 8.25528C13.0845 8.46346 13.5403 8.76854 13.9239 9.15311C14.3075 9.53767 14.6115 9.99417 14.8185 10.4964C15.0255 10.9987 15.1313 11.5367 15.13 12.0799V12.14"
          stroke="black"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
