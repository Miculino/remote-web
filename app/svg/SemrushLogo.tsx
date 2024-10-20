// React
import { SVGProps } from "react";
// CLSX
import clsx from "clsx";

interface SemrushLogo extends SVGProps<SVGSVGElement> {
  pathStrokes?: string;
  pathFills?: string;
}

export default function SemrushLogo({
  pathFills,
  className,
  ...props
}: SemrushLogo) {
  return (
    <div className={clsx(className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="144"
        height="20"
        viewBox="0 0 144 20"
        fill="none"
        aria-hidden="true"
        {...props}
      >
        <g clip-path="url(#clip0_13608_34092)">
          <path
            d="M99.4197 7.9325C99.4197 5.57064 97.9435 3.87305 95.2126 3.87305H86.208V16.1252H89.1603V11.9182H92.6293L96.0245 16.1252H99.3459V15.83L96.0245 11.8443C98.165 11.4015 99.4197 9.85152 99.4197 7.9325ZM94.8436 9.40867H89.1603V6.38253H94.8436C95.8769 6.38253 96.5412 6.973 96.5412 7.9325C96.615 8.89201 95.9507 9.40867 94.8436 9.40867Z"
            fill={pathFills}
          ></path>
          <path
            d="M144 3.80078H141.269V8.4507H133.815V3.80078H130.862V16.053H133.815V11.2554H141.269V16.053H144V3.80078Z"
            fill={pathFills}
          ></path>
          <path
            d="M78.3105 3.80078L75.0629 14.0601H74.9153L71.5939 3.80078H66.3535V16.053H69.1582V6.01503H69.3058L72.5534 16.053H77.0557L80.3771 6.01503H80.5247V16.053H83.4032V3.80078H78.3105Z"
            fill={pathFills}
          ></path>
          <path
            d="M46.2043 8.8181C45.171 8.7443 43.252 8.52287 42.1449 8.44906C41.1116 8.37525 40.5211 8.00621 40.5211 7.34194C40.5211 6.67766 41.1854 6.16101 43.6949 6.16101C45.9091 6.16101 47.9757 6.67766 49.8209 7.48955V4.75865C48.0495 3.87295 46.0567 3.50391 43.5472 3.50391C40.0783 3.50391 37.6426 4.98007 37.6426 7.41575C37.6426 9.48238 39.0449 10.6633 41.9235 10.9585C42.9568 11.1062 44.7282 11.2538 45.9091 11.3276C47.2377 11.4014 47.6067 11.8442 47.6067 12.4347C47.6067 13.2466 46.6472 13.7633 44.3591 13.7633C41.9973 13.7633 39.5616 12.9514 37.7902 11.9181V14.7228C39.1926 15.6823 41.5544 16.4204 44.2853 16.4204C48.0495 16.4204 50.4852 14.9442 50.4852 12.3609C50.4852 10.3681 49.2305 9.11334 46.2043 8.8181Z"
            fill={pathFills}
          ></path>
          <path
            d="M52.4775 3.80078V16.053H63.844V13.5435H55.2823V11.034H63.6964V8.52451H55.2823V6.31026H63.844V3.80078H52.4775Z"
            fill={pathFills}
          ></path>
          <path
            d="M124.737 8.8181C123.703 8.7443 121.784 8.52287 120.677 8.44906C119.644 8.37525 119.053 8.00621 119.053 7.34194C119.053 6.67766 119.718 6.16101 122.227 6.16101C124.441 6.16101 126.508 6.60386 128.353 7.48955V4.75865C126.582 3.87295 124.589 3.50391 122.079 3.50391C118.61 3.50391 116.175 4.98007 116.175 7.41575C116.175 9.48238 117.577 10.6633 120.456 10.9585C121.489 11.1062 123.26 11.2538 124.441 11.3276C125.77 11.4014 126.139 11.8442 126.139 12.4347C126.139 13.2466 125.179 13.7633 122.891 13.7633C120.529 13.7633 118.094 12.9514 116.322 11.9181V14.7228C117.725 15.6823 120.087 16.4204 122.818 16.4204C126.582 16.4204 129.017 14.9442 129.017 12.3609C129.017 10.3681 127.689 9.11334 124.737 8.8181Z"
            fill={pathFills}
          ></path>
          <path
            d="M111.229 3.80078V10.0745C111.229 12.4364 109.753 13.7649 107.613 13.7649C105.399 13.7649 103.996 12.5102 103.996 10.0745V3.80078H101.044V9.77925C101.044 14.2078 103.849 16.422 107.613 16.422C111.303 16.422 114.108 14.2816 114.108 9.92687V3.80078H111.229Z"
            fill={pathFills}
          ></path>
          <path
            d="M27.6043 9.85176C27.6043 10.4422 27.3091 10.516 26.571 10.516C25.7591 10.516 25.6115 10.3684 25.5377 9.77795C25.3901 8.22798 24.3567 6.89943 22.5853 6.82562C22.0687 6.75181 21.9211 6.60419 21.9211 5.86611C21.9211 5.20184 21.9949 4.9066 22.5115 4.9066C25.4639 4.98041 27.6043 7.41609 27.6043 9.85176ZM31.959 9.85176C31.959 5.27564 28.859 0.404297 21.6258 0.404297H7.38083C7.0856 0.404297 6.86417 0.551913 6.86417 0.847147C6.86417 0.994763 6.93798 1.14238 7.0856 1.21619C7.60226 1.65904 8.34034 2.10189 9.37365 2.61855C10.3332 3.1352 11.1451 3.43044 11.8831 3.72567C12.1784 3.87329 12.326 4.0209 12.326 4.16852C12.326 4.38995 12.1784 4.61137 11.8093 4.61137H0.516658C0.147617 4.53756 0 4.75899 0 4.98041C0 5.20184 0.0738083 5.34945 0.221425 5.49707C1.10712 6.45658 2.58329 7.63751 4.72373 8.96606C6.56894 10.147 8.9308 11.4017 10.776 12.2874C11.0712 12.4351 11.2189 12.5827 11.2189 12.8041C11.2189 13.0255 11.0712 13.1731 10.7022 13.1731H5.46181C5.16658 13.1731 5.01896 13.3207 5.01896 13.5422C5.01896 13.6898 5.09277 13.8374 5.24039 13.985C6.42132 15.0921 8.34034 16.1993 10.8498 17.3064C14.245 18.7088 17.6402 19.5945 21.4782 19.5945C28.7852 19.5945 31.959 14.1326 31.959 9.85176ZM22.4377 16.4207C18.8949 16.4207 15.8688 13.5422 15.8688 9.85176C15.8688 6.30896 18.8211 3.43044 22.4377 3.43044C26.1281 3.43044 29.0067 6.30896 29.0067 9.85176C29.0067 13.4684 26.1281 16.4207 22.4377 16.4207Z"
            fill={pathFills}
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_13608_34092">
            <rect
              width="144"
              height="19.1902"
              fill="white"
              transform="translate(0 0.404297)"
            ></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
