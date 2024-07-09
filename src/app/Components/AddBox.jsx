import { Fragment, useRef, useState } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-toastify";

import { Meteors } from "@/app/ui/meteors";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function AddBox(props) {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const cancelButtonRef = useRef(null);
  const handleSubmit1 = async (e) => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("photo", photo);
      formData.append("content", content);
      formData.append("link", link);
      formData.append("title", title);
      const resUserAdded = await fetch("api/add", {
        method: "POST",

        body: formData,
      });
      if (resUserAdded.status == 200) {
        toast.success("Added Successfully!", {
          position: "top-center",
        });
        props.setAddOpen(false);
        props.setKey((currentValue) => currentValue + 1);

        console.log(resUserAdded.status);
      }
    } catch (error) {
      console.log("Error during adding: ", error);
    }
  };
  const schema = yup.object().shape({
    UserName: yup
      .string()
      .matches(
        /^[A-Za-z\s]+$/,
        "First name can only contain alphabets and spaces"
      )
      .min(2, "First name should be at least 2 characters!")
      .max(50, "First name should not exceed 50 characters!")
      .required("First Name is required!"),
    UserTitle: yup
      .string()
      .required("Content is required!")
      .min(10, "Title should be at least 10 characters!"),
    UserContent: yup
      .string()
      .required("Content is required!")
      .min(50, "Content should be at least 50 characters!")
      .max(400, "Content should be maximum 400 characters!"),
    UserLink: yup
      .string()
      .required("Link is required!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <Transition.Root show={props.addOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={props.setAddOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-90 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-black text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
                {/* <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"> */}
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
                      className="flex flex-col gap-3 z-50 min-w-3xl"
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
                      {errors.UserName && (
                        <span className="text-red-500  text-base font-bold poppins-font tracking-normal">
                          {errors.UserName.message}
                        </span>
                      )}
                      <label
                        htmlFor="UserTitle"
                        className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                      >
                        <span className="text-sm poppins-font font-bold text-white">
                          {" "}
                          Title
                        </span>

                        <input
                          type="text"
                          id="UserTitle"
                          {...register("UserTitle", {
                            value: title,
                            onChange: (e) => setTitle(e.target.value),
                          })}
                          placeholder="Enter title"
                          className="mt-2 w-full border-none bg-transparent p-0 focus:border-transparent text-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                        />
                      </label>
                      {errors.UserTitle && (
                        <span className="text-red-500  text-base font-bold poppins-font tracking-normal">
                          {errors.UserTitle.message}
                        </span>
                      )}
                      <label
                        htmlFor="UserContent"
                        className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                      >
                        <span className="text-sm poppins-font font-bold text-white">
                          {" "}
                          Content{" "}
                        </span>

                        <input
                          type="text"
                          id="UserContent"
                          {...register("UserContent", {
                            value: content,
                            onChange: (e) => setContent(e.target.value),
                          })}
                          placeholder="Enter article content"
                          className="mt-2 w-full text-gray-400 border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm bg-transparent"
                        />
                      </label>
                      {errors.UserContent && (
                        <span className="text-red-500  text-base font-bold poppins-font tracking-normal">
                          {errors.UserContent.message}
                        </span>
                      )}
                      <label
                        htmlFor="UserLink"
                        className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                      >
                        <span className="text-sm poppins-font font-bold text-white">
                          {" "}
                          Link{" "}
                        </span>

                        <input
                          type="text"
                          id="UserLink"
                          {...register("UserLink", {
                            value: link,
                            onChange: (e) => setLink(e.target.value),
                          })}
                          placeholder="Enter article link"
                          className="mt-2 w-full text-gray-400 border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm bg-transparent"
                        />
                      </label>
                      {errors.UserLink && (
                        <span className="text-red-500  text-base font-bold poppins-font tracking-normal">
                          {errors.UserLink.message}
                        </span>
                      )}
                      <label
                        htmlFor="UserPhoto"
                        className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                      >
                        <span className="text-sm poppins-font font-bold text-white">
                          {" "}
                          Photo{" "}
                        </span>

                        <input
                          type="file"
                          id="myFile"
                          name="filename"
                          className="overflow-hidden block max-w-xs whitespace-nowrap file:text-sm  file:text-white text-gray-400 bebas-font tracking-widest file:rounded-full file:border-0  file:bg-blue-800 text-wrap"
                          onChange={(e) => setPhoto(e.target.files[0])}
                          accept="image/jpeg, image/png"
                        />
                      </label>
                      <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-2">
                        <button
                          type="submit"
                          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-bases font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        >
                          Add
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          onClick={() => props.setAddOpen(false)}
                          ref={cancelButtonRef}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                    <Meteors number={20} />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
