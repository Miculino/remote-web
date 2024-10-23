// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function BinocularIcon({
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
          d="M5.97656 22.2734C8.32808 22.2734 10.2344 20.3671 10.2344 18.0156C10.2344 15.6641 8.32808 13.7578 5.97656 13.7578C3.62504 13.7578 1.71875 15.6641 1.71875 18.0156C1.71875 20.3671 3.62504 22.2734 5.97656 22.2734Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M1.84375 16.9688L4.53139 4.28521C4.81369 2.95297 5.98975 2 7.35157 2C8.9437 2 10.2344 3.29067 10.2344 4.8828V18"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M18.0234 22.2734C15.6719 22.2734 13.7656 20.3671 13.7656 18.0156C13.7656 15.6641 15.6719 13.7578 18.0234 13.7578C20.375 13.7578 22.2812 15.6641 22.2812 18.0156C22.2812 20.3671 20.375 22.2734 18.0234 22.2734Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M22.1562 16.9688L19.4686 4.28521C19.1863 2.95297 18.0102 2 16.6484 2C15.0563 2 13.7656 3.29067 13.7656 4.8828V18"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M10.5781 14H13.4219"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="square"
        ></path>
        <path
          d="M10.5781 11.8438H13.4219"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="square"
        ></path>
        <path
          d="M10.9844 6.40625H13.0156"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="square"
        ></path>
        <path
          d="M6 20C7.10457 20 8 19.1046 8 18"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
          stroke-linecap="square"
        ></path>
        <path
          d="M18.0234 20C19.128 20 20.0234 19.1046 20.0234 18"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
          stroke-linecap="square"
        ></path>
      </svg>
    </div>
  );
}
