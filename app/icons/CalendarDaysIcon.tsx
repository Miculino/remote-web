// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function CalendarDaysIcon({
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
          d="M7.69482 13.6421H6.94482V14.3921H7.69482V13.6421Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="0.75"
        ></path>
        <path
          d="M7.69482 17.8159H6.94482V18.5659H7.69482V17.8159Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="0.75"
        ></path>
        <path
          d="M12.3906 13.6421H11.6406V14.3921H12.3906V13.6421Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="0.75"
        ></path>
        <path
          d="M12.3906 17.8159H11.6406V18.5659H12.3906V17.8159Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="0.75"
        ></path>
        <path
          d="M17.0864 13.6421H16.3364V14.3921H17.0864V13.6421Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="0.75"
        ></path>
        <path
          d="M17.0864 17.8159H16.3364V18.5659H17.0864V17.8159Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="0.75"
        ></path>
        <path
          d="M22.25 22.2578V7.6875C22.25 5.47836 20.4591 3.6875 18.25 3.6875H12.9903H1.78125V18.2578C1.78125 20.467 3.57211 22.2578 5.78125 22.2578H22.25Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path d="M7.93359 6.42196V1" stroke="black" stroke-width="1.5"></path>
        <path d="M16.0664 6.42196V1" stroke="black" stroke-width="1.5"></path>
        <path
          d="M1.56543 8.74072H22.4348"
          stroke="black"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
