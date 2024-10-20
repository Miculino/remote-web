// React
import { SVGProps } from "react";
// CLSX
import clsx from "clsx";

interface ReverseTechLogo extends SVGProps<SVGSVGElement> {
  pathStrokes?: string;
  pathFills?: string;
}

export default function ReverseTechLogo({
  pathFills,
  className,
  ...props
}: ReverseTechLogo) {
  return (
    <div className={clsx(className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width="180px"
        height="40px"
        viewBox="0 0 720.000000 160.000000"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        {...props}
      >
        <g
          transform="translate(0.000000,160.000000) scale(0.100000,-0.100000)"
          fill={pathFills}
          stroke="none"
        >
          <path
            d="M655 1585 c-342 -64 -603 -342 -647 -691 -46 -362 173 -718 518 -843 485 -176 1001 142 1066 655 67 528 -412 977 -937 879z m80 -785 l0 -305 -22 -3 c-33 -5 -375 283 -371 311 2 11 77 82 173 163 130 109 176 143 195 141 l25 -2 0 -305z m419 294 c9 -24 7 -577 -3 -592 -4 -8 -18 -12 -29 -10 -23 3 -357 274 -366 296 -3 6 -3 18 0 25 3 6 82 76 177 154 168 139 208 162 221 127z"
            fill={pathFills}
          ></path>
          <path
            d="M4537 1186 c-90 -34 -117 -85 -117 -226 0 -154 24 -192 148 -230 96 -30 102 -38 102 -132 0 -89 -10 -118 -43 -118 -38 0 -47 19 -47 102 l0 78 -80 0 -80 0 0 -78 c0 -91 11 -136 42 -170 40 -42 78 -56 158 -56 88 -1 140 22 180 81 23 34 25 44 25 167 0 106 -3 137 -18 163 -21 38 -81 75 -160 97 -66 19 -77 36 -77 120 0 65 16 89 55 84 30 -3 30 -3 33 -75 l3 -73 79 0 80 0 0 73 c-1 136 -51 194 -177 203 -45 3 -81 0 -106 -10z"
            fill={pathFills}
          ></path>
          <path
            d="M6357 1185 c-49 -17 -85 -50 -105 -95 -21 -44 -30 -482 -13 -574 24 -131 134 -193 273 -152 98 28 118 68 126 249 l5 127 -82 0 -81 0 0 -118 c0 -121 -6 -142 -40 -142 -9 0 -24 8 -33 18 -15 16 -17 51 -17 280 0 224 2 263 16 276 8 9 23 16 33 16 34 0 41 -21 41 -132 l0 -108 80 0 80 0 0 90 c0 124 -15 187 -54 226 -52 52 -149 68 -229 39z"
            fill={pathFills}
          ></path>
          <path
            d="M2240 776 l0 -416 80 0 80 0 0 145 0 145 29 0 c24 0 30 -5 35 -27 5 -25 36 -247 36 -258 0 -3 36 -5 81 -5 72 0 80 2 75 18 -2 9 -17 87 -32 173 l-27 157 22 44 c18 39 21 62 21 185 0 129 -2 143 -22 173 -47 69 -64 75 -229 78 l-149 4 0 -416z m226 270 c16 -12 20 -29 23 -105 5 -131 -11 -171 -65 -171 l-24 0 0 145 c0 145 0 145 23 145 13 0 32 -6 43 -14z"
            fill={pathFills}
          ></path>
          <path
            d="M2720 775 l0 -415 165 0 165 0 0 65 0 65 -85 0 -85 0 0 115 0 115 75 0 75 0 0 65 0 65 -75 0 -75 0 0 105 0 105 80 0 80 0 0 65 0 65 -160 0 -160 0 0 -415z"
            fill={pathFills}
          ></path>
          <path
            d="M3070 1172 c0 -10 22 -191 50 -403 27 -211 50 -390 50 -396 0 -10 31 -13 120 -13 78 0 120 4 120 11 0 6 23 185 50 399 28 214 50 396 50 404 0 13 -14 16 -78 16 l-78 0 -23 -287 c-24 -301 -32 -375 -43 -358 -3 6 -18 153 -34 328 l-28 317 -78 0 c-69 0 -78 -2 -78 -18z"
            fill={pathFills}
          ></path>
          <path
            d="M3550 775 l0 -415 165 0 165 0 0 65 0 65 -85 0 -85 0 0 115 0 115 75 0 75 0 0 65 0 65 -75 0 -75 0 0 105 0 105 85 0 85 0 0 65 0 65 -165 0 -165 0 0 -415z"
            fill={pathFills}
          ></path>
          <path
            d="M3950 775 l0 -415 75 0 75 0 0 145 0 145 34 0 33 0 20 -142 19 -143 77 -3 c58 -2 77 0 77 10 0 7 -13 87 -29 177 l-29 164 24 45 c22 41 24 57 24 171 0 156 -17 202 -90 239 -39 19 -59 22 -177 22 l-133 0 0 -415z m222 268 c15 -14 18 -32 18 -125 0 -95 -2 -110 -20 -128 -11 -11 -29 -20 -40 -20 -19 0 -20 7 -20 145 0 142 0 145 22 145 12 0 30 -7 40 -17z"
            fill={pathFills}
          ></path>
          <path
            d="M4900 775 l0 -415 160 0 160 0 0 65 0 64 -82 3 -83 3 -3 113 -3 112 81 0 80 0 0 65 0 65 -80 0 -80 0 0 105 0 105 85 0 85 0 0 65 0 65 -160 0 -160 0 0 -415z"
            fill={pathFills}
          ></path>
          <path
            d="M5410 1125 l0 -65 60 0 60 0 0 -350 0 -350 75 0 75 0 0 350 0 350 60 0 60 0 0 65 0 65 -195 0 -195 0 0 -65z"
            fill={pathFills}
          ></path>
          <path
            d="M5850 775 l0 -415 160 0 160 0 0 65 0 65 -85 0 -85 0 0 115 0 115 80 0 80 0 0 65 0 65 -80 0 -80 0 0 105 0 105 85 0 85 0 0 65 0 65 -160 0 -160 0 0 -415z"
            fill={pathFills}
          ></path>
          <path
            d="M6710 775 l0 -415 80 0 80 0 0 180 0 180 40 0 40 0 0 -180 0 -180 80 0 80 0 0 415 0 415 -80 0 -80 0 0 -170 0 -170 -40 0 -40 0 0 170 0 170 -80 0 -80 0 0 -415z"
            fill={pathFills}
          ></path>
        </g>
      </svg>
    </div>
  );
}
