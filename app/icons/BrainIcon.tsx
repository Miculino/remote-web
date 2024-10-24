// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function BrainIcon({
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
          d="M11.9999 12.1025V18.9C11.9999 20.8288 10.4363 22.3924 8.50751 22.3924H8.39148C6.52678 22.3924 5.01514 20.8807 5.01514 19.016C5.01514 17.1513 6.52678 15.6397 8.39149 15.6397H8.46851"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M11.9999 12.102V5.30463C11.9999 3.37585 10.4363 1.81226 8.50751 1.81226H8.39148C6.52678 1.81226 5.01514 3.32391 5.01514 5.18861C5.01514 7.05331 6.52678 8.56496 8.39149 8.56496H8.46851"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M5.68467 12.1029H5.2792C3.84946 12.1029 2.69043 10.9438 2.69043 9.51406C2.69043 8.08433 3.84946 6.92529 5.2792 6.92529H5.68467"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M5.68467 17.2798H5.2792C3.84946 17.2798 2.69043 16.1208 2.69043 14.691C2.69043 13.2613 3.84946 12.1023 5.2792 12.1023H5.68467"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M12 12.1025V18.9C12 20.8288 13.5636 22.3924 15.4924 22.3924H15.6084C17.4731 22.3924 18.9847 20.8807 18.9847 19.016C18.9847 17.1513 17.4731 15.6397 15.6084 15.6397H15.5314"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M12 12.102V5.30463C12 3.37585 13.5636 1.81226 15.4924 1.81226H15.6084C17.4731 1.81226 18.9847 3.32391 18.9847 5.18861C18.9847 7.05331 17.4731 8.56496 15.6084 8.56496H15.5314"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M18.3154 12.1029H18.7208C20.1506 12.1029 21.3096 10.9438 21.3096 9.51406C21.3096 8.08433 20.1506 6.92529 18.7208 6.92529H18.3154"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M18.3154 17.2798H18.7208C20.1506 17.2798 21.3096 16.1208 21.3096 14.691C21.3096 13.2613 20.1506 12.1023 18.7208 12.1023H18.3154"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
