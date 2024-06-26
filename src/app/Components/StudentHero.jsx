"use client";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Lottie from "lottie-react";
import animation from "../../assets/achieve.json";
import SvgComponent5 from "./SvgComponent5";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "From HOD's Desk", href: "/hod" },
  { name: "Faculty Achievements", href: "/facultyAchievements" },
  { name: "Student Achievements", href: "/studentAchievements" },
  { name: "Compendium", href: "/compendium" },
];

export default function FacultyHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <div className="bg-white z-50 min-h-screen">
      <header
        className={`inset-x-0 top-0 fixed z-50 nav-link ${
          scroll ? "sticky" : "text-black"
        }`}
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
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-semibold leading-6 tracking-tight"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end rounded-full">
            <Link
              className="group relative inline-flex justify-center items-center overflow-hidden  px-8 py-3  focus:outline-none focus:ring bg-black text-white rounded-full"
              href="/v1/login"
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

              <span className="text-sm tracking-widest poppins-font font-extrabold rounded-xl transition-all group-hover:ms-4 text-center bg-black px-1 py-0.5 focus:outline-none">
                Log in
              </span>
            </Link>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
              <div className="-my-6 divide-y divide-gray-800">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/v1/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="relative  isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="flex items-start justify-start my-4">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <div className="col-span-1 flex flex-col items-start justify-center max-w-3xl">
              <SvgComponent5 />
              <h1 className="text-4xl font-bold bebas-font tracking-wider leading-normal  text-gray-900 lg:text-8xl lg:text-left text-center">
                Student Achievements
              </h1>
              <p className="mt-6 text-lg text-left leading-8 text-gray-600">
                Discover the shining stars of our Computer Engineering
                Department: Our exceptional Studetns, driving innovation and
                inspiring excellence.
              </p>
              <div className="mt-10 flex items-start justify-start gap-x-6">
                {/* <a
                  href="#"
                  className="rounded-md bg-black px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
                >
                  Read More
                </a> */}
              </div>
            </div>
            <div className="col-span-2 flex items-center justify-center">
              <Lottie
                animationData={animation}
                style={{
                  width: "1200px",
                  marginBottom: "40px",
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "start",
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
