// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function SquareArrowUp({
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
          d="M12.0366 15.5234C12.0366 15.447 12.0366 11.0727 12.0366 8.89502"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M8.65234 12.2428L12.0001 8.89502L15.348 12.2428"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M1.77344 5.76953C1.77344 3.56039 3.5643 1.76953 5.77344 1.76953H22.2266V18.2305C22.2266 20.4396 20.4357 22.2305 18.2266 22.2305H1.77344V5.76953Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
