// React
import { SVGProps } from "react";

// CLSX
import clsx from "clsx";

export default function RocketShipIcon({
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
          d="M6.96997 9.69024C6.97104 7.3987 7.68773 5.16471 9.01997 3.30024C9.35849 2.82549 9.80554 2.43849 10.3239 2.17147C10.8422 1.90445 11.4169 1.76514 12 1.76514C12.5831 1.76514 13.1577 1.90445 13.676 2.17147C14.1944 2.43849 14.6414 2.82549 14.98 3.30024C16.3122 5.16471 17.0289 7.3987 17.03 9.69024V16.9702H6.96997V9.69024Z"
          stroke="var(--foreground)"
          stroke-width="1.5"
        ></path>
        <path
          d="M21.36 13.0102C21.2518 12.0325 20.7871 11.1289 20.0548 10.4722C19.3224 9.81544 18.3737 9.4516 17.39 9.4502H17.03V16.5202L22.09 19.6202L21.36 13.0202V13.0102Z"
          stroke="var(--foreground)"
          stroke-width="1.5"
        ></path>
        <path
          d="M2.6399 13.0102C2.74791 12.0342 3.21117 11.132 3.94143 10.4755C4.6717 9.819 5.61793 9.45406 6.5999 9.4502H6.9599V16.5202L1.8999 19.6202L2.6299 13.0202L2.6399 13.0102Z"
          stroke="var(--foreground)"
          stroke-width="1.5"
        ></path>
        <path
          d="M7.6499 19V23"
          stroke="var(--foreground)"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M12 19V23"
          stroke="var(--foreground)"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M16.3501 19V23"
          stroke="var(--foreground)"
          stroke-opacity="0.99"
          stroke-width="1.5"
        ></path>
        <path
          d="M11.9999 10.5398C12.3426 10.5398 12.682 10.4723 12.9987 10.3411C13.3154 10.21 13.6031 10.0177 13.8454 9.77537C14.0878 9.53301 14.2801 9.24529 14.4112 8.92863C14.5424 8.61197 14.6099 8.27257 14.6099 7.92982C14.6099 7.58707 14.5424 7.24768 14.4112 6.93102C14.2801 6.61436 14.0878 6.32664 13.8454 6.08428C13.6031 5.84191 13.3154 5.64966 12.9987 5.5185C12.682 5.38733 12.3426 5.31982 11.9999 5.31982C11.3077 5.31982 10.6438 5.59481 10.1543 6.08428C9.66487 6.57375 9.38989 7.23761 9.38989 7.92982C9.38989 8.62204 9.66487 9.2859 10.1543 9.77537C10.6438 10.2648 11.3077 10.5398 11.9999 10.5398Z"
          stroke="var(--foreground)"
          stroke-width="1.5"
        ></path>
      </svg>
    </div>
  );
}
