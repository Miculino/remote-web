// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function GlobalBenefitsIcon({
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
          d="M22.1998 22.25V10.78C22.1998 9.71916 21.7784 8.70175 21.0282 7.9516C20.2781 7.20146 19.2607 6.78003 18.1998 6.78003H1.7998V18.25C1.7998 19.3109 2.22123 20.3283 2.97138 21.0785C3.72152 21.8286 4.73894 22.25 5.7998 22.25H22.1998Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path d="M2 17H22" stroke="black" stroke-width="1.5"></path>
        <path
          d="M11.9999 6.6301L8.15994 2.4601C7.88801 2.1653 7.53372 1.95908 7.14309 1.86819C6.75246 1.77731 6.34353 1.80596 5.9694 1.95044C5.59526 2.09492 5.27321 2.34855 5.04505 2.67839C4.81689 3.00823 4.69316 3.39905 4.68994 3.8001V6.6101"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M11.6899 6.6301L15.5299 2.4601C15.8019 2.1653 16.1562 1.95908 16.5468 1.86819C16.9374 1.77731 17.3464 1.80596 17.7205 1.95044C18.0946 2.09492 18.4167 2.34855 18.6448 2.67839C18.873 3.00823 18.9967 3.39905 18.9999 3.8001V6.6101"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M12 6.62988L6 12.6299"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M11.6899 6.62988L17.6899 12.6299"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
