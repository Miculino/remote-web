// React
import { SVGProps } from "react";
// CLSX
import clsx from "clsx";

interface ArrowIconProps extends SVGProps<SVGSVGElement> {
  pathStrokes: string;
}

export default function ArrowIcon({
  pathStrokes,
  className,
  ...props
}: ArrowIconProps) {
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
        <path d="M18.71 12.23H5" stroke={pathStrokes} stroke-width="1.5"></path>
        <path
          d="M11.8501 5.37012C13.3901 8.05012 18.7101 12.2301 18.7101 12.2301C18.7101 12.2301 13.3901 16.4101 11.8501 19.0901"
          stroke={pathStrokes}
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
