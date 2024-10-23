// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function ExpandGloballyIcon({
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
          d="M1.76562 12C1.76562 6.34771 6.34771 1.76562 12 1.76562C17.6523 1.76562 22.2344 6.34771 22.2344 12C22.2344 17.6523 17.6523 22.2344 12 22.2344C6.34771 22.2344 1.76562 17.6523 1.76562 12Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M11.9999 13.9129C14.6413 13.9129 16.7825 11.7716 16.7825 9.13027C16.7825 6.4889 14.6413 4.34766 11.9999 4.34766C9.35853 4.34766 7.21729 6.4889 7.21729 9.13027C7.21729 11.7716 9.35853 13.9129 11.9999 13.9129Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M19.3982 19.1739C19.3982 17.5825 18.1082 16.2925 16.5169 16.2925H7.20897C5.76921 16.2925 4.60205 17.4597 4.60205 18.8995"
          stroke="black"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
