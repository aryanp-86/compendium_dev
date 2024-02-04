import React from "react";
import SvgComponent3 from "./SvgComponent3";

const Banner = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto  px-4 py-32 lg:flex lg:items-center lg:flex-col">
          <SvgComponent3 />
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Team Compendium
              <strong className="font-extrabold text-4xl mt-4 text-red-700 sm:block ">
                {" "}
                Editor-in-Chief: Ms. Swati Jadhav/Mr. Anand Magar
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed font-medium underline underline-offset-4">
              Volume 4 | Issue 1
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
