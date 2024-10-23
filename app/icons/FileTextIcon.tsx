// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function FilesTextIcon({
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
          d="M14.0836 11.9304H7.82593"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M16.1737 16.1042H7.82593"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M3.37988 1.78125H16.62C18.8292 1.78125 20.62 3.57211 20.62 5.78125V22.4348H7.37988C5.17074 22.4348 3.37988 20.644 3.37988 18.4348V1.78125Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M15.2607 1.56519V7.01357H20.6199"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
