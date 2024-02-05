"use client";
import React from "react";
import SvgComponent4 from "./SvgComponent4";

const Strategies = () => {
  return (
    <section className="text-gray-800 strategy overflow-y-clip">
      <SvgComponent4 />
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 flex flex-col items-center justify-center overflow-y-clip">
        <div className="text-center text-red-700 ">
          <h2 className="text-3xl font-bold sm:text-4xl strategy1">
            Collaborative Learning Strategies
          </h2>

          <p className="mt-4 text-gray-800 font-bold text-xl text-justify max-w-3xl strategy2">
            If you are trying to use the same collaborative learning strategies
            repeatedly with no results, try some of these with clear examples of
            how you can implement them:
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex items-start gap-4 bg-gray-50 rounded-xl border border-gray-800 p-8 shadow-xl boxl">
            <span className="shrink-0 rounded-lg bg-gray-200 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 className="text-lg text-red-700 font-extrabold ">
                Forced debate
              </h2>

              <p className="mt-1 text-sm text-gray-800">
                This strategy works by having two parties go head-to-head in a
                debate. The members form two groups, with one opposing and the
                other supporting the proposition.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-gray-50 rounded-xl border border-gray-800 p-8 shadow-xl boxc">
            <span className="shrink-0 rounded-lg bg-gray-200 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 className="text-lg text-red-700 font-extrabold ">
                Write around
              </h2>

              <p className="mt-1 text-sm text-gray-800">
                This strategy involves groups discussing a topic that each
                member has had access to, maybe through watching a video,
                listening to a speaker during a meeting.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-gray-50 rounded-xl border border-gray-800 p-8 shadow-xl boxr">
            <span className="shrink-0 rounded-lg bg-gray-200 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 className="text-lg text-red-700 font-extrabold ">
                Build a collaborative community
              </h2>

              <p className="mt-1 text-sm text-gray-800">
                An organization should provide many opportunities for groups to
                teach and learn from each other. A collaborative community
                creates an environment that enhances working together to solve
                problems.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-gray-50 rounded-xl border border-gray-800 p-8 shadow-xl boxl">
            <span className="shrink-0 rounded-lg bg-gray-200 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 className="text-lg text-red-700 font-extrabold ">
                {" "}
                Solve problems across groups
              </h2>

              <p className="mt-1 text-sm text-gray-800">
                Having a Collaborative community enables you to bring a few
                groups together & provide them with a problem to solve. You can
                get a few groups &give each a challenge as to what changes are
                best for an existing project.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-gray-50 rounded-xl border border-gray-800 p-8 shadow-xl boxc">
            <span className="shrink-0 rounded-lg bg-gray-200 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 className="text-lg text-red-700 font-extrabold">
                Share concepts between groups
              </h2>

              <p className="mt-1 text-sm text-gray-800">
                Every group contain members having specialized expertise
                &experiences. Moreover, the different groups can also share some
                of their concepts,ideas, &best practices with other groups;
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-gray-50 rounded-xl border border-gray-800 p-8 shadow-xl boxr">
            <span className="shrink-0 rounded-lg bg-gray-200 p-4">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 className="text-lg text-red-700 font-extrabold">
                Lorem, ipsum dolor.
              </h2>

              <p className="mt-1 text-sm text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                cumque tempore est ab possimus quisquam reiciendis tempora
                animi! Quaerat, saepe?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;
