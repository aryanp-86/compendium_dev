"use client";
import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SvgComponent5 from "../Components/SvgComponent5";
import Link from "next/link";
import { LampDemo } from "@/app/ui/lamp";
import { CardHover } from "../Components/CardHover";
import Footer from "../Components/Footer";
const navigation = [
    { name: "Home", href: "/" },
    { name: "From HOD's Desk", href: "/hod" },
    { name: "Faculty Achievements", href: "/facultyAchievements" },
    { name: "Compendium", href: "/compendium" },
];
const Hod = () => {
    const [scroll, setScroll] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10);
        });
    }, []);
    return (

        <div className="hod w-full overflow-y-clip bg-black">
            <header
                className={`inset-x-0 top-0 z-50 nav-link ${scroll ? "sticky" : "text-white bg-black"
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
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
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
                            className="group relative inline-flex justify-center items-center overflow-hidden  px-8 py-3  focus:outline-none focus:ring bg-white text-black rounded-full"
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

                            <span className="text-sm tracking-widest poppins-font font-extrabold rounded-xl transition-all group-hover:ms-4 text-center bg-white px-1 py-0.5 focus:outline-none">
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
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1  lg:h-screen">
                <div className="lg:h-3/4 lg:col-span-1 md:col-span-1 md:-mx-6 col-span-1 flex items-center justify-center bg-slate-950">
                    <CardHover />
                </div>
                <div className="lg:col-span-2 lg:max-h-[80rem] md:col-span-2 md:mx-6 col-span-1">
                    <LampDemo />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Hod;
