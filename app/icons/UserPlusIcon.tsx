// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function UserPlusIcon({
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
          d="M9.56271 18.6711C9.56271 20.6477 7.96036 22.25 5.98376 22.25H5.56183H1.76318V18.75C1.76318 15.4363 4.44948 12.75 7.76318 12.75H16.2369C19.5506 12.75 22.2369 15.4363 22.2369 18.75V23.0312"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M16.2815 15.9688V23"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M19.7969 19.4844H12.7656"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M12 10.3438C14.3645 10.3438 16.2812 8.42697 16.2812 6.0625C16.2812 3.69803 14.3645 1.78125 12 1.78125C9.63553 1.78125 7.71875 3.69803 7.71875 6.0625C7.71875 8.42697 9.63553 10.3438 12 10.3438Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
      </svg>
      ;
    </div>
  );
}
