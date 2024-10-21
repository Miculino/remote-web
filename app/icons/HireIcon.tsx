// React
import { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function HireIcon({
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
          d="M1.75 1.75928H12.75C14.9591 1.75928 16.75 3.55014 16.75 5.75928V22.3125H5.75C3.54086 22.3125 1.75 20.5216 1.75 18.3125V1.75928Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M22 14.3125H16.75V22.3125H18C20.2091 22.3125 22 20.5216 22 18.3125V14.3125Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
        <path
          d="M11.3339 9.94897H5.07617"
          stroke="var(--primary)"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M13.424 14.1228H5.07617"
          stroke="var(--primary)"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
