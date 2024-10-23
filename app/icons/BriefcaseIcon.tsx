// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function BriefcaseIcon({
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
          d="M18.2498 7.65991H1.77979V18.2199C1.77979 19.2808 2.20121 20.2982 2.95136 21.0483C3.7015 21.7985 4.71892 22.2199 5.77979 22.2199H22.2498V11.6599C22.2498 10.599 21.8284 9.58163 21.0782 8.83148C20.3281 8.08134 19.3107 7.65991 18.2498 7.65991Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M16.5001 22.22V6.20002C16.5001 5.02511 16.0334 3.89832 15.2026 3.06754C14.3718 2.23675 13.245 1.77002 12.0701 1.77002C10.8952 1.77002 9.76844 2.23675 8.93765 3.06754C8.10687 3.89832 7.64014 5.02511 7.64014 6.20002V22.2"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
