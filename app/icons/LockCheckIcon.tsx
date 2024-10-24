// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function LockCheckIcon({
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
          d="M8.79346 15.7179L11.4525 18.377L15.2065 14.623"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M18.25 9.8125H1.78125V18.2812C1.78125 20.4903 3.57211 22.2812 5.78125 22.2812H22.25V13.8125C22.25 11.6033 20.4591 9.8125 18.25 9.8125Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M17.7141 10V5.75C17.7141 3.54086 15.9232 1.75 13.714 1.75H10.2832C8.07406 1.75 6.2832 3.54086 6.2832 5.75V10"
          stroke="black"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
