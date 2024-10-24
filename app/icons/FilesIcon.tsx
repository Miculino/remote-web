// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function FilesIcon({
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
          d="M19.2812 1.75928H5.59863C4.49406 1.75928 3.59863 2.65471 3.59863 3.75928V19.2812H17.2812C18.3858 19.2812 19.2812 18.3858 19.2812 17.2812V1.75928Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M22.25 4.0625V20.2621C22.25 21.3666 21.3546 22.2621 20.25 22.2621H6.0625"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M13.5238 8.43335H7.26611"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M15.6139 12.6074H7.26611"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
