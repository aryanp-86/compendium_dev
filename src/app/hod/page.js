"use client";
import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SvgComponent5 from "../Components/SvgComponent5";
import Link from "next/link";
import { LampDemo } from "../ui/lamp";
import { CardHover } from "../Components/CardHover";
const navigation = [
    { name: "Home", href: "/" },
    { name: "From HOD's Desk", href: "/hod" },
    { name: "Faculty Achievements", href: "/facultyAchievements" },
    { name: "Student Achievements", href: "#" },
    { name: "Compendium", href: "#" },
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
        // <img src="https://i.ibb.co/47yyLMS/Untitled.jpg" alt="Untitled" border="0"></img>
        <div className="hod w-full">
            <header
                className={`inset-x-0 h-20 text-white bg-black top-0 z-50 nav-link ${scroll ? "sticky" : ""
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
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
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
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
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
                                        href="#"
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
            {/* <section className="overflow-hidden mt-16 ">
                <div className="mx-auto px-4 py-2 lg:flex lg:items-center lg:flex-col  rounded-2xl">
                    <div className="mx-auto text-center overflow-y-clip">
                        <h1 className="bebas-font tracking-widest text-5xl font-extrabold lg:text-8xl mt-8">
                            From HOD's Desk
                        </h1>
                    </div>
                </div>
            </section> */}
            <div className="grid grid-cols-3">
                <div className="h-3/4 col-span-1 flex items-center justify-center bg-slate-950">
                    <CardHover />
                </div>
                <div className="col-span-2">
                    <LampDemo />
                </div>
            </div>
            {/* 
            <div className="flex flex-col max-w-lg mt-12 items-center justify-center">
                <a href="#" className="block">
                    <img
                        alt=""
                        src="https://i.ibb.co/47yyLMS/Untitled.jpg"
                        className="h-92 w-full object-fit border1 shadow-xl rounded-xl "
                    />

                    <h3 className="mt-4 text-lg font-bold text-gray-900 bebas-font tracking-widest lg:text-2xl text-center">Prof. (Dr.) Sandip R. Shinde</h3>

                    <p className="mt-2 max-w-lg mb-4 text-base font-medium text-gray-700">
                        Professor & Head, Department of Computer Engineering
                    </p>
                </a>
            </div> */}
        </div>
    );
};

export default Hod;
