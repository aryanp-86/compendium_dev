import React from "react";

const YourSvgComponent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlnsSvgjs="http://svgjs.dev/svgjs"
      viewBox="0 0 1422 800"
      className="absolute -z-10"
    >
      <defs>
        <radialGradient id="cccircular-grad" r="50%" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#cb839a" stopOpacity="0.5"></stop>
          <stop
            offset="50%"
            stopColor="hsl(341, 100%, 85%)"
            stopOpacity="0"
          ></stop>
          <stop offset="100%" stopColor="#ffe6fe" stopOpacity="0.5"></stop>
        </radialGradient>
      </defs>
      <g fill="url(#cccircular-grad)">
        <circle r="484" cx="711" cy="400"></circle>
        <circle r="440" cx="711" cy="400"></circle>
        <circle r="396" cx="711" cy="400"></circle>
        <circle r="352" cx="711" cy="400"></circle>
        <circle r="308" cx="711" cy="400"></circle>
        <circle r="264" cx="711" cy="400"></circle>
        <circle r="220" cx="711" cy="400"></circle>
        <circle r="176" cx="711" cy="400"></circle>
        <circle r="132" cx="711" cy="400"></circle>
        <circle r="88" cx="711" cy="400"></circle>
      </g>
    </svg>
  );
};

export default YourSvgComponent;
