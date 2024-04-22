import React from "react";

const BannerAdmin = (props) => {
  return (
    <header>
      <div className="px-4 py-8 sm:py-12 lg:px-8 bg-transparent">
        <div className="sm:flex sm:items-center sm:justify-center">
          <div className="text-left">
            <h1 className="text-2xl poppins-font font-bold text-white lg:text-4xl">
              Welcome Back, {props.name}!
            </h1>

            <p className="mt-1.5 text-lg text-gray-500"></p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BannerAdmin;
