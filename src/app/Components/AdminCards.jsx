"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

export function AdminCards(props) {
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const resUserDelete = await fetch("api/admin", {
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({  }),
  //       });

  //       const { user } = await resUserExists.json();

  //       if (user) {
  //         setError("User already exists.");
  //         return;
  //       }

  //       const res = await fetch("api/register", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           name,
  //           email,
  //           password,
  //         }),
  //       });

  //       if (res.ok) {
  //         const form = e.target;
  //         form.reset();
  //         router.push("/v1/login");
  //       } else {
  //         console.log("User registration failed.");
  //       }
  //     } catch (error) {
  //       console.log("Error during registration: ", error);
  //     }
  //   };
  return (
    <div className="flex items-center justify-center flex-col">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
        <Image
          src={props.photo}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          {props.title}
        </p>

        <p className="text-sm text-white text-wrap overflow-clip">
          {props.content}
        </p>
        <div className="flex items-center justify-between">
          <button
            className="group relative inline-flex justify-center items-center overflow-hidden rounded border border-current px-8 py-3  focus:outline-none focus:ring bg-green-500 text-black mt-4"
            href="#"
          >
            <span className="absolute -start-full transition-all group-hover:start-4">
              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-sm tracking-widest poppins-font font-extrabold transition-all group-hover:ms-4 text-center">
              Edit
            </span>
          </button>
          <button
            className="group relative inline-flex justify-center items-center overflow-hidden rounded border border-current px-8 py-3  focus:outline-none focus:ring bg-red-500 text-black mt-4"
            href="#"
          >
            <span className="absolute -start-full transition-all group-hover:start-4">
              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-sm tracking-widest poppins-font font-extrabold transition-all group-hover:ms-4 text-center">
              Delete
            </span>
          </button>
        </div>
      </BackgroundGradient>
    </div>
  );
}
