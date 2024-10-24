// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function FlagIcon({
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
          d="M2.86963 15.05V2.44771L5.39239 1.97939C6.92773 1.69437 8.50958 1.69437 10.0449 1.97939L15.0905 2.91603C16.6258 3.20105 18.2077 3.20105 19.743 2.91603L22.2658 2.44771V12.4373C22.2658 13.9571 21.1004 15.2663 19.4797 15.5672C18.1181 15.82 16.7153 15.82 15.3538 15.5672L10.0449 14.5817C8.50958 14.2967 6.92774 14.2967 5.39239 14.5817L2.86963 15.05Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M2.80762 1.01367L2.80763 23.0002"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
      </svg>
      ;
    </div>
  );
}
