import React from "react";

const SvgComponent7 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsxlink="http://www.w3.org/1999/xlink"
      xmlnssvgjs="http://svgjs.dev/svgjs"
      viewBox="0 0 800 800"
      className="absolute h-5/6 mt-8"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cccloud-grad">
          <stop
            stop-color="hsl(162, 100%, 58%)"
            stop-opacity="1"
            offset="0%"
          ></stop>
          <stop
            stop-color="hsl(270, 73%, 53%)"
            stop-opacity="1"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <g
        fill="url(#cccloud-grad)"
        stroke-width="7"
        stroke="hsl(230, 55%, 40%)"
        id="cloud"
      >
        <path
          d="M 353.55648082694336 388.0753180774534 A  50 50 0 1 1 627.8242523576494 183.47280384949465 A  50 50 0 1 1 356.6945651606875 385.56486288456585 A  50 50 0 1 1 300 250 A  50 50 0 1 1 353.55648082694336 388.0753180774534 Z"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
    </svg>

    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   version="1.1"
    //   xmlnsxlink="http://www.w3.org/1999/xlink"
    //   xmlnssvgjs="http://svgjs.dev/svgjs"
    //   viewBox="0 0 800 800"
    // >
    //   <defs>
    //     <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cccloud-grad">
    //       <stop
    //         stopColor="hsl(188, 82%, 49%)"
    //         stopOpacity="1"
    //         offset="0%"
    //       ></stop>
    //       <stop
    //         stopColor="hsl(230, 55%, 70%)"
    //         stopOpacity="1"
    //         offset="100%"
    //       ></stop>
    //     </linearGradient>
    //   </defs>
    //   <g
    //     fill="url(#cccloud-grad)"
    //     strokeWidth="11"
    //     stroke="hsl(230, 55%, 40%)"
    //     id="cloud"
    //   >
    //     <path
    //       d="M 353.55648082694336 388.0753180774534 A  50 50 0 1 1 627.8242523576494 183.47280384949465 A  50 50 0 1 1 356.6945651606875 385.56486288456585 A  50 50 0 1 1 300 250 A  50 50 0 1 1 353.55648082694336 388.0753180774534 Z"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     ></path>
    //   </g>
    // </svg>
  );
};

export default SvgComponent7;
