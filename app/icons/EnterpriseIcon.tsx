// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function EnterpriseIcon({
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
          d="M1.75781 1.82812V18.25C1.75781 20.4592 3.54867 22.25 5.75781 22.25H15.3125V5.82812C15.3125 3.61898 13.5216 1.82812 11.3125 1.82812H1.75781Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M15.4375 11.9768H20C21.1046 11.9768 22 12.8722 22 13.9768V22.2501H18"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M19.0938 16.125H18.3438V16.875H19.0938V16.125Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="0.75"
        ></path>
        <path
          d="M6.42969 16.125H5.67969V16.875H6.42969V16.125Z"
          stroke="black"
          stroke-width="0.75"
        ></path>
        <path
          d="M10.9297 16.125H10.1797V16.875H10.9297V16.125Z"
          stroke="black"
          stroke-width="0.75"
        ></path>
        <path
          d="M6.42969 11.625H5.67969V12.375H6.42969V11.625Z"
          stroke="black"
          stroke-width="0.75"
        ></path>
        <path
          d="M10.9297 11.625H10.1797V12.375H10.9297V11.625Z"
          stroke="black"
          stroke-width="0.75"
        ></path>
        <path
          d="M6.42969 7.125H5.67969V7.875H6.42969V7.125Z"
          stroke="black"
          stroke-width="0.75"
        ></path>
        <path
          d="M10.9297 7.125H10.1797V7.875H10.9297V7.125Z"
          stroke="black"
          stroke-width="0.75"
        ></path>
      </svg>
    </div>
  );
}
