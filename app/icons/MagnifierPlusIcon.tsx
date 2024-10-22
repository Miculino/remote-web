// React
import { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function MagnifierPlusIcon({
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
          d="M18.86 15.4401L19.43 14.2001C19.9777 13.0251 20.2543 11.742 20.2394 10.4458C20.2244 9.14952 19.9183 7.87319 19.3437 6.71116C18.769 5.54913 17.9405 4.53112 16.9195 3.73239C15.8984 2.93367 14.7109 2.37466 13.4447 2.0967C12.1785 1.81873 10.866 1.82892 9.60426 2.12651C8.34253 2.42409 7.16382 3.00147 6.15528 3.81595C5.14674 4.63043 4.33416 5.66118 3.77763 6.83199C3.22109 8.0028 2.93483 9.28373 2.94001 10.5801C2.94479 11.9184 3.26078 13.2373 3.86301 14.4325C4.46524 15.6278 5.3372 16.6665 6.40999 17.4667C7.48277 18.267 8.72697 18.8067 10.0443 19.0433C11.3615 19.2799 12.7158 19.2069 14 18.8301L15.39 18.4301C16.55 18.0801 17.81 18.4201 18.64 19.2901L21.83 22.6301"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M12 6.6499V14.9999"
          stroke="var(--primary)"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M16.1701 10.8301H7.83008"
          stroke="var(--primary)"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}