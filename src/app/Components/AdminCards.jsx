"use client";
import React, { useState } from "react";
import { BackgroundGradient } from "@/app/ui/background-gradient";
import Image from "next/image";
import { toast } from "react-toastify";
import DialogBox from "./DialogBox";
import DeleteBox from "./DeleteBox";

export function AdminCards(props) {
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [currId, setcurrId] = useState("");
  const handleDialog = (id) => {
    setcurrId(props.id);
    setOpen((prev) => !prev);

    console.log(currId);
  };
  const handleDialogDelete = (id) => {
    setcurrId(props.id);
    setDeleteOpen((prev) => !prev);

    console.log(currId);
  };
  // const { name, photo, content, title } = props.editedData;

  return (
    <>
      <DialogBox
        prevdata={props}
        currId={currId}
        setKey={props.setKey}
        setOpen={setOpen}
        open={open}
      />
      <DeleteBox
        setKey={props.setKey}
        setOpen={setDeleteOpen}
        open={deleteOpen}
        setisSearch={props.setisSearch}
        currId={currId}
      />

      <div className="flex items-center justify-center flex-col h-full">
        <BackgroundGradient className="rounded-[22px] max-w-sm min-h-[30rem] p-4 sm:p-10 bg-zinc-900 flex flex-col h-full">
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
          <div className="flex  justify-between mt-auto">
            <button
              className="group relative inline-flex justify-center items-center overflow-hidden rounded border border-current px-8 py-3  focus:outline-none focus:ring bg-green-500 text-black mt-4"
              onClick={() => handleDialog(props.id)}
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
              onClick={() => handleDialogDelete(props.id)}
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
    </>
  );
}
