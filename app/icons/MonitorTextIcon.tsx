// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function MonitorTextIcon({
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
          d="M14.5 7.8811H7.5"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M16.4999 11.9436H7.5"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path d="M12 18.1741V22.0002" stroke="black" stroke-width="1.5"></path>
        <path d="M17 22.25H7" stroke="black" stroke-width="1.5"></path>
        <path
          d="M22.2812 18.2969V5.78125C22.2812 3.57211 20.4904 1.78125 18.2812 1.78125H12.9933H1.75V14.2969C1.75 16.506 3.54086 18.2969 5.75 18.2969H22.2812Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
