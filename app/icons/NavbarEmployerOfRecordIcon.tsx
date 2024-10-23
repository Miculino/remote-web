// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function NavbarEmployerOfRecordIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <div className={clsx(className)}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M11.9899 11.9899C16.6767 7.3031 19.1375 2.16505 17.4862 0.513763C15.8349 -1.13753 10.6969 1.32325 6.01007 6.01007C1.32325 10.6969 -1.13753 15.8349 0.513763 17.4862C2.16505 19.1375 7.3031 16.6767 11.9899 11.9899Z"
          fill="#9BC1FF"
        />
        <path
          d="M17.4862 17.4862C19.1375 15.8349 16.6767 10.6969 11.9899 6.01008C7.3031 1.32326 2.16505 -1.13753 0.513763 0.513763C-1.13753 2.16505 1.32326 7.3031 6.01008 11.9899C10.6969 16.6767 15.8349 19.1375 17.4862 17.4862Z"
          fill="#0664FD"
        />
      </svg>
    </div>
  );
}
