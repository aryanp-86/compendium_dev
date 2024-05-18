"use client";


import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/app/ui/Spotlight";
import { Meteors } from "@/app/ui/meteors";
import Loader from "@/app/Components/Loader";

export default function LoginForm() {
  const navigation = [

  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setisLoading(false);
        setError("Invalid Credentials");
        return;
      }
      setisLoading(false);
      router.replace("admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="h-screen bg-black w-full items-center justify-center flex ">
          <Loader />
        </div>
      )}
       {!isLoading && (<div className="h-screen w-full bg-black bg-grid-white/[0.2]  relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <header
                className="inset-x-0 top-0 z-20 nav-link text-white fixed bg-black"

            >
                <nav
                    className="flex items-center justify-between p-6 lg:px-8"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">VIT Logo</span>
                            <Image
                                src="https://i.ibb.co/9whb0wS/vit-logo.png"
                                width={32}
                                height={32}
                                alt="vit-logo"
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href}>
                                <p className="text-base font-semibold leading-6 tracking-tight">
                                    {item.name}
                                </p>
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link
                            className="group relative inline-flex justify-center items-center overflow-hidden rounded border border-current px-8 py-3  focus:outline-none focus:ring bg-white text-black"
                            href="/"
                           
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

                            <span className="text-sm tracking-widest poppins-font font-extrabold rounded-xl transition-all group-hover:ms-4 text-center bg-white px-1 py-0.5 focus:outline-none">
                                Home
                            </span>
                        </Link></div>
                </nav>
                <Dialog
                    as="div"
                    className="lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <Image
                                src="https://i.ibb.co/9whb0wS/vit-logo.png"
                                width={32}
                                height={32}
                                alt="vit-logo"
                            />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link href={item.href}>
                                            <a className="text-base font-semibold leading-6 tracking-tight">
                                                {item.name}
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="/"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white"
                                    >
                                        Home
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="aryan@vit.edu(Only vit.edu mails)"
                  className="mt-2 w-full border-none bg-transparent p-0 focus:border-transparent text-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                />
              </label>
              <label
                htmlFor="UserEmail"
                className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-sm poppins-font font-bold text-white">
                  {" "}
                  Password{" "}
                </span>

                <input
                  type="password"
                  id="UserPass"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter a password"
                  className="mt-2 w-full border-none p-0 focus:border-transparent focus:outline-none text-gray-400 focus:ring-0 sm:text-sm bg-transparent"
                />
              </label>

              <button
                className="group relative inline-flex justify-center items-center overflow-hidden rounded border border-current px-8 py-3 text-black focus:outline-none focus:ring active:text-red-500 bg-white"
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

                <span className="text-sm tracking-widest poppins-font font-bold transition-all group-hover:ms-4 text-center text-black">
                  Login
                </span>
              </button>
              {error && (
                <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                  {error}
                </div>
              )}

              {/* <Link
                className="text-sm text-gray-500 mt-3 poppins-font text-right"
                href={"/v1/register"}
              >
                Don't have an account?{" "}
                <span className="underline">Register</span>
              </Link> */}
            </form>

            <Meteors number={20} />
          </div>
        </div>
      </div>)}
    </>
  );
}
