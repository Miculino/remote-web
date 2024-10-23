// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function UserCheckIcon({
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
          d="M13 19.4333L15.725 22.1583L19.5 18.3833"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M12 10.3438C14.3645 10.3438 16.2812 8.42697 16.2812 6.0625C16.2812 3.69803 14.3645 1.78125 12 1.78125C9.63553 1.78125 7.71875 3.69803 7.71875 6.0625C7.71875 8.42697 9.63553 10.3438 12 10.3438Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M9.5632 18.6711C9.5632 20.6477 7.96085 22.25 5.98425 22.25H5.56231H1.76367V18.75C1.76367 15.4363 4.44996 12.75 7.76367 12.75H16.2374C19.5511 12.75 22.2374 15.4363 22.2374 18.75V23.0312"
          stroke="black"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
