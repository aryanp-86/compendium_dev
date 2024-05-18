"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import BannerAdmin from "@/app/Components/BannerAdmin";
import { AdminCards } from "@/app/Components/AdminCards";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Loader from "@/app/Components/Loader";
import AddBox from "@/app/Components/AddBox";


const navigation = [

];


const page = () => {
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const resUserDelete = await fetch("api/admin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ _id: props._id }),
            });
            if (resUserDelete.status == 200) {
                props.setKey((currentValue) => currentValue + 1);
                console.log(resUserDelete.status);
            }
        } catch (error) {
            console.log("Error during deleting: ", error);
        }
    };
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const resUserSearch = await fetch("api/admin2", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name }),
            });
            if (resUserSearch.status == 200) {
                const result = await resUserSearch.json();
                setSearchData(result.data);
                setisSearch(prev => !prev)
                setKey((currentValue) => currentValue + 1);
                console.log(resUserSearch.status);
            }
        } catch (error) {
            console.log("Error during searching: ", error);
        }
    }
    const handleClear = async (e) => {
        e.preventDefault();
        setisSearch(false);
        setName("");
        setKey(curr => curr + 1);
    }
    const handleAdd = async () => {

        setAddOpen(prev => !prev);
    }
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const cancelButtonRef = useRef(null);
    const [data, setData] = useState([]);
    const [isEmpty, setisEmpty] = useState(false)
    const [isSearch, setisSearch] = useState(false);
    const [searchData, setSearchData] = useState([])
    const [key, setKey] = useState(0);
    const [isLoading, setisLoading] = useState(true)
    const [addOpen, setAddOpen] = useState(false)
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const resUserExists = await fetch("/compendium/api/getArticles", {
                    method: "GET",
                }, { cache: 'no-store' });

                const cards = await resUserExists.json();
                setData(cards);
                setisLoading(false);
                console.log(key);
                if (cards.length == 0) setisEmpty(true);
                console.log(cards)
            } catch (error) {
                console.log("Error fetching articles ", error);
            }
        };
        fetchArticles();
    }, [key]);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const { data: session } = useSession();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10);
        });
    }, []);
    return (
        <div className="bg-black w-full">
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

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end flex-row gap-6">
                    {session && (<Link
                            className="group relative inline-flex justify-center items-center overflow-hidden rounded border border-current px-8 py-3  focus:outline-none focus:ring bg-white text-black"
                            href="/v1/register"
                           
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
                                Add user
                            </span>
                        </Link>)}
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

                            <span className="text-sm tracking-widest poppins-font font-extrabold rounded-xl transition-all group-hover:ms-4 text-center bg-white px-1 py-0.5 focus:outline-none">
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
            {isLoading && (<div className="h-screen bg-black w-full items-center justify-center flex ">
                <Loader />
            </div>)
            }
            {!isLoading && (<BannerAdmin name={session?.user?.name} />)}
            {!isLoading && (<>
                <AddBox
                    setKey={setKey}
                    setAddOpen={setAddOpen}
                    addOpen={addOpen}
                />

                <div className="mx-auto max-w-screen-xl bg-transparent px-4 py-8 sm:px-6 sm:pt-6 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="text-center sm:text-left">
                            <h1 className="text-2xl font-bold text-white sm:text-3xl">All articles</h1>
                        </div>

                        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                            <label
                                htmlFor="UserEmail"
                                className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >

                                <input
                                    type="text"
                                    id="UserName"
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter article name"
                                    value={name}
                                    className="mt-2 w-full text-gray-300 border-none bg-transparent p-1 focus:border-transparent focus:outline-none focus:ring-0 text-base"
                                />
                            </label>
                            <button
                                className="block rounded-lg bg-white px-5 py-3 text-base font-bold transition hover:bg-green-500 focus:outline-none focus:ring"
                                type="button"
                                onClick={handleSearch}
                            >
                                Search
                            </button>
                            <button
                                className="block rounded-lg bg-red-500 px-5 py-3 text-base font-bold transition focus:outline-none focus:ring"
                                type="button"
                                onClick={handleClear}
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-start mt-4 -mb-12">
                        <button
                            className="group relative inline-flex justify-center items-center overflow-hidden rounded border border-current px-8 py-3 focus:outline-none focus:ring mt-4 bg-white text-black"
                            href="#"
                            onClick={handleAdd}
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
                                Add articles
                            </span>
                        </button>
                    </div>
                </div>
            </>)}


            {!isLoading && (<div className="w-full bg-black bg-grid-white/[0.2]  relative flex items-center flex-col mt-12 min-h-screen">

                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                {isEmpty && (<h1 className="text-2xl mt-12 font-bold text-white text-center tracking-wide">No articles to show</h1>)}
                {!isSearch && (<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {data.map((item, index) => (
                        <div key={`content-${index}`} className="">
                            <AdminCards name={item.name} photo={item.photo} content={item.content} title={item.title} id={item._id} link={item.link} setKey={setKey} />
                        </div>
                    ))}
                </div>)
                }
                {isSearch && (<div className="grid grid-cols-1 lg:grid-cols-3 gap-16" >
                    {searchData.map((item, index) => (
                        <div key={`content-${index}`} className="cols-span-1">
                            <AdminCards name={item.name} photo={item.photo} content={item.content} title={item.title} id={item._id} setKey={setKey} setisSearch={setisSearch} />
                        </div>
                    ))}
                </div>)
                }
            </div>)}

        </div >
    )
}

export default page