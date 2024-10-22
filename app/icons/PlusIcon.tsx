// React
import { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function PlusIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <div className={clsx(className)}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        {...props}
      >
        <path
          d="M4 11.8599H19.719"
          stroke="var(--foreground)"
          stroke-width="1.5"
        ></path>
        <path
          d="M11.8589 4V19.719"
          stroke="var(--foreground)"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
