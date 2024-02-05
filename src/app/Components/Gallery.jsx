"use client";
import React from "react";

const Gallery = () => {
  return (
    <>
      <div className="grid grid-cols-6 bg-black gallery overflow-y-clip">
        <div className="flex items-center justify-center max-w-sm h-screen m-auto lg:col-span-2 img1">
          <article className="relative overflow-hidden rounded-lg shadow transition border">
            <img
              alt="Office"
              src="https://i.ibb.co/XDx7jYW/2.png"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64 p-16">
              <div className="pt-16">
                <h3 className="mt-0.5 text-xl text-center font-extrabold tracking-wide text-white">
                  Shri. Bharat Agarwal
                </h3>

                <p className="mt-2 line-clamp-3 text-center font-medium text-base/relaxed text-white/95">
                  Managing Trustee, BRACT, Pune
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="flex items-center justify-center max-w-lg h-screen m-auto lg:col-span-2 lg:pt-32 img2">
          <article className="relative overflow-hidden rounded-lg shadow transition  border">
            <img
              alt="Office"
              src="https://i.ibb.co/fG0wJZ4/3.png"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64 p-16">
              <div className="pt-16">
                <h3 className="mt-0.5 text-xl text-center font-extrabold text-white">
                  Prof. (Dr) Rajesh Jalnekar
                </h3>

                <p className="mt-2 line-clamp-3 text-center font-medium text-base/relaxed text-white/95">
                  Director, VIT, Pune
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="flex items-center justify-center max-w-sm h-screen m-auto lg:col-span-2 lg:pt-64 img3">
          <article className="relative overflow-hidden rounded-lg shadow transition border">
            <img
              alt="Office"
              src="https://i.ibb.co/f0Pbtvn/Untitled.png"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64 p-16">
              <div className="pt-16">
                <h3 className="mt-0.5 text-xl text-center font-extrabold text-white">
                  Shri. Rajkumarji Agarwal
                </h3>

                <p className="mt-2 line-clamp-3 text-center font-medium text-base/relaxed text-white/95">
                  Chairman, BRACT, Pune
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Gallery;
