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
          d="M18 6.0625L21.8438 2.21875"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M22.25 7.75V3.75C22.25 2.64543 21.3546 1.75 20.25 1.75H16.25"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M5.99854 6.0625L2.15479 2.21875"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M1.74854 7.75V3.75C1.74855 2.64543 2.64398 1.75 3.74855 1.75H7.74855"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M18 17.938L21.8438 21.7818"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M22.25 16.2505V20.2505C22.25 21.3551 21.3546 22.2505 20.25 22.2505H16.25"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M5.99854 17.938L2.15479 21.7818"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M1.74854 16.2505V20.2505C1.74855 21.3551 2.64398 22.2505 3.74855 22.2505H7.74855"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M12 6.3335H12C8.87047 6.3335 6.3335 8.87047 6.3335 12V12C6.3335 15.1295 8.87047 17.6665 12 17.6665H12C15.1295 17.6665 17.6665 15.1295 17.6665 12V12C17.6665 8.87047 15.1295 6.3335 12 6.3335Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M14.463 8.79719C14.463 7.43653 13.36 6.3335 11.9993 6.3335C10.6387 6.3335 9.53564 7.43653 9.53564 8.79719V15.203C9.53564 16.5637 10.6387 17.6667 11.9993 17.6667C13.36 17.6667 14.463 16.5637 14.463 15.203V8.79719Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M6.58008 12.0005H17.1739"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
