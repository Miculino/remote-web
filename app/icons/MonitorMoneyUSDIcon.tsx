// React
import React, { SVGProps } from "react";
// CLSX
import clsx from "clsx";

export default function MonitorMoneyUSDIcon({
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
          d="M14.174 8.60806C14.174 7.88769 13.59 7.30371 12.8696 7.30371H11.1305C10.4101 7.30371 9.82617 7.88769 9.82617 8.60806C9.82617 9.32843 10.4101 9.91241 11.1305 9.91241H12.3106"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M9.82617 11.2167C9.82617 11.9371 10.4101 12.5211 11.1305 12.5211H12.8696C13.59 12.5211 14.174 11.9371 14.174 11.2167C14.174 10.4964 13.59 9.91235 12.8696 9.91235H11.5653"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M12 6.78176V5.73828"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M12 14.0863V11.9993"
          stroke="black"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path d="M12 18.1741V22.0002" stroke="black" stroke-width="1.5"></path>
        <path d="M17 22.25H7" stroke="black" stroke-width="1.5"></path>
        <path
          d="M22.2812 18.2969V5.78125C22.2812 3.57211 20.4904 1.78125 18.2812 1.78125H12.9933H1.75V14.2969C1.75 16.506 3.54086 18.2969 5.75 18.2969H22.2812Z"
          stroke="black"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
