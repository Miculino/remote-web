// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function CalculatorIcon({
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
          d="M3.75781 1.78125H16.2422C18.4513 1.78125 20.2422 3.57211 20.2422 5.78125V22.25H7.75781C5.54867 22.25 3.75781 20.4591 3.75781 18.25V1.78125Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M6.74292 9.4498V4.75415H13.2572C15.4663 4.75415 17.2572 6.54501 17.2572 8.75415V9.4498H6.74292Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M7.875 15.5054H6.375V16.2554H7.875V15.5054Z"
          stroke="black"
          stroke-width="0.75"
        ></path>
        <path
          d="M7.875 12.375H6.375V13.125H7.875V12.375Z"
          stroke="black"
          stroke-width="0.75"
        ></path>
        <path
          d="M7.875 18.6357H6.375V19.3857H7.875V18.6357Z"
          stroke="black"
          stroke-width="0.75"
        ></path>
        <path
          d="M12.75 15.5054H11.25V16.2554H12.75V15.5054Z"
          stroke="black"
          stroke-width="0.75"
        ></path>
        <path
          d="M12.75 12.375H11.25V13.125H12.75V12.375Z"
          stroke="black"
          stroke-width="0.75"
        ></path>
        <path
          d="M17.625 15.5054H16.125V16.2554H17.625V15.5054Z"
          stroke="black"
          stroke-width="0.75"
        ></path>
        <path
          d="M17.625 12.375H16.125V13.125H17.625V12.375Z"
          stroke="black"
          stroke-width="0.75"
        ></path>
        <path
          d="M17.625 18.6357H11.25V19.3857H17.625V18.6357Z"
          stroke="black"
          stroke-width="0.75"
        ></path>
      </svg>
    </div>
  );
}
