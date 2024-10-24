// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function NavbarRemoteAPIsIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <div className={clsx(className)}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M9.75 8.25L9.75 18C8.46965 18.0001 7.20181 17.748 6.01889 17.258C4.83597 16.7681 3.76113 16.0499 2.85575 15.1445C1.95037 14.2392 1.23218 13.1643 0.742192 11.9813C0.2522 10.7984 -2.13243e-07 9.53045 -1.01302e-07 8.25L9.75 8.25Z"
          fill="#BD9BFF"
        />
        <path
          d="M8.25 9.75V2.62934e-08C9.53035 -9.40068e-05 10.7982 0.25203 11.9811 0.741971C13.164 1.23191 14.2389 1.95008 15.1442 2.85546C16.0496 3.76084 16.7678 4.8357 17.2578 6.01867C17.7478 7.20164 18 8.46955 18 9.75H8.25Z"
          fill="#5A05FF"
        />
      </svg>
    </div>
  );
}
