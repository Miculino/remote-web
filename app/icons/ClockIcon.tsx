// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function ClockIcon({
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
        <g clip-path="url(#clip0_9140_501)">
          <path
            d="M11.6899 13V5"
            stroke="black"
            stroke-opacity="0.99"
            stroke-width="1.5"
          ></path>
          <path
            d="M11.6899 12.25H18.4699"
            stroke="black"
            stroke-opacity="0.99"
            stroke-width="1.5"
          ></path>
          <path
            d="M1.6001 12.0001C1.6001 9.24185 2.69581 6.59657 4.64619 4.64619C6.59657 2.69581 9.24185 1.6001 12.0001 1.6001C14.7583 1.6001 17.4036 2.69581 19.354 4.64619C21.3044 6.59657 22.4001 9.24185 22.4001 12.0001C22.4001 14.7583 21.3044 17.4036 19.354 19.354C17.4036 21.3044 14.7583 22.4001 12.0001 22.4001C9.24185 22.4001 6.59657 21.3044 4.64619 19.354C2.69581 17.4036 1.6001 14.7583 1.6001 12.0001Z"
            stroke="black"
            stroke-width="1.5"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_9140_501">
            <rect width="24" height="24" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
