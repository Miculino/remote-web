// React
import { SVGProps } from "react";
// CLSX
import clsx from "clsx";

interface Tele2Logo extends SVGProps<SVGSVGElement> {
  pathStrokes?: string;
  pathFills?: string;
}

export default function Tele2Logo({
  pathFills,
  className,
  ...props
}: Tele2Logo) {
  return (
    <div className={clsx(className)}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="355px"
        height="140px"
        xmlSpace="preserve"
        {...props}
      >
        <path
          fill={pathFills}
          d="M5,51.346V70.12l50.646-5.571v-20.32L5,51.346 M21.162,71.262v64.333h18.542V69.367L21.162,71.262 M62.486,43.268v92.327h19.538V40.521L62.486,43.268 M85.664,40.009v21.239l28.213-3.104V36.045L85.664,40.009 M85.664,77.056 v21.626l18.52-1.01v-22.21L85.664,77.056 M85.664,114.27v21.325h28.213v-22.176L85.664,114.27 M186.839,25.758v109.837h25.613 V22.158L186.839,25.758 M217.235,21.485V46.75l37.326-4.104V16.238L217.235,21.485 M217.235,65.751v25.733l24.465-1.336V63.656 L217.235,65.751 M217.235,110.293v25.302h37.326v-26.429L217.235,110.293 M121.342,34.994v100.601h22.256V31.865L121.342,34.994 M147.752,112.397v23.197h32.306v-24.172L147.752,112.397 M338.244,14.996c-8.095-7.648-19.964-10.785-32.946-8.92v28.022 c5.257-0.292,9.517,1.659,11.415,5.587c2.997,6.193-0.095,15.485-7.389,24.094c-11.258,13.285-41.195,40.477-41.195,40.477 l42.976-1.413c26.259-25.654,35.689-41.226,37.381-60.661C349.375,31.9,345.643,21.993,338.244,14.996 M350,135.595v-29.321 l-87.168,2.626 M262.832,108.899l0.009,26.695H350 M300.287,6.705c-25.323,5.393-37.758,24.023-36.323,54.422l27-2.396 c-1.23-17.174,4.023-21.248,9.336-23.488L300.287,6.705"
        />
      </svg>
    </div>
  );
}
