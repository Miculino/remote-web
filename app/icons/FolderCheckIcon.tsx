// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function FolderCheckIcon({
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
          d="M12.9903 6.74554H18.25C20.4591 6.74554 22.25 8.5364 22.25 10.7455V21.2812H5.78125C3.57211 21.2812 1.78125 19.4904 1.78125 17.2812V2.78125H6.06622C8.27536 2.78125 10.0662 4.57211 10.0662 6.78125V7.53125"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M8 12.6821L11.4062 16.0884L16.125 11.3696"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
