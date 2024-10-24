// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function CompareIcon({
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
          d="M1.75 3.76562H18.25C20.4591 3.76562 22.25 5.55648 22.25 7.76562V20.25H5.75C3.54086 20.25 1.75 18.4592 1.75 16.25V3.76562Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path d="M12 1V23" stroke="black" stroke-width="1.5"></path>
        <path
          d="M6.71924 12C7.82381 12 8.71924 11.1046 8.71924 10C8.71924 8.89543 7.82381 8 6.71924 8C5.61467 8 4.71924 8.89543 4.71924 10C4.71924 11.1046 5.61467 12 6.71924 12Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M19.2808 8.00781H15.2808V12.0078H19.2808V8.00781Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M4.71924 16H8.71924"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
          stroke-linecap="square"
        ></path>
        <path
          d="M15.2808 16H19.2808"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
          stroke-linecap="square"
        ></path>
      </svg>
    </div>
  );
}
