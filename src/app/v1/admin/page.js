"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import BannerAdmin from "@/app/Components/BannerAdmin";
import { AdminCards } from "@/app/Components/AdminCards";


const navigation = [

];


const page = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const resUserExists = await fetch("/compendium/api/getArticles", {
                    method: "GET",
                });

                const cards = await resUserExists.json();
                setData(cards);
                console.log(cards)
            } catch (error) {
                console.log("Error fetching articles ", error);
            }
        };
        fetchArticles();
    }, []);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const { data: session } = useSession();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10);
        });
    }, []);
    return (
        <div className="bg-black w-full">  <header
            className={`inset-x-0 top-0 z-50 nav-link bg-black text-white ${scroll ? "sticky" : ""
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
                        <Link key={item.name} href={item.href}>
                            <p className="text-base font-semibold leading-6 tracking-tight">
                                {item.name}
                            </p>
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {session && (<button
                        className="group relative inline-flex justify-center items-center overflow-hidden rounded border border-current px-8 py-3  focus:outline-none focus:ring bg-white text-black"
                        href="#"
                        onClick={() => signOut()}
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
                            Log out
                        </span>
                    </button>)}</div>
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
                                    <Link href={item.href}>
                                        <a className="text-base font-semibold leading-6 tracking-tight">
                                            {item.name}
                                        </a>
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
            <BannerAdmin name={session?.user?.name} />
            <div className="grid grid-cols-3">
                {data.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10 ">
                        <AdminCards name={item.name} photo={item.photo} content={item.content} title={item.title} />
                    </div>
                ))}
            </div>
            <div className="h-screen w-full bg-black bg-grid-white/[0.2]  relative flex items-center justify-center">

                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            </div>
        </div>
    )
}

export default page