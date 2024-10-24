// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function UsersIcon({
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
          d="M15 9.77246C17.2091 9.77246 19 7.9816 19 5.77246C19 3.56332 17.2091 1.77246 15 1.77246"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M7.6819 17.6711V18.2099C7.6819 19.8889 6.3208 21.25 4.6418 21.25H1.75537V16.75C1.75537 14.5409 3.54623 12.75 5.75537 12.75H13.3125C15.5216 12.75 17.3125 14.5409 17.3125 16.75V21.25H9.90434"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M9.625 12.75H18.1848C20.394 12.75 22.1848 14.5409 22.1848 16.75V21.25H19.375"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M9.53418 10.3438C11.8986 10.3438 13.8154 8.42697 13.8154 6.0625C13.8154 3.69803 11.8986 1.78125 9.53418 1.78125C7.16971 1.78125 5.25293 3.69803 5.25293 6.0625C5.25293 8.42697 7.16971 10.3438 9.53418 10.3438Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
