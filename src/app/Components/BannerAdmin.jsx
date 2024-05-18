import React from "react";

const BannerAdmin = (props) => {
  return (
    <div className="lg:mt-12 mt-20 text-center z-50 bg-transparent text-white">
      <div className="px-4 py-8 sm:py-12 lg:px-8 bg-transparent">
        <div className="sm:flex sm:items-center sm:justify-center">
          <div className=" text-center">
            <h1 className="text-2xl poppins-font font-bold text-white lg:text-4xl">
              Welcome Back, {props.name}!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAdmin;
