// React
import { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function MinusIcon({
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
          d="M3 12H20.5"
          stroke="var(--foreground)"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
