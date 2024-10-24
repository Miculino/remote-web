// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function FolderMoneyIcon({
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
          d="M14.0834 12.75C14.0834 12.0597 13.5238 11.5 12.8334 11.5H11.1667C10.4764 11.5 9.91675 12.0597 9.91675 12.75C9.91675 13.4404 10.4764 14 11.1667 14H12.2977"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M9.91675 15.2498C9.91675 15.9402 10.4764 16.4998 11.1667 16.4998H12.8334C13.5238 16.4998 14.0834 15.9402 14.0834 15.2498C14.0834 14.5595 13.5238 13.9998 12.8334 13.9998H11.5834"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M12.0002 11V10"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M12.0002 18.0002V16.0002"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M12.9903 6.74554H18.25C20.4591 6.74554 22.25 8.5364 22.25 10.7455V21.2812H5.78125C3.57211 21.2812 1.78125 19.4904 1.78125 17.2812V2.78125H6.06622C8.27536 2.78125 10.0662 4.57211 10.0662 6.78125V7.53125"
          stroke="black"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
