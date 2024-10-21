// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

interface CheckedIconProps extends SVGProps<SVGSVGElement> {
  pathStrokes: string;
}

export default function CheckedIcon({
  pathStrokes,
  className,
  ...props
}: CheckedIconProps) {
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
          d="M5 13L9 17L19 7"
          stroke={pathStrokes}
          stroke-width="1.5"
          stroke-linecap="square"
        ></path>
      </svg>
    </div>
  );
}
