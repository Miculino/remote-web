// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function NavbarRemoteTalentIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <div className={clsx(className)}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M16.9513 15.8666C15.6601 17.1584 14.0516 18.0875 12.2874 18.5605C10.5232 19.0335 8.6656 19.0336 6.90133 18.561C6.42868 16.7967 6.42872 14.9391 6.90146 13.1749C7.37419 11.4107 8.30296 9.80194 9.59444 8.51035C10.8859 7.21876 12.4946 6.28981 14.2589 5.81685C16.0231 5.3439 17.8808 5.3436 19.6452 5.81598C20.1185 7.58025 20.1187 9.43807 19.6458 11.2024C19.1729 12.9668 18.2435 14.5755 16.9513 15.8666Z"
          fill="#F3B3BF"
        />
        <path
          d="M14.451 11.3689C13.9709 13.1628 13.0268 14.7987 11.7138 16.112C10.4008 17.4254 8.76519 18.3699 6.97139 18.8506C5.6583 17.5374 4.71399 15.9017 4.23335 14.1079C3.75271 12.3141 3.75268 10.4254 4.23326 8.63153C4.71383 6.83767 5.65809 5.20187 6.97114 3.88851C8.28419 2.57514 9.91978 1.63048 11.7136 1.14944C13.0272 2.46234 13.9719 4.09811 14.4525 5.89213C14.933 7.68615 14.9325 9.57512 14.451 11.3689Z"
          fill="#E03D5C"
        />
      </svg>
    </div>
  );
}
