// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function BrowserTextIcon({
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
          d="M14.5 13H7.5"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M16.5001 17.0625H7.50024"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M1 7.30444L22.9565 7.30445"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M5.125 4.1875H4.375V4.9375H5.125V4.1875Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="0.75"
        ></path>
        <path
          d="M8.125 4.1875H7.375V4.9375H8.125V4.1875Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="0.75"
        ></path>
        <path
          d="M11.125 4.1875H10.375V4.9375H11.125V4.1875Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="0.75"
        ></path>
        <path
          d="M22.25 22.25V5.78125C22.25 3.57211 20.4591 1.78125 18.25 1.78125H12.9903H1.78125V18.25C1.78125 20.4592 3.57211 22.25 5.78125 22.25H22.25Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
