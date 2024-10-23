// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function GlobalInfrastructureIcon({
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
          d="M1 20.25H9.8125M23 20.25H14"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path d="M12 18.5625V15.5625" stroke="black" stroke-width="1.5"></path>
        <path
          d="M11.9999 1.75H11.9999C8.34106 1.75 5.375 4.71606 5.375 8.37488V8.37492C5.375 12.0337 8.34106 14.9998 11.9999 14.9998H11.9999C15.6587 14.9998 18.6248 12.0337 18.6248 8.37492V8.37488C18.6248 4.71606 15.6587 1.75 11.9999 1.75Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M11.9998 1.75H11.9998C10.409 1.75 9.11938 3.03959 9.11938 4.63038V12.1196C9.11938 13.7104 10.409 15 11.9998 15H11.9998C13.5906 15 14.8802 13.7104 14.8802 12.1196V4.63038C14.8802 3.03959 13.5906 1.75 11.9998 1.75Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M5.66406 8.37549H18.0497"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M12 22.25C13.1046 22.25 14 21.3546 14 20.25C14 19.1454 13.1046 18.25 12 18.25C10.8954 18.25 10 19.1454 10 20.25C10 21.3546 10.8954 22.25 12 22.25Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
