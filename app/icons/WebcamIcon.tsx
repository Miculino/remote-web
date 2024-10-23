// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function WebcamIcon({
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
        <path d="M12 18.6523V22.0001" stroke="black" stroke-width="1.5"></path>
        <path d="M17 22.25H7" stroke="black" stroke-width="1.5"></path>
        <path
          d="M11.9998 19.1304C16.782 19.1304 20.6587 15.2537 20.6587 10.4715C20.6587 5.68925 16.782 1.8125 11.9998 1.8125C7.21757 1.8125 3.34082 5.68925 3.34082 10.4715C3.34082 15.2537 7.21757 19.1304 11.9998 19.1304Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M11.9999 14.946C14.4711 14.946 16.4744 12.9428 16.4744 10.4716C16.4744 8.00037 14.4711 5.99707 11.9999 5.99707C9.52869 5.99707 7.52539 8.00037 7.52539 10.4716C7.52539 12.9428 9.52869 14.946 11.9999 14.946Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
