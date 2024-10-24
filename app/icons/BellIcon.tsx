// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function BookIcon({
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
        <g clip-path="url(#clip0_9140_134)">
          <path
            d="M3.6001 13.4801V9.32012C3.6001 7.27795 4.41135 5.31942 5.85538 3.87539C7.29941 2.43136 9.25793 1.62012 11.3001 1.62012H12.7001C14.7423 1.62012 16.7008 2.43136 18.1448 3.87539C19.5888 5.31942 20.4001 7.27795 20.4001 9.32012V13.4801"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M19.3202 18.92H19.6602C20.3816 18.92 21.0734 18.6334 21.5835 18.1233C22.0936 17.6132 22.3802 16.9214 22.3802 16.2C22.3802 15.4786 22.0936 14.7867 21.5835 14.2767C21.0734 13.7666 20.3816 13.48 19.6602 13.48H14.4702"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M6.07012 13.48H4.34012C3.61873 13.48 2.92689 13.7666 2.41679 14.2767C1.90669 14.7867 1.62012 15.4786 1.62012 16.2C1.62012 16.9214 1.90669 17.6132 2.41679 18.1233C2.92689 18.6334 3.61873 18.92 4.34012 18.92H19.4801"
            stroke="black"
            stroke-width="1.5"
          ></path>
          <path
            d="M9.52979 19.6101V19.9201C9.52979 20.5752 9.79002 21.2034 10.2532 21.6667C10.7164 22.1299 11.3447 22.3901 11.9998 22.3901C12.6549 22.3901 13.2831 22.1299 13.7463 21.6667C14.2096 21.2034 14.4698 20.5752 14.4698 19.9201V19.6201"
            stroke="black"
            stroke-opacity="0.99"
            stroke-width="1.5"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_9140_134">
            <rect width="24" height="24" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
