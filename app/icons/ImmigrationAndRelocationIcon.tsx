// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function ImmigrationAndRelocationIcon({
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
          d="M22.2422 20.0391V1.78125H15.5764L9.32813 3.75H1.75781V22.25H9.32813L16.1875 20.0391H22.2422Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path d="M9.39062 4.17383V10" stroke="black" stroke-width="1.5"></path>
        <path
          d="M9.39062 19L9.39063 22.3921"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M16.1739 1.60742L16.1738 5"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path d="M16.1738 14V19.8262" stroke="black" stroke-width="1.5"></path>
        <path
          d="M7.2174 16.3479C8.1779 16.3479 8.95653 15.5693 8.95653 14.6088C8.95653 13.6483 8.1779 12.8696 7.2174 12.8696C6.25691 12.8696 5.47827 13.6483 5.47827 14.6088C5.47827 15.5693 6.25691 16.3479 7.2174 16.3479Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M16.7826 11.1306C17.7431 11.1306 18.5217 10.352 18.5217 9.39147C18.5217 8.43098 17.7431 7.65234 16.7826 7.65234C15.8221 7.65234 15.0435 8.43098 15.0435 9.39147C15.0435 10.352 15.8221 11.1306 16.7826 11.1306Z"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M8.95654 14.6087H9.39133C10.8321 14.6087 12 13.4408 12 12.0001C12 10.5593 13.168 9.39136 14.6087 9.39136H15.4783"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
