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
          d="M17.3758 3.62817H10.8054C8.49623 3.62817 6.62427 5.50013 6.62427 7.8093C6.62427 10.1185 8.49623 11.9904 10.8054 11.9904H12.6997"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M6.62427 16.5302C6.62427 18.5095 8.22881 20.1141 10.2081 20.1141H13.0751C15.3183 20.1141 17.1368 18.2956 17.1368 16.0524C17.1368 13.8092 15.3183 11.9907 13.0751 11.9907H10.7337"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M11.8806 20.5916V1"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M11.8808 23.0001L11.8806 18.2026"
          stroke="black"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
