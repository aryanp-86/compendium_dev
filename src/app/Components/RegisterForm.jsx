"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/app/ui/Spotlight";
import { Meteors } from "@/app/ui/meteors";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit1 = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/v1/login");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };
  const schema = yup.object().shape({
    UserName: yup
      .string()
      .matches(/^[A-Za-z\s]+$/, "Name can only contain alphabets and spaces")
      .min(5, "Name should be at least 5 characters!")
      .required("Name is required!"),
    UserEmail: yup
      .string()
      .email("Invalid email!!")
      .matches(
        /^[A-Za-z0-9._%+-]+@vit\.edu$/,
        "Email must be from the @vit.edu domain"
      )
      .required("Email is required!"),
    UserPass: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <div className="h-screen w-full bg-black bg-grid-white/[0.2]  relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" w-full relative max-w-sm">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
          <h1 className="font-bold text-xl text-white text-center mb-4 relative z-50">
            Bits and Bytes
          </h1>
          <form
            onSubmit={handleSubmit(handleSubmit1)}
            className="flex flex-col gap-3"
          >
            <label
              htmlFor="UserEmail"
              className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <span className="text-sm poppins-font font-bold text-white">
                {" "}
                Name{" "}
              </span>

              <input
                type="text"
                id="UserName"
                {...register("UserName", {
                  value: name,
                  onChange: (e) => setName(e.target.value),
                })}
                placeholder="Enter full name"
                className="mt-2 w-full text-gray-400 border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
            </label>
            <label
              htmlFor="UserEmail"
              className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <span className="text-sm poppins-font font-bold text-white">
                {" "}
                Email{" "}
              </span>

              <input
                type="email"
                id="UserEmail"
                {...register("UserEmail", {
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                })}
                placeholder="Ex.aryan@vit.edu(Only vit.edu mails)"
                className="mt-2 w-full border-none bg-transparent p-0 focus:border-transparent text-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
              />
            </label>
            <label
              htmlFor="UserPass"
              className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <span className="text-sm poppins-font font-bold text-white">
                {" "}
                Password{" "}
              </span>

              <input
                type="password"
                id="UserPass"
                {...register("UserPass", {
                  value: password,
                  onChange: (e) => setPassword(e.target.value),
                })}
                placeholder="Enter a password"
                className="mt-2 w-full text-gray-400 border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm bg-transparent"
              />
            </label>

            <button
              className="group relative inline-flex justify-center items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 bg-[#3a404c]"
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

              <span className="text-sm tracking-widest poppins-font font-bold transition-all group-hover:ms-4 text-center text-white">
                Login
              </span>
            </button>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}

            <Link
              className="text-sm text-gray-500 mt-3 poppins-font text-right"
              href={"/v1/login"}
            >
              Already have an account? <span className="underline">Login</span>
            </Link>
          </form>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
