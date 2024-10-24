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
          d="M14.0832 12.3398C14.0832 11.6495 13.5235 11.0898 12.8332 11.0898H11.1665C10.4761 11.0898 9.9165 11.6495 9.9165 12.3398C9.9165 13.0302 10.4761 13.5898 11.1665 13.5898H12.2975"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M9.9165 14.8398C9.9165 15.5302 10.4761 16.0898 11.1665 16.0898H12.8332C13.5235 16.0898 14.0832 15.5302 14.0832 14.8398C14.0832 14.1495 13.5235 13.5898 12.8332 13.5898H11.5832"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M12 10.5898V9.58984"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M12 17.5898V15.5898"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
