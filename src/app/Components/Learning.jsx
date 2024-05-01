"use client";
import React from "react";
import Lottie from "lottie-react";
import animation from "../../assets/anime.json";

const Learning = () => {
  return (
    <section className="mt-28 learning overflow-y-clip">
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto text-center overflow-y-clip">
          <h1 className="text-3xl font-extrabold  bebas-font  lg:text-5xl learning1">
            Comp Bit and Bytes Editorial
          </h1>
          <strong className="font-extrabold tracking-tighter text-5xl mt-3 text-red-700 sm:block learning2">
            {" "}
            Collaborative Learning to Strengthen Outcomes
          </strong>

          <p className="mt-16 text-gray-800 font-medium tracking-wide max-w-4xl text-justify learning3">
            Collaborative learning is a strategy used within special interest
            groups of learners & aims to improve their learning experience. This
            type of learning strategy uses small special-interest group tasks
            &activities as a learning experience. Each member is responsible for
            learning new information and skills, and at the same time, assisting
            teammates in learning.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1">
          <div className="mt-8 max-w-4xl grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2  mr-auto lg:col-span-2 col-span-1">
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 block1"
              href="/services/digital-campaigns col-span-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-gray-800">
                Formal Collaborative Learning
              </h2>

              <p className="mt-1 text-sm text-gray-800">
                It involves the assignment of tasks &projects to a team by an
                employer. The team members have a clear structure of what is to
                be done &stay together until the project is completed. It can
                range from a few hours to several weeks.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 block2 col-span-1"
              href="/services/digital-campaigns"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-gray-800">
                Informal Collaborative Learning :
              </h2>

              <p className="mt-1 text-sm text-gray-800">
                This type of learning involves quickly forming teams for short
                periods to complete a small task at hand. They require no prior
                planning &have very little structure. They can help bring
                closure to a day’s work or a small project.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 col-span-1 lg:col-span-2 block3"
              href="/services/digital-campaigns"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-gray-800">
                Group-Based Learning
              </h2>

              <p className="mt-1 text-sm text-gray-800">
                It is the most common type of Collaborative learning implemented
                in organizations. It involves long-term special interest groups
                that can last up to a year or more with members giving each
                other support, encouragement, &assistance.
              </p>
            </a>
          </div>
          <div className="ml-auto lg:flex md:flex hidden items-center justify-center">
            <Lottie animationData={animation} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
