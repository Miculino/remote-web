// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function WatchTowerHRCompliance({
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
          d="M12 1C12 3.93637 9.70721 6.31677 6.87891 6.31677C4.0506 6.31677 1.75781 3.93637 1.75781 1"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M22.2422 1C22.2422 3.93637 19.9494 6.31677 17.1211 6.31677C14.2928 6.31677 12 3.93637 12 1"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M1.75781 1V12.0249C1.75781 17.6815 6.3434 22.2671 12 22.2671C17.6566 22.2671 22.2422 17.6815 22.2422 12.0249V1"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M8 12.3003L11.4062 15.7065L16.125 10.9878"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
